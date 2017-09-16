// conditions / forecast / forecast10day / hourly API call features used

let data = {
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "conditions": 1
  ,
  "forecast": 1
  ,
  "forecast10day": 1
  ,
  "hourly": 1
  }
	}
  ,	"current_observation": {
		"image": {
		"url":"http://icons.wxug.com/graphics/wu2/logo_130x80.png",
		"title":"Weather Underground",
		"link":"http://www.wunderground.com"
		},
		"display_location": {
		"full":"Denver, CO",
		"city":"Denver",
		"state":"CO",
		"state_name":"Colorado",
		"country":"US",
		"country_iso3166":"US",
		"zip":"80201",
		"magic":"1",
		"wmo":"99999",
		"latitude":"39.74000168",
		"longitude":"-104.98000336",
		"elevation":"1598.1"
		},
		"observation_location": {
		"full":"Capitol Hill, Denver, Colorado",
		"city":"Capitol Hill, Denver",
		"state":"Colorado",
		"country":"US",
		"country_iso3166":"US",
		"latitude":"39.734711",
		"longitude":"-104.977921",
		"elevation":"5331 ft"
		},
		"estimated": {
		},
		"station_id":"KCODENVE218",
		"observation_time":"Last Updated on September 12, 4:25 PM MDT",
		"observation_time_rfc822":"Tue, 12 Sep 2017 16:25:51 -0600",
		"observation_epoch":"1505255151",
		"local_time_rfc822":"Tue, 12 Sep 2017 16:26:05 -0600",
		"local_epoch":"1505255165",
		"local_tz_short":"MDT",
		"local_tz_long":"America/Denver",
		"local_tz_offset":"-0600",
		"weather":"Partly Cloudy",
		"temperature_string":"94.1 F (34.5 C)",
		"temp_f":94.1,
		"temp_c":34.5,
		"relative_humidity":"12%",
		"wind_string":"Calm",
		"wind_dir":"NNW",
		"wind_degrees":332,
		"wind_mph":0.0,
		"wind_gust_mph":0,
		"wind_kph":0,
		"wind_gust_kph":0,
		"pressure_mb":"1010",
		"pressure_in":"29.84",
		"pressure_trend":"-",
		"dewpoint_string":"34 F (1 C)",
		"dewpoint_f":34,
		"dewpoint_c":1,
		"heat_index_string":"89 F (32 C)",
		"heat_index_f":89,
		"heat_index_c":32,
		"windchill_string":"NA",
		"windchill_f":"NA",
		"windchill_c":"NA",
		"feelslike_string":"89 F (32 C)",
		"feelslike_f":"89",
		"feelslike_c":"32",
		"visibility_mi":"10.0",
		"visibility_km":"16.1",
		"solarradiation":"331",
		"UV":"1.0","precip_1hr_string":"0.00 in ( 0 mm)",
		"precip_1hr_in":"0.00",
		"precip_1hr_metric":" 0",
		"precip_today_string":"0.00 in (0 mm)",
		"precip_today_in":"0.00",
		"precip_today_metric":"0",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"forecast_url":"http://www.wunderground.com/US/CO/Denver.html",
		"history_url":"http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE218",
		"ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.734711,-104.977921",
		"nowcast":""
	}
		,
	"forecast":{
		"txt_forecast": {
		"date":"3:38 PM MDT",
		"forecastday": [
		{
		"period":0,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Tuesday",
		"fcttext":"Partly cloudy. Lows overnight in the mid 60s.",
		"fcttext_metric":"A few clouds. Low 18C.",
		"pop":"10"
		}
		,
		{
		"period":1,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Tuesday Night",
		"fcttext":"Some clouds this evening will give way to mainly clear skies overnight. Low around 65F. Winds SW at 5 to 10 mph.",
		"fcttext_metric":"Mostly clear. Low 18C. Winds SW at 10 to 15 km/h.",
		"pop":"10"
		}
		,
		{
		"period":2,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Wednesday",
		"fcttext":"Generally sunny despite a few afternoon clouds. A stray shower or thunderstorm is possible. High 89F. Winds W at 10 to 15 mph.",
		"fcttext_metric":"Except for a few afternoon clouds, mainly sunny. A stray shower or thunderstorm is possible. High 32C. Winds W at 15 to 25 km/h.",
		"pop":"20"
		}
		,
		{
		"period":3,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Wednesday Night",
		"fcttext":"Partly cloudy. A stray shower or thunderstorm is possible. Low 61F. Winds SW at 5 to 10 mph.",
		"fcttext_metric":"A few clouds from time to time. A stray shower or thunderstorm is possible. Low 16C. Winds SSW at 10 to 15 km/h.",
		"pop":"20"
		}
		,
		{
		"period":4,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Thursday",
		"fcttext":"Partly to mostly cloudy. A stray shower or thunderstorm is possible. High 86F. Winds SW at 10 to 15 mph.",
		"fcttext_metric":"Some sun in the morning with increasing clouds during the afternoon. A stray shower or thunderstorm is possible. High near 30C. Winds SW at 15 to 25 km/h.",
		"pop":"20"
		}
		,
		{
		"period":5,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Thursday Night",
		"fcttext":"Partly cloudy. Low 57F. Winds SW at 5 to 10 mph.",
		"fcttext_metric":"Partly cloudy. Low 13C. Winds SSW at 10 to 15 km/h.",
		"pop":"10"
		}
		,
		{
		"period":6,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Friday",
		"fcttext":"Partly cloudy skies. A stray shower or thunderstorm is possible. High 83F. Winds S at 5 to 10 mph.",
		"fcttext_metric":"Intervals of clouds and sunshine. A stray shower or thunderstorm is possible. High 28C. Winds S at 10 to 15 km/h.",
		"pop":"20"
		}
		,
		{
		"period":7,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Friday Night",
		"fcttext":"Partly cloudy. Low 52F. Winds NNE at 10 to 15 mph.",
		"fcttext_metric":"Partly cloudy skies. Low 11C. Winds NNE at 15 to 25 km/h.",
		"pop":"0"
		}
		,
		{
		"period":8,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Saturday",
		"fcttext":"Partly to mostly cloudy. High 72F. Winds NE at 10 to 15 mph.",
		"fcttext_metric":"Intervals of clouds and sunshine in the morning with more clouds for later in the day. High 22C. Winds NE at 15 to 25 km/h.",
		"pop":"20"
		}
		,
		{
		"period":9,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Saturday Night",
		"fcttext":"Partly cloudy skies. Low 52F. Winds NE at 5 to 10 mph.",
		"fcttext_metric":"A few clouds from time to time. Low 11C. Winds NE at 10 to 15 km/h.",
		"pop":"10"
		}
		,
		{
		"period":10,
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"title":"Sunday",
		"fcttext":"Sunshine and clouds mixed. High 77F. Winds SSE at 10 to 15 mph.",
		"fcttext_metric":"Sunshine and clouds mixed. High near 25C. Winds SSE at 15 to 25 km/h.",
		"pop":"0"
		}
		,
		{
		"period":11,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Sunday Night",
		"fcttext":"Partly cloudy skies. Low 54F. Winds SSW at 5 to 10 mph.",
		"fcttext_metric":"Clear skies. Low 12C. Winds SSW at 10 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":12,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Monday",
		"fcttext":"Sunny skies. High near 85F. SSW winds shifting to ENE at 10 to 15 mph.",
		"fcttext_metric":"A mainly sunny sky. High 29C. SSW winds shifting to ENE at 15 to 25 km/h.",
		"pop":"0"
		}
		,
		{
		"period":13,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Monday Night",
		"fcttext":"Some clouds early will give way to generally clear conditions overnight. Low 54F. Winds SW at 5 to 10 mph.",
		"fcttext_metric":"Partly cloudy skies. Low 12C. Winds SW at 10 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":14,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Tuesday",
		"fcttext":"Mainly sunny. High near 85F. Winds SW at 10 to 15 mph.",
		"fcttext_metric":"Mainly sunny. High 29C. Winds SW at 10 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":15,
		"icon":"nt_clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"title":"Tuesday Night",
		"fcttext":"Clear. Low near 55F. Winds WSW at 5 to 10 mph.",
		"fcttext_metric":"Clear. Low 13C. Winds SW at 10 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":16,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Wednesday",
		"fcttext":"Sunny. High near 80F. Winds SW at 10 to 15 mph.",
		"fcttext_metric":"Sunny skies. High 27C. Winds SW at 15 to 25 km/h.",
		"pop":"0"
		}
		,
		{
		"period":17,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Wednesday Night",
		"fcttext":"Partly cloudy skies. Low near 55F. Winds WSW at 5 to 10 mph.",
		"fcttext_metric":"A few clouds from time to time. Low 13C. Winds SW at 10 to 15 km/h.",
		"pop":"0"
		}
		,
		{
		"period":18,
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"title":"Thursday",
		"fcttext":"Mostly sunny skies. High 73F. Winds W at 10 to 15 mph.",
		"fcttext_metric":"Mostly sunny skies. High 23C. Winds WSW at 15 to 25 km/h.",
		"pop":"20"
		}
		,
		{
		"period":19,
		"icon":"nt_partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"title":"Thursday Night",
		"fcttext":"Some clouds early will give way to generally clear conditions overnight. Low 48F. Winds SW at 5 to 10 mph.",
		"fcttext_metric":"Some clouds early will give way to generally clear conditions overnight. Low 9C. Winds SW at 10 to 15 km/h.",
		"pop":"10"
		}
		]
		},
		"simpleforecast": {
		"forecastday": [
		{"date":{
	"epoch":"1505264400",
	"pretty":"7:00 PM MDT on September 12, 2017",
	"day":12,
	"month":9,
	"year":2017,
	"yday":254,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Tue",
	"weekday":"Tuesday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":1,
		"high": {
		"fahrenheit":"94",
		"celsius":"35"
		},
		"low": {
		"fahrenheit":"65",
		"celsius":"18"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":10,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": null,
		"mm": null
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": null,
		"cm": null
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 12,
		"kph": 20,
		"dir": "",
		"degrees": 0
		},
		"avewind": {
		"mph": 0,
		"kph": 0,
		"dir": "NNW",
		"degrees": 330
		},
		"avehumidity": 25,
		"maxhumidity": 36,
		"minhumidity": 15
		}
		,
		{"date":{
	"epoch":"1505350800",
	"pretty":"7:00 PM MDT on September 13, 2017",
	"day":13,
	"month":9,
	"year":2017,
	"yday":255,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Wed",
	"weekday":"Wednesday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":2,
		"high": {
		"fahrenheit":"89",
		"celsius":"32"
		},
		"low": {
		"fahrenheit":"61",
		"celsius":"16"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":20,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "W",
		"degrees": 264
		},
		"avewind": {
		"mph": 12,
		"kph": 19,
		"dir": "W",
		"degrees": 264
		},
		"avehumidity": 31,
		"maxhumidity": 42,
		"minhumidity": 16
		}
		,
		{"date":{
	"epoch":"1505437200",
	"pretty":"7:00 PM MDT on September 14, 2017",
	"day":14,
	"month":9,
	"year":2017,
	"yday":256,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Thu",
	"weekday":"Thursday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":3,
		"high": {
		"fahrenheit":"86",
		"celsius":"30"
		},
		"low": {
		"fahrenheit":"57",
		"celsius":"14"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":20,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "SW",
		"degrees": 228
		},
		"avewind": {
		"mph": 11,
		"kph": 18,
		"dir": "SW",
		"degrees": 228
		},
		"avehumidity": 35,
		"maxhumidity": 47,
		"minhumidity": 18
		}
		,
		{"date":{
	"epoch":"1505523600",
	"pretty":"7:00 PM MDT on September 15, 2017",
	"day":15,
	"month":9,
	"year":2017,
	"yday":257,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Fri",
	"weekday":"Friday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":4,
		"high": {
		"fahrenheit":"83",
		"celsius":"28"
		},
		"low": {
		"fahrenheit":"52",
		"celsius":"11"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":20,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 10,
		"kph": 16,
		"dir": "S",
		"degrees": 171
		},
		"avewind": {
		"mph": 9,
		"kph": 14,
		"dir": "S",
		"degrees": 171
		},
		"avehumidity": 36,
		"maxhumidity": 55,
		"minhumidity": 17
		}
		,
		{"date":{
	"epoch":"1505610000",
	"pretty":"7:00 PM MDT on September 16, 2017",
	"day":16,
	"month":9,
	"year":2017,
	"yday":258,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Sat",
	"weekday":"Saturday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":5,
		"high": {
		"fahrenheit":"72",
		"celsius":"22"
		},
		"low": {
		"fahrenheit":"52",
		"celsius":"11"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":20,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "NE",
		"degrees": 43
		},
		"avewind": {
		"mph": 11,
		"kph": 18,
		"dir": "NE",
		"degrees": 43
		},
		"avehumidity": 53,
		"maxhumidity": 74,
		"minhumidity": 36
		}
		,
		{"date":{
	"epoch":"1505696400",
	"pretty":"7:00 PM MDT on September 17, 2017",
	"day":17,
	"month":9,
	"year":2017,
	"yday":259,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Sun",
	"weekday":"Sunday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":6,
		"high": {
		"fahrenheit":"77",
		"celsius":"25"
		},
		"low": {
		"fahrenheit":"54",
		"celsius":"12"
		},
		"conditions":"Partly Cloudy",
		"icon":"partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "SSE",
		"degrees": 150
		},
		"avewind": {
		"mph": 11,
		"kph": 18,
		"dir": "SSE",
		"degrees": 150
		},
		"avehumidity": 52,
		"maxhumidity": 75,
		"minhumidity": 28
		}
		,
		{"date":{
	"epoch":"1505782800",
	"pretty":"7:00 PM MDT on September 18, 2017",
	"day":18,
	"month":9,
	"year":2017,
	"yday":260,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Mon",
	"weekday":"Monday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":7,
		"high": {
		"fahrenheit":"85",
		"celsius":"29"
		},
		"low": {
		"fahrenheit":"54",
		"celsius":"12"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "ESE",
		"degrees": 122
		},
		"avewind": {
		"mph": 11,
		"kph": 18,
		"dir": "ESE",
		"degrees": 122
		},
		"avehumidity": 36,
		"maxhumidity": 57,
		"minhumidity": 16
		}
		,
		{"date":{
	"epoch":"1505869200",
	"pretty":"7:00 PM MDT on September 19, 2017",
	"day":19,
	"month":9,
	"year":2017,
	"yday":261,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Tue",
	"weekday":"Tuesday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":8,
		"high": {
		"fahrenheit":"85",
		"celsius":"29"
		},
		"low": {
		"fahrenheit":"55",
		"celsius":"13"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "SW",
		"degrees": 219
		},
		"avewind": {
		"mph": 10,
		"kph": 16,
		"dir": "SW",
		"degrees": 219
		},
		"avehumidity": 30,
		"maxhumidity": 47,
		"minhumidity": 16
		}
		,
		{"date":{
	"epoch":"1505955600",
	"pretty":"7:00 PM MDT on September 20, 2017",
	"day":20,
	"month":9,
	"year":2017,
	"yday":262,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Wed",
	"weekday":"Wednesday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":9,
		"high": {
		"fahrenheit":"80",
		"celsius":"27"
		},
		"low": {
		"fahrenheit":"55",
		"celsius":"13"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":0,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "SW",
		"degrees": 234
		},
		"avewind": {
		"mph": 10,
		"kph": 16,
		"dir": "SW",
		"degrees": 234
		},
		"avehumidity": 34,
		"maxhumidity": 52,
		"minhumidity": 20
		}
		,
		{"date":{
	"epoch":"1506042000",
	"pretty":"7:00 PM MDT on September 21, 2017",
	"day":21,
	"month":9,
	"year":2017,
	"yday":263,
	"hour":19,
	"min":"00",
	"sec":0,
	"isdst":"1",
	"monthname":"September",
	"monthname_short":"Sep",
	"weekday_short":"Thu",
	"weekday":"Thursday",
	"ampm":"PM",
	"tz_short":"MDT",
	"tz_long":"America/Denver"
},
		"period":10,
		"high": {
		"fahrenheit":"73",
		"celsius":"23"
		},
		"low": {
		"fahrenheit":"48",
		"celsius":"9"
		},
		"conditions":"Clear",
		"icon":"clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"skyicon":"",
		"pop":20,
		"qpf_allday": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_day": {
		"in": 0.00,
		"mm": 0
		},
		"qpf_night": {
		"in": 0.00,
		"mm": 0
		},
		"snow_allday": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_day": {
		"in": 0.0,
		"cm": 0.0
		},
		"snow_night": {
		"in": 0.0,
		"cm": 0.0
		},
		"maxwind": {
		"mph": 15,
		"kph": 24,
		"dir": "W",
		"degrees": 260
		},
		"avewind": {
		"mph": 11,
		"kph": 18,
		"dir": "W",
		"degrees": 260
		},
		"avehumidity": 36,
		"maxhumidity": 52,
		"minhumidity": 23
		}
		]
		}
	}
		,
	"hourly_forecast": [
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "12","mday_padded": "12","yday": "254","isdst": "1","epoch": "1505257200","pretty": "5:00 PM MDT on September 12, 2017","civil": "5:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "90", "metric": "32"},
		"dewpoint": {"english": "37", "metric": "3"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "36",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "N", "degrees": "357"},
		"wx": "Partly Cloudy",
		"uvi": "1",
		"humidity": "15",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "90", "metric": "32"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.77", "metric": "1008"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "12","mday_padded": "12","yday": "254","isdst": "1","epoch": "1505260800","pretty": "6:00 PM MDT on September 12, 2017","civil": "6:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "88", "metric": "31"},
		"dewpoint": {"english": "38", "metric": "3"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "36",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "N", "degrees": "1"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "17",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "88", "metric": "31"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "4",
		"mslp": {"english": "29.76", "metric": "1008"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "12","mday_padded": "12","yday": "254","isdst": "1","epoch": "1505264400","pretty": "7:00 PM MDT on September 12, 2017","civil": "7:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "85", "metric": "29"},
		"dewpoint": {"english": "40", "metric": "4"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "29",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "NW", "degrees": "316"},
		"wx": "Mostly Sunny",
		"uvi": "0",
		"humidity": "21",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "85", "metric": "29"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "1",
		"mslp": {"english": "29.78", "metric": "1008"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "12","mday_padded": "12","yday": "254","isdst": "1","epoch": "1505268000","pretty": "8:00 PM MDT on September 12, 2017","civil": "8:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "79", "metric": "26"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "22",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "SW", "degrees": "237"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "26",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "79", "metric": "26"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.79", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "12","mday_padded": "12","yday": "254","isdst": "1","epoch": "1505271600","pretty": "9:00 PM MDT on September 12, 2017","civil": "9:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "76", "metric": "24"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "SW", "degrees": "215"},
		"wx": "Mostly Clear",
		"uvi": "0",
		"humidity": "30",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "76", "metric": "24"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.8", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "12","mday_padded": "12","yday": "254","isdst": "1","epoch": "1505275200","pretty": "10:00 PM MDT on September 12, 2017","civil": "10:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "74", "metric": "23"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "17",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "SSW", "degrees": "207"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "33",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "74", "metric": "23"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.8", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "12","mday_padded": "12","yday": "254","isdst": "1","epoch": "1505278800","pretty": "11:00 PM MDT on September 12, 2017","civil": "11:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Tuesday","weekday_name_night": "Tuesday Night","weekday_name_abbrev": "Tue","weekday_name_unlang": "Tuesday","weekday_name_night_unlang": "Tuesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "71", "metric": "22"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "13",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "SSW", "degrees": "205"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "36",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "71", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.8", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505282400","pretty": "12:00 AM MDT on September 13, 2017","civil": "12:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "12",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "SSW", "degrees": "206"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "39",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.8", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505286000","pretty": "1:00 AM MDT on September 13, 2017","civil": "1:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "7",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "SSW", "degrees": "205"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "39",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.79", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505289600","pretty": "2:00 AM MDT on September 13, 2017","civil": "2:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "4",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "SW", "degrees": "217"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "39",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.79", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505293200","pretty": "3:00 AM MDT on September 13, 2017","civil": "3:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "2",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "SSW", "degrees": "209"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "39",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.79", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505296800","pretty": "4:00 AM MDT on September 13, 2017","civil": "4:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "2",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "SW", "degrees": "216"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "40",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.78", "metric": "1008"}
		}
		,
		{
		"FCTTIME": {
		"hour": "5","hour_padded": "05","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505300400","pretty": "5:00 AM MDT on September 13, 2017","civil": "5:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "2",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "SSW", "degrees": "204"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "41",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.78", "metric": "1008"}
		}
		,
		{
		"FCTTIME": {
		"hour": "6","hour_padded": "06","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505304000","pretty": "6:00 AM MDT on September 13, 2017","civil": "6:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
		"fctcode": "1",
		"sky": "2",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "SSW", "degrees": "197"},
		"wx": "Clear",
		"uvi": "0",
		"humidity": "42",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.78", "metric": "1008"}
		}
		,
		{
		"FCTTIME": {
		"hour": "7","hour_padded": "07","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505307600","pretty": "7:00 AM MDT on September 13, 2017","civil": "7:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "9",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "SSW", "degrees": "196"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "41",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.8", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "8","hour_padded": "08","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505311200","pretty": "8:00 AM MDT on September 13, 2017","civil": "8:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "69", "metric": "21"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "13",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "SSW", "degrees": "206"},
		"wx": "Sunny",
		"uvi": "0",
		"humidity": "39",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "69", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.79", "metric": "1009"}
		}
		,
		{
		"FCTTIME": {
		"hour": "9","hour_padded": "09","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505314800","pretty": "9:00 AM MDT on September 13, 2017","civil": "9:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "75", "metric": "24"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "16",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "SW", "degrees": "227"},
		"wx": "Sunny",
		"uvi": "2",
		"humidity": "31",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "75", "metric": "24"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.78", "metric": "1008"}
		}
		,
		{
		"FCTTIME": {
		"hour": "10","hour_padded": "10","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505318400","pretty": "10:00 AM MDT on September 13, 2017","civil": "10:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "80", "metric": "27"},
		"dewpoint": {"english": "41", "metric": "5"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "19",
		"wspd": {"english": "3", "metric": "5"},
		"wdir": {"dir": "WSW", "degrees": "243"},
		"wx": "Sunny",
		"uvi": "3",
		"humidity": "25",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "80", "metric": "27"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.76", "metric": "1008"}
		}
		,
		{
		"FCTTIME": {
		"hour": "11","hour_padded": "11","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505322000","pretty": "11:00 AM MDT on September 13, 2017","civil": "11:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "84", "metric": "29"},
		"dewpoint": {"english": "39", "metric": "4"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "25",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NNW", "degrees": "330"},
		"wx": "Mostly Sunny",
		"uvi": "5",
		"humidity": "21",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "84", "metric": "29"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.74", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "12","hour_padded": "12","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505325600","pretty": "12:00 PM MDT on September 13, 2017","civil": "12:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "86", "metric": "30"},
		"dewpoint": {"english": "37", "metric": "3"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "17",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "NNW", "degrees": "335"},
		"wx": "Sunny",
		"uvi": "7",
		"humidity": "18",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "86", "metric": "30"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.71", "metric": "1006"}
		}
		,
		{
		"FCTTIME": {
		"hour": "13","hour_padded": "13","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505329200","pretty": "1:00 PM MDT on September 13, 2017","civil": "1:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "87", "metric": "31"},
		"dewpoint": {"english": "37", "metric": "3"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "28",
		"wspd": {"english": "4", "metric": "6"},
		"wdir": {"dir": "WNW", "degrees": "289"},
		"wx": "Mostly Sunny",
		"uvi": "7",
		"humidity": "17",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "87", "metric": "31"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.69", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "14","hour_padded": "14","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505332800","pretty": "2:00 PM MDT on September 13, 2017","civil": "2:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "88", "metric": "31"},
		"dewpoint": {"english": "37", "metric": "3"},
		"condition": "Clear",
		"icon": "clear",
		"icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
		"fctcode": "1",
		"sky": "23",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "N", "degrees": "355"},
		"wx": "Mostly Sunny",
		"uvi": "6",
		"humidity": "16",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "88", "metric": "31"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "0",
		"mslp": {"english": "29.66", "metric": "1004"}
		}
		,
		{
		"FCTTIME": {
		"hour": "15","hour_padded": "15","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505336400","pretty": "3:00 PM MDT on September 13, 2017","civil": "3:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "87", "metric": "31"},
		"dewpoint": {"english": "37", "metric": "3"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "52",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "SW", "degrees": "219"},
		"wx": "Partly Cloudy",
		"uvi": "5",
		"humidity": "17",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "87", "metric": "31"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.65", "metric": "1004"}
		}
		,
		{
		"FCTTIME": {
		"hour": "16","hour_padded": "16","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505340000","pretty": "4:00 PM MDT on September 13, 2017","civil": "4:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "86", "metric": "30"},
		"dewpoint": {"english": "38", "metric": "3"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "52",
		"wspd": {"english": "9", "metric": "14"},
		"wdir": {"dir": "W", "degrees": "267"},
		"wx": "Partly Cloudy",
		"uvi": "3",
		"humidity": "18",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "86", "metric": "30"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.65", "metric": "1004"}
		}
		,
		{
		"FCTTIME": {
		"hour": "17","hour_padded": "17","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505343600","pretty": "5:00 PM MDT on September 13, 2017","civil": "5:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "84", "metric": "29"},
		"dewpoint": {"english": "40", "metric": "4"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "54",
		"wspd": {"english": "11", "metric": "18"},
		"wdir": {"dir": "W", "degrees": "277"},
		"wx": "Partly Cloudy",
		"uvi": "1",
		"humidity": "21",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "84", "metric": "29"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.65", "metric": "1004"}
		}
		,
		{
		"FCTTIME": {
		"hour": "18","hour_padded": "18","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505347200","pretty": "6:00 PM MDT on September 13, 2017","civil": "6:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "81", "metric": "27"},
		"dewpoint": {"english": "41", "metric": "5"},
		"condition": "Mostly Cloudy",
		"icon": "mostlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/mostlycloudy.gif",
		"fctcode": "3",
		"sky": "65",
		"wspd": {"english": "12", "metric": "19"},
		"wdir": {"dir": "WSW", "degrees": "256"},
		"wx": "Mostly Cloudy",
		"uvi": "0",
		"humidity": "25",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "81", "metric": "27"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.67", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "19","hour_padded": "19","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505350800","pretty": "7:00 PM MDT on September 13, 2017","civil": "7:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "77", "metric": "25"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
		"fctcode": "2",
		"sky": "55",
		"wspd": {"english": "8", "metric": "13"},
		"wdir": {"dir": "SW", "degrees": "227"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "29",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "77", "metric": "25"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.68", "metric": "1005"}
		}
		,
		{
		"FCTTIME": {
		"hour": "20","hour_padded": "20","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505354400","pretty": "8:00 PM MDT on September 13, 2017","civil": "8:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "75", "metric": "24"},
		"dewpoint": {"english": "44", "metric": "7"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "44",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "SW", "degrees": "233"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "34",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "75", "metric": "24"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.7", "metric": "1006"}
		}
		,
		{
		"FCTTIME": {
		"hour": "21","hour_padded": "21","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505358000","pretty": "9:00 PM MDT on September 13, 2017","civil": "9:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "72", "metric": "22"},
		"dewpoint": {"english": "45", "metric": "7"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "41",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "SW", "degrees": "220"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "38",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "72", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.72", "metric": "1006"}
		}
		,
		{
		"FCTTIME": {
		"hour": "22","hour_padded": "22","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505361600","pretty": "10:00 PM MDT on September 13, 2017","civil": "10:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "71", "metric": "22"},
		"dewpoint": {"english": "45", "metric": "7"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "38",
		"wspd": {"english": "7", "metric": "11"},
		"wdir": {"dir": "SW", "degrees": "237"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "39",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "71", "metric": "22"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.74", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "23","hour_padded": "23","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "13","mday_padded": "13","yday": "255","isdst": "1","epoch": "1505365200","pretty": "11:00 PM MDT on September 13, 2017","civil": "11:00 PM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Wednesday","weekday_name_night": "Wednesday Night","weekday_name_abbrev": "Wed","weekday_name_unlang": "Wednesday","weekday_name_night_unlang": "Wednesday Night","ampm": "PM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "70", "metric": "21"},
		"dewpoint": {"english": "45", "metric": "7"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "36",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "SW", "degrees": "233"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "41",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "70", "metric": "21"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.73", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "0","hour_padded": "00","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "14","mday_padded": "14","yday": "256","isdst": "1","epoch": "1505368800","pretty": "12:00 AM MDT on September 14, 2017","civil": "12:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "68", "metric": "20"},
		"dewpoint": {"english": "45", "metric": "7"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "44",
		"wspd": {"english": "6", "metric": "10"},
		"wdir": {"dir": "SW", "degrees": "216"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "43",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "68", "metric": "20"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.73", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "1","hour_padded": "01","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "14","mday_padded": "14","yday": "256","isdst": "1","epoch": "1505372400","pretty": "1:00 AM MDT on September 14, 2017","civil": "1:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "67", "metric": "19"},
		"dewpoint": {"english": "44", "metric": "7"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "32",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "SSW", "degrees": "203"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "44",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "67", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.73", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "2","hour_padded": "02","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "14","mday_padded": "14","yday": "256","isdst": "1","epoch": "1505376000","pretty": "2:00 AM MDT on September 14, 2017","civil": "2:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "66", "metric": "19"},
		"dewpoint": {"english": "44", "metric": "7"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "30",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "SSW", "degrees": "210"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "45",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "66", "metric": "19"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.73", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "3","hour_padded": "03","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "14","mday_padded": "14","yday": "256","isdst": "1","epoch": "1505379600","pretty": "3:00 AM MDT on September 14, 2017","civil": "3:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "65", "metric": "18"},
		"dewpoint": {"english": "43", "metric": "6"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "31",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "SSW", "degrees": "200"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "45",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "65", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.73", "metric": "1007"}
		}
		,
		{
		"FCTTIME": {
		"hour": "4","hour_padded": "04","min": "00","min_unpadded": "0","sec": "0","year": "2017","mon": "9","mon_padded": "09","mon_abbrev": "Sep","mday": "14","mday_padded": "14","yday": "256","isdst": "1","epoch": "1505383200","pretty": "4:00 AM MDT on September 14, 2017","civil": "4:00 AM","month_name": "September","month_name_abbrev": "Sep","weekday_name": "Thursday","weekday_name_night": "Thursday Night","weekday_name_abbrev": "Thu","weekday_name_unlang": "Thursday","weekday_name_night_unlang": "Thursday Night","ampm": "AM","tz": "","age": "","UTCDATE": ""
		},
		"temp": {"english": "64", "metric": "18"},
		"dewpoint": {"english": "42", "metric": "6"},
		"condition": "Partly Cloudy",
		"icon": "partlycloudy",
		"icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
		"fctcode": "2",
		"sky": "37",
		"wspd": {"english": "5", "metric": "8"},
		"wdir": {"dir": "SSW", "degrees": "211"},
		"wx": "Partly Cloudy",
		"uvi": "0",
		"humidity": "45",
		"windchill": {"english": "-9999", "metric": "-9999"},
		"heatindex": {"english": "-9999", "metric": "-9999"},
		"feelslike": {"english": "64", "metric": "18"},
		"qpf": {"english": "0.0", "metric": "0"},
		"snow": {"english": "0.0", "metric": "0"},
		"pop": "15",
		"mslp": {"english": "29.73", "metric": "1007"}
		}
	]
}

console.log(data.forecast.simpleforecast.forecastday[0]);
