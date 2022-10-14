import React from 'react'
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom'
import ArticleCategorySection from './ArticleCategorySection'
import ArticleSectionContainer from './ArticleSectionContainer'
type Props = {}

export default function HomeContent({}: Props) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="flex desktop:my-8 desktop:mx-16 desktop-lg:mx-36">
          <ArticleCategorySection />
          <Outlet />
        </div>
      ),
      children: [
        {
          index: true,
          element: <ArticleSectionContainer />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
