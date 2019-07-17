import {ClientModel} from '../clients/client.model';

export class UserModel {
  id: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  phone?: string;
  token?: string;
  location?: string;
  client?: string;
  role: string;

  constructor(user?: any) {
    if (user) {
      this.id = user._id;
      this.email = user.email;
      this.location = user.location;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.phone = user.phone;
      this.password = user.password;
      this.client = user.client;
      this.token = user.token;
      this.role = user.role;
    }
  }
}
