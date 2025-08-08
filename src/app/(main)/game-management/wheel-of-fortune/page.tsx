'use client';
import WheelOfFortune from '@/component/GameManagement/WheekOfFortune/WheelOfFortune';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Cài đặt vòng quay'>
      <WheelOfFortune />
    </EvoPage>
  )
}

export default page