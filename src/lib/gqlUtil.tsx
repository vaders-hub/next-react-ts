import { useEffect } from 'react'
import { DocumentNode, useQuery } from '@apollo/react-hooks'

export default (gql: DocumentNode) => {
  const { loading, error, data } = useQuery(gql)

  if (error) return <p>Something went wrong!</p>
  if (loading) return <p>Loading...</p>
  if (data) return data

  // return new Promise((resolve, reject) => {
  //   const { loading, error, data } = useQuery(gql)

  //   if (error) return <p>Something went wrong!</p>
  //   if (loading) return <p>Loading...</p>
  //   if (data) return resolve(data)
  //   resolve({ a: 'b' })
  // })
}
