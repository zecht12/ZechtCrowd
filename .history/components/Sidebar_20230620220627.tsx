'use client';

import React, { Children } from 'react'

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathName = usePathName
    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar