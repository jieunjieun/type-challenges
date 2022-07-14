type Shift<T extends number[]> = T extends [any, ...infer Rest] ? Rest : never;

type Result = Shift<[3, 2, 1]>; // [2, 1]
