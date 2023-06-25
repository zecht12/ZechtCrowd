'use client'

import React, { Children } from 'react'

interface Sidebar {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar