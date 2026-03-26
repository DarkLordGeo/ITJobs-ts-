// import { data } from 'react-router'
// import { storage } from 'three/src/nodes/accessors/StorageBufferNode.js'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow'
import { type IData } from '../interfaces/data.interface'
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

const initialValues: IData = {
    company: '',
    date: [],
    description: [''],
    isBookmark: false,
    job_id: '',
    job_link: '',
    position: ''
}

const jobDataStore = create()((set) => ({
    initialValues,
    navigateState: (param: IData) => set(() => ({ initialValues: param }))

}))


export const bookmarks = () => {
    const bookmarks_list = bookmarkStore(useShallow((state) => state.bookmarks))
    return bookmarks_list
}

export const useAddBookmark = () => bookmarkStore((state) => state.addBookmark)
export const useRemoveBookmark = () => bookmarkStore((state) => state.removeBookmark)


export const jobData = () => {
    const jobData = jobDataStore()
    return jobData
}

// export const useJobData = () => jobDataStore((state) => sta)