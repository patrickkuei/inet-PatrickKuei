import { AnonymIcon, EyeIcon, HeartIcon } from '@inet/icons'
import { IArticleViewModel } from '@inet/services/types/articles/i-article.view-model'
import Dot from '../shared/Dot'

type Props = {
  article: IArticleViewModel
  createdAtDuration: string
}

export default function ArticleThumbnail({
  article,
  createdAtDuration,
}: Props) {
  return (
    <div className="text-left h-24 flex flex-row gap-x-2">
      <div className="w-24 shrink-0 bg-cyan-50 flex items-center justify-center">
        <img src={article.coverImageUrl} alt={article.title} />
      </div>
      <div className="flex flex-col grow gap-y-1 min-w-0">
        <div className="flex items-center gap-x-1 text-xs">
          <div className="flex items-center gap-x-1 shrink-0">
            <img
              className="w-4 h-4 border border-gray-100 rounded inline"
              src={article.category.imageUrl}
              alt={article.category.code}
            />
            <span>{article.category.code}</span>
          </div>
          <Dot />
          <div className="flex items-center gap-x-1 min-w-0">
            {article.author.avatarUrl ? (
              <img
                className="w-4 h-4 border border-gray-100 rounded-full inline"
                src={article.author.avatarUrl}
                alt={article.author.name}
              />
            ) : (
              <AnonymIcon />
            )}
            <span className="truncate">{article.author.name}</span>
          </div>
          <Dot />
          <span className="whitespace-nowrap">{createdAtDuration}</span>
        </div>
        <div>
          <div className="w-fit text-tiny font-bold line-clamp-2 hover:text-primary-400 hover:cursor-pointer">
            {article.title}
          </div>
          <div className="text-xs text-gray-300 truncate">{article.body}</div>
        </div>
        <div className="text-mini flex grow items-end gap-x-4">
          <span className="flex gap-x-1">
            <EyeIcon />
            {article.views}
          </span>
          <span className="flex gap-x-1">
            <HeartIcon />
            {article.likes}
          </span>
        </div>
      </div>
    </div>
  )
}
