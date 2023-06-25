'use client';

import React from 'react'

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({chi}) => {
    return (
        <div>Header</div>
    )
}

export default Header