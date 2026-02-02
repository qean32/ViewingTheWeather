<script setup lang="ts">
import { toCelsius } from '@/lib'

defineProps({
    degree: {
        type: Number,
        required: true
    },
    className: {
        type: String,
        required: false,
        default: 'text-white text-lg'
    }
})
</script>

<template>
    <p :class="className">
        <span :class="className">{{ toCelsius(degree) }}
            °C</span>
        <span class="text-sm"> ~{{ degree }}
            °F</span>
    </p>
</template>