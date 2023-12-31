'use client';

import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({icon, label, active, href}) => {
    return (
        <Link href={href} className={tw}>
            Sidebar Item
        </Link>
    )
}

export default SidebarItem