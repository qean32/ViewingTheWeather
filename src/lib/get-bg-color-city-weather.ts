export const getBgColorCityWeather = (icon: number): string => {
    if (between(icon, 1, 2)) {
        return 'bg-yellow-500'
    }
    if (between(icon, 2, 6)) {
        return 'bg-yellow-500'
    }
    if (between(icon, 6, 11)) {
        return 'bg-gray-400'
    }
    if (between(icon, 11, 15)) {
        return 'bg-gray-600'
    }
    if (between(icon, 15, 18)) {
        return 'bg-gray-700'
    }
    if (between(icon, 19, 21)) {
        return 'bg-sky-500'
    }
    if (between(icon, 21, 24)) {
        return 'bg-sky-700'
    }
    if (between(icon, 24, 29)) {
        return 'bg-sky-700'
    }
    if (icon == 30) {
        return 'bg-red-700'
    }
    if (icon == 31 || icon == 32) {
        return 'bg-sky-800'
    }
    if (between(icon, 32, 36)) {
        return 'bg-indigo-500'
    }
    if (between(icon, 36, 38)) {
        return 'bg-indigo-600'
    }
    if (between(icon, 38, 40)) {
        return 'bg-indigo-700'
    }
    if (between(icon, 40, 44)) {
        return 'bg-indigo-800'
    }

    return ''
}

const between = (number: number, start: number, end: number) => {
    return number >= start && number <= end
}