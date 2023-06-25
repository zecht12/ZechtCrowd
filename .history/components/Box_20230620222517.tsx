'use client';

import React from 'react'

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({children}) => {
    return (
        <div>
            {}
        </div>
    )
}

export default Box