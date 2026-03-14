import HeaderComponent from "../../../components/Header/HeaderComponents/HeaderComponent"
import PageHeaderWrapper from "./PageHeaderWrappers.tsx/PageHeader.wrapper"


export const Header: React.FC = () => {
    return (
        <PageHeaderWrapper description="this is description">
            <HeaderComponent preHeader="IT" header="JobsGeorgia" />
        </PageHeaderWrapper>
    )
}