import React from 'react'
import {IconArrowUp, IconArrowUpRight, IconDots} from "@tabler/icons-react";
import Link from "next/link"

const Footer = () => {
    const links = [
        {
            name:'Home',
            href:'/'
        },
        {
            name:'Internet',
            href:'/'
        },
        {
            name:'Electrical',
            href:'/'
        },
        {
            name:'Security',
            href:'/'
        },
        {
            name:'About us',
            href:'/'
        },
    ]

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

    // get full date in this format Thursday, June 18, 2026
    const getFullDate = () => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        return now.toLocaleDateString('en-US', options);
    }

    return (
        <footer>
            <div className={'container mx-auto pt-10 px-4'}>
                <div className="grid md:grid-cols-9 gap-10 pb-16">
                    <div className="md:col-span-6">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <IconDots size={50}/> <span className="text-neutral-500">Navigation</span>
                            </div>

                            <div className={'flex flex-col'}>
                                {links.map((link,idx)=>(
                                    <Link href={link.href} key={link.name+idx}
                                          className="text-neutral-100 bg-transparent hover:bg-white hover:text-black py-4 hover:px-2 duration-300 transition-all">
                                        <p className="text-2xl md:text-4xl">
                                            {link.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <IconDots size={50}/> <span className="text-neutral-500">Main Office</span>
                            </div>
                            <p className="text-neutral-100">
                                123 Main Street, Anytown, USA
                            </p>
                            <p className="text-neutral-100">
                                Phone: +254 722 966 576
                            </p>
                            <p className="text-neutral-100">
                                Email:
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-5 pb-5">
                    <div>
                        <p className={'text-[15px] font-medium'}>Nairobi City {" "} {getCurrentTime()}</p>
                        <p className={'text-[15px] font-medium'}>{getFullDate()}</p>

                    </div>

                    <div>
                        <Link href={'/'}>
                            <p className={'text-[15px] font-medium flex items-center space-x-4'}>Back to top <IconArrowUp/></p>
                            <p className={'text-[15px] font-medium'}>All rights reserved</p>

                        </Link>
                    </div>

                    <div>
                        <p className={'text-[15px] font-medium'}>&copy;Category7+ Tech Group ltd {new Date().getFullYear()}</p>
                        <p className={'text-[15px] font-medium flex items-center'}>Build and ship modern websites <IconArrowUpRight/></p>

                    </div>

                </div>

            </div>

            <div className="flex items-center justify-center pt-20 pb-14">
                <h1 className={'opacity-50 text-5xl font-extrabold lg:text-[175px] tracking-wide  py-10 bg-linear-to-t from-neutral-600 to-neutral-900 bg-clip-text text-transparent'}>Category 7</h1>
            </div>
        </footer>

    )
}
export default Footer
