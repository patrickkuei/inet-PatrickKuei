import React from 'react'
import Button from './Button'

type Props = {}

const PaginationSection = ({}: Props) => {
  const pages = [1, 2, 3, 4, 5]

  return (
    <div className="mt-5 flex flex-row gap-2 justify-end">
      {pages.map((page) => (
        <Button
          key={page}
          title={page.toString()}
          fillType="outline"
          size="small"
        />
      ))}
    </div>
  )
}

export default PaginationSection
