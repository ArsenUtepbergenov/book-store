export interface Book {
  title: string
  author: string
  price: number
}

export interface BookExtended extends Book {
  id: string
  img: string
  imgFileName: string
}
