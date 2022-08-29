type PickByType<T, F> = {
    [S in keyof T as T[S] extends F ? S : never]: F;
}


type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }