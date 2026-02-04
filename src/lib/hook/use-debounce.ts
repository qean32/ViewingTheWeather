import { ref } from "vue"

export const useDebounce = (func: Function, delay: number = 400) => {
    const ref_: any = ref(null)

    return (...args: any[]) => {
        clearTimeout(ref_.value)
        ref_.value = setTimeout(() => func(...args), delay);
    }
}