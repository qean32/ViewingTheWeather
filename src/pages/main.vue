<script setup lang="ts">
import { Degrees, CityWeather } from '@/components/ui';
import { citis } from '@/f';
import { getBetweenNumbers } from '@/lib';

const prime = citis[getBetweenNumbers(0, citis.length - 1)]
</script>

<template>
    <div class="flex gap-5 text-6xl items-end">
        <p>В городе '{{ prime.LocalizedName }}' сейчас:</p>
        <Degrees :degree="prime.Temperature.Imperial.Value" :class-name="'text-6xl font-bold'" />
    </div>
    <div class="flex gap-4 flex-wrap flex-col">
        <p class="text-6xl">Погода по всему миру</p>

        <div v-for="item in citis">
            <CityWeather :item="item"></CityWeather>
        </div>
    </div>
</template>
