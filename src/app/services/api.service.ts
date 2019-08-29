import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClientModel } from '../clients/client.model';
import { EyeglassModel } from '../eyeglass/eyeglass.model';
import { UserModel } from '../user/user.model';
import { TypeModel } from '../type/type.model';
import { ImageModel } from '../image/image.model';
import { ModelModel } from '../model/model.model';
import { BillingModel } from '../contacts/billing.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class APIService {

  private URL_BASE = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getClients() {
    const clients: Array<ClientModel> = new Array<ClientModel>();
    this.http.get(this.URL_BASE + '/clients')
      .subscribe(
        data => {
          // @ts-ignore
          data.forEach(client => {
            clients.push(new ClientModel(client));
          });
        },
        err => {
          console.error(err);
        },
        () => {
          console.log('Success obtaining clients');
        }
      );
    return clients;
  }

  getClient(clientId: string) {
    let client: ClientModel = null;
    this.http.get(this.URL_BASE + '/clients/' + clientId)
      .subscribe(
        data => {
          // @ts-ignore
          client = data;
        },
        error => {
          console.error(error);
        }
      );
    return client;
  }

  addClient(client: ClientModel) {
    return this.http.post(this.URL_BASE + '/clients', client);
  }

  updateClient(clientId: string, client: ClientModel) {
    return this.http.put(this.URL_BASE + '/clients/' + clientId, client);
  }

  deleteClient(clientId: string) {
    return this.http.delete(this.URL_BASE + '/clients/' + clientId);
  }


  // eyeglasses
  getEyeglasses(clientId) {
    const eyeglassesList: EyeglassModel[] = [];
    this.http.get(this.URL_BASE + '/eyeglasses/' + clientId)
      .subscribe(
        (data) => {
          // @ts-ignore
          data.forEach(eyeglass => {
            const newEyeglass = new EyeglassModel(eyeglass);
            eyeglassesList.push(newEyeglass);
          });
          eyeglassesList.sort((x, y) => (Number(y.btnAct) - Number(x.btnAct)));
        },
        (err) => {
          console.log(err);
        }
      );
    return eyeglassesList;
  }

  getEyeglass(eyeglassId) {
    let eyeglass: EyeglassModel = null;
    this.http.get(this.URL_BASE + '/eyeglasses/' + eyeglassId)
    .subscribe(
      data => {
        // @ts-ignore
        eyeglass = data;
      }, error => {
        console.error(error);
      });
    return eyeglass;
  }

  addEyeglass(eyeglass) {
    return this.http.post(this.URL_BASE + '/eyeglasses/' + eyeglass.client, eyeglass);
  }

  updateEyeglass(eyeglassId, eyeglass) {
    return this.http.put(this.URL_BASE + '/eyeglasses/' + eyeglassId, eyeglass);
  }

  deleteEyeglass(eyeglassId: string) {
    return this.http.delete(this.URL_BASE + '/eyeglasses/' + eyeglassId, {responseType: 'text'});
  }

  addUser(user: UserModel) {
    return this.http.post(this.URL_BASE + '/user/register', user);
  }

// contact
  getContacts(clientId: string) {
    const contacts: Array<UserModel> = new Array<UserModel>();
    this.http.get(this.URL_BASE + '/contacts/' + clientId)
      .subscribe(
        data => {
          // @ts-ignore
          data.forEach(contact => {
            contacts.push(new UserModel(contact));
          });
        },
        err => {
          console.error(err);
        },
        () => {
          console.log('Success obtaining clients');
        }
      );
    return contacts;
  }

  updateContact(contact: UserModel) {
    return this.http.put(this.URL_BASE + '/contact/' + contact.id, contact);
  }

  addContact(contact: UserModel) {
    return this.http.post(this.URL_BASE + '/contact', contact);
  }

  deleteContact(contactId: string) {
    return this.http.delete(this.URL_BASE + '/contact/' + contactId);
  }

// billings
  addBilling(billing: BillingModel) {
    return this.http.post(this.URL_BASE + '/billing', billing);
  }

  getBillings(clientId: string) {
    const billings: Array<BillingModel> = new Array<BillingModel>();
    this.http.get(this.URL_BASE + '/billing/' + clientId)
    .subscribe(
      data => {
        // @ts-ignore
        data.forEach( billing => {
          billings.push(new BillingModel(billing));
        })
      }, 
      err => {
        console.error(err);
      },
      () => {
        console.log('Success obtaining billings');
      }
    )
    return billings;
  }

  updateBilling(billing: BillingModel) {
    return this.http.put(this.URL_BASE + '/billing/' + billing.id, billing);
  }

  deleteBilling(billing: BillingModel) {
    return this.http.delete(this.URL_BASE + '/billing/' + billing.id);
  }

//  types
  addType(type) {
    return this.http.post(this.URL_BASE + '/types/' + type.client + '/' + type.eyeglass, type);
  }

  getTypes(clientId: string, eyeglassId: string) {
    const typeList: TypeModel[] = [];
    this.http.get(this.URL_BASE + '/types/' + clientId + '/' + eyeglassId)
      .subscribe(
        (data) => {
          // @ts-ignore
            data.forEach(type => {
            const newType = new TypeModel(type);
            typeList.push(newType);
          });
        },
        (err) => {
          console.log(err);
        }
      );
    return typeList;
  }
  
  getType(clientId: string, eyeglassId: string, colortupc: string) {
    let type: TypeModel = null;
    this.http.get(this.URL_BASE + '/types/'+ clientId + '/' + eyeglassId + '/' + colortupc)
    .subscribe(
      data => {
        // @ts-ignore
        type = data;
      }, error => {
        console.error(error);
      });
    return type;
  }

  updateType(clientId: string, eyeglassId: string, colortupc: string, type) {
    return this.http.put(this.URL_BASE + '/types/' + clientId + '/' + eyeglassId + '/' + colortupc, type);
  }

  deleteType(type: TypeModel) {
    return this.http.delete(this.URL_BASE + '/types/' + type.client + '/' + type.eyeglass + '/' + type.colorupc, {responseType: 'text'});
  }

  // image
  postImage(clientId, eyegalssId, colorupc, datas) {
    const newImage = new ImageModel();
    newImage.uid = datas.uid;
    newImage.thumbUrl = datas.thumbUrl;
    newImage.imageName = datas.name;
    newImage.colorupc = colorupc;
    newImage.client = clientId;
    newImage.eyeglass = eyegalssId;
    newImage.postUrl = 'www';
    return this.http.post(this.URL_BASE + '/images/' + clientId + '/' + eyegalssId + '/' + colorupc, newImage);
  }

  postModel(clientId, eyegalssId, colorupc, datas) {
    const newModel = new ModelModel();
    newModel.uid = datas.uid;
    newModel.thumbUrl = datas.thumbUrl;
    newModel.modelName = datas.name;
    newModel.colorupc = colorupc;
    newModel.client = clientId;
    newModel.eyeglass = eyegalssId;
    newModel.postUrl = 'www';
    return this.http.post(this.URL_BASE + '/models/' + clientId + '/' + eyegalssId + '/' + colorupc, newModel);
  }

  downloadTypeImages(clientId, eyegalssId, colorupc) {
    console.log('downloading images from gcs...');
    let downloadedFile: any;
    this.http.get(this.URL_BASE + '/gcs/' + clientId + '/' + eyegalssId + '/' + colorupc)
    .subscribe(
      data => {
        // @ts-ignore
        downloadedFile = data;
      }, error => {
        console.error(error);
      });
    return downloadedFile;
  }

  downloadTypeModel() {
    console.log('downloading type model from gcs...');
    
  }
}
