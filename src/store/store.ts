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



// const initialValues: IData = {
//     company: '',
//     date: [],
//     description: [''],
//     isBookmark: false,
//     job_id: '',
//     job_link: '',
//     position: ''
// }

// const jobDataStore = create<IData>()((set) => ({
//     company: '',
//     date: [],
//     description: [''],
//     isBookmark: false,
//     job_id: '',
//     job_link: '',
//     position: '',
//     // navigateState: (param: IData) => set((state) => ({ initialValues: state }))
//     navigateState: (param: IData) => set(() => ({ company: param.company }))

// }))


// export const jobData = () => {
//     const jobData = jobDataStore((state) => state.company)
//     return jobData
// }

// const useNavigateData = () => jobDataStore((state) => state.navigateState)
// // export const useJobData = () => jobDataStore((state) => sta)