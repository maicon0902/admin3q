'use client';
import Order from '@/component/Statistical/Order/Order';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Đơn cược'>
      <Order />
    </EvoPage>
  )
}

export default page