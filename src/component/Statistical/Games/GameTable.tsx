'use client';
import { Col, Pagination, Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { DataType } from './Game';

interface Props {
  currentPage: number;
  setCurrentPage: any;
  data: DataType[];
}

const columns: ColumnsType<DataType> = [
  { title: 'STT', dataIndex: 'key', width: 60 },
  { title: 'Tên HV mã hoá', dataIndex: 'hvName' },
  { title: 'Thời gian', dataIndex: 'time' },
  { title: 'Trò chơi', dataIndex: 'game' },
  { title: 'Sô lượng người chơi', dataIndex: 'totalUser' },
  { title: 'Đơn cược', dataIndex: 'totalBets' },
  { title: 'Đơn cược thắng', dataIndex: 'totalBetsWin' },
  { title: 'Tiền cược', dataIndex: 'moneyBet' },
  { title: 'Tiền khách thắng', dataIndex: 'vipMoney' },
  { title: 'Lợi nhuận nhà điều hành', dataIndex: 'profit' },
  { title: '% thắng HV', dataIndex: 'winRate' },
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