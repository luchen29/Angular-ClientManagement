// import {ClientModel} from '../clients/client.model';

export class ImageModel {
  id: string;
  client: string;
  eyeglass: string;
  imageName: string;
  imagePath?: string;
  imagePreview: string;

  constructor(image?) {
    if (image) {
      this.id = image._id;
      this.client = image.client;
      this.eyeglass = image.eyeglass;
      this.imageName = image.imageName;
      this.imagePath = image.imagePath;
      this.imagePreview = image.imagePreview;
    }
  }
}
