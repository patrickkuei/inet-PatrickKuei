import clsx from 'clsx'

import { useAppDispatch, useAppSelector } from '@inet/app/hooks'
import popularUrl from '@inet/images/popular.jpg'
import { setArticleCategory } from '@inet/redux/slices/articleSlice'
import { useGetArticleCategoriesQuery } from '@inet/services/apiSlice'
import { IArticleCategoryViewModel } from '@inet/services/types/shared/i-article-category.view-model'

type Props = {}

export default function AriticleCagegory({}: Props) {
  const currentCategory = useAppSelector(
    (state) => state.articleReducer.currentCategory,
  )
  const dispatch = useAppDispatch()

  const handleCategoryClick = (category: IArticleCategoryViewModel) => {
    dispatch(setArticleCategory(category))
    window.scrollTo(0, 0)
  }

  const getCategoryClassName = (category: string): string => {
    const isActive = category === currentCategory.code

    const colorClasses = isActive
      ? 'text-white bg-primary-500'
      : 'hover:bg-primary-100'

    return clsx(
      'flex items-center py-1 px-2 rounded-lg hover:cursor-pointer',
      colorClasses,
    )
  }

  const { data: response, isError, isLoading } = useGetArticleCategoriesQuery()

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
            {response!.map(({ code: category, id, imageUrl }) => (
              <li
                key={id}
                className={getCategoryClassName(category)}
                onClick={() =>
                  handleCategoryClick({ code: category, id, imageUrl })
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
