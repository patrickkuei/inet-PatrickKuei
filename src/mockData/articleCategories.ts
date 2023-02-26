import animal from '@inet/images/animal.jpg'
import chat from '@inet/images/chat.jpg'
import food from '@inet/images/food.jpg'
import popular from '@inet/images/popular.jpg'
import travel from '@inet/images/travel.jpg'
import { ICategories } from '@inet/services/types/articles/i-categories'

const mockCategories: ICategories = [
  {
    key: 'popular',
    imgSrc: popular,
  },
  {
    key: 'chat',
    imgSrc: chat,
  },
  {
    key: 'animal',
    imgSrc: animal,
  },
  {
    key: 'food',
    imgSrc: food,
  },
  {
    key: 'travel',
    imgSrc: travel,
  },
]

export default mockCategories
