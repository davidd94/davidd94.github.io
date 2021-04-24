  var Currency = {
    rates: {"USD":1.0,"EUR":1.19707,"GBP":1.38191,"CAD":0.79895,"ARS":0.0107721,"AUD":0.771782,"BRL":0.179001,"CLP":0.0014229,"CNY":0.153359,"CYP":0.397899,"CZK":0.046141,"DKK":0.160979,"EEK":0.0706676,"HKD":0.128682,"HUF":0.00331589,"ISK":0.0079062,"INR":0.0134171,"JMD":0.00666324,"JPY":0.00919781,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0501727,"NZD":0.712947,"NOK":0.119225,"PLN":0.263524,"SGD":0.749275,"SKK":21.5517,"SIT":175.439,"ZAR":0.0698721,"KRW":0.000895528,"SEK":0.118399,"CHF":1.08636,"TWD":0.0353421,"UYU":0.0226737,"MYR":0.242348,"BSD":1.0,"CRC":0.00163017,"RON":0.242741,"PHP":0.0206775,"AED":0.272294,"VEB":4.20702e-15,"IDR":6.86573e-05,"TRY":0.123741,"THB":0.0320458,"TTD":0.147278,"ILS":0.304895,"SYP":0.000795116,"XCD":0.370024,"COP":0.000277536,"RUB":0.0131665,"HRK":0.158319,"KZT":0.00232416,"TZS":0.000431271,"XPT":1204.65,"SAR":0.266667,"NIO":0.0286391,"LAK":0.000106074,"OMR":2.60078,"AMD":0.00192187,"CDF":0.000507325,"KPW":0.00111111,"SPL":6.0,"KES":0.0092955,"ZWD":0.00276319,"KHR":0.000246926,"MVR":0.0649329,"GTQ":0.129551,"BZD":0.496047,"BYR":3.82781e-05,"LYD":0.222081,"DZD":0.00756137,"BIF":0.000508669,"GIP":1.38191,"BOB":0.144731,"XOF":0.00182492,"STD":4.88336e-05,"NGN":0.00262826,"PGK":0.285,"ERN":0.0666667,"MWK":0.00127276,"CUP":0.041125,"GMD":0.0195911,"CVE":0.0108558,"BTN":0.0134171,"XAF":0.00182492,"UGX":0.000276204,"MAD":0.11203,"MNT":0.000350911,"LSL":0.0698721,"XAG":25.945,"TOP":0.442298,"SHP":1.38191,"RSD":0.0101968,"HTG":0.0123947,"MGA":0.000263156,"MZN":0.0162133,"FKP":1.38191,"BWP":0.0923572,"HNL":0.0415789,"PYG":0.000155344,"JEP":1.38191,"EGP":0.0637348,"LBP":0.00066335,"ANG":0.558817,"WST":0.395782,"TVD":0.771782,"GYD":0.00478412,"GGP":1.38191,"NPR":0.00834655,"KMF":0.00243323,"IRR":2.37953e-05,"XPD":2775.16,"SRD":0.0706587,"TMM":5.72492e-05,"SZL":0.0698721,"MOP":0.124934,"BMD":1.0,"XPF":0.0100314,"ETB":0.0239234,"JOD":1.41044,"MDL":0.055738,"MRO":0.00278255,"YER":0.00399467,"BAM":0.612052,"AWG":0.558659,"PEN":0.275213,"VEF":4.20702e-12,"SLL":9.78208e-05,"KYD":1.21951,"AOA":0.00156014,"TND":0.365172,"TJS":0.0876437,"SCR":0.0727249,"LKR":0.00518139,"DJF":0.0056252,"GNF":9.99466e-05,"VUV":0.00919217,"SDG":0.00263081,"IMP":1.38191,"GEL":0.291381,"FJD":0.488562,"DOP":0.0175758,"XDR":1.42969,"MUR":0.0247712,"MMK":0.000708995,"LRD":0.00579356,"BBD":0.5,"ZMK":4.50647e-05,"XAU":1777.98,"VND":4.33339e-05,"UAH":0.0357172,"TMT":0.286246,"IQD":0.000685205,"BGN":0.612052,"KGS":0.0117924,"RWF":0.000999342,"BHD":2.65957,"UZS":9.50547e-05,"PKR":0.00652536,"MKD":0.0194479,"AFN":0.0129007,"NAD":0.0698721,"BDT":0.0117939,"AZN":0.588589,"SOS":0.00173363,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.126701,"ALL":0.00973297,"BND":0.749275,"KWD":3.31786,"GHS":0.173057,"ZMW":0.0450647,"XBT":56464.0,"NTD":0.0337206,"BYN":0.382781,"CNH":0.153199,"MRU":0.0278255,"STN":0.0488336,"VES":4.20702e-07,"MXV":0.332162},
    convert: function(amount, from, to) {
      return (amount * this.rates[from]) / this.rates[to];
    }
  };
