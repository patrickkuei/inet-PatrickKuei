import { useAppDispatch, useAppSelector } from '@inet/app/hooks'
import { SearchIcon } from '@inet/icons'
import {
  setIsGlobalSearch,
  setSearchKeyword,
} from '@inet/redux/slices/searchSlice'
import { IArticleResponse } from '@inet/services/types/articles/i-article.view-model'
import clsx from 'clsx'
import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../shared/Button'
import Input from '../shared/Input'
import SpinLoader from '../shared/SpinLoader'

type Props = {
  category: string
  imageUrl: string
  response: IArticleResponse | undefined
  isFetching: boolean
}

const ArticleSectionTitleCategories = ({
  category,
  imageUrl,
  response,
  isFetching,
}: Props) => {
  const dispatch = useAppDispatch()

  const [isImgLoading, setIsImgLoading] = useState(true)

  const searchInputRef = useRef<HTMLInputElement>(null)
  const [_, setSearchParams] = useSearchParams()

  const { searchKeyword, isGlobalSearch } = useAppSelector(
    (state) => state.searchReducer,
  )

  const handleSearchInputSubmit = () => {
    const searchKeyword = searchInputRef.current?.value

    if (searchKeyword) {
      dispatch(setSearchKeyword(searchKeyword))
      setSearchParams({ keyword: searchKeyword })
      dispatch(setIsGlobalSearch(false))
    }
  }

  const handleCancelClick = () => {
    dispatch(setSearchKeyword(undefined))
    setSearchParams()
    dispatch(setIsGlobalSearch(true))
  }
  return isFetching ? (
    <SpinLoader />
  ) : (
    <>
      <div className="flex flex-row mb-4 gap-6">
        <SpinLoader className={clsx('h-20 w-20', !isImgLoading && 'hidden')} />
        <img
          width={80}
          height={80}
          src={imageUrl}
          alt={category}
          className={clsx('rounded-full', isImgLoading && 'hidden')}
          onLoad={() => setIsImgLoading(false)}
        />
        <div className="text-left">
          <div className="text-10.5">{category.toUpperCase()}</div>
          <div>Articles Today: {response!.totalCount}</div>
        </div>
      </div>
      <div className="mb-3">
        <Input
          ref={searchInputRef}
          type="text"
          className="w-64 gap-x-1"
          placeholder="Search in this category"
          onSubmit={handleSearchInputSubmit}
          onCancelClick={handleCancelClick}
          cancelButtonClass="pr-1"
          cancelButtonIconClass="h-5 w-5"
          isGlobalSearchInput={false}
          suffix={
            <Button
              variant="custom"
              icon={<SearchIcon className="fill-primary-200 h-5 w-5" />}
              size="small"
              fillType="ghost"
              onClick={handleSearchInputSubmit}
            />
          }
        />
      </div>
      {!isGlobalSearch && searchKeyword && response!.data.length > 0 ? (
        <div className="pt-2 pb-3 text-left text-gray-300">
          The articles related to{' '}
          <span className="text-secondary-500">
            &quot;{searchKeyword}&quot;
          </span>
        </div>
      ) : null}
    </>
  )
}

export default ArticleSectionTitleCategories
