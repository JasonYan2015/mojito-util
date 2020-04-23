/**
 * 禁用页面滚动
 */
export function disableScroll (): void {
    // const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    document.body.style.position = 'fixed'
    document.body.style.top = `-${0}px`
    // this.scrollTop = scrollTop
}
/**
 * 重启页面滚动
 */
export function activeScroll (): void {
    document.body.style.position = 'static'
    document.body.style.top = '0px'
    // window.scrollTo(0, this.scrollTop)
    window.scrollTo(0, 0)
}

/**
 * 判断容器是否为android
 */
export const isAndroid = (): boolean => {
    const u = window.navigator.userAgent
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
}
/**
 * 判断容器是否为ios
 */
export const isIOS = (): boolean => {
    const u = window.navigator.userAgent
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

/**
 * 从 url 中取出query
 * @param {string} url 默认 window.location.href
 * @returns {object} query 对象
 */
export const getQueryFromUrl = (url: string = window.location.href): object => {
    const reg = /(?:[?&])([^=]+)=([^&]*)/g
    const params = {}

    let temp
    while ((temp = reg.exec(url)) !== null) {
        params[temp[1]] = decodeURIComponent(temp[2])
    }

    return params
}
