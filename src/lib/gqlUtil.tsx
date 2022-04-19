import { useEffect } from 'react'
import { DocumentNode, useQuery, useMutation } from '@apollo/react-hooks'

const query = (gql: DocumentNode) => {
  const { loading, error, data } = useQuery(gql)

  if (error) return <p>Something went wrong!</p>
  if (loading) return <p>Loading...</p>
  if (data) return data
}

const mutation = (gql: DocumentNode) => {
  const [createMutation, { data, loading, error }] = useMutation(gql)
}

export { query, mutation }

export default (type: string, gql: DocumentNode) => {
  const { loading, error, data } = useQuery(gql)

  return data
}
