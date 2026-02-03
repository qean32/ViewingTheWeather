<script setup lang="ts">
import { computed } from 'vue';
import { Cart } from '@/components/shared';
import { useRoute, useRouter } from 'vue-router'
import { citis, day5 } from '@/f';
import { getBetweenNumbers } from '@/lib';

const route = useRoute();
const router = useRouter();
const prime = citis[getBetweenNumbers(0, citis.length - 1)]
const postId = computed(() => route.params.id);
const back = () => router.go(-1)
console.log(postId)
</script>

<template>
    <button v-on:click="back">back</button>
    <Cart :item="day5" :town="prime" />
</template>