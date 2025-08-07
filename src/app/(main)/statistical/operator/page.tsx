'use client';
import OperatorStatistic from '@/component/Statistical/Operator/Operator';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Nhà điều hành'>
      <OperatorStatistic />
    </EvoPage>
  )
}

export default page