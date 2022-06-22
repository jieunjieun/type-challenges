type Includes<T extends readonly any[], U> = T extends [infer P, ...infer R] 
  ? [P, U] extends [U, P] 
    ? true 
    : Includes<R, U>
  : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'> // expected to be `false`

