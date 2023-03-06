import { useAppSelector } from '@inet/app/hooks'
import clsx from 'clsx'
import ArticleSectionArticleList from './ArticleSectionArticleList'
import ArticleSectionTitle from './ArticleSectionTitle'

export default function Articles() {
  const {
    code: category,
    id,
    imageUrl,
  } = useAppSelector((state) => state.articleReducer.currentCategory)

  return (
    <div className="flex flex-col p-6 grow min-w-0 max-w-180 desktop:bg-white desktop:mx-12 desktop:py-6 desktop:px-8 desktop:rounded-lg">
      <ArticleSectionTitle category={category} imageUrl={imageUrl} />
      <div className={clsx('flex flex-col py-6 gap-5', false && 'border-t')}>
        <ArticleSectionArticleList />
      </div>
    </div>
  )
}
