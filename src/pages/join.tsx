import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const Join: NextPageWithLayout = () => {
  return (
    <>
      <section>Join</section>
      <section>
        <input type="text" placeholder="id" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="password" />
        <button>Join</button>
      </section>
    </>
  )
}

// Join.getLayout = function getLayout(page: any) {
//   return (
//     <Layout>
//       <div>{page}</div>
//     </Layout>
//   );
// };

export default Join
