'use client';
import UserList from '@/component/User/Client/UserList';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Danh sách user'>
      <UserList />
    </EvoPage>
  )
}

export default page