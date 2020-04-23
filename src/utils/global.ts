class GlobalData {
    _store = {}

    constructor (data?: object = {}) {
        this._store = data
    }

    init (data?: object = {}) {
        this._store = data
    }

    get (key?: string) {
        if (!key) return this._store
        return this._store[key]
    }

    set (key: string, value) {
        this._store[key] = value
        return this._store
    }
}

export default GlobalData
