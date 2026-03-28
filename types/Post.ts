export type Post = {
    _id: string,
    title: string,
    description: string,
    image: string
}

export type DeletePost = {
    _id: string
}

export type EditPost = {
    _id: string,
    title: string,
    description: string,
    image: string
}

export type Moreinfo = {
    title: string,
    description: string,
    image: string
}