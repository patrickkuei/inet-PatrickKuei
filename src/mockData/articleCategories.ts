import animal from '@inet/images/animal.jpg'
import chat from '@inet/images/chat.jpg'
import food from '@inet/images/food.jpg'
import popular from '@inet/images/popular.jpg'
import travel from '@inet/images/travel.jpg'
import { IArticleCategoriesResponse } from '@inet/services/types/shared/i-article-category.view-model'

export const popularCategory = {
  id: 0,
  code: 'popular',
  imageUrl: popular,
}

const mockCategories: IArticleCategoriesResponse = [
  {
    id: 0,
    code: 'popular',
    imageUrl: popular,
  },
  {
    id: 2,
    code: 'chat',
    imageUrl: chat,
  },
  {
    id: 3,
    code: 'animal',
    imageUrl: animal,
  },
  {
    id: 4,
    code: 'food',
    imageUrl: food,
  },
  {
    id: 5,
    code: 'travel',
    imageUrl: travel,
  },
]

export default mockCategories
