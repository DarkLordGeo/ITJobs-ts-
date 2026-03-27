import React from 'react'
import { Routes, Route } from 'react-router'
import MainPage from '../pages/MainPage'
import BookmarkPage from '../pages/BookmarkPage'
import AboutPage from '../pages/AboutPage'
import JobPage from '../pages/DynamicPages/JobPage'
import ErrorPage from '../components/ErrorPage/ErrorPage'


const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path='/jobs' element={<MainPage />} />
            <Route path='/bookmark' element={<BookmarkPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/jobs/:id' element={<JobPage />} />
            <Route path='*' element={<ErrorPage />} />

        </Routes>
    )
}

export default AppRouter
