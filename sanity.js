import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
    projectId: 'k97m0h68',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

// bisa nambahin ini dari cmd sanity directory
//sanity cors add http://localhost:1800

export default client