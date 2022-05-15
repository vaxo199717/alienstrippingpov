export interface MovieData {
    title: string,
    about: string,
    genre: string[],
    cast: string[],
    director: string,
    country: string,
    duration: number,
    releaseDate: number,
    imdb: string,
    image: string,
    movie: string
}
export interface itemData {
    title: string,
    creator: string,
    collection: string,
    currentowner: {
        name: string,
        profile: string
    },
    price: number,
    lastprice: number,
    imagepath: string,
    link: string,
    sort: number
}
