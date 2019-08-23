import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from '../services/session.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  protected currentType: TypeModel;
  protected types: Array<TypeModel>;

  protected isAlertOpen: boolean;
  protected alertMessage: string;
  private isTypeEdited: boolean;
  protected disable = false;
  protected btnState: boolean;

  public clientId: string;
  public eyeglassId: string;
  public upc: string;
  public modelName: string;
  protected previewImage: string | undefined = '';
  protected previewVisible = false;

  dummyFileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://storage.cloud.google.com/model-images/1566342712999-5d519c2eb174d281df9660b9-glasses.obj?authuser=2&orgonly=true&supportedpurview=project'
    }
  ];

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };

  showUploadListModel = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: false
  };

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

  ngOnInit() {
    this.clientId = this.route.snapshot.params.client_id;
    this.route.params.subscribe((data)=>{
        this.eyeglassId = data.eyeglass_id;
    });
    this.modelName = this.route.snapshot.queryParams['model'];
    this.upc = this.route.snapshot.queryParams['upc'];
    console.log(this.route.snapshot.queryParams);
    this.getTypesList();
  }
  
  onEditTypeModalOpen(type) {
  }

  onDeleteTypeModalOpen(type, modal) {
    this.type = type;
    this.modalService.open(modal, {centered: true});
  }

  onDownloadTypeImagesOpen(type) {
    this.apiService.downloadTypeImages(this.clientId, this.eyeglassId, type.colorupc);
  }

  onDownloadTypeModelOpen() {
    console.log('download types');
  }

  onAddTypeModalOpen(modal) {
    this.isTypeEdited = false;
    this.type = new TypeModel();
    this.modalService.open(modal, {centered: true});
  }

  onFormSubmit() {
    if (this.isTypeEdited) {
      this.EditType();
    } else {
      this.AddType();
    }
  }

  getTypesList() {
    this.types = this.apiService.getTypes(this.clientId, this.eyeglassId);
  }

  getType() {
    this.currentType = this.apiService.getType(this.clientId, this.eyeglassId, this.type.colorupc);
    return this.currentType
  }

  AddType() {
    this.type.client = this.clientId;
    this.type.eyeglass = this.eyeglassId;
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
    this.apiService.updateType(this.clientId, this.eyeglassId, this.type.colorupc, this.type)
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

  handlePreviewModel = (file: UploadFile) => {
    console.log('what inside uploaded file:', file);
    // this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  // handelRemove = (file: UploadFile) => {
  //   console.log(file);
  //   return true;
  // }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.apiService.postImage("5d519c2eb174d281df9660b9", "5d519c4ab174d281df9660bb", "222222222222", file)
    .subscribe(() => {
        this.modalService.dismissAll();
    }, error => {
        console.log(error)
    });         
  }

  upLoadChange(event, type) {
      console.log('event: ', event);
      const file = event ? event.file : null; 
      const datas = file && file.uid ? file : file.response && file.response.rlt === 0 && file.response.datas;
      if (datas) {
        if (event.type === 'success' && event.file.type === "image/png") {
            type.eventType = 'add';
            this.apiService.updateType(type.client, type.eyeglass, type.colorupc, type)
                .subscribe(() => {
                    console.log('type updated!');
                    this.showAlert('image uploaded successfully');
                    this.modalService.dismissAll();
                }, error => {
                    console.error(error);
                    this.showAlert(error);
                });
            this.apiService.postImage(type.client, type.eyeglass, type.colorupc, datas)
                .subscribe(() => {
                    console.log('image posted!');
                    this.modalService.dismissAll();
                }, error => {
                    console.log(error)
                });       
        } else if (event.type === 'success' && event.file.type === "") {
            type.eventType = 'add';
            this.apiService.updateType(type.client, type.eyeglass, type.colorupc, type)
                .subscribe(() => {
                    console.log('type updated!');
                    this.showAlert('image uploaded successfully');
                    this.modalService.dismissAll();
                }, error => {
                    console.error(error);
                    this.showAlert(error);
                });
            this.apiService.postModel(type.client, type.eyeglass, type.colorupc, datas)
                .subscribe(() => {
                    console.log('model posted!');
                    this.modalService.dismissAll();
                }, error => {
                    console.log(error)
                })
        } else if (event.type === 'removed') {
          event.file.eventType = 'remove';
          this.apiService.updateType(type.client, type.eyeglass, type.colorupc, event.file)
                .subscribe(() => {
                    this.showAlert('image deleted successfully');
                    this.modalService.dismissAll();
                }, error => {
                    console.error(error);
                    this.showAlert(error);
                });
        }
      } 
    }

  public onChange(input) {
    if (input) {
      if (input.length === 2) {
        this.type.size = input + '-';
      } else if (input.length === 3 && input.substr(2,1) !== '-') {
        const lastCharacter = input.substr(2,1);
        const firstCharacters = input.substr(0,2);
        this.type.size = firstCharacters + '-' + lastCharacter;
      } else if (input.length === 5) {
        this.type.size = input + '-';
      } else if (input.length === 6 && input.substr(5,1) !== '-') {
        const lastCharacter = input.substr(5,1);
        const firstCharacters = input.substr(0,5);
        this.type.size = firstCharacters + '-' + lastCharacter;
      }
    }
  }
}