"use client"
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'


const navItems = [
    {label : 'Home', href: '/'},
    {label : 'Course Library', href: '/CourseLibrary'},
    {label : 'My Profile', href: '/MyProfile'},
    {label : 'New Course Build', href: '/CourseLibrary/newCourseBuild'},
]
const NavItems = () => {

    const pathname = usePathname();
  return (
    <nav className = "flex items-center gap-4">
        {navItems.map(({label, href})=> (
            <Link href={href} key={label} 
            className = {cn(pathname ===href && 'text-primary font-semibold')}>
            {label}</Link>
        ))}
    </nav>
  )
}

export default NavItems