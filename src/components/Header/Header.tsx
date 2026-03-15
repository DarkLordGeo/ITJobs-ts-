import React from 'react'
// import { PageHeaderLayout } from '../../layouts/PageLayouts/PageHeaderLayout/PageHeaderLayout'
// import PageHeaderWrapper from '../../layouts/PageLayouts/PageHeaderLayout/PageHeaderWrappers.tsx/PageHeader.wrapper'
import HeaderComponent from './HeaderComponents/HeaderComponent'
import PageHeaderWrapper from '../../layouts/PageLayouts/PageHeaderLayout/PageHeader.wrapper'

const Header: React.FC = () => {
    return (
        <PageHeaderWrapper description="this is description">
            <HeaderComponent preHeader="IT" header="JobsGeorgia" />
        </PageHeaderWrapper>
    )
}

export default Header
