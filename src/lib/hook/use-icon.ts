import { iconsPack } from '@/export'


export function useDynamicComponent(index: number) {
    const component = iconsPack[index].lucideIcon
    return component
}