<script setup lang="ts">
import { ArrowBigLeft } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();
const back = () => router.go(-1)
</script>

<template>
    <button v-on:click="back"
        class="p-3 border rounded-full border-white cursor-pointer mb-3 hover:-translate-y-0.5 transition-transform duration-100">
        <ArrowBigLeft color="white" :size="30" :fill="'white'" />
    </button>
</template>
