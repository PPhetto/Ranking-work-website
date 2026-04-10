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

export type Rank = {
    username: string,
    postcount: string
}

export type Rankin = {
    _id: string,
    username: string
}

export type JwtgetPost = {
    userId: string
    username: string
    role: string
}