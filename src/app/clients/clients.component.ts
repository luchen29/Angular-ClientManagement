import {Component, OnInit} from '@angular/core';
import {APIService} from '../services/api.service';
import {ClientModel} from './client.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {UserModel} from '../user/user.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.styl']
})
export class ClientsComponent implements OnInit {

  closeResult: string;
  protected allClients: Array<ClientModel>;
  protected client: ClientModel;
  protected user: UserModel;

  protected formFieldEmailConfirmation: string;

  private isClientEdited = false;
  public successMessage: string;
  protected isAlertOpen = false;

  constructor(
    private apiService: APIService,
    private modalService: NgbModal
    ) {}

  ngOnInit() {
    this.getAllClients();
    this.client = new ClientModel();
    this.user = new UserModel();
  }

  getAllClients() {
    this.allClients = this.apiService.getClients();
  }

  onFormSubmit() {
    if (this.isClientEdited) {
      this.onClientEdit();
    } else {
      this.onAddClient();
    }
  }

  onAddClient() {
    this.client.memberSince = new Date();
    this.apiService.addClient(this.client).subscribe(
      (client: any) => {
        this.user.client = client._id;
        this.user.location = client.location;
        this.apiService.addUser(this.user).subscribe(
          () => {
            this.showAlert('Client added successfully');
            this.getAllClients();
          }, error => console.error(error));

      },
      (err) => {
        console.error(err);
      }
    );
    this.modalService.dismissAll();
  }

  onAddClientModalOpen(modal) {
    this.isClientEdited = false;
    this.client = new ClientModel();
    this.modalService.open(modal, {centered: true});
  }

  onModalClientEditOpen(client: ClientModel, clientModal) {
    this.isClientEdited = true;
    this.client = client;
    this.modalService.open(clientModal, {centered: true});
  }

  onClientEdit() {
    this.apiService.updateClient(this.client.id, this.client).subscribe(
      () => {
        this.modalService.dismissAll();
        this.isClientEdited = false;
        this.showAlert('Client edited successfully');
      }
    );
  }

  onModalClientDeleteOpen(client: ClientModel, modal) {
    this.client = client;
    this.modalService.open(modal, {size: 'sm', centered: true});
  }

  onClientDelete(modal) {
    this.apiService.deleteClient(this.client.id).subscribe(
      () => {
        this.allClients.splice(this.allClients.indexOf(this.client), 1);
        this.showAlert('Client deleted successfully');
      });
    this.modalService.dismissAll();
  }

  showAlert(message) {
    this.successMessage = message;
    this.isAlertOpen = true;
    setTimeout(() => {
      this.isAlertOpen = false;
    }, 5000);
  }
}
