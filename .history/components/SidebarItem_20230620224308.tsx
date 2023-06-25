'use client';

import React from 'react'

interface SidebarProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<> = () => {
    return (
        <div>SidebarItem</div>
    )
}

export default SidebarItem