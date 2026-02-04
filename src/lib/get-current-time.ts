export const getCurrentTime = (time?: string | null, offset?: number) => {
    const time_ = time ? new Date(time) : new Date()
    const date = time_.toLocaleString('ru', { timeZone: `${Intl.DateTimeFormat().resolvedOptions().timeZone}` }).split(' ')
    return date[0].split('.').slice(0, -1).join('.'),
        (Number(date[1].split(':').slice(0, -1)[0]) + ((offset ?? 0) - 4) + date[1].slice(2).split(':').slice(0, -1).join(':'))
}