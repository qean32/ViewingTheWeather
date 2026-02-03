<script setup lang="ts">
import { _env, iconsPack } from '@/export'
import { CurrentWType } from '@/model'
import { cn, getBgColorCityWeather, getCurrentTime } from '@/lib'
import { Degrees } from '../ui';
import { useDynamicComponent } from '@/lib/hook/use-icon'

const { item } = defineProps<{
    item: CurrentWType
}>()
const Icon = useDynamicComponent(item.WeatherIcon)
</script>

<template>
    <RouterLink :to="`/5day/${item.Key}`" :class="'w-full'">
        <div :class="cn('container hover:-translate-y-1 transition-transform duration-100',
            getBgColorCityWeather(item.WeatherIcon))">
            <div class="content">
                <h1 class="Condition flex items-center gap-3">
                    <Icon color="white" :stroke-width="3" /> Sunny
                </h1>
                <h1 class="Temp">
                    <Degrees :degree="item.Temperature.Imperial.Value" :class="'text-white text-4xl'" />
                </h1>
                <h1 class="Time text-3xl">{{ getCurrentTime() }}</h1>
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