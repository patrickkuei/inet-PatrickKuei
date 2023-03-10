import Button from '@inet/components/shared/Button'
import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'

export interface IHomeFilterProps {
  createdWithin: ArticleCreatedWithin
  onCreatedWithinChange: (createdWithin: ArticleCreatedWithin) => void
}

const createdWithins = Object.values(ArticleCreatedWithin)

export default function HomeFilter({
  createdWithin: currentCreatedWithin,
  onCreatedWithinChange,
}: IHomeFilterProps) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-3 mt-4">
      {createdWithins.map((createdWithin) => (
        <Button
          key={createdWithin}
          title={createdWithin}
          isSizeCustom={true}
          fillType={
            createdWithin === currentCreatedWithin ? 'filled' : 'outline'
          }
          className="h-9 px-3 capitalize text-tiny"
          onClick={() => onCreatedWithinChange(createdWithin)}
        />
      ))}
    </div>
  )
}
