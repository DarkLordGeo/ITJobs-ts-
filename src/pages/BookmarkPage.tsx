import React from 'react'

import PageLayout from '../layouts/PageLayouts/PageLayout/PageLayout'
import { PageContentLayout } from '../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import PageHeaderWrapper from '../layouts/PageLayouts/PageHeaderLayout/PageHeader.wrapper'
import HeaderComponent from '../components/Header/HeaderComponents/HeaderComponent'
import { TopSectionWrapper } from '../layouts/PageLayouts/TopSectionLayout/TopSectionLayout'
import { Link } from 'react-router'
import { bookmarks } from '../store/store'

const BookmarkPage: React.FC = () => {

    const bookmarks_list = bookmarks()

    console.log(bookmarks_list)


    return (
        <PageLayout>
            <TopSectionWrapper>
                <PageHeaderWrapper description=''>
                    <HeaderComponent preHeader="" header="Bookmarks" />
                </PageHeaderWrapper>
            </TopSectionWrapper>
            <PageContentLayout>
                <div className='h-screen flex items-center justify-center flex-col text-center'>
                    <h1 className='text-2xl md:text-4xl mb-12'>
                        You have no Bookmarks 😊. Try adding some
                    </h1>
                    <Link className='text-xl md:text-2xl font-bold hover:underline' to={'/jobs'}>Go back</Link>
                </div>
            </PageContentLayout>
        </PageLayout>
    )
}

export default BookmarkPage
