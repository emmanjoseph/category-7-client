import React from 'react'
import {NavbarDemo} from "@/components/navbar";

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <main>
            <NavbarDemo/>
            {children}
        </main>
    )
}
export default Layout
