import React, { useEffect } from 'react'
import {
  DocumentNode,
  useLazyQuery,
  useQuery,
  useMutation,
} from '@apollo/react-hooks'

import { GET_BBS } from 'src/schema'

function QueryTest(): any {
  const [search, { data }] = useLazyQuery(GET_BBS)
  useEffect(() => {
    search()
  }, [])
  return data
}

export default QueryTest
