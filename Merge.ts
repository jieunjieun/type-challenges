type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  gender: string
}

type Merge<T, K> = {
  [P in keyof T | keyof K]: P extends keyof T ? T[P] : P extends keyof K ? K[P] : never;
}

type Merge2<T, K> = {
  [P in keyof T | keyof K]: P extends keyof K ? K[P] : P extends keyof T ? T[P] : never;
}


type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
type Result2 = Merge2<foo,coo>; // expected to be {name: string, age: number, sex: string}