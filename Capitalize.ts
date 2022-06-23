type Capitalized<S extends string> = S extends `${infer H}${infer T}` ? `${Uppercase<H>}${T}` : S;

type capitalized = Capitalized<'hello world'> // expected to be 'Hello world'