import { create } from "vue-zustand"

interface store {
    search: string,
    setSearch: (search: string) => void
}

export const useSearch = create<store>(set => ({
    search: '',
    setSearch: (search: string) => {
        set(() => ({ search: search }))
    }
}))