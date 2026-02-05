<script async setup lang="ts">
import { computed, Suspense } from 'vue';
import { Cart } from '@/components/shared';
import { useRoute } from 'vue-router'
import { BackArrow } from '@/components/ui';
import { CartSceleton } from '@/components/ui/skeleton';

const route = useRoute();
const { value: key } = computed(() => route.params.key);
</script>

<template>
    <BackArrow />
    <Suspense>
        <!-- @vue-ignore -->
        <Cart :_key="key" />
        <template #fallback>

            <CartSceleton />
        </template>
    </Suspense>
</template>