import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, RouterEvent, UrlSegment} from '@angular/router';
import {SessionService} from '../services/session.service';
import { ClientModel } from '../clients/client.model';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {


  protected currentLink: string;
  protected currentClient: string;
  protected companyName: string;
  public navItems: any[] = [];
  currentEyeglass: any;

  constructor(
    private apiService: APIService,
    private router: Router,
    private route: ActivatedRoute,
    public sessionService: SessionService) {}

  ngOnInit() {
    this.route.url.subscribe(() => {
      this.companyName = this.route.snapshot.queryParams['companyName'];
      const url = this.route.snapshot.firstChild;
      this.currentLink = url.routeConfig.path;
      console.log('current link: ', this.currentLink);
      switch (this.currentLink) {
        case ':client_id/:eyeglass_id':
          this.currentClient = url.params.client_id;
          this.currentEyeglass = url.params.eyeglass_id;
          this.navItems = [{
            name: 'Models',
            link: ['/', 'profile', this.currentClient, 'eyeglasses']
          }, {
            name: 'Contacts',
            link: ['/', 'profile', this.currentClient, 'contacts']
          }];
          if (this.sessionService.getUser().role === 'admin') {
            this.navItems.push({
              name: 'Clients',
              link: ['/', 'profile', 'clients']
            });
          }
          break;
        case ':client_id/eyeglasses':
          this.currentClient = url.params.client_id;
          this.navItems = [{
            name: 'Models',
            link: ['/', 'profile', this.currentClient, 'eyeglasses']
          }, {
            name: 'Contacts',
            link: ['/', 'profile', this.currentClient, 'contacts']
          }];
          if (this.sessionService.getUser().role === 'admin') {
            this.navItems.push({
              name: 'Clients',
              link: ['/', 'profile', 'clients']
            });
          }
          break;
        case 'login':
          break;
        case 'clients':
          this.navItems = [];
          break;
        default:
          break;
      }
    });
  }

  logout() {
    this.sessionService.logout();
    this.router.navigate(['/', 'profile', 'login']);
  }

  onItemClicked(itemIndex) {
    console.log(this.navItems[itemIndex]);
    this.router.navigate(this.navItems[itemIndex].link);
  }

  public getClientName() {
    this.apiService.getClient(this.currentClient);
  }

}
