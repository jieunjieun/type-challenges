type RecursionAwaited<T> = T extends Promise<infer U> ? U extends Promise<any> ? RecursionAwaited<U> : U : never;
type NormalAwaited<T> = T extends Promise<infer U> ? U : never;

type ExampleType = {
  hello: 'world'
}

type A = RecursionAwaited<Promise<ExampleType>>
type B = NormalAwaited<Promise<ExampleType>>