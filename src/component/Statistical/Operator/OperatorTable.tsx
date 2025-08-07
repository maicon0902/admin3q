'use client';
import { Col, Pagination, Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { DataType } from './Operator';

interface Props {
  currentPage: number;
  setCurrentPage: any;
  data: DataType[];
}

const columns: ColumnsType<DataType> = [
  { title: 'STT', dataIndex: 'key', width: 60 },
  { title: 'Nhà điều hành', dataIndex: 'operator' },
  { title: 'Thời gian', dataIndex: 'time' },
  { title: 'Tổng user', dataIndex: 'totalUser' },
  { title: 'User mới', dataIndex: 'newUser' },
  { title: 'Đơn cược', dataIndex: 'totalBets' },
  { title: 'Tiền cược', dataIndex: 'totalMoney' },
  { title: 'Tiền khách thắng', dataIndex: 'vipMoney' },
  { title: 'Lợi nhuận', dataIndex: 'profit' },
  { title: '% thắng', dataIndex: 'winRate' },
];

const OperatorTable = ({currentPage, setCurrentPage, data}: Props) => {
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

export default OperatorTable