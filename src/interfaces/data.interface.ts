export interface IData {
    company: string,
    date: string[],
    description: string[],
    job_id: string,
    job_link: string,
    position: string,
    isBookmark: boolean,
    index?: number
}



// company
// :
// "\t\n\t\t\t\t\t\t\tსაქართველოს ბანკი\n\t\t\t\t\t\t"
// date
// :
// (2) ['<b>20 ნოემბერი</b>', '<b>30 ნოემბერი</b>']
// desciption
// :
// (6) ['\n\t\t\t\t', ' პრობლემური კორპორაციული, მცირე და საშუალო სესხების მართვის დეპარტამენტი აცხადებს ვაკანსიას ', ' თანამდებობაზე.', '\r\n', '\r\nვაკანსიის დეტალური აღწერა გთხოვთ იხილოთ მოცემულ ბმულზე: ', '\n\t\t\t']
// job_id
// :
// "d221a56d-ef46-428b-8738-c93cc201d71c"
// job_link
// :
// "https://jobs.ge/ge/?view=jobs&id=683520"
// position
// :
// "უმცროსი ანალიტიკოსი