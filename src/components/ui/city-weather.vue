<script setup lang="ts">
import { _env, icons } from '@/export'
import { type CityType } from '@/model'
import { cn, getBgColorCityWeather } from '@/lib'
import { PropType } from 'vue';
import { Degrees } from './';

defineProps({
    item: {
        type: Object as PropType<CityType>,
        required: true
    },
})
</script>

<template>
    <RouterLink :to="`/5day/${item.Key}`">
        <div :class="cn('flex justify-between flex-1 rounded-md cursor-pointer p-5 pr-6 hover:opacity-90 duration-200 transition-opacity',
            getBgColorCityWeather(item.WeatherIcon))">
            <div class='flex flex-col items-starttext-center'>
                <p class="text-4xl">{{ item.LocalizedName }}</p>
                <p class="text-sm">{{ item.Country.LocalizedName }}</p>
                <Degrees :degree="item.Temperature.Imperial.Value" />
                <p>Часовой пояс: {{ item.TimeZone.Code }}</p>
            </div>
            <img :src=icons[item.WeatherIcon] alt="" class="pb-4" width="80">
        </div>
    </RouterLink>
</template>

<style scoped>
p {
    color: white;
}
</style>