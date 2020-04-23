/* eslint-disable @typescript-eslint/no-explicit-any */

interface Global {
    [key: string]: any
}

class GlobalData {
    _store: Global = {}

    constructor (data: object = {}) {
        this._store = data
    }

    init (data: object = {}) {
        this._store = data
    }

    get (key?: string): any {
        if (!key) return this._store
        return this._store[key]
    }

    set (key: string, value: any) {
        this._store[key] = value
        return this._store
    }
}

export default GlobalData
