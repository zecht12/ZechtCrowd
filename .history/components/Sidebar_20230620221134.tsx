'use client';

import React, { Children, useMemo } from 'react'
import {usePathname} from 'next/navigation'

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            label: "Home",
            active: pathname.
        }
    ],[]);
    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar