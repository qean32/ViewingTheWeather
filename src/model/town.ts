export type towmType = {
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
    WeatherText: string
}