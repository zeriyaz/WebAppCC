import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyService } from '../services/currency.service';
import { Root } from '../model/currency-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-list',
  templateUrl: './crypto-currency-list.component.html'
})
export class CurrencyListComponent {
  currency$: Root;

  constructor(private currencyService: CurrencyService, private router: Router) { }

  ngOnInit() {
    this.currencyService.getAllCurrency().subscribe(result => {
      if (result.status == "success")
        this.currency$ = result;
    });
  }

  displayItemDetails(Id: number) {
    this.router.navigateByUrl('currency/' + Id);
  }
}


