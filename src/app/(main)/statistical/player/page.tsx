'use client';
import Player from '@/component/Statistical/Player/Player';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Người chơi'>
      <Player />
    </EvoPage>
  )
}

export default page