import {Component, OnInit} from '@angular/core';
import {APIService} from '../services/api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EyeglassModel} from './eyeglass.model';
import {SessionService} from '../services/session.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router, RouteConfigLoadEnd} from '@angular/router';
import { ImageModel } from '../image/image.model';
import { ConnectableObservable } from 'rxjs';
// import {el} from '@angular/platform-browser/testing/src/browser_util';
// import {UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';
// import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';


@Component({
  selector: 'app-eyeglass',
  templateUrl: './eyeglass.component.html',
  styleUrls: ['./eyeglass.component.styl']
})
export class EyeglassComponent implements OnInit {

  public validateForm: FormGroup;
  protected eyeglass: EyeglassModel;
  protected eyeglasses: Array<EyeglassModel>;
  protected isAlertOpen: boolean;
  protected alertMessage: string;
  private isEyeglassEdited: boolean;
  protected disable = false;
  protected btnState: boolean;

  // public files: UploadFile[] = [];
  public clientId: string;
  public eyeglassId: string;
  public allFiles: FileList;

  form: any;
  imagePreview: string;

  constructor(
    private apiService: APIService,
    private sessionService: SessionService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.validateForm = this.fb.group({ 
      model: ['', [Validators.required]],
      upc: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      size: ['', [Validators.required]],
      info: ['']
    })
  }

  ngOnInit() {
    this.clientId = this.route.snapshot.params.client_id;
    this.getEyeglassesList();
  }

  getEyeglassesList() {
    this.eyeglasses = this.apiService.getEyeglasses(this.clientId);
  }

  getEyeglass() {
    this.eyeglass = this.apiService.getEyeglass(this.eyeglassId);
  }

  onEditEyeglassModalOpen(eyeglass, modal) {
    this.isEyeglassEdited = true;
    this.eyeglass = eyeglass;
    this.modalService.open(modal, {centered: true});
  }

  onDeleteEyeglassModalOpen(eyeglass, modal) {
    this.eyeglass = eyeglass;
    this.modalService.open(modal, {centered: true});
  }

  onAddEyeglassModalOpen(modal) {
    this.isEyeglassEdited = false;
    this.eyeglass = new EyeglassModel();
    this.modalService.open(modal, {centered: true});
  }

  AddEyeglass() {
    this.eyeglass.client = this.clientId;
    this.eyeglass.btnAct = true;
    this.apiService.addEyeglass(this.eyeglass).subscribe(
      (eyeglass: any) => {
        this.getEyeglassesList();
        this.modalService.dismissAll();
        this.eyeglassId = eyeglass._id;
      }, error => {
        console.error(error);
      }
    );
    console.log(this.eyeglass);
  }

  EditEyeglass() {
    this.apiService.updateEyeglass(this.eyeglass.id, this.eyeglass).subscribe(() => {
      // this.eyeglassId = this.eyeglass.id;
      this.showAlert(this.eyeglass.model + ' was edited successfully');
      this.modalService.dismissAll();
    }, error => {
      console.error(error);
      this.showAlert(error);
    });
  }

  DeleteEyeglass() {
    this.apiService.deleteEyeglass(this.eyeglass.id).subscribe(
      (res) => {
        console.log(res);
        this.modalService.dismissAll();
        this.showAlert('Eyeglass removed successfully');
        this.eyeglasses.splice(this.eyeglasses.indexOf(this.eyeglass), 1);
      }, error => {
        console.error(error);
      }
    );
  }

  onFormSubmit(imageForm) {
    if (this.isEyeglassEdited) {
      this.EditEyeglass();
    } else {
      this.AddEyeglass();
    }
  }

  showAlert(message) {
    this.alertMessage = message;
    this.isAlertOpen = true;
    setTimeout(() => {
      this.isAlertOpen = false;
    }, 5000);
  }

  public disableBtn(eyeglass) {
    this.eyeglass = eyeglass;
    this.eyeglass.btnAct = !this.eyeglass.btnAct;
    this.EditEyeglass();
    this.modalService.dismissAll();
  }

  public onChange(input) {
    if (input) {
      console.log('input:', input);
      console.log(input.length);
      if (input.length === 2) {
        this.eyeglass.size = input + '-';
        console.log(this.eyeglass.size);
      } 
      else if (input.length === 5) {
        this.eyeglass.size = input + '-';
        console.log(this.eyeglass.size);
      }
    }
  }
}
