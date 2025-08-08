'use client';
import SysConfig from '@/component/GameManagement/SysConfig/SysConfig';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Cài đặt hệ thống'>
      <SysConfig />
    </EvoPage>
  )
}

export default page