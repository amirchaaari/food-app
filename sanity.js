import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
const client = sanityClient({
    projectId: 'ehe8yni1',
    dataset: 'production',
    apiVersion: '2021-10-21', // use a UTC date string
    token: 'sanity-auth-token', // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  })

export default client
// const builder = imageUrlBuilder(client)

// // Then we like to make a simple function like this that gives the
// // builder an image and returns the builder for you to specify additional
// // parameters:
// export const urlFor=(source)=> {
//    builder.image(source);
// }