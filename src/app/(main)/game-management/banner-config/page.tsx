'use client';
import BannerConfig from '@/component/GameManagement/BannerConfig/BannerConfig';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Cài đặt banner'>
      <BannerConfig />
    </EvoPage>
  )
}

export default page