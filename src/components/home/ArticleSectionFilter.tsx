import { useAppDispatch, useAppSelector } from '@inet/app/hooks'
import Button from '@inet/components/shared/Button'
import { setArticleCreatedWithin } from '@inet/redux/slices/articleSlice'
import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'

const articleCreatedWithin = Object.values(ArticleCreatedWithin)

const ArticlaSectionFilter = () => {
  const currentCreatedWithin = useAppSelector(
    (state) => state.articleReducer.articleCreatedWithin,
  )
  const dispatch = useAppDispatch()

  const handleClick = (createdWithin: ArticleCreatedWithin) => {
    dispatch(setArticleCreatedWithin(createdWithin))
  }

  return (
    <>
      {articleCreatedWithin.map((createdWithin) => (
        <Button
          key={createdWithin}
          title={createdWithin}
          isSizeCustom={true}
          fillType={
            createdWithin === currentCreatedWithin ? 'filled' : 'outline'
          }
          className="h-9 px-3 capitalize text-tiny"
          onClick={() => handleClick(createdWithin)}
        />
      ))}
    </>
  )
}

export default ArticlaSectionFilter
