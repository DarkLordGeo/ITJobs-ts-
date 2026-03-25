import React from 'react'
import PageLayout from '../layouts/PageLayouts/PageLayout/PageLayout'
import { PageContentLayout } from '../layouts/PageLayouts/PageContentLayout/PageContentLayout'
import PageHeaderWrapper from '../layouts/PageLayouts/PageHeaderLayout/PageHeader.wrapper'
import HeaderComponent from '../components/Header/HeaderComponents/HeaderComponent'
import { TopSectionWrapper } from '../layouts/PageLayouts/TopSectionLayout/TopSectionLayout'

const AboutPage: React.FC = () => {
    return (
        <PageLayout>
            <TopSectionWrapper>
                <PageHeaderWrapper description=''>
                    <HeaderComponent preHeader="" header="About" />
                </PageHeaderWrapper>
            </TopSectionWrapper>
            {/* <TopSection /> */}

            {/* <MainContent /> */}
            <PageContentLayout>
                <div className='p-5 rounded-md w-full text-white flex gap-8 flex-col h-full overflow-y-auto mt-32'>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 justify-between">
                            <div>
                                <h1 className='md:text-[2.5rem] lg:text-[2.5rem] font-bold'
                                >📌 Project</h1>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div>
                            <p className="mb-5">
                                This project was built for educational purposes and focuses on scraping job listings from <a href="https://jobs.ge" target="_blank" className="hover:underline">Jobs.ge</a>.
                                The stack includes:
                            </p>
                            <ul>
                                <li>
                                    <span className="font-bold mr-3 text-[15px] md:text-[20px]">Frontend:</span>
                                    React, Tailwind CSS, shadcn/ui
                                </li>
                                <li>
                                    <span className="font-bold mr-3 text-[15px] md:text-[20px]">
                                        Backend:
                                    </span>
                                    Flask, BeautifulSoup Srapy, (for scraping)
                                </li>
                                <li>
                                    <span className="font-bold mr-3 text-[15px] md:text-[20px]">
                                        Deployment:
                                    </span>
                                    Render (backend), Netlify (frontend)
                                </li>
                                <li>
                                    <span className="font-bold mr-3 text-[15px] md:text-[20px]">
                                        Automation:
                                    </span>
                                    GitHub Actions for scheduled scripts
                                </li>
                            </ul>
                            <p className="mt-5">
                                This project shows how curiosity can turn simple tools into meaningful solutions.
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5  justify-between w-full" >
                            <div>
                                <h1 className=' md:text-[2.5rem] lg:text-[2.5rem] font-bold'
                                >🎯 Vision</h1>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div>
                            <p className="mb-5">
                                The goal is simple: make job listings easier to search and access.
                                By combining modern frontend design with a scraping-powered backend, this project demonstrates how free tools can solve real-world problems with a clean, user-friendly interface
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5  justify-between w-full">
                            <div>
                                <h1 className=' md:text-[2.5rem] lg:text-[2.5rem] font-bold'
                                >🙋 About Me</h1>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div>
                            <p className="mb-5">
                                I’m a passionate developer constantly learning and exploring full-stack development. This project represents my growth journey, my ability to integrate different technologies, and my determination to evolve as a developer.
                            </p>
                        </div>
                    </div>



                </div>
            </PageContentLayout>
        </PageLayout>
    )
}

export default AboutPage
