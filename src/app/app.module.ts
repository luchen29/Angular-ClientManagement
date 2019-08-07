import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule, LIGHTBOX_CONFIG } from '@ngx-gallery/lightbox';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { StlModelViewerModule } from 'angular-stl-model-viewer';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DemoComponent} from './demo/demo.component';
import {LoginComponent} from './login/login.component';
import {ClientsComponent} from './clients/clients.component';
import {EyeglassComponent} from './eyeglass/eyeglass.component';
import {TypeComponent} from './type/type.component';
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
    TypeComponent,
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
    ScrollToModule.forRoot(),
    LightboxModule,
    GalleryModule,
    Ng2ImgMaxModule,
    StlModelViewerModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NzUploadModule
  ],
  providers: [
    APIService,
    SessionService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: LIGHTBOX_CONFIG, useValue: { keyboardShortcuts: false }},
    {provide: NZ_I18N, useValue: en_US},
  ],
  bootstrap: [AppComponent] // bootstrap array
})
export class AppModule {
}
