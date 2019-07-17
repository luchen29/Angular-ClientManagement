import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ClientModel} from '../clients/client.model';
import {EyeglassModel} from '../eyeglass/eyeglass.model';
import {ImageModel} from '../image/image.model';
import {UserModel} from '../user/user.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class APIService {

  private URL_BASE = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // provide a get path-to-server.
  getClients() {
    const clients: Array<ClientModel> = new Array<ClientModel>();
    // it won't do anything until we listen to it by using subscribe.
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
    this.http.get(this.URL_BASE + '/client/' + clientId)
      .subscribe(
        data => {
          // @ts-ignore
          client = data;
        },
        error => {
          console.error(error);
        }
      );
    console.log(client);
    return client;
  }

  addClient(client: ClientModel) {
    return this.http.post(this.URL_BASE + '/client', client);
  }

  updateClient(clientId: string, client: ClientModel) {
    return this.http.put(this.URL_BASE + '/client/' + client.id, client);
  }

  deleteClient(clientId: string) {
    return this.http.delete(this.URL_BASE + '/client/' + clientId);
  }


  // eyeglasses
  getEyeglasses(clientId) {
    const eyeglassesList: EyeglassModel[] = [];
    this.http.get(this.URL_BASE + '/' + clientId + '/eyeglasses')
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
    this.http.get(this.URL_BASE + '/' + '/eyeglass' + eyeglassId)
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
    return this.http.post(this.URL_BASE + '/eyeglass/', eyeglass);
  }

  updateEyeglass(eyeglassId, eyeglass) {
    return this.http.put(this.URL_BASE + '/eyeglass/' + eyeglassId, eyeglass);
  }

  deleteEyeglass(eyeglassId: string) {
    return this.http.delete(this.URL_BASE + '/eyeglass/' + eyeglassId, {responseType: 'text'});
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

  getImages(clientId: string, eyeglassId: string) {
    const imagesList: ImageModel[] = [];
    $.ajax({
      url: this.URL_BASE + '/' + clientId + '/' + eyeglassId + '/image/',
      type: 'get',
      async: false,
      success: (data) => {
        // @ts-ignore
        data.forEach (image => { imagesList.push(new ImageModel(image)); });
      }
    });
    return imagesList;
  }

  // post image model
  addImages(clientId, eyeglassId, image: ImageModel) {
    return this.http.post(this.URL_BASE + '/' + clientId + '/' + eyeglassId + '/image/', image);
  }

  // post image file
  postImage(client: string, eyeglass: string, image: File) {
    const postData = new FormData();
    postData.append('client', client);
    postData.append('eyeglass', eyeglass);
    postData.append('image', image, image.name);
    return this.http.post(this.URL_BASE + '/' + client + '/' + eyeglass + '/image/', image);
  }

  updateImage(clientId, eyeglassId, imageId, image: ImageModel) {
    return this.http.put(this.URL_BASE + '/' + clientId + '/' + eyeglassId + '/' + imageId, image);
  }

  deleteImage(clientId, eyeglassId, imageId) {
    return this.http.delete(this.URL_BASE + '/' + clientId + '/' + eyeglassId + '/' + imageId);
  }

}
