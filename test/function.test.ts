import { fn } from '@/index'

describe('function', () => {
    it(`fn`, () => {
        const search = '123'
        const searchCn = 'hahaha'

        expect(fn()).toEqual('123')
        expect(fn(search)).toEqual('123123')
        expect(fn(searchCn)).toEqual('123hahaha')
    })

    // it(`getCurUrlPrefix`, () => {
    //     const prefix = `https://foo.bar.com/mviptest`
    //     const url = `${prefix}/abc.htm?a=a&b=b&c=c`

    //     expect(getCurUrlPrefix()).toBe(testURL)
    //     expect(getCurUrlPrefix(url)).toBe(prefix)
    // })
})
