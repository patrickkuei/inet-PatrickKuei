import Dot from '@inet/components/shared/Dot'
import { AnonymIcon, EyeIcon, HeartIcon } from '@inet/icons'
import { IArticleViewModel } from '@inet/services/types/articles/i-article.view-model'

export interface IArticlePreviewProps {
  article: IArticleViewModel
  highlightText?: string
  createdAt: string
}

const getMatchedSubstringIndex = (
  rowString: string | undefined,
  rowSubstring: string | undefined,
) => {
  if (!rowString || !rowSubstring) {
    return -1
  }

  const [string, substring] = [
    rowString.toLowerCase(),
    rowSubstring.toLowerCase(),
  ]

  for (let i = 0; i < string.length; i++) {
    let matchedIdx = -1
    let idx = 0
    let matched = true

    if (string[i] === substring[idx]) {
      matchedIdx = i

      while (idx < substring.length - 1) {
        if (string[++i] !== substring[++idx]) {
          matched = false
          break
        }
      }

      if (matched) {
        return matchedIdx
      }

      i--
    }
  }

  return -1
}

export default function ArticlePreview({
  article,
  highlightText,
  createdAt,
}: IArticlePreviewProps) {
  const getMarkedJsx = (string: string) => {
    const matchedIdx = getMatchedSubstringIndex(string, highlightText)

    if (matchedIdx < 0) {
      return string
    } else {
      return (
        <>
          {string.slice(0, matchedIdx)}
          <span className="text-secondary-500">
            {string.slice(matchedIdx, matchedIdx + highlightText!.length)}
          </span>
          {string.slice(matchedIdx + highlightText!.length)}
        </>
      )
    }
  }

  return (
    <div className="text-left h-24 flex flex-row gap-x-2">
      <div className="w-24 shrink-0 bg-cyan-50 flex items-center justify-center">
        <img
          className="max-h-full"
          src={article.coverImageUrl}
          alt={article.title}
        />
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
            <span className="truncate">
              {getMarkedJsx(article.author.name)}
            </span>
          </div>
          <Dot />
          <span className="whitespace-nowrap">{createdAt}</span>
        </div>
        <div>
          <div className="w-fit text-tiny font-bold line-clamp-2 hover:text-primary-400 hover:cursor-pointer">
            {getMarkedJsx(article.title)}
          </div>
          <div className="text-xs text-gray-300 truncate">
            {getMarkedJsx(article.body)}
          </div>
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
