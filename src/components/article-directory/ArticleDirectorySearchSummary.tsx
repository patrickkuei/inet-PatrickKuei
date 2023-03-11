import Dot from '../shared/Dot'

export interface IArticleDirectorySearchSummaryProps {
  keyword: string
  totalCount: number
}

export default function ArticleDirectorySearchSummary({
  keyword,
  totalCount,
}: IArticleDirectorySearchSummaryProps) {
  if (!keyword || !totalCount) {
    return null
  }

  return (
    <div className="mt-2 text-left text-gray-300">
      The articles related to{' '}
      <span className="text-secondary-500">&quot;{keyword}&quot;</span>
      <Dot className="text-gray-300 mx-1" overwrite={true} />
      <span className="text-tiny text-gray-300">{totalCount} articles</span>
    </div>
  )
}
