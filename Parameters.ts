// type MyParameters<T extends (...args: any) => any> = T extends (...any: infer P) => any ? P : any;
// declare function f1(arg: { a: number, b: string }): void

// type T0 = MyParameters<() => string>;  // []
// type T1 = MyParameters<(s: string) => void>;  // [string]
// type T2 = MyParameters<(<T>(arg: T) => T)>;  // [unknown]
// type T4 = MyParameters<typeof f1>;  // [{ a: number, b: string }]
