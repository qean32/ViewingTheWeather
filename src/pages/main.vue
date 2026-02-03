<script setup lang="ts">
import { Cart, ShortCart } from '@/components/shared';
import { citis, day5 } from '@/f';
import { getBetweenNumbers } from '@/lib';
const prime = citis[getBetweenNumbers(0, citis.length - 1)]
</script>

<template>
    <Cart :item="day5" :town="prime" />

    <p class="text-6xl py-5 pt-20 text-white">Погода по всему миру</p>
    <div class="pt-5 grid grid-cols-5 gap-5">

        <div v-for="item in citis">
            <ShortCart :item="item" />
        </div>
    </div>
</template>
