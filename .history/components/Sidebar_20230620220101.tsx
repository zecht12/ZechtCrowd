'use client'

import React, { Children } from 'react'

interface Sidebar {
    children: React.ReactNode;
}

export default const Sidebar =() => {
    return (
        <div>
            {children}
        </div>
    )
}
