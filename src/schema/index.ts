import gql from 'graphql-tag'

const GET_BBS = gql`
  {
    queryBBS {
      code
    }
  }
`

const CREATE_BBS = gql`
  mutation CreateBBS($payload: BBSData) {
    createBBS(payload: $payload) {
      code
    }
  }
`

export { GET_BBS, CREATE_BBS }
export default {}
