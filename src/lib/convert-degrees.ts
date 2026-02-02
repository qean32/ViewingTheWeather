export const toCelsius = (fahrenheit: number): number => {
    return Math.round((fahrenheit - 32) / 1.8)
}

export const toFahrenheit = (celsius: number): number => {
    return Math.round((celsius * 1.8) + 32)
}