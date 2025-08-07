'use client';
import { Col, Pagination, Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { DataType } from './Player';
import Link from 'next/link';

interface Props {
  currentPage: number;
  setCurrentPage: any;
  data: DataType[];
}

const columns: ColumnsType<DataType> = [
  { title: 'STT', dataIndex: 'key', key: 'key', width: 60 },
  { title: 'Ngày cược', dataIndex: 'betDate', key: 'betDate' },
  { title: 'Tên HV mã hóa', dataIndex: 'encryptedUser', key: 'encryptedUser' },
  { title: 'Ngày đăng ký', dataIndex: 'registerDate', key: 'registerDate' },
  { title: 'Nhà điều hành', dataIndex: 'operator', key: 'operator' },
  { title: 'Đơn cược', dataIndex: 'totalBets', key: 'totalBets' },
  { title: 'Đơn cược thắng', dataIndex: 'winningBets', key: 'winningBets' },
  { title: 'Tiền cược', dataIndex: 'betAmount', key: 'betAmount' },
  { title: 'Tiền khách thắng', dataIndex: 'winAmount', key: 'winAmount' },
  { title: 'Lợi nhuận nhà điều hành', dataIndex: 'operatorProfit', key: 'operatorProfit' },
  { title: '% thắng HV', dataIndex: 'winRate', key: 'winRate' },
  {
    title: 'Hành động',
    key: 'action',
    render: () => <Link href={''}>Thống kê theo game</Link>,
  },
];

const PlayerTable = ({currentPage, setCurrentPage, data}: Props) => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        style={{ marginTop: 24 }}
        bordered
        scroll={{ x: 'max-content' }}
      />

      <Row justify="space-between" align="middle" style={{ marginTop: 16 }}>
        <Col>Tổng cộng 227 tài khoản</Col>
        <Col>
          <Pagination
            current={currentPage}
            total={227}
            pageSize={10}
            onChange={(page) => setCurrentPage(page)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default PlayerTable