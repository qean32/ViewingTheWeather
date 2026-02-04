import { iconsPack } from '@/export'


export function useIcon(index: number) {
    const component = iconsPack[index].lucideIcon
    return component
}