import {Component, OnInit} from '@angular/core';
import {SessionService} from '../services/session.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {ClientModel} from '../clients/client.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserModel} from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
    ) {}

  protected user: any = {};
  protected newUser: any = {};
  protected isAlertOpen = false;
  protected alertMessage: string;

  ngOnInit() {
    if (this.sessionService.hasLogin()) {
      const userSession = this.sessionService.getUser();
      if (userSession.role === 'admin') {
        this.router.navigate(['/profile/clients']);
      } else {
        this.router.navigate(['/', 'profile', userSession.client, 'eyeglasses']);
      }
    }
  }

  onModalRegisterOpen(modal) {
    this.modalService.open(modal, {size: 'lg', centered: true});
  }

  onLogin() {
    this.sessionService.logIn(this.user).subscribe((data: any) => {
      const userSession = new UserModel(data.user);
      this.sessionService.setUser(userSession);
      if (userSession.role === 'admin') {
        this.router.navigate(['/profile/clients']);
      } else {
        this.router.navigate(['/', 'profile', userSession.client, 'eyeglasses']);
      }
    }, error => {
      this.alertMessage = 'Your email or password is incorrect.';
      this.isAlertOpen = true;
      setTimeout(() => {
        this.isAlertOpen = false;
      }, 5000);
    }, () => {
      console.log('Successful login');
    });
  }

  onFormSubmit(form) {
  }
}
