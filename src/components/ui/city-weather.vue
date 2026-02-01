<script setup lang="ts">
import { icons } from '@/export'
import { type CityType } from '@/model'
import { cn, getBgColorCityWeather, toCelsius } from '@/lib'
import { PropType } from 'vue';

defineProps({
    item: {
        type: Object as PropType<CityType>,
        required: true
    },
})
</script>

<template>
    <div :class="cn('hover:opacity-95 duration-200 transition-all flex px-5 flex-col items-start rounded-md cursor-pointer py-5 bg-gray-400 text-center',
        getBgColorCityWeather(item.WeatherIcon))">
        <img :src=icons[item.WeatherIcon] alt="" class="pb-4">
        <p class="text-4xl">{{ item.EnglishName }}</p>
        <p class="text-sm">{{ item.Country.EnglishName }}</p>
        <p class="text-lg">
            <span>{{ toCelsius(item.Temperature.Imperial.Value) }}°{{ item.Temperature.Imperial.Unit }}</span>
            <span class="text-sm"> ~{{ item.Temperature.Imperial.Value }}°{{ item.Temperature.Imperial.Unit }}</span>
        </p>
        <p>
            Часовой пояс:
            {{ item.TimeZone.Code }}
        </p>
    </div>
</template>

<style>
p {
    color: white;
}
</style>