import React from 'react'

import PageLayout from '../layouts/PageLayouts/PageLayout/PageLayout'
import { PageContentLayout } from '../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import PageHeaderWrapper from '../layouts/PageLayouts/PageHeaderLayout/PageHeader.wrapper'
import HeaderComponent from '../components/Header/HeaderComponents/HeaderComponent'
import { TopSectionWrapper } from '../layouts/PageLayouts/TopSectionLayout/TopSectionLayout'
import { Link } from 'react-router'

const BookmarkPage: React.FC = () => {
    return (
        <PageLayout>
            <TopSectionWrapper>
                <PageHeaderWrapper description=''>
                    <HeaderComponent preHeader="" header="Bookmarks" />
                </PageHeaderWrapper>
            </TopSectionWrapper>
            <PageContentLayout>
                <div className='text-center text-2xl font-bold py-32 pb-32'>
                    <h1>You have no Bookmarks 😊. Try adding some</h1>
                    <br />
                    <br />
                    <Link to='/' className='font-thin hover:underline'>Go back</Link>
                </div>
            </PageContentLayout>
        </PageLayout>
    )
}

export default BookmarkPage
