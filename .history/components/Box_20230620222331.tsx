import React from 'react'
interface Box {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
    return (
        <div>Box</div>
    )
}

export default Box