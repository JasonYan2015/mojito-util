import { generateUuid } from './index'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...param: any[]) => void
type Tuple = [string, AnyFunction]
interface Events {
    [key: string]: Tuple[]
}

/**
 * 全局的事件中心
 */
let _events: Events = {}

/**
 * 注册
 * @param {string} name
 * @param {this} self 保存上下文环境，来保证回调执行时的this
 * @param {function} callback
 * @returns {string} eventid 用于标记当前event的id，在off时使用
 */
function on (name: string, callback: AnyFunction): string {
    const uuid = generateUuid()
    const tuple: Tuple = [uuid, callback]
    const callbacks: Tuple[] | undefined = _events[name]
    if (Array.isArray(callbacks)) {
        callbacks.push(tuple)
    } else {
        _events[name] = [tuple]
    }

    return uuid
}

/**
 * 注销
 * @param {string} name 如果没有name，则会注销所有事件
 * @param {this} eventid 区分注销的事件id
 */
function off (name: string, eventid: string) {
    if (!name) {
        _events = {}
        return
    }
    const callbacks = _events[name]
    if (Array.isArray(callbacks)) {
        _events[name] = callbacks.filter(function (tuple) {
            return tuple[0] !== eventid
        })
    }
}

/**
 * 触发
 * @param {string} name
 * @param {*} data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function trigger (name: string, data: any): void {
    const callbacks = _events[name]
    if (Array.isArray(callbacks)) {
        callbacks.map(function (tuple) {
            const callback = tuple[1]
            callback(data)
        })
    }
}

export { on, off, trigger }
