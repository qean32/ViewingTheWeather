<script setup lang="ts">
import { Cart, SmallCart } from '@/components/shared';
import { onMounted, ref, watch } from 'vue';

let towns = ref([])
let memoryTowns = ref([])
let loading = ref(true)
const swapLoading = () => {
    loading.value = !loading.value
}

const getData = async () => {
    const townsF = serverService.getTowns()

    Promise.all([townsF])
        .then(([townsF]) => {
            if (townsF.status == 200) {
                towns.value = townsF.data
                memoryTowns.value = townsF.data
                swapLoading()
            }
        })
}

onMounted(() => getData())

import { useSearch } from '@/store/search';
import { Search } from '@/components/ui';
import { serverService } from '@/service/server';
import { CartSceleton } from '@/components/ui/skeleton';

const { search } = useSearch()

watch(search, () => {
    swapLoading()
    setTimeout(swapLoading, 500)

    if (!search) {
        towns.value = memoryTowns.value
        return
    }
    // @ts-ignore
    towns.value = memoryTowns.value.filter(item => item.LocalizedName.includes(search.value))
})
</script>

<template>
    <Suspense>
        <Cart :id="0" />
        <template #fallback>

            <CartSceleton />
        </template>
    </Suspense>
    <p class="text-6xl py-5 pt-20 text-white">Погода по всему миру</p>
    <Search />

    <div class="pt-5 grid grid-cols-5 gap-5 min-h-150" v-if="loading">
        <p class="text-6xl text-white">Загрузка..</p>
        <!-- <SmallCartSkeleton v-for="_ in citis" /> -->
    </div>
    <div class="pt-5 grid grid-cols-5 gap-5 min-h-150" v-if="!loading">

        <SmallCart v-for="item in towns" :item="item" />
    </div>
</template>
