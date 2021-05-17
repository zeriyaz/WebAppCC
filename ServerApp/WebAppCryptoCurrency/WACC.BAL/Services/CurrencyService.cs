using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using WebAppCryptoCurrency.WACC.BAL.Configuration;
using WebAppCryptoCurrency.WACC.BAL.Interface;
using WebAppCryptoCurrency.WACC.BAL.Model;

namespace WebAppCryptoCurrency.WACC.BAL.Service
{
    public class CurrencyService : IExternalService
    {
        HttpRequestMessage _request;
        HttpClient _client;

        public CurrencyService(IOptions<EndpointConfiguration> ConfigOptions)
        {
            _request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri(ConfigOptions.Value.URL),
                Headers =
                {
                    { "x-rapidapi-key", ConfigOptions.Value.Key },
                    { "x-rapidapi-host", ConfigOptions.Value.Host },
                },
            };
            this._client = new HttpClient();
        }
        public async Task<CurrencyDataModel.Root> GetAll()
        {
            try
            {
                this._request.RequestUri = new Uri(this._request.RequestUri.AbsoluteUri + "/coins");
                using (var response = await this._client.SendAsync(this._request))
                {
                    response.EnsureSuccessStatusCode();
                    var jsonString = await response.Content.ReadAsStringAsync();

                    var listOfCurrencies = JsonConvert.DeserializeObject<CurrencyDataModel.Root>(jsonString);
                    listOfCurrencies.data.coins = listOfCurrencies.data.coins.FindAll(x => x.symbol == "USDT" || x.symbol == "BTC" || x.symbol == "BCH" || x.symbol == "LTC");
                    return listOfCurrencies;
                }
            }
            catch (Exception)
            {
                //TODO: Logging error details
            }
            return null;
        }

        public async Task<CurrencyDataModel.Root> GetById(int id)
        {
            try { 
            this._request.RequestUri = new Uri(this._request.RequestUri.AbsoluteUri + "/coin/" + id);
            using (var response = await this._client.SendAsync(this._request))
            {
                response.EnsureSuccessStatusCode();
                var body = await response.Content.ReadAsStringAsync();

                var result = JsonConvert.DeserializeObject<CurrencyDataModel.Root>(body);
                return result;
            }
            }
            catch (Exception)
            {
                //TODO: Logging error details
            }
            return null;
        }
    }
}
