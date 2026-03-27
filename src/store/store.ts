import type { IData } from '@/interfaces/data.interface'
// import { data } from 'react-router'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow'


interface appStore {
    bookmarks: string[]
    addBookmark: (id: string) => void
    removeBookmark: (id: string) => void
}

const bookmarkStore = create<appStore>()(
    persist(
        (set) => ({
            bookmarks: [],
            addBookmark: (id: string) => set((state) => ({ bookmarks: [...state.bookmarks, id] })),
            removeBookmark: (id: string) => set((state) => ({ bookmarks: state.bookmarks.filter((bookmark) => bookmark !== id) }))
        }),
        {
            name: 'bookmarks'
        }
    )
)


export const bookmarks = () => {
    const bookmarks_list = bookmarkStore(useShallow((state) => state.bookmarks))
    return bookmarks_list
}
export const useAddBookmark = () => bookmarkStore((state) => state.addBookmark)
export const useRemoveBookmark = () => bookmarkStore((state) => state.removeBookmark)




// const dataState = {
//     company: '',
//     date: [],
//     desciption: [],
//     job_id: '',
//     job_link: '',
//     position: '',
//     isBookmark: false,
//     index: 0,
// }

const dataStore = create<IData>()((set) => ({
    // dataState,
    company: '',
    date: [],
    desciption: [],
    job_id: '',
    job_link: '',
    position: '',
    isBookmark: false,
    // index: 0,
    update_data: () => set((state) => ({
        company: state.company,
        date: state.date,
        desciption: state.desciption,
        job_id: state.job_id,
        job_link: state.job_link,
        position: state.position,
        isBookmark: state.isBookmark,
        // index: state.index
    }))
}))

export const storeData = () => {
    const store_data = dataStore((state) => ({
        company: state.company,
        date: state.date,
        desciption: state.desciption,
        job_id: state.job_id,
        job_link: state.job_link,
        position: state.position,
        isBookmark: state.isBookmark,
    }))
    return store_data
}

