'use client';
import Game from '@/component/Statistical/Games/Game';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Trò chơi'>
      <Game />
    </EvoPage>
  )
}

export default page