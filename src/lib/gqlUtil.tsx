import { useEffect } from 'react'
import { DocumentNode, useQuery, useMutation } from '@apollo/react-hooks'

const query = (gql: DocumentNode) => {
  const { data } = useQuery(gql)

  return data
}

const mutation = async (gql: DocumentNode, params: Record<string, unknown>) => {
  const [createMutation, { data, loading, error }] = useMutation(gql)

  const result = await createMutation({
    variables: params,
  })

  return result
}

export { query, mutation }
