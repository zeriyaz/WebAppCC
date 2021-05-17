import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from './common/modules/http.module';
import { HttpErrorInterceptor } from './common/interceptor/http-exception.interceptor';
import { LoaderInterceptor } from './common/interceptor/loader.interceptor';

import { MaterialModule } from "./material.module";
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoaderComponent } from './common/component/Loader/loader.component'
import { ErrorDialogComponent } from './common/component/error-dialog/error-dialog.component'

const routes: Routes = [
  {
    path: 'currency',
    loadChildren: () => import('./crypto-currency/crypto-currency.module').then(m => m.CryptoCurrencyModule)
  },
  {
    path: '',
    redirectTo: 'currency',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoaderComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatNativeDateModule,
    HttpModule.forRoot({ environment }),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
