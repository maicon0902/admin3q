'use client';
import OperatorManagement from '@/component/Operator/Operator';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Quản lý nhà điều hành'>
      <OperatorManagement />
    </EvoPage>
  )
}

export default page