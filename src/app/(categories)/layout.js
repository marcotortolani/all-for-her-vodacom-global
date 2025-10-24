import { cookies } from 'next/headers'
import { TrialProvider } from '@/providers/TrialProvider'
import NextCrypto from 'next-crypto'

import Breadcrumb from '../components/ui/Breadcrumb'

const cryptoUser = new NextCrypto('user enabled')

export default async function layout({ children }) {
  const cookieStore = cookies()
  const activeUser = cookieStore.get('enabledUser')
  let userEnabled = true

  if (activeUser) {
    userEnabled = (await cryptoUser.decrypt(activeUser.value)) === 'true'
  }

  const ChildrenAuth = () => {
    if (userEnabled) return children
    return <TrialProvider>{children}</TrialProvider>
  }

  return (
    <div className=" z-0 w-full max-w-screen-xl mt-32 px-4 h-full relative flex flex-col justify-center bg-black ">
      <div className=" z-50 w-full px-2 py-2 flex  justify-center ">
        <Breadcrumb homeElement={'home'} />
      </div>
      <ChildrenAuth />
    </div>
  )
}
