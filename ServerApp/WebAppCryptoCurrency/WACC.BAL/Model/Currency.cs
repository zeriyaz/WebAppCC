using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppCryptoCurrency.WACC.BAL.Model
{
    public static class CurrencyDataModel
    {
        public class Root
        {
            public string status { get; set; }
            public Data data { get; set; }
        }

        public class Base
        {
            public string symbol { get; set; }
            public string sign { get; set; }
        }

        public class Coin
        {
            public int id { get; set; }
            public string slug { get; set; }
            public string symbol { get; set; }
            public string name { get; set; }
            public string description { get; set; }
            public string color { get; set; }
            public string iconType { get; set; }
            public bool confirmedSupply { get; set; }
            public int numberOfMarkets { get; set; }
            public int numberOfExchanges { get; set; }
            public string type { get; set; }
            public long volume { get; set; }
            public long marketCap { get; set; }
            public string price { get; set; }
            public string circulatingSupply { get; set; }
            public string totalSupply { get; set; }
            public bool approvedSupply { get; set; }
            public string firstSeen { get; set; }
            public string listedAt { get; set; }
            public string change { get; set; }
            public string rank { get; set; }
            public string iconUrl { get; set; }
        }

        public class Data
        {
            public Stats stats { get; set; }
            public Base @base { get; set; }
            public List<Coin> coins { get; set; }
            public Coin coin { get; set; }
        }

        public class Stats
        {
            public int total { get; set; }
            public int offset { get; set; }
            public int limit { get; set; }
            public string order { get; set; }
            public string @base { get; set; }
            public int totalMarkets { get; set; }
            public int totalExchanges { get; set; }
            public double totalMarketCap { get; set; }
            public double total24hVolume { get; set; }
        }
    }
}
