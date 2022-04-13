import gql from 'graphql-tag'

const GET_BBS = gql`
  {
    queryBBS {
      title
    }
  }
`

export { GET_BBS }
export default {}
