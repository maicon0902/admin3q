'use client';

import React, { useState } from 'react';
import { Form } from 'antd';
import dayjs from 'dayjs';
import OrderSearch from './PlayerSearch';
import OrderTable from './PlayerTable';

export interface DataType {
  key: number;
  betDate: string;
  encryptedUser: string;
  registerDate: string;
  operator: string;
  totalBets: string;
  winningBets: number;
  betAmount: number;
  winAmount: number;
  operatorProfit: number;
  winRate: string;
}

const Player: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const initData = Array.from({ length: 10 }, (_, index) => ({
    key: index + 1 + (currentPage - 1) * 10,
    betDate: dayjs().format('YYYY-MM-DD'),
    encryptedUser: `User-${index + 1}`,
    registerDate: dayjs().format('YYYY-MM-DD'),
    operator: 'Nhà điều hành A',
    totalBets: 'Category A',
    winningBets: 100,
    betAmount: 200000 + index * 1000,
    winAmount: 300000 + index * 1000,
    operatorProfit: 50000 + index * 500,
    winRate: '45',
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
      <OrderSearch />
      <OrderTable
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
      />
    </Form>
  );
};

export default Player;
