import gql from 'graphql-tag'

const GET_BBS = gql`
  {
    queryBBS {
      code
    }
  }
`

export { GET_BBS }
export default {}
