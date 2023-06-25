'use client';

import React, { Children, useMemo } from 'react'
import {usePathname} from 'next/navigation'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Box from './Box';

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
            <div className='hidden md:flex flex-col gap-y-2 bg-black w-[300px] h-full p-2'>
                <Box>
                    <div className='flex flex-col gap-y-4 px-5 py-4'>
                        {routes.map(())}
                    </div>
                </Box>
                <Box className='overflow-y-auto h-full'>
                    Song Library
                </Box>
            </div>
        </div>
    )
}

export default Sidebar