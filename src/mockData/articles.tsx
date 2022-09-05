export type IArticle = {
  id: number
  category: {
    code: string
    imageUrl: string
  }
  author: {
    id: number
    username: string
    name: string
    avatarUrl: string
    createdAt: string
  }
  coverImageUrl: string
  title: string
  body: string
  views: number
  likes: number
  likeId: number | null
  createdAt: string
  lastModifiedAt: string | null
}

const articles: IArticle[] = [
  {
    id: 1,
    category: {
      code: 'animal',
      imageUrl: 'https://i.imgur.com/JR2xyV6s.jpg',
    },
    author: {
      id: 1,
      username: 'user0',
      name: '人類一號',
      avatarUrl: 'https://i.imgur.com/1yJEtrqs.jpeg',
      createdAt: '2022-06-27T06:32:36.929Z',
    },
    coverImageUrl: 'https://i.imgur.com/bqgW6JXh.jpeg',
    title: 'Hello world',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    views: 123,
    likes: 45,
    likeId: 1,
    createdAt: '2022-09-04T15:34:38.231Z',
    lastModifiedAt: null,
  },
  {
    id: 2,
    category: {
      code: 'sports',
      imageUrl: 'https://i.imgur.com/s4PDhtLs.jpg',
    },
    author: {
      id: 1,
      username: 'user0',
      name: '人類一號',
      avatarUrl: 'https://i.imgur.com/1yJEtrqs.jpeg',
      createdAt: '2022-06-27T06:32:36.929Z',
    },
    coverImageUrl: 'https://i.imgur.com/bqgW6JXh.jpeg',
    title: 'Hello world 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a',
    views: 12,
    likes: 3,
    likeId: null,
    createdAt: '2022-06-27T06:32:38.231Z',
    lastModifiedAt: '2022-06-27T06:32:38.231Z',
  },
]

export default articles
