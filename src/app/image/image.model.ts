// import {ClientModel} from '../clients/client.model';

export class ImageModel {
  id: string;
  uid: string;
  client: string;
  eyeglass: string;
  colorupc: string;
  imageName: string;
  thumbUrl: string;
  postUrl: string;

  constructor(image?) {
    if (image) {
      this.id = image._id;
      this.client = image.client;
      this.eyeglass = image.eyeglass;
      this.colorupc = image.colorupc;
      this.uid = image.uid;
      this.imageName = image.imageName;
      this.thumbUrl = image.thumbUrl;
      this.postUrl = image.postUrl;
    }
  }
}
