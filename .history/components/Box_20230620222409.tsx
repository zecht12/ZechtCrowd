'use client';

import React from 'react'

interface BoxProps {
    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({children}) => {
    return (
        <div>Box</div>
    )
}

export default Box