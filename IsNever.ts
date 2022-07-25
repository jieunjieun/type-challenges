type IsNever<T> = [T] extends [never] ? true : false;

type ANever = IsNever<never>; // expected to be true
type BNever = IsNever<undefined>; // expected to be false
type CNever = IsNever<null>; // expected to be false
type DNever = IsNever<[]>; // expected to be false
type ENever = IsNever<number>; // expected to be false
