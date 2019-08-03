import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ImageModel } from './image.model';
import { APIService } from '../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { UploadFile, UploadEvent, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { EyeglassModel } from '../eyeglass/eyeglass.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox, LightboxEvent, LIGHTBOX_EVENT  } from 'ngx-lightbox';
import { Subscription } from 'rxjs';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';
// import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.styl'],
  providers: [NgbCarouselConfig]
})

export class ImageComponent implements OnInit {

  // public files: UploadFile[] = [];
  public allFiles: FileList;
  protected images: Array<ImageModel>;
  protected image: ImageModel;
  protected eyeglass: EyeglassModel;

  public imagePreview: string;
  public form: FormGroup;

  public clientId: string;
  public eyeglassId: string;

  protected isAlertOpen: boolean;
  protected alertMessage: string;
  protected galleryId = 'eyeglassImg';
  protected items: GalleryItem[] = [];
  // protected items: Array<GalleryItem>;


  constructor(
    private apiService: APIService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    public gallery: Gallery,
    private ng2ImgMax: Ng2ImgMaxService
  ) {}

  ngOnInit() {
    this.clientId = this.route.snapshot.params.client_id;
    this.route.params.subscribe(params => {
      this.eyeglassId = params['eyeglass_id'];
    });

    this.form = new FormGroup({
      client: new FormControl (null,
        { validators: [Validators.required]}),
      eyeglass: new FormControl (null,
        { validators: [Validators.required] }),
      image: new FormControl (null,
        { validators: [Validators.required],
          // asyncValidators: [mimeType]
        })
    });

    this.getImagesList();
    this.images.forEach( (image) => {
      const item = new ImageItem(
        {src: image.imagePreview,
          thumb: image.imagePreview});
      this.items.push(item);
     });
    // this.basicLightboxExample();
    this.gallery.ref().load(this.items);
    this.withCustomGalleryConfig();
  }

  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

  withCustomGalleryConfig() {
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Bottom
    });
    lightboxGalleryRef.load(this.items);
  }

  getImagesList() {
    this.images = this.apiService.getImages(this.clientId, this.eyeglassId);
    }

  onAddImageOpen(modal) {
    // this.isImageEdited = false;
    this.image = new ImageModel();
    this.modalService.open(modal, {centered: true});
  }

  onDeleteImageOpen(image, modal) {
    this.image = image;
    this.modalService.open(modal, {centered: true});
  }

  AddImage() {
    this.apiService.addImages(this.image.client, this.image.eyeglass, this.image)
    .subscribe(
      data => {
        this.getImagesList();
        this.modalService.dismissAll();
      }, error => {
        console.error(error);
      }
    );
  }

  PostImage() {
    this.apiService.postImage(
      this.form.value.client,
      this.form.value.eyeglass,
      this.form.value.image);
  }

  DeleteImage() {
    this.apiService.deleteImage(this.clientId, this.eyeglassId, this.image.id).subscribe(
      (res) => {
        this.modalService.dismissAll();
        this.showAlert('Image removed successfully');
        this.images.splice(this.images.indexOf(this.image), 1);
      }, error => {
        console.error(error);
      }
    );
  }

  onFormSubmit() {
    this.image.client = this.clientId;
    this.image.eyeglass = this.eyeglassId;
    this.image.imagePreview = this.imagePreview;
    this.form.value.client = this.clientId;
    this.form.value.eyeglass = this.eyeglassId;
    this.AddImage();
    this.PostImage();
  }

  public onImagePicked(event: Event) {
    this.allFiles = (event.target as HTMLInputElement).files;
    for (let i = 0; i < (this.allFiles.length); i++) {
      const addedFiles = this.allFiles[i];
      this.ng2ImgMax.resizeImage(addedFiles, 400, 300);
      if ( /\.(jpe?g|png)$/i.test(addedFiles.name)) {
        this.form.patchValue({image: this.allFiles[i]});
        this.form.get('image').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result as string;
        };
        reader.readAsDataURL(this.allFiles[i]);
      }
    }
  }
  showAlert(message) {
    this.alertMessage = message;
    this.isAlertOpen = true;
    setTimeout(() => {
      this.isAlertOpen = false;
    }, 5000);
  }
}

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const dummyData = [
  {
    srcUrl: proxyurl + 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: proxyurl + 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: proxyurl + 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: proxyurl + 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  }
];
