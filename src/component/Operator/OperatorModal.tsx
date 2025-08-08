"use client";
import { Button, Form, Input, Modal, Row } from "antd";
import React from "react";

interface Props {
  visible: boolean;
  onCancel: () => void;
  edit: any;
}

const OperatorModal = ({ visible, onCancel, edit }: Props) => {
  return (
    <Modal
      title="Quản lý nhà điều hành"
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Row>
        <Form.Item
          label="Nhà điều hành"
          name="operator"
          rules={[
            { required: true, message: "Vui lòng nhập tên nhà điều hành" },
          ]}
        >
          <Input placeholder="Nhập tên nhà điều hành" />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item>
          {edit ? (
            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
              Cập nhật
            </Button>
          ) : (
            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
              Tạo mới
            </Button>
          )}
        </Form.Item>
      </Row>
    </Modal>
  );
};

export default OperatorModal;
