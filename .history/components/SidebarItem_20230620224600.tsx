'use client';

import Link from 'next/link';
import React from 'react'

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({icon, label, active, href}) => {
    return (
        <Link href={href}>
            Sidebar 
        </Link>
    )
}

export default SidebarItem