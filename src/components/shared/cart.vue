<script setup lang="ts">
import { _5dayWType, towmType } from '@/model';
import { CelsiusDegree, DayShortInfo, HourShortInfo } from '../ui/';
import { getCurrentTime } from '@/lib';
import { iconsPack } from '@/export';

const { item } = defineProps<{
    item: _5dayWType,
    town: towmType
}>()
</script>

<template>
    <div class="h-160 rounded-2xl flex overflow-hidden w-full cart relative">
        <div class="w-9/12 p-5 text-white">
            <div class="flex justify-center pt-5">
                <div class="flex justify-between w-9/12 text-2xl">
                    <p class="">{{ town.LocalizedName }}</p>
                    <p class="">{{ getCurrentTime(item.Headline.EffectiveDate) }}</p>
                </div>
            </div>
            <img :src="iconsPack[item.DailyForecasts[0].Day.Icon].path" alt="" class="absolute opacity-70 left-1/12 top-5 -z-1"
                width="600">
            <div class="h-8/12 flex justify-center items-center gap-4">
                <div class="text-center">
                    <p class="text-12xl pb-3">{{ item.DailyForecasts[0].Temperature.Maximum.Value }}</p>
                    <p class="text-4xl -translate-y-full">{{ item.Headline.Category }}</p>
                </div>
                <div class="text-xl">
                    <p class="text-8xl">
                        <CelsiusDegree />
                    </p>
                    <div class="flex justify-between">
                        <p class="">от {{ item.DailyForecasts[0].Temperature.Minimum.Value }}</p>
                        <CelsiusDegree />
                    </div>
                    <div class="flex justify-between">
                        <p class="">от {{ item.DailyForecasts[0].Temperature.Maximum.Value }}</p>
                        <CelsiusDegree />
                    </div>
                </div>
            </div>
            <div class="flex gap-5 justify-center">
                <div class="" v-for="itemDay in item.DailyForecasts">
                    <DayShortInfo :item="itemDay" />
                </div>
                <DayShortInfo :item="item.DailyForecasts[4]" />
            </div>
        </div>
        <div class="w-3/12 bg-gray-50">
            <div class="text-center flex flex-col gap-5 pt-10">
                <p class="text-3xl">Доброе утро!</p>
                <p class="text-2xl">{{ getCurrentTime() }}</p>
                <div class="h-8/12 flex justify-center items-center gap-4">
                    <div class="text-center">
                        <p class="text-4xl pb-1">
                            {{ item.DailyForecasts[0].Temperature.Maximum.Value }}
                            <CelsiusDegree />
                        </p>
                        <p class="text-2xl">{{ item.Headline.Category }}</p>
                    </div>
                </div>
                <p class="text-sm -translate-y-2">
                    Ощущается как {{ item.DailyForecasts[0].Temperature.Maximum.Value - 2 }}
                    <CelsiusDegree />
                </p>
            </div>
            <div class="flex justify-center items-center flex-col gap-5 pt-15">
                <p class="text-3xl">Почасовой прогноз</p>
                <div class="flex gap-3 justify-center flex-wrap px-4">
                    <!-- @vue-ignore -->
                    <div v-for="(_, i) in Array(6).fill()">
                        <HourShortInfo :index="i" :degree="item.DailyForecasts[0].Temperature.Maximum.Value" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>