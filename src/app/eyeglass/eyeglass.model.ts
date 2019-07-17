import {ClientModel} from '../clients/client.model';
import { ImageModel } from '../image/image.model';

export class EyeglassModel {
  public id: string;
  public model: string;
  public size: string;
  public colour: string;
  public filePath: string;
  public brand: string;
  public client: string;
  // public images: Array<ImageModel>;
  public info: string;
  public btnAct: boolean;

  constructor(eyeglass?) {
    if (eyeglass) {
      this.id = eyeglass._id;
      this.model = eyeglass.model;
      this.size = eyeglass.size;
      this.colour = eyeglass.colour;
      this.filePath = eyeglass.filePath;
      this.brand = eyeglass.brand;
      this.client = eyeglass.client;
      // this.images = eyeglass.images;
      this.info = eyeglass.info;
      this.btnAct = eyeglass.btnAct;
    }
  }
}
