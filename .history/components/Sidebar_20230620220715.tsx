'use client';

import React, { Children } from 'react'
import {us}

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();
    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar