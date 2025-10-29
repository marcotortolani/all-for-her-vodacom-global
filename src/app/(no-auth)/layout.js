import Breadcrumb from '../components/ui/Breadcrumb'

import dictionary from '@/dictionary/lang.json'
export default function layout({ children }) {
  return (
    <div className=" z-0 w-full h-full relative mb-10 ">
      <div className=" z-50 absolute top-32 w-full h-fit py-2 flex justify-center ">
        <div className=" w-full max-w-screen-xl px-4 xl:px-0 ">
          <Breadcrumb homeElement={dictionary['home']} />
        </div>
      </div>
      <div className=" relative top-10 w-full h-fit pt-2 mt-36 mb-6 flex flex-col items-center ">
        {children}
      </div>
    </div>
  )
}
