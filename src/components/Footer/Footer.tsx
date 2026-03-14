
import FooterMadeBy from "./FooterComponents/FooterMadeBy"
import FooterSocials from "./FooterComponents/FooterSocials"

const Footer = () => {
    return (
        <>
            <footer className='gap-5 text-white flex flex-col items-center justify-center h-37.5 mt-5 border-border-gray border-t-2'>
                <FooterMadeBy made_by={"Lasha ergeshidze"} />
                <FooterSocials />
            </footer>
        </>
    )
}

export default Footer