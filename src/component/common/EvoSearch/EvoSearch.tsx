"use client";
import React from "react";
import EvoCard from "../EvoCard/EvoCard";
import {
  Input,
  Select,
  DatePicker,
  Button,
  Row,
  Col,
  Form,
  FormInstance,
} from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

interface Props {
  handleSearch: () => void;
  handleExport: () => void;
  form: FormInstance<any>;
  isShowStatus: boolean;
  isUserPage?: boolean;
  isAdminPage?: boolean;
}

const EvoSearch = ({
  handleSearch,
  handleExport,
  form,
  isShowStatus = false,
  isUserPage = false,
  isAdminPage = false,
}: Props) => {
  const historyStatusValue = [
    {
      lable: "Thành công",
      value: "success",
    },
    {
      lable: "Thất bại",
      value: "failure",
    },
  ];
  const userStatusValue = [
    {
      lable: "Hoạt động",
      value: "active",
    },
    {
      lable: "khoá",
      value: "inactive",
    },
  ];

  const dropdownOptionData = isUserPage ? userStatusValue : historyStatusValue;

  return (
    <EvoCard>
      <Form form={form} layout="vertical" onFinish={handleSearch}>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item name="username" label="Username">
              <Input placeholder="Username" />
            </Form.Item>
          </Col>
          {isShowStatus ? (
            <Col span={12}>
              <Form.Item name="status" label="Trạng thái">
                <Select placeholder="Trạng thái" style={{ width: "100%" }}>
                  {dropdownOptionData?.map((e) => (
                    <Option value={e.value}>{e.lable}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          ) : (
            <></>
          )}

          <Col span={24}>
            <Form.Item name="dateRange" label="Thời gian">
              <RangePicker format="DD/MM/YYYY" style={{ width: "50%" }} />
            </Form.Item>
          </Col>

          <Col span={4}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item>
              {isAdminPage ? (
                <Button onClick={handleExport}>Tạo tài khoản quản lý</Button>
              ) : (
                <Button onClick={handleExport}>Xuất file excel</Button>
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </EvoCard>
  );
};

export default EvoSearch;
