
import React from 'react'

interface BoxProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<BoxProps> = ({children}) => {
    return (
        <div>Box</div>
    )
}

export default Box