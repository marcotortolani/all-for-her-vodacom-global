import { cookies } from 'next/headers'
import { TrialProvider } from '@/providers/TrialProvider'
import NextCrypto from 'next-crypto'

import Breadcrumb from '../components/ui/Breadcrumb'
import HorizontalLine from '../components/ui/HorizontalLine'
import ButtonFilterCategories from '../components/ui/ButtonFilterCategories'

const cryptoUser = new NextCrypto('user enabled')

export default async function layout({ children }) {
  const cookieStore = cookies()
  const activeUser = cookieStore.get('enabledUser')
  let userEnabled = false

  if (activeUser) {
    userEnabled = (await cryptoUser.decrypt(activeUser.value)) === 'true'
  }

  const ChildrenAuth = () => {
    if (userEnabled) return children
    return <TrialProvider>{children}</TrialProvider>
  }
  
  return (
    <div className=" z-0 w-full h-full relative ">
      <div className=" z-50 absolute top-32 w-full h-fit py-2 flex justify-center ">
        <div className=" w-full mb-4 pb-4 md:h-20 md:w-5/6 md:max-w-3xl lg:max-w-4xl lg:w-4/6 flex flex-col justify-center items-start gap-2 md:gap-2 ">
          <div className=" w-full px-4 flex  items-center justify-between">
            <Breadcrumb homeElement={'home'} separator={'>'} />
            <ButtonFilterCategories />
          </div>
          <div className="w-full px-4 md:p-0">
            <HorizontalLine />
          </div>
        </div>
      </div>
      <div className=" relative top-10 w-full h-fit pt-5 my-6 flex flex-col items-center ">
        <ChildrenAuth />
      </div>
    </div>
  )
}
