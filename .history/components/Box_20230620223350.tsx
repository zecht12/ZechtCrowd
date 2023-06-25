'use client';

import React from 'react'
import { twMerge } from 'tailwind-merge';

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({children}) => {
    return (
        <div className={twMerge(`bg-neutral-900 rounded-lg w-full h-fit`, class)}>
            {children}
        </div>
    )
}

export default Box