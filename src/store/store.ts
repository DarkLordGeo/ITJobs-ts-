import { data } from 'react-router'
import { create } from 'zustand'

interface appStore {
    data: []
    // example: string,
    // count: number
    // changeString: () => void
    // increment: () => void
    // incrementAsync: () => Promise<void>
}

export const appStore = create<appStore>((set) => ({
    data: []
    ,
    add_data: () => {
        // set((state) => ({ data: [...state.data, data] }))
    }
    // // synchronus state management
    // example: 'this',
    // count: 0,

}))