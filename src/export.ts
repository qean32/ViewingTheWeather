import { Component } from "vue"
import * as icon from 'lucide-vue-next'

export const _env = {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    CLIENT_HOST: process.env.CLIENT_HOST,
}

export const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export const iconsPack: {
    path: string,
    lucideIcon: Component | null,
    description: string
}[] = [
        { path: '', description: '', lucideIcon: null },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/1.svg', description: 'Солнечно', lucideIcon: icon.Sun },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/2.svg', description: 'Солнечно', lucideIcon: icon.SunDim },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/3.svg', description: 'Солнечно с облаками', lucideIcon: icon.CloudSun },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/4.svg', description: 'Солнечно с облаками', lucideIcon: icon.CloudSun },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/5.svg', description: 'Солнечно', lucideIcon: icon.CloudSun },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/6.svg', description: 'Облачно', lucideIcon: icon.CloudSun },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/7.svg', description: 'Облачно', lucideIcon: icon.Cloud },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/8.svg', description: 'Облачно', lucideIcon: icon.Cloudy },
        { path: '', description: '', lucideIcon: null },
        { path: '', description: '', lucideIcon: null },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/11.svg', description: 'Крайне облачно', lucideIcon: icon.Cloudy },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/12.svg', description: 'Крайне облачно', lucideIcon: icon.CloudRain },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/13.svg', description: 'Осадки', lucideIcon: icon.CloudSunRain },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/14.svg', description: 'Осадки с солнцем', lucideIcon: icon.CloudSunRain },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/15.svg', description: 'Осадки с солнцем', lucideIcon: icon.CloudLightning },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/16.svg', description: 'Гроза', lucideIcon: icon.CloudLightning },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/17.svg', description: 'Гроза с солнцем', lucideIcon: icon.CloudLightning },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/18.svg', description: 'Проливной дождь', lucideIcon: icon.CloudRainWind },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/19.svg', description: 'Снег', lucideIcon: icon.CloudSnow },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/20.svg', description: 'Снег с солнцем', lucideIcon: icon.CloudSnow },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/21.svg', description: 'Снег с солнцем', lucideIcon: icon.CloudSnow },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/22.svg', description: 'Много снега', lucideIcon: icon.CloudSnow },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/23.svg', description: 'Много снега с солнцем', lucideIcon: icon.CloudSnow },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/24.svg', description: 'Град', lucideIcon: icon.Snowflake },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/25.svg', description: 'Снег', lucideIcon: icon.SunSnow },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/26.svg', description: 'Снег с градом', lucideIcon: icon.CloudSnow },
        { path: '', description: '', lucideIcon: null },
        { path: '', description: '', lucideIcon: null },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/29.svg', description: 'Снег', lucideIcon: icon.SunSnow },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/30.svg', description: 'Высокая температура', lucideIcon: icon.ThermometerSun },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/31.svg', description: 'Низкая температура', lucideIcon: icon.ThermometerSnowflake },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/32.svg', description: 'Ветряно', lucideIcon: icon.Moon },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/33.svg', description: 'Чистое нобо', lucideIcon: icon.CloudMoon },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/34.svg', description: 'Облачно', lucideIcon: icon.CloudMoon },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/35.svg', description: 'Облачно', lucideIcon: icon.CloudMoon },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/36.svg', description: 'Облачно', lucideIcon: icon.CloudMoon },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/37.svg', description: 'Чистое небо', lucideIcon: icon.CloudMoon },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/38.svg', description: 'Облачно', lucideIcon: icon.CloudMoon },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/39.svg', description: 'Облачно с осадками', lucideIcon: icon.CloudMoonRain },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/40.svg', description: 'Осадки', lucideIcon: icon.CloudMoonRain },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/41.svg', description: 'Гроза', lucideIcon: icon.CloudLightning },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/42.svg', description: 'Гроза', lucideIcon: icon.CloudLightning },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/43.svg', description: 'Снег', lucideIcon: icon.CloudSnow },
        { path: 'https://www.accuweather.com/assets/images/weather-icons/v2a/44.svg', description: 'Снег', lucideIcon: icon.CloudSnow },
    ]