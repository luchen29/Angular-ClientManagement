import {Component, OnInit} from '@angular/core';
import {UserModel} from '../user/user.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {APIService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.styl']
})

export class ContactsComponent implements OnInit {

  protected contactList: UserModel[];
  protected contact: UserModel;
  protected formFieldEmailConfirmation: string;
  protected alertMessage: string;
  protected isAlertOpen: boolean;
  private clientId: string;
  private isContactEdited: boolean;

  constructor(private apiService: APIService, private modalService: NgbModal, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.clientId = this.route.snapshot.params.client_id;
    this.getContacts();
  }

  getContacts() {
    this.contactList = this.apiService.getContacts(this.clientId);
  }

  onEditContactModalOpen(modal, contact) {
    this.contact = contact;
    this.isContactEdited = true;
    this.modalService.open(modal, {centered: true});
  }

  onDeleteContactModalOpen(modal, contact) {
    this.contact = contact;
    this.modalService.open(modal, {centered: true});
  }

  onAddContactModalOpen(modal) {
    this.isContactEdited = false;
    this.contact = new UserModel();
    this.modalService.open(modal, {centered: true});
  }

  onFormSubmit() {
    if (this.isContactEdited) {
      this.editContact();
    } else {
      this.addContact();
    }
  }

  editContact() {
    this.apiService.updateContact(this.contact).subscribe(
      () => {
        this.modalService.dismissAll();
        this.getContacts();
        this.showAlert('Contact updated successfully!');
      }, error => {
        console.error(error);
        this.showAlert(error);
      }
    );
  }

  deleteContact() {
    this.modalService.dismissAll();
    this.apiService.deleteContact(this.contact.id).subscribe(
      () => {
        this.getContacts();
        this.showAlert(this.contact.firstName + ' ' + this.contact.lastName + 'contact deleted.');
      }, error => {
        console.error(error);
        this.showAlert(error);
      }
    );
  }

  addContact() {
    this.contact.client = this.clientId;
    this.apiService.addContact(this.contact).subscribe(
      (data) => {
        console.log(data);
        this.modalService.dismissAll();
        this.showAlert('Contact added successfully');
        this.getContacts();
      }, error => {
        console.error(error);
      }
    );
  }

  showAlert(message) {
    this.alertMessage = message;
    this.isAlertOpen = true;
    setTimeout(() => {
      this.isAlertOpen = false;
    }, 5000);
  }
}
