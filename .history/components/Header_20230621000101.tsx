'use client';

import React from 'react'

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({children,}) => {
    return (
        <div>Header</div>
    )
}

export default Header