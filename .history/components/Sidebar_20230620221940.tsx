'use client';

import React, { Children, useMemo } from 'react'
import {usePathname} from 'next/navigation'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: "Home",
            active: pathname !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: "Search",
            active: pathname === '/search',
            href: '/search'
        }
    ],[pathname]);

    return (
        <div className='flex h-full'>
            <div className='hidden md:flex flex-col '>

            </div>
        </div>
    )
}

export default Sidebar