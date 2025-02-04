// import Image from 'next/image'
import React from 'react'
import StartQuizDialog from './StartQuizDialog'
import ResponsiveImage from './ResponsiveImage'
import hourglass from "@/public/hourglass.png"

const StartQuiz = () => {
  return (
    <div className='bg-[#46A7F5] w-full px-4 py-5 lg:py-8 rounded-md flex gap-4 items-end justify-between'>
      <div>
        <h3 className='text-white font-inria text-xl font-bold !text-left'>Get ready to test your knowledge</h3>
        <StartQuizDialog />
      </div>
      <div className='min-w-20 w-20 lg:w-[7.5rem]'>
        <ResponsiveImage src={hourglass} alt="hourglass" layout='responsive' width={400} height={400} />
      </div>
    </div>
  )
}

export default StartQuiz
