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
  protected previewImage: string | undefined = '';
  protected previewVisible = false;

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
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
    this.upc = this.route.snapshot.queryParams['upc']
    this.getTypesList();
  }
  
  onEditTypeModalOpen(type) {
  }

  onDeleteTypeModalOpen(type, modal) {
    this.type = type;
    this.modalService.open(modal, {centered: true});
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

  upLoadChange(event, type) {
      const file = event ? event.file : null; 
      const datas = file && file.uid ? file : file.response && file.response.rlt === 0 && file.response.datas;
      if (datas) {
        if (event.type === 'success') {
            type.eventType = 'add';
            this.apiService.updateType(type.client, type.eyeglass, type.colorupc, type)
                .subscribe(() => {
                    this.showAlert('image uploaded successfully');
                    this.modalService.dismissAll();
                }, error => {
                    console.error(error);
                    this.showAlert(error);
                });
            this.apiService.postImage(type.client, type.eyeglass, type.colorupc, datas)
                .subscribe(() => {
                    this.modalService.dismissAll();
                }, error => {
                    console.log(error)
                });         
        } 
        else if (event.type === 'removed') {
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