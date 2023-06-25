'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({children, className}) => {
    const routes= useRouter();
    

    return (
        <div>Header</div>
    )
}

export default Header