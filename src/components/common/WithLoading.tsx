import React from 'react'

function WithLoading(Component: any) {
  return function WihLoadingComponent({ isLoading, ...props }: any) {
    if (!isLoading) return <Component {...props} />
    return <p>Loading....</p>
  }
}
export default WithLoading
