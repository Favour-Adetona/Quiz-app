'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { categories } from '@/lib/data'
import CategorySelect from './CategorySelect'
import { useSelectCategory } from '@/store/useSelectCategory'
import { useRouter } from 'next/navigation'


const StartQuizDialog = () => {
  const [value, setValue] = React.useState(categories[0]);
  const { updateCategory } = useSelectCategory()
  const router = useRouter()
  const handleChange = (value: string) => {
    setValue(value);
    updateCategory(value)
  };
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="outline" className='bg-white py-2 w-36 rounded-sm flex justify-start mt-3 font-inria font-bold lg:py-6 lg:text-xl  '>Start Quiz </Button>
      </DialogTrigger>
      <DialogContent className='bg-white p-6 rounded-sm max-w-96 lg:!py-6'>
        <DialogHeader>
          <DialogTitle className='font-inria text-xl font-bold text-quizBlue'>Start Quiz</DialogTitle>
          <DialogDescription>
            Start a new quiz session and test your knowledge on various topics!
          </DialogDescription>
        </DialogHeader>
        <div className='mt-4'>
          <CategorySelect value={value} onChange={handleChange} data={categories} />
        </div>
        <DialogFooter>
          <Button onClick={() => {
            router.push(`/dashboard/quiz`)
          }}  className='bg-quizBlue text-white py-2'>Start Quiz</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    
  )
}

export default StartQuizDialog
