import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from '@ngx-gallery/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ImageModel } from './image.model';
import { APIService } from '../services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EyeglassModel } from '../eyeglass/eyeglass.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.styl'],
  providers: [NgbCarouselConfig]
})

export class ImageComponent implements OnInit {

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
  }  
}
