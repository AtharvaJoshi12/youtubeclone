import React from 'react'
import "../SidebarRow.css"

export default function SidebarRow({selected, Icon, title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow_icon"/>
            <h2 className="sidebarRow_title" >{title}</h2> 
        </div>
    )
}
