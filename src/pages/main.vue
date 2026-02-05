<script setup lang="ts">
import { Cart, SmallCart } from '@/components/shared';
import { onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router'

let towns = ref([])
let memoryTowns = ref([])
let loading = ref(true)
let searchTown = ref<null | searchTownType>(null)

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

const getSearch = async () => {
    serverService.search(search.value ?? "")
        .then(data => {
            if (data.status == 200 || data.status == 304) {
                console.log(data)
                searchTown.value = data.data[0]
            }
        })
}

onMounted(() => getData())

import { useSearch } from '@/store/search';
import { Search } from '@/components/ui';
import { serverService } from '@/service/server';
import { CartSceleton } from '@/components/ui/skeleton';
import { searchTownType } from '@/model';

const { search, local } = useSearch()

watch([search, local], () => {
    swapLoading()
    setTimeout(swapLoading, 500)
    if (local.value) {

        if (!search) {
            towns.value = memoryTowns.value
            return
        }
        // @ts-ignore
        towns.value = memoryTowns.value.filter(item => item.LocalizedName.toLowerCase().includes(search.value.toLowerCase()))
        return
    }
    getSearch()
})
</script>

<template>
    <Suspense>
        <Cart :_key="294021" />
        <template #fallback>

            <CartSceleton />
        </template>
    </Suspense>
    <p class="text-6xl py-5 pt-20 text-white">Погода по всему миру</p>
    <div class="flex gap-3">
        <Search />
        <Search :local="false" :placeholder="'Глобальный поиск'" />
    </div>
    <RouterLink v-if="searchTown" :to="`/5day/${searchTown.Key}`">
        <p class="text-6xl py-5 pt-20 text-white">{{ searchTown.LocalizedName }}</p>
    </RouterLink>

    <div class="pt-5 grid grid-cols-5 gap-5 min-h-150" v-if="loading">
        <p class="text-6xl text-white">Загрузка..</p>
        <!-- <SmallCartSkeleton v-for="_ in citis" /> -->
    </div>
    <p class="text-6xl text-white pt-5" v-if="!towns.length && !loading">Ничего не найдено!</p>
    <div class="pt-5 grid grid-cols-5 gap-5 min-h-150" v-if="!loading">

        <SmallCart v-for="item in towns" :item="item" />
    </div>
</template>
