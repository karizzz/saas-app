import React from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from 'next/image'

const CTA = () => {
  return (
    <article className="cta-section">
      <button className='btn-primary w-full justify-center bg-yellow-400 hover:bg-yellow-300  text-black font-bold'>

        Start Learning your way

      </button>
      <h1>
        Build A Personalize Learning Companion
      </h1>
      <h2>
        Pick a name, subject, voice & personality -
        and start learning through voice converstations that
        feel natural and fun
      </h2>
      <Image src ="images/cta.svg" alt = "cta" width = {500} height = {500}/>
      
      
      <button className = 'btn-primary w-full justify-center bg-red-400 hover:bg-red-300 hover:bg-black text-white font-bold'>
        Build New Companion
      </button>
    </article>
  )
}

export default CTA