import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CompanionComponentProps{
    id : string
    name : string
    topic : string
    subject : string
    duration : number
    color : string
}

const CourseCards = ({id, name, topic, subject, duration, color}:CompanionComponentProps) => {
  return (
    //Ui creation
    <article className = "companion-card" style = {{backgroundColor : color}}>
        <div className = " flex justify-between items-center">
            <div className = "bg-black text-white rounded-4xl text-sm px-2 py-1 capitalize " >{subject}</div>
            <button className = "px-2 bg-black rounded-4xl flex items-center h-full aspect-square cursor-pointer">
                <Image src="/icons/bookmark.svg" alt = "bookmark" width = {12.5} height = {15} />
            </button>

        </div>
        <h2 className= "text-2xl font-bold">{name}</h2>
        <h3 className = "text-sm ">{topic}</h3>
        <div className = "flex justify-between items-center ">
            <Image src ="/icons/clock.svg" alt = "clock" width ={12.5} height = {11}/>
            <p className='text-sm'>{duration} minutes</p>
        </div>

        <Link href = {`/CourseLibrary/${id}`} className = "btn-primary w-full justify-center">
            View Course
        </Link>

    </article>
  )
}

export default CourseCards