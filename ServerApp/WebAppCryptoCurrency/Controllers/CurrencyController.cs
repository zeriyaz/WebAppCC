using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAppCryptoCurrency.WACC.BAL.Interface;
using WebAppCryptoCurrency.WACC.BAL.Service;

namespace WebAppCryptoCurrency.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/Currency")]
    public class CurrencyController : ControllerBase
    {
        private IExternalService _currencyService;
        public CurrencyController(IExternalService currencyServiceInjector)
        {
            _currencyService = currencyServiceInjector;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var currency = await _currencyService.GetAll();

                if (currency == null)
                    return NotFound();

                return Ok(currency);
            }
            catch (Exception)
            {

                //TODO: Logging error using logger class
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var currencyDetails = await _currencyService.GetById(id);
                if (currencyDetails == null)
                    return NotFound();

                return Ok(currencyDetails);
            }
            catch (Exception)
            {
                //TODO: Logging error using logger class
                return StatusCode(500, "Internal server error");
            }
        }

    }
}
