'use client';
import CurrentPlay from '@/component/History/CurrentPlay/CurrentPlay';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Lịch sử lượt chơi hiện tại'>
      <CurrentPlay />
    </EvoPage>
  )
}

export default page