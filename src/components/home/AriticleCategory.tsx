import { useAppDispatch } from '@inet/app/hooks'
import popularUrl from '@inet/images/popular.jpg'
import { setArticleCategory } from '@inet/redux/slices/articleSlice'
import { useGetArticleCategoriesQuery } from '@inet/services/apiSlice'
import {
  IArticleCategoriesResponse,
  IArticleCategoryViewModel,
} from '@inet/services/types/shared/i-article-category.view-model'
import clsx from 'clsx'
import { useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

type Props = {}

const useUpdateCategory = (
  response: IArticleCategoriesResponse | undefined,
  isLoading: boolean,
) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const location = useLocation()
  const pathnameArray = location.pathname.split('/')
  const categoryIndex = pathnameArray.indexOf('category')

  useEffect(() => {
    if (categoryIndex > -1) {
      const currentCategoryName = pathnameArray[categoryIndex + 1]

      if (!isLoading) {
        const currentCategory = response!.find(
          (category) => category.code === currentCategoryName,
        )

        if (currentCategory) {
          dispatch(setArticleCategory(currentCategory))
        } else {
          navigate('category/popular')
        }
      }
    }
  }, [isLoading])
}

export default function AriticleCagegory({}: Props) {
  const dispatch = useAppDispatch()

  const handleCategoryClick = (category: IArticleCategoryViewModel) => {
    dispatch(setArticleCategory(category))
  }

  const getCategoryClassName = (isActive: boolean): string => {
    const colorClasses = isActive
      ? 'text-white bg-primary-500'
      : 'hover:bg-primary-100'

    return clsx(
      'flex items-center py-1 px-2 rounded-lg hover:cursor-pointer',
      colorClasses,
    )
  }

  const { data: response, isError, isLoading } = useGetArticleCategoriesQuery()

  useUpdateCategory(response, isLoading)

  return (
    <>
      <div className="mb-6 text-2xl font-bold uppercase whitespace-nowrap">
        board
      </div>
      {isLoading ? (
        <div>...is loading</div>
      ) : (
        <div className="w-full">
          <ul className="space-y-4">
            <NavLink
              to="category/popular"
              className={({ isActive }) => getCategoryClassName(isActive)}
              onClick={() =>
                handleCategoryClick({
                  code: 'popular',
                  id: 0,
                  imageUrl: popularUrl,
                })
              }
            >
              <img width={32} height={32} src={popularUrl} alt="popular" />
              <span className="ml-4">popular</span>
            </NavLink>
            {response!.map(({ code: category, id, imageUrl }) => (
              <NavLink
                key={category}
                to={`category/${category}`}
                className={({ isActive }) => getCategoryClassName(isActive)}
                onClick={() =>
                  handleCategoryClick({
                    code: category,
                    id,
                    imageUrl,
                  })
                }
              >
                <img
                  width={32}
                  height={32}
                  src={imageUrl}
                  alt={category}
                  className="rounded-2xl"
                />
                <span className="ml-4">{category}</span>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
