import React from 'react'
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
import Layout from '@/components/layout'
import { cookies } from 'next/headers'
import ProfileIntro from '@/components/ui/ProfileIntro'
import StartQuiz from '@/components/StartQuiz'
import HistoryCard from '@/components/HistoryCard'

const DashboardPage = async () => {
  const cookiesStore = cookies()
  const token = cookiesStore.get('token')?.value

  const data = await fetch(`https://quiz-project-dpaw.onrender.com/api/profile/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    next: { tags: ['Profile'] }
  }).then((res) => res.json())

  console.log(data)
  return (
    <Layout>
      <ProfileIntro 
        username={data?.data?.username}
        level={data?.data?.current_level}
      />
      <div className="max-w-[31.9375rem] mx-auto py-12 text-center">
        <StartQuiz />
        <HistoryCard data={data?.data?.quiz_history} />
        {/* <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz App</h1>
        <p className="text-xl mb-8">Test your knowledge on various topics!</p>
        <Link href="/dashboard/quiz">
          <Button size="lg">Start a Quiz</Button>
        </Link> */}
      </div>
    </Layout> 
  )
}

export default DashboardPage
