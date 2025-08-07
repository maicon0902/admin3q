'use client';
import { Col, Pagination, Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { DataType } from './MoneyHistory';
import Link from 'next/link';

interface Props {
  currentPage: number;
  setCurrentPage: any;
  data: DataType[];
}

const columns: ColumnsType<DataType> = [
  { title: 'STT', dataIndex: 'key', key: 'key', width: 60 },
  { title: 'Mã đơn cược', dataIndex: 'betId', key: 'betId' },
  { title: 'Nhà điều hành', dataIndex: 'operator', key: 'operator' },
  { title: 'Tên HV mã hóa', dataIndex: 'encryptedUser', key: 'encryptedUser' },
  { title: 'Thời gian giao dịch', dataIndex: 'transactionTime', key: 'transactionTime' },
  { title: 'Số tiền', dataIndex: 'amount', key: 'amount' },
  { title: 'Số dư trước', dataIndex: 'balanceBefore', key: 'balanceBefore' },
  { title: 'Số dư sau', dataIndex: 'balanceAfter', key: 'balanceAfter' },
  { title: 'Loại giao dịch', dataIndex: 'transactionType', key: 'transactionType' },
  { title: 'Chi tiết', dataIndex: 'detail', key: 'detail' },
];

const MoneyTable = ({currentPage, setCurrentPage, data}: Props) => {
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

export default MoneyTable