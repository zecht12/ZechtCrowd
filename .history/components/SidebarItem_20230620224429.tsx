'use client';

import React from 'react'

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = (    icon: IconType;
    label,
    active?,
    href,) => {
    return (
        <div>SidebarItem</div>
    )
}

export default SidebarItem