import {Component, OnInit} from '@angular/core';
import {APIService} from '../services/api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SessionService} from '../services/session.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router, RouteConfigLoadEnd} from '@angular/router';
import { ImageModel } from '../image/image.model';
import { ConnectableObservable, Observable } from 'rxjs';
import { TypeModel } from './type.model';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.styl']
})
export class TypeComponent implements OnInit {

  public validateForm: FormGroup;
  protected type: TypeModel;
  protected types: Array<TypeModel>;
//   protected types: Observable <TypeModel[]>;
  protected isAlertOpen: boolean;
  protected alertMessage: string;
  private isTypeEdited: boolean;
  protected disable = false;
  protected btnState: boolean;

  public clientId: string;
  public eyeglassId: string;

  constructor(
    private apiService: APIService,
    private sessionService: SessionService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.validateForm = this.fb.group({ 
      colorupc: ['', [Validators.required]],
      color: ['', [Validators.required]],
      size: ['', [Validators.required]],
    })
  }

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage: string | undefined = '';
  previewVisible = false;

  ngOnInit() {
    this.clientId = this.route.snapshot.params.client_id;
    this.route.params.subscribe((data)=>{
        this.eyeglassId = data.eyeglass_id;
    });
    this.getTypesList();
  }
  
  onEditTypeModalOpen(type, modal) {
    this.isTypeEdited = true;
    this.type = type;
    this.modalService.open(modal, {centered: true});
  }

  // get the type and delete it
  onDeleteTypeModalOpen(type, modal) {
    this.type = type;
    this.modalService.open(modal, {centered: true});
  }

  // first define this.type here   
  onAddTypeModalOpen(modal) {
    this.isTypeEdited = false;
    this.type = new TypeModel();
    this.modalService.open(modal, {centered: true});
  }

  //  call whether edit or add 
  onFormSubmit() {
    if (this.isTypeEdited) {
      this.EditType();
    } else {
      this.AddType();
    }
  }


  getTypesList() {
    this.types = this.apiService.getTypes(this.clientId, this.eyeglassId);
    console.log('what inside types: ', this.types);
  }

//   getType() {
//     this.type = this.apiService.getType(this.clientId, this.eyeglassId, this.type.colorupc);
//   }

  AddType() {
    this.type.client = this.clientId;
    this.type.eyeglass = this.eyeglassId;
    console.log('what type to be add?', this.type);
    this.apiService.addType(this.type)
    .subscribe(
      (type: any) => {
        this.getTypesList();
        this.modalService.dismissAll();
      }, error => {
        console.error(error);
      }
    );
  }

  EditType() {
    console.log('edit type:', this.type);
    this.apiService.updateType(this.type)
    .subscribe(() => {
      this.showAlert('Type Edited successfully');
      this.modalService.dismissAll();
    }, error => {
      console.error(error);
      this.showAlert(error);
    });
  }

  DeleteType() {
    this.apiService.deleteType(this.type)
    .subscribe(
      (res) => {
        console.log(res);
        this.modalService.dismissAll();
        this.showAlert('Type removed successfully');
        this.types.splice(this.types.indexOf(this.type), 1);
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

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  upLoadChange(event, type) {
      const file = event ? event.file : null; 
      const datas = file && file.uid ? file : file.response && file.response.rlt === 0 && file.response.datas;
      console.log('event: ', event);
      console.log('datas: ', datas);
      if (datas) {
          if (event.type === 'success') {
              console.log('need to add and images: ', type);
              this.apiService.updateType(type)
              .subscribe(() => {
                  this.showAlert('image uploaded successfully');
                  this.modalService.dismissAll();
              }, error => {
                  console.error(error);
                  this.showAlert(error);
              })
          }
      }
  }
  public onChange(input) {
    if (input) {
      console.log('input:', input);
      console.log(input.length);
      if (input.length === 2) {
        this.type.size = input + '-';
        console.log(this.type.size);
      } 
      else if (input.length === 5) {
        this.type.size = input + '-';
        console.log(this.type.size);
      }
    }
  }
}
