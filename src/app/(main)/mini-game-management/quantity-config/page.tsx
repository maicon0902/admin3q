import QuantityConfig from '@/component/Minigame/QuantityConfig/QuantityConfig'
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Cấu hình số lượng bóng và lượt rơi'>
      <QuantityConfig />
    </EvoPage>
  )
}

export default page