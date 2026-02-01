export type CityType = {
    Key: string,
    LocalizedName: string,
    EnglishName: string,
    Country: {
        ID: string,
        LocalizedName: string,
        EnglishName: string
    },
    TimeZone: {
        Code: string,
        Name: string,
        GmtOffset: number,
        IsDaylightSaving: boolean,
        NextOffsetChange: any
    },
    GeoPosition: {
        Latitude: number,
        Longitude: number,
        Elevation: {
            Metric: {
                Value: number,
                Unit: string,
                UnitType: number
            },
            Imperial: {
                Value: number,
                Unit: string,
                UnitType: number
            }
        }
    },
    LocalObservationDateTime: string,
    EpochTime: number,
    WeatherText: string,
    WeatherIcon: number,
    HasPrecipitation: boolean,
    PrecipitationType: any,
    IsDayTime: boolean,
    Temperature: {
        Metric: {
            Value: number,
            Unit: string,
            UnitType: number
        },
        Imperial: {
            Value: number,
            Unit: string,
            UnitType: number
        }
    },
    MobileLink: string,
    Link: string
}