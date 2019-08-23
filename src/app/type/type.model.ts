import { ClientModel } from '../clients/client.model';
import { EyeglassModel } from '../eyeglass/eyeglass.model'; 
import { ImageModel } from '../image/image.model';

export class TypeModel {
  public id: string;
  public colorupc: string;
  public color: string;
  public size: string;
  public client: string;
  public eyeglass: string;
  public images: [];
  public models: [];

  constructor(type?) {
    if (type) {
      this.id = type._id;
      this.colorupc = type.colorupc;
      this.color = type.color;
      this.size = type.size;
      this.client = type.client;
      this.eyeglass = type.eyeglass;
      this.images = type.images;
      this.models = type.models;
    }
  }
}
