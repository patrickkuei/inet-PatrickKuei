import React from 'react'
import { IArticle } from '../../mockData/articles'

type Props = {
  article: IArticle
}

export default function ArticleThumbnail({ article }: Props) {
  return (
    <div className="text-left h-24 flex flex-row gap-x-2">
      <div className="w-24 shrink-0">
        <img src={article.coverImageUrl} alt="cover img" />
      </div>
      <div className="flex flex-col grow gap-y-1">
        <div className="text-xs">
          <span>{article.category.code}</span>
          <span>{article.author.username}</span>
          <span>{article.createdAt}</span>
        </div>
        <div>
          <div className="text-tiny font-bold">{article.title}</div>
          <div className="text-xs">{article.body}</div>
          <div className="text-mini">
            <span>{article.views}</span>
            <span>{article.likes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
