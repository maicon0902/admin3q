'use client';
import AdminList from '@/component/User/Admin/AdminList/AdminList';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Danh sách Admin'>
      <AdminList />
    </EvoPage>
  )
}

export default page