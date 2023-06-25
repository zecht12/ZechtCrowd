'use client'

import React, { Children } from 'react'

interface Sidebar {
    children: React.ReactNode;
}

const Sidebar = () => {
    return (
        <div>
            {children}
        </div>
    )
}
