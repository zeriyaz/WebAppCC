import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CurrencyDetailComponent } from '../crypto-currency/Detail/crypto-currency.component'
import { CurrencyListComponent } from '../crypto-currency/List/crypto-currency-list.component'

@NgModule({
  declarations: [
    CurrencyListComponent,
    CurrencyDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CurrencyListComponent },
      { path: ':id', component: CurrencyDetailComponent },
    ])
  ]
})
export class CryptoCurrencyModule { }
