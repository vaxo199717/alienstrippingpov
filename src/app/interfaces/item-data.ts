export interface ItemData {
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
