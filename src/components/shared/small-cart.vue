<script setup lang="ts">
import { _env, iconsPack } from '@/export'
import { currentWType } from '@/model'
import { cn, getBgColorCityWeather, nowInZone } from '@/lib'
import { Degrees } from '../ui';
import { useIcon } from '@/lib/hook/'

const { item } = defineProps<{
    item: currentWType
}>()
const Icon = useIcon(item.WeatherIcon)
</script>

<template>
    <RouterLink :to="`/5day/${item.Key}`" :class="'w-full'">
        <div :class="cn('container hover:-translate-y-1 transition-transform duration-100',
            getBgColorCityWeather(item.WeatherIcon))">
            <div class="content">
                <h1 class="Condition flex items-start gap-2">
                    <Icon color="white" :stroke-width="3" :fill="'white'" />
                    <p class="text-sm w-2/3">{{ item.WeatherText }}</p>
                </h1>
                <h1 class="Temp">
                    <Degrees :degree="item.Temperature.Imperial.Value" :class="'text-white text-4xl'" />
                </h1>
                <h1 class="Time text-3xl">{{ nowInZone(item.TimeZone.Name) }}</h1>
                <h1 class="Location text-xl">
                    {{ item.LocalizedName }},
                    {{ item.TimeZone.Code }}
                </h1>
                <img :src=iconsPack[item.WeatherIcon].path alt="" class="absolute opacity-70 right-3 top-2" width="80">
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
p,
h1,
span,
i {
    color: white !important;
}
</style>