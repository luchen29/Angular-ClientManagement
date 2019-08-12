import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem } from '@ngx-gallery/core';
import { ActivatedRoute } from '@angular/router';
import { ImageModel } from './image.model';
import { EyeglassModel } from '../eyeglass/eyeglass.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup} from '@angular/forms';

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
    private route: ActivatedRoute,
    public gallery: Gallery,
  ) {}

  ngOnInit() {
    this.clientId = this.route.snapshot.params.client_id;
    this.route.params.subscribe(params => {
      this.eyeglassId = params['eyeglass_id'];
    });
  }  
}
