export function nowInZone(zone: string = '') {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('ru-RU', {
        timeZone: zone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return formatter.format(now);
}