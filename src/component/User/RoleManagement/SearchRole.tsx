"use client";
import EvoCard from "@/component/common/EvoCard/EvoCard";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Form, FormInstance, Input, Row } from "antd";
import React from "react";

interface Props {
  handleSearch: () => void;
  handleCreate: () => void;
  form: FormInstance<any>;
}

const SearchRole = ({ handleSearch, handleCreate, form }: Props) => {

  return (
    <EvoCard>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Form.Item name="roleName" label="Vai trò">
            <Input placeholder="Nhập nhà tên vai trò" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleSearch}
          >
            Tìm kiếm
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleCreate}>
            Tạo mới
          </Button>
        </Col>
      </Row>
    </EvoCard>
  );
};

export default SearchRole;
