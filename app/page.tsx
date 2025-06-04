import CTA from '@/components/ui/CTA'
import CourseCards from '@/components/ui/CourseCards'
import CourseList from '@/components/ui/CourseList'
import { Button } from '@/components/ui/button'
import React from 'react'

/**
 * The main page of the application.
 * This component renders two sections:
 * 1. A section with a list of popular courses.
 * 2. A section with a list of all courses.
 */
const Page = () => {
  return (
    <main>
      <h1> Popular Courses</h1>
      <section className="home-section">
      <CourseCards 
        id ='123'
        name = "Neura the Brainy Explorer"
        topic = "Neural Network of the Brain"
        subject = "science"
        duration = {45}
        color = "#E5D0FF" />


      <CourseCards 
        id ='245'
        name = "The vocabulary builder"
        topic = "Language Learning"
        subject = "English"
        duration = {45}
        color = "#BDE7FF" />


      <CourseCards 
        id ='789'
        name = "The number wizard"
        topic = "Derivaties and Intergrals"
        subject = "Maths"
        duration = {45}
        color = "#FFDA6E" />
    </section>
      



      {/* Section with a list of all courses */}
      <section className="home-section">
        {/* List of courses */}
        <CourseList />
        {/* Call-to-action */}
        <CTA />
      </section>
    </main>
  );
};

export default Page