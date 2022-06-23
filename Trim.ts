type TrimSpace = ' ' | '\n' | '\t';
type Trim<T extends string> = T extends `${TrimSpace}${infer W}` | `${infer W}${TrimSpace}` ? Trim<W> : T;

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
