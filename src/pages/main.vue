<script setup lang="ts">
import CityWeather from '@/components/ui/city-weather.vue';
import { citis } from '@/f';

</script>

<template>
    <div class="flex gap-2 flex-wrap flex-col p-4">

        <div v-for="item in citis">
            <CityWeather :item="item"></CityWeather>
        </div>
    </div>
    <div class="p-5 "></div>
</template>
