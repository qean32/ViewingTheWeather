<script setup lang="ts">
import { getRandomDegree } from '@/lib';
import { CelsiusDegree } from '.';

const { } = defineProps<{
    index: number,
    degree: number
}>()
</script>

<template>
    <div
        class="flex flex-col gap-1 items-center border border-zinc-200 p-3 rounded-xl cursor-pointer hover:-translate-y-1 transition-transform duration-75">
        <p class="text-sm">{{ index + 1 }} PM</p>
        <p class="text-xl">{{ getRandomDegree(degree) }}
            <CelsiusDegree />
        </p>
    </div>
</template>