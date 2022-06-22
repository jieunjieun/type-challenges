type MyExclude<T, K> = T extends K ? never : K;

type OnlyNumber = MyExclude<string|number, string>;
