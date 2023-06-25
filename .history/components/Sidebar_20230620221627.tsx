'use client';

import React, { Children, useMemo } from 'react'
import {usePathname} from 'next/navigation'
import {HiHome} from ''

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icons: HiHome,
            label: "Home",
            active: pathname !== '/search',
            href: '/'
        },
        {
            label: "Search",
            active: pathname === '/search',
            href: '/search'
        }
    ],[pathname]);

    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar