import popularUrl from '@inet/images/popular.jpg'
import { useGetArticleCategoriesQuery } from '@inet/services/apiSlice'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import Spinner from '../shared/Spinner'

export default function AriticleCategoryNavs() {
  const getCategoryClassName = (isActive: boolean): string => {
    const colorClasses = isActive
      ? 'text-white bg-primary-500'
      : 'hover:bg-primary-100'

    return clsx(
      'flex items-center py-1 px-2 rounded-lg hover:cursor-pointer',
      colorClasses,
    )
  }

  const { data: response, isLoading } = useGetArticleCategoriesQuery()

  return (
    <>
      <div className="mb-6 text-2xl font-bold uppercase whitespace-nowrap">
        board
      </div>
      {isLoading ? (
        <Spinner className="my-5" size="md" />
      ) : (
        <div className="w-full">
          <ul className="space-y-4">
            <NavLink
              to="/popular"
              className={({ isActive }) => getCategoryClassName(isActive)}
            >
              <img width={32} height={32} src={popularUrl} alt="popular" />
              <span className="ml-4">popular</span>
            </NavLink>
            {response!.map(({ code: categoryCode, imageUrl }) => (
              <NavLink
                key={categoryCode}
                to={`category/${categoryCode}`}
                className={({ isActive }) => getCategoryClassName(isActive)}
              >
                <img
                  width={32}
                  height={32}
                  src={imageUrl}
                  alt={categoryCode}
                  className="rounded-2xl"
                />
                <span className="ml-4">{categoryCode}</span>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
