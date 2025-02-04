
'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CategorySelectProps {
  value: string,
  onChange: (value: string) => void
  data: string[]
}

const CategorySelect = ({ value, onChange, data }: CategorySelectProps) => {
  return (
    <Select onValueChange={(value: string) => {
      onChange(value)}} value={value}>
    <SelectTrigger className="w-[180px] !border-none !shadow-md bg-white !outline-none">
      <SelectValue   />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Select Category</SelectLabel>
        {data.map((item) => (
          <SelectItem onChange={() => onChange(item)} key={item} value={item} className='capitalize'>
            {item} 
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default CategorySelect
