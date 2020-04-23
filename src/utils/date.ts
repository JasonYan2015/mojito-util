
/**
 * 时间戳 转换为 year-month-day hour:min:sec
 * @param {number} timestamp 时间戳
 * @param {string} format year-month-day hour:min:sec
 * @returns {string} 时间字符串
 */
export function timeToString (
    timestamp: string | number,
    format: string = 'year-month-day hour:min:sec',
    ifNeedHeadZero: boolean = true,
): string {
    if (!timestamp || isNaN(timestamp as number)) {
        console.warn('🐛 timeToString met null: ', timestamp)
        return ''
    }

    const date = new Date(Number(timestamp))

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const yearResult = `${year}`
    const monthResult = month < 10 && ifNeedHeadZero ? `${month}` : `0${month}`
    const dayResult = day < 10 && ifNeedHeadZero ? `${day}` : `0${day}`
    const hourResult = hour < 10 && ifNeedHeadZero ? `${hour}` : `0${hour}`
    const minuteResult = minute < 10 && ifNeedHeadZero ? `${minute}` : `0${minute}`
    const secondResult = second < 10 && ifNeedHeadZero ? `${second}` : `0${second}`

    return format
        .replace('year', yearResult)
        .replace('month', monthResult)
        .replace('day', dayResult)
        .replace('hour', hourResult)
        .replace('min', minuteResult)
        .replace('sec', secondResult)
}
