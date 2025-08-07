'use client';
import MoneyHistory from '@/component/Money/MoneyHistory';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Quản lý dòng tiền'>
      <MoneyHistory />
    </EvoPage>
  )
}

export default page