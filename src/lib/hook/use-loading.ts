import { ref } from "vue"

export const useLoading = (): [boolean, () => void, () => void] => {
    let loading = ref(true)

    const on = () => { loading.value = true }
    const off = () => { loading.value = false }

    return [loading.value, on, off]
}