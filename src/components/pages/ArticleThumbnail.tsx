import React from 'react'
import { EyeIcon, HeartIcon } from '../../icons'
import { IArticle } from '../../mockData/articles'
import Dot from '../shared/Dot'

type Props = {
  article: IArticle
  createdAtDuration: string
}

export default function ArticleThumbnail({
  article,
  createdAtDuration,
}: Props) {
  return (
    <div className="text-left h-24 flex flex-row gap-x-2">
      <div className="w-24 shrink-0">
        <img src={article.coverImageUrl} alt={article.title} />
      </div>
      <div className="flex flex-col grow gap-y-1 min-w-0">
        <div className="flex items-center gap-x-1 text-xs">
          <div className="flex items-center gap-x-1">
            <img
              className="w-4 h-4 border border-gray-100 rounded inline"
              src={article.category.imageUrl}
              alt={article.category.code}
            />
            <span>{article.category.code}</span>
          </div>
          <Dot />
          <div className="flex items-center gap-x-1">
            <img
              className="w-4 h-4 border border-gray-100 rounded-full inline"
              src={article.author.avatarUrl}
              alt={article.author.name}
            />
            <span>{article.category.code}</span>
          </div>
          <Dot />
          <span>{createdAtDuration}</span>
        </div>
        <div>
          <div className="text-tiny font-bold">{article.title}</div>
          <div className="text-xs text-gray-300 truncate">{article.body}</div>
          <div className="text-mini flex gap-x-4">
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
    </div>
  )
}
