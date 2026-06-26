import { create } from 'zustand'

const useCounterStore = create((set) => ({
    counter: 0,
    increase_counter: () =>  set((state)=>({ counter: state.counter+1})),
    decrease_counter: () =>  set((state)=>({ counter: state.counter-1})),
    reset_counter: () =>  set(({ counter: 0})),
}))

export default useCounterStore

