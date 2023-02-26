export interface ICategory {
  key: string
  imgSrc: string
}

export type ICategoriesRespont = [
  {
    id: number
    code: string
    imageUrl: string
  },
]

export type ICategories = ICategory[]
