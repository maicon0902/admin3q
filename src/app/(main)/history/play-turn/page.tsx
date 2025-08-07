'use client';
import PlayHistory from '@/component/History/PlayHistory/PlayHistory'
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Lịch sử chơi'>
      <PlayHistory />
    </EvoPage>
  )
}

export default page