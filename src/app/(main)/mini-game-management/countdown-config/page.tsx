import CountdownConfig from '@/component/Minigame/CountdownConfig/CountdownConfig'
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage isBackTop className='' pageTitle='Điều chỉnh thời gian / Bật tắt game'>
      <CountdownConfig />
    </EvoPage>
  )
}

export default page