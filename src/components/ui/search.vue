<script setup lang="ts">
import { useDebounce } from '@/lib/hook';
import { useSearch } from '@/store/search';
import { Search } from 'lucide-vue-next';


const { setSearch } = useSearch()
const changeHandler = useDebounce((e: InputEvent) => {
    if (e.target)
        // @ts-ignore
        setSearch.value(e.target.value)
}, 600)
</script>

<template>
    <div class="relative w-fit">
        <Search color="gray" :size="30" :stroke-width="3" class="absolute right-2.5 top-1/2 -translate-y-1/2" />
        <input class="bg-white p-3 px-5 w-100 border-0 outline-0 text-2xl rounded-md" placeholder="Локальный поиск.."
            type="text" v-on:input="changeHandler">
    </div>
</template>