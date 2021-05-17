using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAppCryptoCurrency.WACC.BAL.Model;

namespace WebAppCryptoCurrency.WACC.BAL.Interface
{
    public interface IExternalService
    {
        public Task<CurrencyDataModel.Root> GetAll();
        public Task<CurrencyDataModel.Root> GetById(int id);
    }
}
