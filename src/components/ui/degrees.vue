<script setup lang="ts">
import { toCelsius } from '@/lib'
import CelsiusDegree from './celsius-degree.vue';

defineProps({
    degree: {
        type: Number,
        required: true
    },
    className: {
        type: String,
        required: false,
    }
})
</script>

<template>
    <p :class="className">
        <span :class="className">{{ toCelsius(degree) }}
            <CelsiusDegree />
        </span>
        <span class="text-sm"> ~{{ degree }}
            °F</span>
    </p>
</template>