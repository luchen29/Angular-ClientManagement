import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {DemoComponent} from './demo/demo.component';
import {ClientsComponent} from './clients/clients.component';
import {EyeglassComponent} from './eyeglass/eyeglass.component';
import {ImageComponent} from './image/image.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AuthGuard} from './services/auth.guard';
import {Role} from './user/role';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'demo', component: DemoComponent},
  {
    path: 'profile', component: ProfileComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'clients', component: ClientsComponent, canActivate: [AuthGuard], data: {roles: [Role.Admin]}},
      {path: ':client_id/contacts', component: ContactsComponent},
      {path: ':client_id/eyeglasses', component: EyeglassComponent},
      {path: ':client_id/:eyeglass_id/image', component: ImageComponent},
    ]
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
