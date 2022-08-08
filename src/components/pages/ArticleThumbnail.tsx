import React from 'react'
import { IArticle } from '../../mockData/articles'

type Props = {
  article: IArticle
}

const Dot = () => <span className="text-gray-400">•</span>

export default function ArticleThumbnail({ article }: Props) {
  return (
    <div className="text-left h-24 flex flex-row gap-x-2">
      <div className="w-24 shrink-0">
        <img src={article.coverImageUrl} alt={article.title} />
      </div>
      <div className="flex flex-col grow gap-y-1">
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
          <span>{new Date(article.createdAt).toLocaleDateString()}</span>
        </div>
        <div>
          <div className="text-tiny font-bold">{article.title}</div>
          <div className="text-xs text-gray-300">{article.body}</div>
          <div className="text-mini">
            <span>{article.views}</span>
            <span>{article.likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
