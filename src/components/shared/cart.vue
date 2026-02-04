<script async setup lang="ts">
import { _5dayWType } from '@/model';
import { CelsiusDegree, DayShortInfo, HourShortInfo } from '../ui/';
import { cn, getBgColorCityWeather, getCurrentTime } from '@/lib';
import { iconsPack } from '@/export';
import { serverService } from '@/service/server';
import { ref } from 'vue';

let _5day = ref<_5dayWType | null>(null)
const { } = defineProps<{
    id: number
}>()
await serverService.get_5days()
    .then(data => {
        if (data.status == 200 || data.status == 304) {
            _5day.value = data.data
        }
    })
</script>

<template #default>
    <div class="h-160 rounded-2xl flex overflow-hidden w-full cart relative mt-5" v-if="_5day">
        <div :class="cn('w-9/12 p-5 text-white', getBgColorCityWeather(_5day.DailyForecasts[0].Day.Icon))">
            <div class="flex justify-center pt-5">
                <div class="flex justify-between w-9/12 text-2xl">
                    <!-- <p class="">{{ town.LocalizedName }}</p> -->
                    <p class="">{{ getCurrentTime(_5day.Headline.EffectiveDate) }}</p>
                </div>
            </div>
            <div class="h-8/12 flex justify-center _5days-center gap-4">
                <div class="text-center">
                    <p class="text-12xl pb-3">{{ _5day.DailyForecasts[0].Temperature.Maximum.Value }}</p>
                    <p class="text-4xl -translate-y-full">
                        {{ iconsPack[_5day.DailyForecasts[0].Day.Icon].description }}
                    </p>
                </div>
                <div class="text-xl">
                    <p class="text-8xl">
                        <CelsiusDegree />
                    </p>
                    <div class="flex justify-between">
                        <p class="">от {{ _5day.DailyForecasts[0].Temperature.Minimum.Value }}</p>
                        <CelsiusDegree />
                    </div>
                    <div class="flex justify-between">
                        <p class="">от {{ _5day.DailyForecasts[0].Temperature.Maximum.Value }}</p>
                        <CelsiusDegree />
                    </div>
                </div>
            </div>
            <div class="flex gap-5 justify-center" v-if="!!_5day.DailyForecasts.length">
                <DayShortInfo v-for="_5dayDay in _5day.DailyForecasts" :item="_5dayDay" />
                <DayShortInfo :item="_5day.DailyForecasts[4]" />
            </div>
        </div>
        <div class="w-3/12 bg-gray-50">
            <div class="text-center flex flex-col gap-5 pt-10">
                <p class="text-3xl">Доброе утро!</p>
                <p class="text-2xl">{{ getCurrentTime() }}</p>
                <div class="h-8/12 flex justify-center _5days-center gap-4">
                    <div class="text-center">
                        <p class="text-4xl pb-1">
                            {{ _5day.DailyForecasts[0].Temperature.Maximum.Value }}
                            <CelsiusDegree />
                        </p>
                        <p class="text-2xl">{{ _5day.Headline.Category }}</p>
                    </div>
                </div>
                <p class="text-sm -translate-y-2">
                    Ощущается как {{ _5day.DailyForecasts[0].Temperature.Maximum.Value - 2 }}
                    <CelsiusDegree />
                </p>
            </div>
            <div class="flex justify-center _5days-center flex-col gap-5 pt-15">
                <p class="text-3xl text-center">Почасовой прогноз</p>
                <div class="flex gap-3 justify-center flex-wrap px-4">
                    <!-- @vue-ignore -->
                    <HourShortInfo v-for="(_, i) in Array(6).fill()" :index="i"
                        :degree="_5day.DailyForecasts[0].Temperature.Maximum.Value" />
                </div>
            </div>
        </div>
    </div>
</template>