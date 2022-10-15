export enum Pagination {
  Basic = 'basic',
  Cursor = 'cursor',
}

export interface IPagableQuery {
  pagination?: Pagination
  cursor?: number
  page?: number
  limit?: number
  FLAG_UNLIMITED?: boolean
}
