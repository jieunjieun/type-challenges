type AppendToObject<T, U extends keyof any, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V;
}

type AppendTest = { id: '1' }
type Result = AppendToObject<AppendTest, 'value', 4> // expected to be { id: '1', value: 4 }
