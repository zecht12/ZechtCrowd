'use client'

import React, { Children } from 'react'

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({chil}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar