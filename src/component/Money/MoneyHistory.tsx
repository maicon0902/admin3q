'use client';

import React, { useState } from 'react';
import { Form } from 'antd';
import dayjs from 'dayjs';
import MoneySearch from './MoneySearch';
import MoneyTable from './MoneyTable';

export interface DataType {
  key: number;
  betId: string;
  operator: string;
  encryptedUser: string;
  transactionTime: string;
  amount: number;
  balanceBefore: number;
  balanceAfter: number;
  transactionType: string;
  detail: string;
}

const MoneyHistory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const initData = Array.from({ length: 10 }, (_, index) => ({
    key: index + 1 + (currentPage - 1) * 10,
    betId: 'Nhà điều hành A',
    operator: 'Category A',
    encryptedUser: `User-${index + 1}`,
    transactionTime: dayjs().format('YYYY-MM-DD'),
    amount: 200000 + index * 1000,
    balanceBefore: 300000 + index * 1000,
    balanceAfter: 50000 + index * 500,
    transactionType: '100',
    detail: '45',
  }))
  const [data, setData] = useState<DataType[]>(initData);
  const [form] = Form.useForm();


  const handleSearch = () => {
    // TODO: Fetch data based on filter
    const fakeData = Array.from({ length: 10 }, (_, index) => ({
      key: index + 1 + (currentPage - 1) * 10,
      operator: 'Nhà điều hành A',
      time: dayjs().format('YYYY-MM-DD'),
      totalUser: 100,
      newUser: 20,
      totalBets: 300,
      totalMoney: 5000000,
      vipMoney: 1000000,
      profit: 200000,
      winRate: 45,
    }));
    // setData(fakeData);
  };

  const handleExportExcel = () => {
    // TODO: Export logic
    console.log('Exporting Excel...');
  };

  return (
    <Form form={form}>
      <MoneySearch />
      <MoneyTable
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
      />
    </Form>
  );
};

export default MoneyHistory;
