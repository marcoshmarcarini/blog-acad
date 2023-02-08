import Link from "next/link"
import React from "react"

const AppBar = () => {
    return (
        <div>
            <Link href={`/`}>Home</Link>
            <Link href={`/admin`}>Admin</Link> 
            <Link href={`/admin/panel`}>Panel</Link>  
        </div>
    )
}

export default AppBar