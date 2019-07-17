import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {FileDropModule} from 'ngx-file-drop';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
// import { LightboxModule } from 'ngx-lightbox';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule, LIGHTBOX_CONFIG } from '@ngx-gallery/lightbox';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { OrbitControls } from 'orbit-controls-es6';
import { StlModelViewerModule } from 'angular-stl-model-viewer';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DemoComponent} from './demo/demo.component';
import {LoginComponent} from './login/login.component';
import {ClientsComponent} from './clients/clients.component';
import {EyeglassComponent} from './eyeglass/eyeglass.component';
import {ImageComponent} from './image/image.component';
import {APIService} from './services/api.service';
import {SessionService} from './services/session.service';
import {NavbarComponent} from './navbar/navbar.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactsComponent} from './contacts/contacts.component';
import {JwtInterceptor} from './services/jwt.interceptor';
import {ErrorInterceptor} from './services/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    LoginComponent,
    ClientsComponent,
    EyeglassComponent,
    ImageComponent,
    NavbarComponent,
    ProfileComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FileDropModule,
    ScrollToModule.forRoot(),
    LightboxModule,
    GalleryModule,
    Ng2ImgMaxModule,
    StlModelViewerModule
  ],
  providers: [
    APIService,
    SessionService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: LIGHTBOX_CONFIG, useValue: { keyboardShortcuts: false }}
  ],
  bootstrap: [AppComponent] // bootstrap array
})
export class AppModule {
}
