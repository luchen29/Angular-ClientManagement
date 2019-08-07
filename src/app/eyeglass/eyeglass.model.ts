import {ClientModel} from '../clients/client.model';
import { ImageModel } from '../image/image.model';

export class EyeglassModel {
  public id: string;
  public model: string;
  public upc: string;
  public brand: string;
  public size: string;
  public info: string;
  public client: string;
  public types: [];
  public btnAct: boolean;

  constructor(eyeglass?) {
    if (eyeglass) {
      this.id = eyeglass._id;
      this.model = eyeglass.model;
      this.upc = eyeglass.upc;
      this.brand = eyeglass.brand;
      this.size = eyeglass.size;
      this.info = eyeglass.info;
      this.client = eyeglass.client;
      this.types = eyeglass.types;
      this.btnAct = eyeglass.btnAct;
    }
  }
}
