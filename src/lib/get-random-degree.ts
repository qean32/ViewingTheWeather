import { getBetweenNumbers } from "./"

export const getRandomDegree = (degree: number) => {
    const rnd = getBetweenNumbers(-2, 2)

    return degree - rnd
}