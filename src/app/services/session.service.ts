import {Injectable} from '@angular/core';
import {ClientModel} from '../clients/client.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../user/user.model';

@Injectable()
export class SessionService {

  private currentUserSubject: BehaviorSubject<UserModel>;
  private currentUser: Observable<UserModel>;
  private URL_BASE = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  logIn(user) {
    return this.http.post(this.URL_BASE + '/login', user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  setUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  getUser() {
    return this.currentUserSubject.value;
  }

  hasLogin(): boolean {
    return !!this.getUser();
  }
}
