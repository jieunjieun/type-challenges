type Space = ' ' | '\n' | '\t';
type TrimLeft<T extends string> = T extends `${Space}${infer W}` ? TrimLeft<W> : T;

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
