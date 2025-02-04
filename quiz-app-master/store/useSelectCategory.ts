import { categories } from "@/lib/data"
import { create } from "zustand"



interface state {
  category: string
}


const InitialState: state = {
  category: categories[0]
}

interface Actions {
  updateCategory: (category: string) => void
}

export const useSelectCategory = create<state & Actions>((set) => ({
  ...InitialState,
  updateCategory: (category) => set({ category }),
}))