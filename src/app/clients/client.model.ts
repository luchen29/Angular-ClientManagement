import {EyeglassModel} from '../eyeglass/eyeglass.model';
import {UserModel} from '../user/user.model';

export class ClientModel {
  public id: string;
  public companyName: string;
  public contractType: string;
  public memberSince: Date;
  public location: string;
  public eyeglasses: [];
  public contacts: [];
  public billings: [];
  // public eyeglasses: Array<EyeglassModel>;
  // public contacts: Array<UserModel>;

  constructor(client?) {
    if (client) {
      this.id = client._id;
      this.companyName = client.companyName;
      this.contractType = client.contractType;
      this.memberSince = new Date(client.memberSince);
      this.location = client.location;
      this.eyeglasses = client.eyeglasses;
      this.contacts = client.contacts;
      this.billings = client.billings;
    }
  }
}
