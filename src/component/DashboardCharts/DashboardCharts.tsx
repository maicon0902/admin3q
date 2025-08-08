// components/DashboardCharts.tsx
'use client';

import { Card, Row, Col, Button, Typography } from 'antd';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const { Title: AntTitle } = Typography;

interface ChartBlockProps {
  title: string;
  labels: string[];
  datasets: any[];
}

const ChartBlock = ({ title, labels, datasets }: ChartBlockProps) => {
  const data = { labels, datasets };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
    },
  };

  return (
    <Card style={{ height: '100%' }}>
      <AntTitle level={4} style={{ textAlign: 'center' }}>{title}</AntTitle>
      <Bar data={data} options={options} />
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <Button type="primary">Xem thêm</Button>
      </div>
    </Card>
  );
};

export default function DashboardCharts() {
  const labels = ['2025-07-19', '2025-07-21', '2025-07-22', '2025-07-23', '2025-07-24'];

  return (
    <div>
      <AntTitle level={3}>Tổng hợp số liệu 5 ngày gần nhất</AntTitle>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <ChartBlock
            title="Số lượng hội viên đăng nhập"
            labels={labels}
            datasets={[
              {
                label: 'Số lượng hội viên',
                data: [8, 12, 18, 15, 9],
                backgroundColor: '#4F8EF7',
              },
            ]}
          />
        </Col>
        <Col xs={24} md={12}>
          <ChartBlock
            title="Số lượng đơn cược"
            labels={labels}
            datasets={[
              {
                label: 'Số lượng đơn cược',
                data: [7000, 7200, 6800, 6400, 5000],
                backgroundColor: '#4F8EF7',
              },
            ]}
          />
        </Col>
        <Col xs={24} md={12}>
          <ChartBlock
            title="Tổng tiền cược"
            labels={labels}
            datasets={[
              {
                label: 'Tiền cược',
                data: [55000000, 50000000, 32000000, 35000000, 30000000],
                backgroundColor: '#4F8EF7',
              },
              {
                label: 'Tiền trả lại',
                data: [50000000, 45000000, 28000000, 30000000, 25000000],
                backgroundColor: '#F76C6C',
              },
            ]}
          />
        </Col>
        <Col xs={24} md={12}>
          <ChartBlock
            title="Tổng tiền lợi nhuận"
            labels={labels}
            datasets={[
              {
                label: 'Lợi nhuận',
                data: [2000000, 5000000, 3000000, 9000000, 4000000],
                backgroundColor: '#4F8EF7',
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}
