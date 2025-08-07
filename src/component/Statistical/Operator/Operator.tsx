'use client';

import React, { useState } from 'react';
import { Form } from 'antd';
import dayjs from 'dayjs';
import OperatorSearch from './OperatorSearch';
import OperatorTable from './OperatorTable';

export interface DataType {
  key: React.Key;
  operator: string;
  time: string;
  totalUser: number;
  newUser: number;
  totalBets: number;
  totalMoney: number;
  vipMoney: number;
  profit: number;
  winRate: number;
}

const OperatorStatistic: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const initData = Array.from({ length: 10 }, (_, index) => ({
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
    setData(fakeData);
  };

  const handleExportExcel = () => {
    // TODO: Export logic
    console.log('Exporting Excel...');
  };

  return (
    <Form form={form}>
      <OperatorSearch />
      <OperatorTable
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
      />
    </Form>
  );
};

export default OperatorStatistic;
