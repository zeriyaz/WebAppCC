import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../common/services/data.service';
import { map } from 'rxjs/operators';
import { Root} from '../model/currency-data.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private getModelName = () => 'currency';

  constructor(private data: DataService) { }

  getAllCurrency(): Observable<Root> {
    debugger;
    return this.data
      .getAll<Root>(this.getModelName());
  }

  getCurrencyById(Id:number): Observable<Root> {
    return this.data
      .getById<Root>(this.getModelName(), Id)
      .pipe(map(ret => ret));
  }
}
