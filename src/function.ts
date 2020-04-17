const a = '123'
export function fn (t?: string): string {
    return a + (t || '')
}
