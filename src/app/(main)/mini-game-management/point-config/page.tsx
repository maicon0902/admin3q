import PointConfig from '@/component/Minigame/PointConfig/PointConfig'
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage pageTitle='Cấu hình điểm' isBackTop className=''>
      <PointConfig />
    </EvoPage>
  )
}

export default page