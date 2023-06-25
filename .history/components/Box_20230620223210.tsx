'use client';

import React from 'react'

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({children}) => {
    return (
        <div className={}>
            {children}
        </div>
    )
}

export default Box