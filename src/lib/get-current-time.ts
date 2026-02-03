export const getCurrentTime = (time?: string) => {
    const time_ = time ? new Date(time) : new Date()
    const date = time_.toLocaleString('ru', { timeZone: `${Intl.DateTimeFormat().resolvedOptions().timeZone}` })
    console.log(Number(date.split(' ')[1].split(':').slice(0, -1)[0]) + 2)
    return date.split(' ')[0].split('.').slice(0, -1).join('.'), date.split(' ')[1].split(':').slice(0, -1).join(':')
}