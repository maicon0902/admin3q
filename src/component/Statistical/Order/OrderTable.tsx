'use client';
import { Col, Pagination, Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { DataType } from './Order';

interface Props {
  currentPage: number;
  setCurrentPage: any;
  data: DataType[];
}

const columns: ColumnsType<DataType> = [
  { title: 'STT', dataIndex: 'key', key: 'key', width: 60 },
  { title: 'Mã đơn cược', dataIndex: 'betId', key: 'betId' },
  { title: 'Bắt đầu cược', dataIndex: 'startTime', key: 'startTime' },
  { title: 'Kết thúc cược', dataIndex: 'endTime', key: 'endTime' },
  { title: 'Nhà điều hành', dataIndex: 'operator', key: 'operator' },
  { title: 'Tên HV mã hóa', dataIndex: 'encryptedUser', key: 'encryptedUser' },
  { title: 'Thể loại', dataIndex: 'category', key: 'category' },
  { title: 'Trò chơi', dataIndex: 'game', key: 'game' },
  { title: 'Tiền cược', dataIndex: 'betAmount', key: 'betAmount' },
  { title: 'Tiền khách thắng', dataIndex: 'winAmount', key: 'winAmount' },
  { title: 'Lợi nhuận nhà điều hành', dataIndex: 'operatorProfit', key: 'operatorProfit' },
  { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
];

const OrderTable = ({currentPage, setCurrentPage, data}: Props) => {
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

export default OrderTable