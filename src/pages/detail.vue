<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();
const postId = computed(() => route.params.id);
const back = () => router.go(-1)
</script>

<template>
    <button v-on:click="back">back</button>
    {{ postId }}
</template>