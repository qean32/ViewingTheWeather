<script async setup lang="ts">
import { computed, Suspense } from 'vue';
import { Cart } from '@/components/shared';
import { useRoute } from 'vue-router'
import { BackArrow } from '@/components/ui';
import { CartSceleton } from '@/components/ui/skeleton';

const route = useRoute();
const postId = computed(() => route.params.id);
console.log(postId.value)
</script>

<template>
    <BackArrow />
    <Suspense>
        <Cart :id="0" />
        <template #fallback>

            <CartSceleton />
        </template>
    </Suspense>
</template>