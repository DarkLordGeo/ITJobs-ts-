import { Link } from 'react-router'

import { PageContentLayout } from '../../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import MainPageLayout from '../../layouts/PageLayouts/PageLayout/PageLayout'

const Error = () => {
    return (
        <MainPageLayout>
            <PageContentLayout>
                <div className='h-screen flex items-center justify-center flex-col'>
                    <h1 className='text-2xl md:text-4xl mb-12'>
                        Couldn't find what you was looking for?
                    </h1>
                    <Link className='text-xl md:text-2xl font-bold hover:underline' to={'/jobs'}>Go back</Link>
                </div>
            </PageContentLayout>
        </MainPageLayout>
    )
}

export default Error
