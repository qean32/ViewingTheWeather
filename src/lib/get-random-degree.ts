import { getBetweenNumbers } from "./"

export const getRandomDegree = (degree: number) => {
    const rnd = -getBetweenNumbers(1, 4)

    return degree - rnd
}