import { useMemo } from 'react'
import Button from './Button'

type Props = {
  currentPage: number
  totalPages: number
  currentLimit: number
  onClick: (page: number) => void
  onLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const limit = [10, 15, 20, 25, 30]

const PaginationSection = ({
  totalPages,
  onClick,
  currentPage,
  onLimitChange,
  currentLimit,
}: Props) => {
  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, idx) => idx),
    [totalPages],
  )

  return (
    <div className="mt-5 flex flex-row gap-2 justify-end">
      <select
        className="w-12 text-center"
        onChange={onLimitChange}
        value={currentLimit}
      >
        {limit.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      {pages.map((page) => (
        <Button
          key={page}
          title={(page + 1).toString()}
          fillType={currentPage === page ? 'filled' : 'outline'}
          size="small"
          onClick={() => onClick(page)}
        />
      ))}
    </div>
  )
}

export default PaginationSection
