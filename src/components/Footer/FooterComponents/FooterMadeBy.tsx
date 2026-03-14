import React from 'react'
interface IMadeBy {
    made_by: string
}
const FooterMadeBy: React.FC<IMadeBy> = ({ made_by }) => {
    return <b>{made_by}</b>
}
export default FooterMadeBy
