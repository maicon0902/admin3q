'use client';
import RoleManagement from '@/component/User/RoleManagement/RoleManagement';
import EvoPage from '@/component/common/EvoPage/EvoPage'
import React from 'react'

const page = () => {
  return (
    <EvoPage className='' isBackTop pageTitle='Quản lý vai trò'>
      <RoleManagement />
    </EvoPage>
  )
}

export default page