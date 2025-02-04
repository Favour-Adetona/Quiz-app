import React from 'react'
import { Card } from './ui/card'
import Link from "next/link";
import { formatDateWord } from '@/lib/FormatDate';
// import type {  QuizHistory,  } from "@/types"

type QuizHistory = {
  category: string
  quiz_id: string
  percentage: number
  score: number
  total_questions: number
  completed_at: string
}
  

interface props {
  data: QuizHistory[]
}

const HistoryCard = ({ data }: props) => {

  const el = data.map((item, index) => {
    return <Row key={index} item={item} />
  })
  return (
    <Card className='px-5 mt-8 lg:mt-12 py-4'>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">History</h2>
          <Link
            href="/history"
            className="text-sm text-blue-500 hover:underline"
          >
            See more
          </Link>
        </div>
        <div className='mt-4'>
          {el.length > 0 ? el : <div className='text-center font-inria font-bold text-2xl pb-4'>No history found</div>}
        </div>
      </div>
    </Card>
  )
}

export default HistoryCard


const Row = ({ item }: { item: QuizHistory }) => {
  return(
    <div
      key={item.quiz_id}
      className="flex items-center justify-between p-4"
    >
      <div>
        <div className="font-medium">Ref: {item.quiz_id}</div>
        <div className="text-sm text-gray-500">{formatDateWord(item.completed_at)}</div>
      </div>
      <div className="text-sm">{item.score}: {item.total_questions}</div>
      <div className="flex items-center gap-4">
        
        <div className="font-semibold">{item.score}%</div>
      </div>
    </div>
  )
}