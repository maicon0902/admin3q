import ContentConfig from '@/component/Minigame/ContentConfig/ContentConfig'
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage pageTitle='Cấu hình content' isBackTop className='content-config'>
      <ContentConfig />
    </EvoPage>
  )
}

export default page