import ArticleSectionFiler from './ArticleSectionFilter'

type Props = {}

const ArticleSectionTitlePopular = (props: Props) => {
  return (
    <>
      <div className="text-mobile5xl text-left font-bold desktop:text-5xl">
        Most Popular
      </div>
      <div className="flex mt-4 mb-5 gap-4 flex-wrap">
        <ArticleSectionFiler />
      </div>
    </>
  )
}

export default ArticleSectionTitlePopular
