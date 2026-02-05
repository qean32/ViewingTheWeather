<script setup lang="ts">
import { days } from '@/export';
import { dayType } from '@/model';
import { CelsiusDegree } from '.';
import { toCelsius } from '@/lib';

const { item } = defineProps<{
    item: dayType
}>()
</script>

<template>
    <div class="flex flex-col gap-1 hover-p-full items-center text-dark
    border border-zinc-200 bg-gray-50 p-3 rounded-xl cursor-pointer transition-all duration-200 w-18.75">
        <p class="text-sm">{{ days[new Date(item.Date).getDay()] }}</p>
        <p class="text-xl">{{ toCelsius(item.Temperature.Maximum.Value) }}
            <CelsiusDegree />
        </p>
        <p class="text-sm text-center text-nowrap w-full overflow-hidden">{{ item.Day.IconPhrase }}</p>
    </div>
</template>

<style scoped>
p,
span {
    color: black !important;
}
</style>