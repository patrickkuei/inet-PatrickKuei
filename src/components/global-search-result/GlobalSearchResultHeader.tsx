import Dot from '../shared/Dot'

export interface IGlobalSearchResultHeaderProps {
  keyword: string
  totalCount: number
}

export default function GlobalSearchResultHeader({
  keyword,
  totalCount,
}: IGlobalSearchResultHeaderProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-row gap-2 items-center">
        <span className="text-10.5">Search Result</span>
        <Dot className="text-gray-300" overwrite={true} />
        <span className="text-tiny text-gray-300">{totalCount} articles</span>
      </div>
      {totalCount > 0 && (
        <div className="text-gray-300 mt-2">
          Articles related to{' '}
          <span className="text-secondary-500">&quot;{keyword}&quot;</span>
        </div>
      )}
    </div>
  )
}
