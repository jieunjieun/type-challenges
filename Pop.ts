
type Pop<T extends any[]> = T extends [...infer U, any] ? U : never

type PopArr1 = ['a', 'b', 'c', 'd']
type PopArr2 = [3, 2, 1]

type re1 = Pop<PopArr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<PopArr2> // expected to be [3, 2]