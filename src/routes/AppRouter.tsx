import React from 'react'
import { Routes, Route } from 'react-router'
import MainPage from '../pages/MainPage'
import BookmarkPage from '../pages/BookmarkPage'
import AboutPage from '../pages/AboutPage'
import JobPage from '../pages/DynamicPages/JobPage'


const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/bookmarks' element={<BookmarkPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/job_page' element={<JobPage />} />
        </Routes>
    )
}

export default AppRouter
