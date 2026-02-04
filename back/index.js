import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/towns', (_, res) => {
    setTimeout(() => {
        res.json([
            {
                "Key": "28143",
                "LocalizedName": "Дакка",
                "EnglishName": "Dhaka",
                "Country": {
                    "ID": "BD",
                    "LocalizedName": "Бангладеш",
                    "EnglishName": "Bangladesh"
                },
                "TimeZone": {
                    "Code": "BDT",
                    "Name": "Asia/Dhaka",
                    "GmtOffset": 6.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 23.7098,
                    "Longitude": 90.40711,
                    "Elevation": {
                        "Metric": {
                            "Value": 5.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 16.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T15:07:00+06:00",
                "EpochTime": 1770023220,
                "WeatherText": "Солнечно, дымка",
                "WeatherIcon": 5,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 26.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 79.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/bd/dhaka/28143/current-weather/28143",
                "Link": "http://www.accuweather.com/ru/bd/dhaka/28143/current-weather/28143"
            },
            {
                "Key": "113487",
                "LocalizedName": "Киншаса",
                "EnglishName": "Kinshasa",
                "Country": {
                    "ID": "CD",
                    "LocalizedName": "Демократическая Республика Конго",
                    "EnglishName": "Democratic Republic of the Congo"
                },
                "TimeZone": {
                    "Code": "WAT",
                    "Name": "Africa/Kinshasa",
                    "GmtOffset": 1.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": -4.31642,
                    "Longitude": 15.29834,
                    "Elevation": {
                        "Metric": {
                            "Value": 180.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 590.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T10:11:00+01:00",
                "EpochTime": 1770023460,
                "WeatherText": "Небольшая облачность",
                "WeatherIcon": 3,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 28.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 84.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/cd/kinshasa/113487/current-weather/113487",
                "Link": "http://www.accuweather.com/ru/cd/kinshasa/113487/current-weather/113487"
            },
            {
                "Key": "60449",
                "LocalizedName": "Сантьяго",
                "EnglishName": "Santiago",
                "Country": {
                    "ID": "CL",
                    "LocalizedName": "Чили",
                    "EnglishName": "Chile"
                },
                "TimeZone": {
                    "Code": "CLST",
                    "Name": "America/Santiago",
                    "GmtOffset": -3.0,
                    "IsDaylightSaving": true,
                    "NextOffsetChange": "2026-04-05T03:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": -33.44643,
                    "Longitude": -70.65901,
                    "Elevation": {
                        "Metric": {
                            "Value": 522.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 1712.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T06:10:00-03:00",
                "EpochTime": 1770023400,
                "WeatherText": "Преимущественно ясно",
                "WeatherIcon": 34,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 15.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 61.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/cl/santiago/60449/current-weather/60449",
                "Link": "http://www.accuweather.com/ru/cl/santiago/60449/current-weather/60449"
            },
            {
                "Key": "101924",
                "LocalizedName": "Пекин",
                "EnglishName": "Beijing",
                "Country": {
                    "ID": "CN",
                    "LocalizedName": "Китай",
                    "EnglishName": "China"
                },
                "TimeZone": {
                    "Code": "CST",
                    "Name": "Asia/Shanghai",
                    "GmtOffset": 8.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 39.9173,
                    "Longitude": 116.40707,
                    "Elevation": {
                        "Metric": {
                            "Value": 62.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 203.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T16:48:00+08:00",
                "EpochTime": 1770022080,
                "WeatherText": "Солнечно",
                "WeatherIcon": 1,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "LocalSource": {
                    "Id": 7,
                    "Name": "Huafeng",
                    "WeatherCode": "00"
                },
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 6.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 43.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/cn/beijing/101924/current-weather/101924",
                "Link": "http://www.accuweather.com/ru/cn/beijing/101924/current-weather/101924"
            },
            {
                "Key": "107487",
                "LocalizedName": "Богота",
                "EnglishName": "Bogota",
                "Country": {
                    "ID": "CO",
                    "LocalizedName": "Колумбия",
                    "EnglishName": "Colombia"
                },
                "TimeZone": {
                    "Code": "COT",
                    "Name": "America/Bogota",
                    "GmtOffset": -5.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 4.62836,
                    "Longitude": -74.07677,
                    "Elevation": {
                        "Metric": {
                            "Value": 2562.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 8406.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T04:10:00-05:00",
                "EpochTime": 1770023400,
                "WeatherText": "Облачно",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 11.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 53.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/co/bogota/107487/current-weather/107487",
                "Link": "http://www.accuweather.com/ru/co/bogota/107487/current-weather/107487"
            },
            {
                "Key": "178087",
                "LocalizedName": "Берлин",
                "EnglishName": "Berlin",
                "Country": {
                    "ID": "DE",
                    "LocalizedName": "Германия",
                    "EnglishName": "Germany"
                },
                "TimeZone": {
                    "Code": "CET",
                    "Name": "Europe/Berlin",
                    "GmtOffset": 1.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-29T01:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 52.51767,
                    "Longitude": 13.40554,
                    "Elevation": {
                        "Metric": {
                            "Value": 35.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 114.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T10:07:00+01:00",
                "EpochTime": 1770023220,
                "WeatherText": "Преимущественно ясно",
                "WeatherIcon": 2,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": -8.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 18.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/de/berlin/10178/current-weather/178087",
                "Link": "http://www.accuweather.com/ru/de/berlin/10178/current-weather/178087"
            },
            {
                "Key": "127164",
                "LocalizedName": "Каир",
                "EnglishName": "Cairo",
                "Country": {
                    "ID": "EG",
                    "LocalizedName": "Египет",
                    "EnglishName": "Egypt"
                },
                "TimeZone": {
                    "Code": "EET",
                    "Name": "Africa/Cairo",
                    "GmtOffset": 2.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-04-23T22:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 30.08374,
                    "Longitude": 31.25536,
                    "Elevation": {
                        "Metric": {
                            "Value": 20.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 65.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T11:11:00+02:00",
                "EpochTime": 1770023460,
                "WeatherText": "Солнечно, дымка",
                "WeatherIcon": 5,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 21.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 70.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/eg/cairo/127164/current-weather/127164",
                "Link": "http://www.accuweather.com/ru/eg/cairo/127164/current-weather/127164"
            },
            {
                "Key": "308526",
                "LocalizedName": "Мадрид",
                "EnglishName": "Madrid",
                "Country": {
                    "ID": "ES",
                    "LocalizedName": "Испания",
                    "EnglishName": "Spain"
                },
                "TimeZone": {
                    "Code": "CET",
                    "Name": "Europe/Madrid",
                    "GmtOffset": 1.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-29T01:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 40.4096,
                    "Longitude": -3.68629,
                    "Elevation": {
                        "Metric": {
                            "Value": 639.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 2095.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T10:07:00+01:00",
                "EpochTime": 1770023220,
                "WeatherText": "Небольшой дождь",
                "WeatherIcon": 12,
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 8.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 46.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/es/madrid/308526/current-weather/308526",
                "Link": "http://www.accuweather.com/ru/es/madrid/308526/current-weather/308526"
            },
            {
                "Key": "328328",
                "LocalizedName": "Лондон",
                "EnglishName": "London",
                "Country": {
                    "ID": "GB",
                    "LocalizedName": "Великобритания",
                    "EnglishName": "United Kingdom"
                },
                "TimeZone": {
                    "Code": "GMT",
                    "Name": "Europe/London",
                    "GmtOffset": 0.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-29T01:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 51.51429,
                    "Longitude": -0.10687,
                    "Elevation": {
                        "Metric": {
                            "Value": 18.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 59.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T09:07:00+00:00",
                "EpochTime": 1770023220,
                "WeatherText": "Облачно",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 7.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 46.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/gb/london/ec4a-2/current-weather/328328",
                "Link": "http://www.accuweather.com/ru/gb/london/ec4a-2/current-weather/328328"
            },
            {
                "Key": "182536",
                "LocalizedName": "Афины",
                "EnglishName": "Athens",
                "Country": {
                    "ID": "GR",
                    "LocalizedName": "Греция",
                    "EnglishName": "Greece"
                },
                "TimeZone": {
                    "Code": "EET",
                    "Name": "Europe/Athens",
                    "GmtOffset": 2.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-29T01:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 37.98413,
                    "Longitude": 23.72792,
                    "Elevation": {
                        "Metric": {
                            "Value": 126.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 413.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T11:07:00+02:00",
                "EpochTime": 1770023220,
                "WeatherText": "Преимущественно ясно",
                "WeatherIcon": 2,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 13.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 57.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/gr/athens/182536/current-weather/182536",
                "Link": "http://www.accuweather.com/ru/gr/athens/182536/current-weather/182536"
            },
            {
                "Key": "1123655",
                "LocalizedName": "Гонконг",
                "EnglishName": "Hong Kong",
                "Country": {
                    "ID": "HK",
                    "LocalizedName": "Гонконг",
                    "EnglishName": "Hong Kong"
                },
                "TimeZone": {
                    "Code": "CST",
                    "Name": "Asia/Hong_Kong",
                    "GmtOffset": 8.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 22.36851,
                    "Longitude": 114.17402,
                    "Elevation": {
                        "Metric": {
                            "Value": 35.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 114.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T17:03:00+08:00",
                "EpochTime": 1770022980,
                "WeatherText": "Солнечно",
                "WeatherIcon": 1,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "LocalSource": {
                    "Id": 7,
                    "Name": "Huafeng",
                    "WeatherCode": "00"
                },
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 19.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 67.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/hk/hong-kong/1123655/current-weather/1123655",
                "Link": "http://www.accuweather.com/ru/hk/hong-kong/1123655/current-weather/1123655"
            },
            {
                "Key": "208971",
                "LocalizedName": "Джакарта",
                "EnglishName": "Jakarta",
                "Country": {
                    "ID": "ID",
                    "LocalizedName": "Индонезия",
                    "EnglishName": "Indonesia"
                },
                "TimeZone": {
                    "Code": "WIT",
                    "Name": "Asia/Jakarta",
                    "GmtOffset": 7.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": -6.17537,
                    "Longitude": 106.8272,
                    "Elevation": {
                        "Metric": {
                            "Value": 11.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 35.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T16:10:00+07:00",
                "EpochTime": 1770023400,
                "WeatherText": "Преимущественно облачно",
                "WeatherIcon": 6,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 27.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 82.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/id/jakarta/208971/current-weather/208971",
                "Link": "http://www.accuweather.com/ru/id/jakarta/208971/current-weather/208971"
            },
            {
                "Key": "207375",
                "LocalizedName": "Багдад",
                "EnglishName": "Baghdad",
                "Country": {
                    "ID": "IQ",
                    "LocalizedName": "Ирак",
                    "EnglishName": "Iraq"
                },
                "TimeZone": {
                    "Code": "AST",
                    "Name": "Asia/Baghdad",
                    "GmtOffset": 3.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 33.32815,
                    "Longitude": 44.38603,
                    "Elevation": {
                        "Metric": {
                            "Value": 35.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 114.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T12:07:00+03:00",
                "EpochTime": 1770023220,
                "WeatherText": "Переменная облачность",
                "WeatherIcon": 4,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 22.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 72.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/iq/baghdad/207375/current-weather/207375",
                "Link": "http://www.accuweather.com/ru/iq/baghdad/207375/current-weather/207375"
            },
            {
                "Key": "226396",
                "LocalizedName": "Токио",
                "EnglishName": "Tokyo",
                "Country": {
                    "ID": "JP",
                    "LocalizedName": "Япония",
                    "EnglishName": "Japan"
                },
                "TimeZone": {
                    "Code": "JST",
                    "Name": "Asia/Tokyo",
                    "GmtOffset": 9.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 35.68301,
                    "Longitude": 139.809,
                    "Elevation": {
                        "Metric": {
                            "Value": 1.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 3.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T18:07:00+09:00",
                "EpochTime": 1770023220,
                "WeatherText": "Преимущественно облачно",
                "WeatherIcon": 38,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 9.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 49.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/jp/tokyo/226396/current-weather/226396",
                "Link": "http://www.accuweather.com/ru/jp/tokyo/226396/current-weather/226396"
            },
            {
                "Key": "226081",
                "LocalizedName": "Сеул",
                "EnglishName": "Seoul",
                "Country": {
                    "ID": "KR",
                    "LocalizedName": "Южная Корея",
                    "EnglishName": "South Korea"
                },
                "TimeZone": {
                    "Code": "KST",
                    "Name": "Asia/Seoul",
                    "GmtOffset": 9.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 37.53703,
                    "Longitude": 126.97008,
                    "Elevation": {
                        "Metric": {
                            "Value": 19.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 62.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T18:07:00+09:00",
                "EpochTime": 1770023220,
                "WeatherText": "Ясно",
                "WeatherIcon": 33,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": -0.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 31.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/kr/seoul/226081/current-weather/226081",
                "Link": "http://www.accuweather.com/ru/kr/seoul/226081/current-weather/226081"
            },
            {
                "Key": "242560",
                "LocalizedName": "Мехико",
                "EnglishName": "Mexico City",
                "Country": {
                    "ID": "MX",
                    "LocalizedName": "Мексика",
                    "EnglishName": "Mexico"
                },
                "TimeZone": {
                    "Code": "CST",
                    "Name": "America/Mexico_City",
                    "GmtOffset": -6.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 19.4334,
                    "Longitude": -99.13318,
                    "Elevation": {
                        "Metric": {
                            "Value": 2242.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 7357.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T03:10:00-06:00",
                "EpochTime": 1770023400,
                "WeatherText": "Облачно с прояснениями",
                "WeatherIcon": 35,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 8.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 48.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/mx/mexico-city/242560/current-weather/242560",
                "Link": "http://www.accuweather.com/ru/mx/mexico-city/242560/current-weather/242560"
            },
            {
                "Key": "264120",
                "LocalizedName": "Лима",
                "EnglishName": "Lima",
                "Country": {
                    "ID": "PE",
                    "LocalizedName": "Перу",
                    "EnglishName": "Peru"
                },
                "TimeZone": {
                    "Code": "PET",
                    "Name": "America/Lima",
                    "GmtOffset": -5.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": -12.08236,
                    "Longitude": -77.04538,
                    "Elevation": {
                        "Metric": {
                            "Value": 105.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 344.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T04:10:00-05:00",
                "EpochTime": 1770023400,
                "WeatherText": "Преимущественно облачно",
                "WeatherIcon": 38,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 21.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 70.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/pe/lima/264120/current-weather/264120",
                "Link": "http://www.accuweather.com/ru/pe/lima/264120/current-weather/264120"
            },
            {
                "Key": "294021",
                "LocalizedName": "Москва",
                "EnglishName": "Moscow",
                "Country": {
                    "ID": "RU",
                    "LocalizedName": "Россия",
                    "EnglishName": "Russia"
                },
                "TimeZone": {
                    "Code": "MSK",
                    "Name": "Europe/Moscow",
                    "GmtOffset": 3.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 55.75162,
                    "Longitude": 37.61871,
                    "Elevation": {
                        "Metric": {
                            "Value": 155.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 508.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T12:07:00+03:00",
                "EpochTime": 1770023220,
                "WeatherText": "Небольшой снег",
                "WeatherIcon": 21,
                "HasPrecipitation": true,
                "PrecipitationType": "Snow",
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": -18.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": -2.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/ru/moscow/294021/current-weather/294021",
                "Link": "http://www.accuweather.com/ru/ru/moscow/294021/current-weather/294021"
            },
            {
                "Key": "297030",
                "LocalizedName": "Эр-рияд",
                "EnglishName": "Riyadh",
                "Country": {
                    "ID": "SA",
                    "LocalizedName": "Саудовская Аравия",
                    "EnglishName": "Saudi Arabia"
                },
                "TimeZone": {
                    "Code": "AST",
                    "Name": "Asia/Riyadh",
                    "GmtOffset": 3.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 24.64039,
                    "Longitude": 46.7533,
                    "Elevation": {
                        "Metric": {
                            "Value": 598.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 1961.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T12:07:00+03:00",
                "EpochTime": 1770023220,
                "WeatherText": "Солнечно",
                "WeatherIcon": 1,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 27.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 81.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/sa/riyadh/297030/current-weather/297030",
                "Link": "http://www.accuweather.com/ru/sa/riyadh/297030/current-weather/297030"
            },
            {
                "Key": "300597",
                "LocalizedName": "Сингапур",
                "EnglishName": "Singapore",
                "Country": {
                    "ID": "SG",
                    "LocalizedName": "Сингапур",
                    "EnglishName": "Singapore"
                },
                "TimeZone": {
                    "Code": "SGT",
                    "Name": "Asia/Singapore",
                    "GmtOffset": 8.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 1.31056,
                    "Longitude": 103.84319,
                    "Elevation": {
                        "Metric": {
                            "Value": 13.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 42.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T17:10:00+08:00",
                "EpochTime": 1770023400,
                "WeatherText": "Переменная облачность",
                "WeatherIcon": 4,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 31.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 88.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/sg/singapore/300597/current-weather/300597",
                "Link": "http://www.accuweather.com/ru/sg/singapore/300597/current-weather/300597"
            },
            {
                "Key": "318849",
                "LocalizedName": "Бангкок",
                "EnglishName": "Bangkok",
                "Country": {
                    "ID": "TH",
                    "LocalizedName": "Таиланд",
                    "EnglishName": "Thailand"
                },
                "TimeZone": {
                    "Code": "ICT",
                    "Name": "Asia/Bangkok",
                    "GmtOffset": 7.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 13.73077,
                    "Longitude": 100.52101,
                    "Elevation": {
                        "Metric": {
                            "Value": 2.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 6.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T16:07:00+07:00",
                "EpochTime": 1770023220,
                "WeatherText": "Солнечно",
                "WeatherIcon": 1,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 32.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 90.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/th/bangkok/318849/current-weather/318849",
                "Link": "http://www.accuweather.com/ru/th/bangkok/318849/current-weather/318849"
            },
            {
                "Key": "353412",
                "LocalizedName": "Ханой",
                "EnglishName": "Hanoi",
                "Country": {
                    "ID": "VN",
                    "LocalizedName": "Вьетнам",
                    "EnglishName": "Vietnam"
                },
                "TimeZone": {
                    "Code": "ICT",
                    "Name": "Asia/Ho_Chi_Minh",
                    "GmtOffset": 7.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 20.99896,
                    "Longitude": 105.70004,
                    "Elevation": {
                        "Metric": {
                            "Value": 19.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 62.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T16:07:00+07:00",
                "EpochTime": 1770023220,
                "WeatherText": "Преимущественно облачно",
                "WeatherIcon": 6,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 20.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 68.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/vn/hanoi/353412/current-weather/353412",
                "Link": "http://www.accuweather.com/ru/vn/hanoi/353412/current-weather/353412"
            },
            {
                "Key": "22889",
                "LocalizedName": "Сидней",
                "EnglishName": "Sydney",
                "Country": {
                    "ID": "AU",
                    "LocalizedName": "Австралия",
                    "EnglishName": "Australia"
                },
                "TimeZone": {
                    "Code": "AEDT",
                    "Name": "Australia/Sydney",
                    "GmtOffset": 11.0,
                    "IsDaylightSaving": true,
                    "NextOffsetChange": "2026-04-04T16:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": -33.8705,
                    "Longitude": 151.20885,
                    "Elevation": {
                        "Metric": {
                            "Value": 1.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 3.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T20:10:00+11:00",
                "EpochTime": 1770023400,
                "WeatherText": "Преимущественно облачно",
                "WeatherIcon": 38,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 19.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 67.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/au/sydney/22889/current-weather/22889",
                "Link": "http://www.accuweather.com/ru/au/sydney/22889/current-weather/22889"
            },
            {
                "Key": "106577",
                "LocalizedName": "Шанхай",
                "EnglishName": "Shanghai",
                "Country": {
                    "ID": "CN",
                    "LocalizedName": "Китай",
                    "EnglishName": "China"
                },
                "TimeZone": {
                    "Code": "CST",
                    "Name": "Asia/Shanghai",
                    "GmtOffset": 8.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 31.23151,
                    "Longitude": 121.44417,
                    "Elevation": {
                        "Metric": {
                            "Value": 5.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 16.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T16:48:00+08:00",
                "EpochTime": 1770022080,
                "WeatherText": "Солнечно",
                "WeatherIcon": 1,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "LocalSource": {
                    "Id": 7,
                    "Name": "Huafeng",
                    "WeatherCode": "00"
                },
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 8.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 48.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/cn/shanghai/106577/current-weather/106577",
                "Link": "http://www.accuweather.com/ru/cn/shanghai/106577/current-weather/106577"
            },
            {
                "Key": "202396",
                "LocalizedName": "Дели",
                "EnglishName": "Delhi",
                "Country": {
                    "ID": "IN",
                    "LocalizedName": "Индия",
                    "EnglishName": "India"
                },
                "TimeZone": {
                    "Code": "IST",
                    "Name": "Asia/Kolkata",
                    "GmtOffset": 5.5,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 28.64336,
                    "Longitude": 77.11756,
                    "Elevation": {
                        "Metric": {
                            "Value": 215.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 705.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T14:37:00+05:30",
                "EpochTime": 1770023220,
                "WeatherText": "Солнечно, дымка",
                "WeatherIcon": 5,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 20.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 69.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/in/delhi/202396/current-weather/202396",
                "Link": "http://www.accuweather.com/ru/in/delhi/202396/current-weather/202396"
            },
            {
                "Key": "204108",
                "LocalizedName": "Бенгалуру",
                "EnglishName": "Bengaluru",
                "Country": {
                    "ID": "IN",
                    "LocalizedName": "Индия",
                    "EnglishName": "India"
                },
                "TimeZone": {
                    "Code": "IST",
                    "Name": "Asia/Kolkata",
                    "GmtOffset": 5.5,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 12.99083,
                    "Longitude": 77.57857,
                    "Elevation": {
                        "Metric": {
                            "Value": 913.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 2997.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T14:37:00+05:30",
                "EpochTime": 1770023220,
                "WeatherText": "Солнечно",
                "WeatherIcon": 1,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 28.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 83.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/in/bengaluru/204108/current-weather/204108",
                "Link": "http://www.accuweather.com/ru/in/bengaluru/204108/current-weather/204108"
            },
            {
                "Key": "204842",
                "LocalizedName": "Мумбаи",
                "EnglishName": "Mumbai",
                "Country": {
                    "ID": "IN",
                    "LocalizedName": "Индия",
                    "EnglishName": "India"
                },
                "TimeZone": {
                    "Code": "IST",
                    "Name": "Asia/Kolkata",
                    "GmtOffset": 5.5,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 19.14308,
                    "Longitude": 72.87849,
                    "Elevation": {
                        "Metric": {
                            "Value": 47.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 154.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T14:37:00+05:30",
                "EpochTime": 1770023220,
                "WeatherText": "Солнечно, дымка",
                "WeatherIcon": 5,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 34.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 94.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/in/mumbai/204842/current-weather/204842",
                "Link": "http://www.accuweather.com/ru/in/mumbai/204842/current-weather/204842"
            },
            {
                "Key": "206690",
                "LocalizedName": "Калькутта",
                "EnglishName": "Kolkata",
                "Country": {
                    "ID": "IN",
                    "LocalizedName": "Индия",
                    "EnglishName": "India"
                },
                "TimeZone": {
                    "Code": "IST",
                    "Name": "Asia/Kolkata",
                    "GmtOffset": 5.5,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 22.52648,
                    "Longitude": 88.35336,
                    "Elevation": {
                        "Metric": {
                            "Value": 16.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 52.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T14:37:00+05:30",
                "EpochTime": 1770023220,
                "WeatherText": "Солнечно, дымка",
                "WeatherIcon": 5,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 27.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 81.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/in/kolkata/206690/current-weather/206690",
                "Link": "http://www.accuweather.com/ru/in/kolkata/206690/current-weather/206690"
            },
            {
                "Key": "261158",
                "LocalizedName": "Карачи",
                "EnglishName": "Karachi",
                "Country": {
                    "ID": "PK",
                    "LocalizedName": "Пакистан",
                    "EnglishName": "Pakistan"
                },
                "TimeZone": {
                    "Code": "PKT",
                    "Name": "Asia/Karachi",
                    "GmtOffset": 5.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 24.88978,
                    "Longitude": 67.02851,
                    "Elevation": {
                        "Metric": {
                            "Value": 11.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 36.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T14:07:00+05:00",
                "EpochTime": 1770023220,
                "WeatherText": "Солнечно",
                "WeatherIcon": 1,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 27.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 82.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/pk/karachi/261158/current-weather/261158",
                "Link": "http://www.accuweather.com/ru/pk/karachi/261158/current-weather/261158"
            },
            {
                "Key": "318251",
                "LocalizedName": "Стамбул",
                "EnglishName": "Istanbul",
                "Country": {
                    "ID": "TR",
                    "LocalizedName": "Турция",
                    "EnglishName": "Türkiye"
                },
                "TimeZone": {
                    "Code": "TRT",
                    "Name": "Europe/Istanbul",
                    "GmtOffset": 3.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 41.01105,
                    "Longitude": 28.9578,
                    "Elevation": {
                        "Metric": {
                            "Value": 48.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 157.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T12:07:00+03:00",
                "EpochTime": 1770023220,
                "WeatherText": "Преимущественно облачно",
                "WeatherIcon": 6,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 6.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 44.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/tr/istanbul/318251/current-weather/318251",
                "Link": "http://www.accuweather.com/ru/tr/istanbul/318251/current-weather/318251"
            },
            {
                "Key": "347625",
                "LocalizedName": "Лос-анджелес",
                "EnglishName": "Los Angeles",
                "Country": {
                    "ID": "US",
                    "LocalizedName": "США",
                    "EnglishName": "United States"
                },
                "TimeZone": {
                    "Code": "PST",
                    "Name": "America/Los_Angeles",
                    "GmtOffset": -8.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-08T10:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 34.05224,
                    "Longitude": -118.2437,
                    "Elevation": {
                        "Metric": {
                            "Value": 121.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 396.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T00:58:00-08:00",
                "EpochTime": 1770022680,
                "WeatherText": "Преимущественно ясно",
                "WeatherIcon": 34,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 14.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 58.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/us/los-angeles-ca/90012/current-weather/347625",
                "Link": "http://www.accuweather.com/ru/us/los-angeles-ca/90012/current-weather/347625"
            },
            {
                "Key": "349727",
                "LocalizedName": "Нью-йорк",
                "EnglishName": "New York",
                "Country": {
                    "ID": "US",
                    "LocalizedName": "США",
                    "EnglishName": "United States"
                },
                "TimeZone": {
                    "Code": "EST",
                    "Name": "America/New_York",
                    "GmtOffset": -5.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-08T07:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 40.779,
                    "Longitude": -73.969,
                    "Elevation": {
                        "Metric": {
                            "Value": 8.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 26.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T04:08:00-05:00",
                "EpochTime": 1770023280,
                "WeatherText": "Ясно",
                "WeatherIcon": 33,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": -8.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 16.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/us/new-york-ny/10021/current-weather/349727",
                "Link": "http://www.accuweather.com/ru/us/new-york-ny/10021/current-weather/349727"
            },
            {
                "Key": "4361",
                "LocalizedName": "Кабул",
                "EnglishName": "Kabul",
                "Country": {
                    "ID": "AF",
                    "LocalizedName": "Афганистан",
                    "EnglishName": "Afghanistan"
                },
                "TimeZone": {
                    "Code": "AFT",
                    "Name": "Asia/Kabul",
                    "GmtOffset": 4.5,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 34.53091,
                    "Longitude": 69.13675,
                    "Elevation": {
                        "Metric": {
                            "Value": 1838.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 6031.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T13:37:00+04:30",
                "EpochTime": 1770023220,
                "WeatherText": "Переменная облачность",
                "WeatherIcon": 4,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 1.3,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 34.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/af/kabul/4361/current-weather/4361",
                "Link": "http://www.accuweather.com/ru/af/kabul/4361/current-weather/4361"
            },
            {
                "Key": "7894",
                "LocalizedName": "Буэнос-айрес",
                "EnglishName": "Buenos Aires",
                "Country": {
                    "ID": "AR",
                    "LocalizedName": "Аргентина",
                    "EnglishName": "Argentina"
                },
                "TimeZone": {
                    "Code": "ART",
                    "Name": "America/Argentina/Buenos_Aires",
                    "GmtOffset": -3.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": -34.60757,
                    "Longitude": -58.43709,
                    "Elevation": {
                        "Metric": {
                            "Value": 19.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 62.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T06:10:00-03:00",
                "EpochTime": 1770023400,
                "WeatherText": "Ясно",
                "WeatherIcon": 33,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 23.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 75.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/ar/buenos-aires/7894/current-weather/7894",
                "Link": "http://www.accuweather.com/ru/ar/buenos-aires/7894/current-weather/7894"
            },
            {
                "Key": "122438",
                "LocalizedName": "Гавана",
                "EnglishName": "Havana",
                "Country": {
                    "ID": "CU",
                    "LocalizedName": "Куба",
                    "EnglishName": "Cuba"
                },
                "TimeZone": {
                    "Code": "CST",
                    "Name": "America/Havana",
                    "GmtOffset": -5.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-08T05:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 23.1168,
                    "Longitude": -82.38859,
                    "Elevation": {
                        "Metric": {
                            "Value": 35.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 114.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T04:10:00-05:00",
                "EpochTime": 1770023400,
                "WeatherText": "Преимущественно облачно",
                "WeatherIcon": 38,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 14.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 58.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/cu/havana/122438/current-weather/122438",
                "Link": "http://www.accuweather.com/ru/cu/havana/122438/current-weather/122438"
            },
            {
                "Key": "623",
                "LocalizedName": "Париж",
                "EnglishName": "Paris",
                "Country": {
                    "ID": "FR",
                    "LocalizedName": "Франция",
                    "EnglishName": "France"
                },
                "TimeZone": {
                    "Code": "CET",
                    "Name": "Europe/Paris",
                    "GmtOffset": 1.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-29T01:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 48.857,
                    "Longitude": 2.351,
                    "Elevation": {
                        "Metric": {
                            "Value": 35.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 114.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T10:07:00+01:00",
                "EpochTime": 1770023220,
                "WeatherText": "Преимущественно облачно",
                "WeatherIcon": 6,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 3.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 38.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/fr/paris/623/current-weather/623",
                "Link": "http://www.accuweather.com/ru/fr/paris/623/current-weather/623"
            },
            {
                "Key": "210841",
                "LocalizedName": "Тегеран",
                "EnglishName": "Tehran",
                "Country": {
                    "ID": "IR",
                    "LocalizedName": "Иран",
                    "EnglishName": "Iran"
                },
                "TimeZone": {
                    "Code": "IRST",
                    "Name": "Asia/Tehran",
                    "GmtOffset": 3.5,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 35.70131,
                    "Longitude": 51.40739,
                    "Elevation": {
                        "Metric": {
                            "Value": 1227.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 4027.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T12:28:00+03:30",
                "EpochTime": 1770022680,
                "WeatherText": "Переменная облачность",
                "WeatherIcon": 4,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 15.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 59.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/ir/tehran/210841/current-weather/210841",
                "Link": "http://www.accuweather.com/ru/ir/tehran/210841/current-weather/210841"
            },
            {
                "Key": "264885",
                "LocalizedName": "Манила",
                "EnglishName": "Manila",
                "Country": {
                    "ID": "PH",
                    "LocalizedName": "Филиппины",
                    "EnglishName": "Philippines"
                },
                "TimeZone": {
                    "Code": "PHT",
                    "Name": "Asia/Manila",
                    "GmtOffset": 8.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 14.58992,
                    "Longitude": 120.98154,
                    "Elevation": {
                        "Metric": {
                            "Value": 2.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 8.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T17:10:00+08:00",
                "EpochTime": 1770023400,
                "WeatherText": "Облачно",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 29.3,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 85.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/ph/manila/264885/current-weather/264885",
                "Link": "http://www.accuweather.com/ru/ph/manila/264885/current-weather/264885"
            },
            {
                "Key": "298198",
                "LocalizedName": "Белград",
                "EnglishName": "Belgrade",
                "Country": {
                    "ID": "RS",
                    "LocalizedName": "Сербия",
                    "EnglishName": "Serbia"
                },
                "TimeZone": {
                    "Code": "CET",
                    "Name": "Europe/Belgrade",
                    "GmtOffset": 1.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-29T01:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 44.81653,
                    "Longitude": 20.4637,
                    "Elevation": {
                        "Metric": {
                            "Value": 99.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 324.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T10:07:00+01:00",
                "EpochTime": 1770023220,
                "WeatherText": "Преимущественно облачно",
                "WeatherIcon": 6,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": -2.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 28.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/rs/belgrade/298198/current-weather/298198",
                "Link": "http://www.accuweather.com/ru/rs/belgrade/298198/current-weather/298198"
            },
            {
                "Key": "297442",
                "LocalizedName": "Дакар",
                "EnglishName": "Dakar",
                "Country": {
                    "ID": "SN",
                    "LocalizedName": "Сенегал",
                    "EnglishName": "Senegal"
                },
                "TimeZone": {
                    "Code": "GMT",
                    "Name": "Africa/Dakar",
                    "GmtOffset": 0.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 14.68667,
                    "Longitude": -17.45191,
                    "Elevation": {
                        "Metric": {
                            "Value": 11.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 36.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T09:11:00+00:00",
                "EpochTime": 1770023460,
                "WeatherText": "Солнечно",
                "WeatherIcon": 1,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 18.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 66.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/sn/dakar/297442/current-weather/297442",
                "Link": "http://www.accuweather.com/ru/sn/dakar/297442/current-weather/297442"
            },
            {
                "Key": "315078",
                "LocalizedName": "Тайбэй",
                "EnglishName": "Taipei City",
                "Country": {
                    "ID": "TW",
                    "LocalizedName": "Тайвань",
                    "EnglishName": "Taiwan"
                },
                "TimeZone": {
                    "Code": "CST",
                    "Name": "Asia/Taipei",
                    "GmtOffset": 8.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 25.04838,
                    "Longitude": 121.51441,
                    "Elevation": {
                        "Metric": {
                            "Value": 8.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 26.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T16:58:00+08:00",
                "EpochTime": 1770022680,
                "WeatherText": "Сплошная облачность",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "LocalSource": {
                    "Id": 7,
                    "Name": "Huafeng",
                    "WeatherCode": "02"
                },
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 12.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 55.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/tw/taipei-city/315078/current-weather/315078",
                "Link": "http://www.accuweather.com/ru/tw/taipei-city/315078/current-weather/315078"
            },
            {
                "Key": "306633",
                "LocalizedName": "Кейптаун",
                "EnglishName": "Cape Town",
                "Country": {
                    "ID": "ZA",
                    "LocalizedName": "ЮАР",
                    "EnglishName": "South Africa"
                },
                "TimeZone": {
                    "Code": "SAST",
                    "Name": "Africa/Johannesburg",
                    "GmtOffset": 2.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": -33.97901,
                    "Longitude": 18.4823,
                    "Elevation": {
                        "Metric": {
                            "Value": 15.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 49.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T11:11:00+02:00",
                "EpochTime": 1770023460,
                "WeatherText": "Облачно",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 20.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 69.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/za/cape-town/306633/current-weather/306633",
                "Link": "http://www.accuweather.com/ru/za/cape-town/306633/current-weather/306633"
            },
            {
                "Key": "45881",
                "LocalizedName": "Сан-паулу",
                "EnglishName": "São Paulo",
                "Country": {
                    "ID": "BR",
                    "LocalizedName": "Бразилия",
                    "EnglishName": "Brazil"
                },
                "TimeZone": {
                    "Code": "BRT",
                    "Name": "America/Sao_Paulo",
                    "GmtOffset": -3.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": -23.56739,
                    "Longitude": -46.57038,
                    "Elevation": {
                        "Metric": {
                            "Value": 662.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 2171.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T06:10:00-03:00",
                "EpochTime": 1770023400,
                "WeatherText": "Облачно",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 20.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 70.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/br/sao-paulo/45881/current-weather/45881",
                "Link": "http://www.accuweather.com/ru/br/sao-paulo/45881/current-weather/45881"
            },
            {
                "Key": "55488",
                "LocalizedName": "Торонто",
                "EnglishName": "Toronto",
                "Country": {
                    "ID": "CA",
                    "LocalizedName": "Канада",
                    "EnglishName": "Canada"
                },
                "TimeZone": {
                    "Code": "EST",
                    "Name": "America/Toronto",
                    "GmtOffset": -5.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-08T07:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 43.64864,
                    "Longitude": -79.38027,
                    "Elevation": {
                        "Metric": {
                            "Value": 81.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 265.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T04:08:00-05:00",
                "EpochTime": 1770023280,
                "WeatherText": "Ясно",
                "WeatherIcon": 33,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": -10.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 14.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/ca/toronto/m5h/current-weather/55488",
                "Link": "http://www.accuweather.com/ru/ca/toronto/m5h/current-weather/55488"
            },
            {
                "Key": "225007",
                "LocalizedName": "Осака",
                "EnglishName": "Osaka-shi",
                "Country": {
                    "ID": "JP",
                    "LocalizedName": "Япония",
                    "EnglishName": "Japan"
                },
                "TimeZone": {
                    "Code": "JST",
                    "Name": "Asia/Tokyo",
                    "GmtOffset": 9.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 34.6667,
                    "Longitude": 135.5,
                    "Elevation": {
                        "Metric": {
                            "Value": 4.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 13.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T18:07:00+09:00",
                "EpochTime": 1770023220,
                "WeatherText": "Облачно с прояснениями",
                "WeatherIcon": 35,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 6.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 43.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/jp/osaka-shi/225007/current-weather/225007",
                "Link": "http://www.accuweather.com/ru/jp/osaka-shi/225007/current-weather/225007"
            },
            {
                "Key": "213225",
                "LocalizedName": "Иерусалим",
                "EnglishName": "Jerusalem",
                "Country": {
                    "ID": "IL",
                    "LocalizedName": "Израиль",
                    "EnglishName": "Israel"
                },
                "TimeZone": {
                    "Code": "IST",
                    "Name": "Asia/Jerusalem",
                    "GmtOffset": 2.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-27T00:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 31.7736,
                    "Longitude": 35.225,
                    "Elevation": {
                        "Metric": {
                            "Value": 804.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 2637.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T11:07:00+02:00",
                "EpochTime": 1770023220,
                "WeatherText": "Солнечно",
                "WeatherIcon": 1,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 18.0,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 64.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/il/jerusalem/213225/current-weather/213225",
                "Link": "http://www.accuweather.com/ru/il/jerusalem/213225/current-weather/213225"
            },
            {
                "Key": "249758",
                "LocalizedName": "Амстердам",
                "EnglishName": "Amsterdam",
                "Country": {
                    "ID": "NL",
                    "LocalizedName": "Нидерланды",
                    "EnglishName": "Netherlands"
                },
                "TimeZone": {
                    "Code": "CET",
                    "Name": "Europe/Amsterdam",
                    "GmtOffset": 1.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-29T01:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 52.37249,
                    "Longitude": 4.90023,
                    "Elevation": {
                        "Metric": {
                            "Value": -1.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": -3.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T10:07:00+01:00",
                "EpochTime": 1770023220,
                "WeatherText": "Небольшая облачность",
                "WeatherIcon": 3,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 2.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 36.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/nl/amsterdam/249758/current-weather/249758",
                "Link": "http://www.accuweather.com/ru/nl/amsterdam/249758/current-weather/249758"
            },
            {
                "Key": "314929",
                "LocalizedName": "Стокгольм",
                "EnglishName": "Stockholm",
                "Country": {
                    "ID": "SE",
                    "LocalizedName": "Швеция",
                    "EnglishName": "Sweden"
                },
                "TimeZone": {
                    "Code": "CET",
                    "Name": "Europe/Stockholm",
                    "GmtOffset": 1.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": "2026-03-29T01:00:00Z"
                },
                "GeoPosition": {
                    "Latitude": 59.31434,
                    "Longitude": 18.06856,
                    "Elevation": {
                        "Metric": {
                            "Value": 39.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 127.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T10:07:00+01:00",
                "EpochTime": 1770023220,
                "WeatherText": "Облачно",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": -7.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 19.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/se/stockholm/314929/current-weather/314929",
                "Link": "http://www.accuweather.com/ru/se/stockholm/314929/current-weather/314929"
            },
            {
                "Key": "348211",
                "LocalizedName": "Гонолулу",
                "EnglishName": "Honolulu",
                "Country": {
                    "ID": "US",
                    "LocalizedName": "США",
                    "EnglishName": "United States"
                },
                "TimeZone": {
                    "Code": "HST",
                    "Name": "Pacific/Honolulu",
                    "GmtOffset": -10.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 21.32568,
                    "Longitude": -157.84537,
                    "Elevation": {
                        "Metric": {
                            "Value": 112.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 367.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-01T23:08:00-10:00",
                "EpochTime": 1770023280,
                "WeatherText": "Преимущественно ясно",
                "WeatherIcon": 34,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 21.7,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 71.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/us/honolulu-hi/96817/current-weather/348211",
                "Link": "http://www.accuweather.com/ru/us/honolulu-hi/96817/current-weather/348211"
            },
            {
                "Key": "190390",
                "LocalizedName": "Рейкьявик",
                "EnglishName": "Reykjavik",
                "Country": {
                    "ID": "IS",
                    "LocalizedName": "Исландия",
                    "EnglishName": "Iceland"
                },
                "TimeZone": {
                    "Code": "GMT",
                    "Name": "Atlantic/Reykjavik",
                    "GmtOffset": 0.0,
                    "IsDaylightSaving": false,
                    "NextOffsetChange": null
                },
                "GeoPosition": {
                    "Latitude": 64.13738,
                    "Longitude": -21.90248,
                    "Elevation": {
                        "Metric": {
                            "Value": 36.0,
                            "Unit": "m",
                            "UnitType": 5
                        },
                        "Imperial": {
                            "Value": 118.0,
                            "Unit": "ft",
                            "UnitType": 0
                        }
                    }
                },
                "LocalObservationDateTime": "2026-02-02T09:07:00+00:00",
                "EpochTime": 1770023220,
                "WeatherText": "Облачно",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 6.1,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 43.0,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://www.accuweather.com/ru/is/reykjavik/190390/current-weather/190390",
                "Link": "http://www.accuweather.com/ru/is/reykjavik/190390/current-weather/190390"
            }
        ])
    }, 500);
})

app.get('/_5day', (_, res) => {
    setTimeout(() => {
        res.json({
            "Headline": {
                "EffectiveDate": "2026-02-01T07:00:00-05:00",
                "EffectiveEpochDate": 1769947200,
                "Severity": 6,
                "Text": "Snow flurries early this morning",
                "Category": "snow",
                "EndDate": "2026-02-01T10:00:00-05:00",
                "EndEpochDate": 1769958000,
                "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?lang=en-us",
                "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2026-02-01T07:00:00-05:00",
                    "EpochDate": 1769947200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 14.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 24.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 21,
                        "IconPhrase": "Partly sunny w/ flurries",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 36,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=1&lang=en-us",
                    "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=1&lang=en-us"
                },
                {
                    "Date": "2026-02-02T07:00:00-05:00",
                    "EpochDate": 1770033600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 16.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 32.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 2,
                        "IconPhrase": "Mostly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=2&lang=en-us",
                    "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=2&lang=en-us"
                },
                {
                    "Date": "2026-02-03T07:00:00-05:00",
                    "EpochDate": 1770120000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 22.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 32.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=3&lang=en-us",
                    "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=3&lang=en-us"
                },
                {
                    "Date": "2026-02-04T07:00:00-05:00",
                    "EpochDate": 1770206400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 18.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 32.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 6,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=4&lang=en-us",
                    "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=4&lang=en-us"
                },
                {
                    "Date": "2026-02-05T07:00:00-05:00",
                    "EpochDate": 1770292800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 15.0,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 29.0,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=5&lang=en-us",
                    "Link": "http://www.accuweather.com/en/us/new-york-ny/10021/daily-weather-forecast/349727?day=5&lang=en-us"
                }
            ]
        })
    }, 500)
})

app.listen(3000, () => {
    console.log('Server start!')
})