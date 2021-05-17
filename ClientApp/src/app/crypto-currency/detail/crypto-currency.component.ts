import { Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CurrencyService } from '../services/currency.service';
import { Root } from '../model/currency-data.model';

@Component({
  selector: 'app-currency-details',
  templateUrl: 'crypto-currency.component.html'
})
export class CurrencyDetailComponent {
  currency$: Root;

  constructor(private route: ActivatedRoute, private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        let _currencyId = params['id'];
        this.currencyService.getCurrencyById(_currencyId).subscribe(result => {
          if (result.status == "success")
            this.currency$ = result;
        });
      }
    );
  }
}
