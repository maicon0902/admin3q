'use client';

import React, { useState } from 'react';
import { Form } from 'antd';
import dayjs from 'dayjs';
import OrderSearch from './OrderSearch';
import OrderTable from './OrderTable';

export interface DataType {
  key: number;
  betId: string;
  startTime: string;
  endTime: string;
  operator: string;
  encryptedUser: string;
  category: string;
  game: string;
  betAmount: number;
  winAmount: number;
  operatorProfit: number;
  status: string;
}

const Order: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const initData = Array.from({ length: 10 }, (_, index) => ({
    key: index + 1 + (currentPage - 1) * 10,
    betId: `BET-${index + 1}`,
    startTime: dayjs().format('YYYY-MM-DD'),
    endTime: dayjs().format('YYYY-MM-DD'),
    operator: 'Nhà điều hành A',
    encryptedUser: `User-${index + 1}`,
    category: 'Category A',
    game: '100',
    betAmount: 200000 + index * 1000,
    winAmount: 300000 + index * 1000,
    operatorProfit: 50000 + index * 500,
    status: 'Đang mở',
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

export default Order;
