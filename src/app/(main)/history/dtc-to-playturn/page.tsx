'use client';
import DTCPlayturn from '@/component/History/DTCPlayturn/DTCPlayTurn';
import EvoPage from '@/component/common/EvoPage/EvoPage';
import React from 'react';

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Lịch sử quy đổi DTC sang lượt chơi'>
      <DTCPlayturn />
    </EvoPage>
  )
}

export default page