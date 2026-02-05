import { create } from "vue-zustand"

interface store {
    search: string,
    local: boolean,
    setSearch: (search: string, local: boolean) => void
}

export const useSearch = create<store>(set => ({
    search: '',
    local: true,
    setSearch: (search: string, local: boolean) => {
        set(() => ({ search: search, local: local }))
    }
}))