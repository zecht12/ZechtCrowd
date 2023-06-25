'use client';

import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({icon, label, active, href}) => {
    return (
        <Link href={href} className={twMerge(`flex flex-row h-auto items-center w-full text-md font-medium `, active && "text-white")}>
            Sidebar Item
        </Link>
    )
}

export default SidebarItem