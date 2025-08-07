'use client';

import React, { useState } from 'react';
import { Form } from 'antd';
import dayjs from 'dayjs';
import GameSearch from './GameSearch';
import GameTable from './GameTable';

export interface DataType {
  key: React.Key;
  hvName: string;
  time: string;
  game: number;
  totalUser: number;
  totalBets: number;
  totalBetsWin: number;
  moneyBet: number;
  vipMoney: number;
  profit: number;
  winRate: number;
}

const Game: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const initData = Array.from({ length: 10 }, (_, index) => ({
    key: index + 1 + (currentPage - 1) * 10,
    hvName: 'HV mã hoá A',
    time: dayjs().format('YYYY-MM-DD'),
    game: 100,
    totalBets: 20,
    totalUser: 300,
    totalBetsWin: 5000000,
    vipMoney: 1000000,
    moneyBet: 200000,
    profit: 45,
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
    // setData(fakeData);
  };

  const handleExportExcel = () => {
    // TODO: Export logic
    console.log('Exporting Excel...');
  };

  return (
    <Form form={form}>
      <GameSearch />
      <GameTable
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
      />
    </Form>
  );
};

export default Game;
