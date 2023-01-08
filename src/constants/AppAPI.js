export const GET_FEATURED = 'https://k97m0h68.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22featured%22%5D%20%7B%0A%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20restaurants%5B%5D-%3E%7B%0A%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20dishes%5B%5D-%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D'

export const GET_FEATURED_SANITY = `
*[_type == "featured"] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }
`

export const GET_RESTAURANT_BY_FEATURED = 
    `*[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            name
          }
        }
      }[0]
    `

export const GET_CATEGORIES = `*[_type == "category"]`
