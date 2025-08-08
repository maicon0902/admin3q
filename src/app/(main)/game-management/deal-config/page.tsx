'use client';
import DealConfig from '@/component/GameManagement/DealConfig/DealConfig';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Cài đặt mức cược'>
      <DealConfig />
    </EvoPage>
  )
}

export default page