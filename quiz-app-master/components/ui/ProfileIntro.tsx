import Image from 'next/image'
import React from 'react'
import medal from "@/public/medal.svg"
import profile from "@/public/profile.svg"
import { levels } from '@/lib/data'


interface ProfileIntroProps {
  username: string,
  level: number
}

const ProfileIntro = ({ username, level }: ProfileIntroProps) => {
  const idx = level - 1
  return (
    <div className='flex justify-between items-center lg:hidden'>
      <div className='flex items-center gap-3'>
      <Image src={profile} alt="profile" width={40} height={40} />
        <div>
          <h3 className=' font-inria text-lg font-bold '>{username}</h3>
          <p className='text-[#636363] font-inria' >{levels[idx]}</p>
        </div>
      </div>
      <div>
        <Image src={medal} alt="medal" width={36} height={36} />
      </div>
    </div>
  )
}

export default ProfileIntro
