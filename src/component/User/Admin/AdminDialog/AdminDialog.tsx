'use client';
import React from 'react';
import { Modal, Form, Input, Checkbox, Button, Select } from 'antd';

interface Props {
  visible: boolean;
  onCancel: () => void;
  onCreate: (values: any) => void;
  editUser: any;
}

const AdminDialog: React.FC<Props> = ({ visible, onCancel, onCreate, editUser }) => {
  const [form] = Form.useForm();

  const operatorOptions = [
    { label: "ndh1", value: "ndh1" },
    { label: "ndh2", value: "ndh2" },
    { label: "ndh3", value: "ndh3" },
    { label: "ndh4", value: "ndh4" },
    { label: "ndh5", value: "ndh5" },
  ];

  const roleOptions = [
    { label: "ndh1", value: "ndh1" },
    { label: "ndh2", value: "ndh2" },
    { label: "ndh3", value: "ndh3" },
    { label: "ndh4", value: "ndh4" },
    { label: "ndh5", value: "ndh5" },
  ];

  const handleOk = () => {
    form.validateFields().then((values) => {
      onCreate(values);
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Tạo tài khoản quản lý"
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleOk}
      >
        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập' }]}
        >
          <Input placeholder="Nhập tên đăng nhập" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
        >
          <Input.Password placeholder="Nhập mật khẩu" />
        </Form.Item>
        <Form.Item
          label="Nhà điều hành"
          name="operator"
          rules={[{ required: true, message: 'Vui lòng chọn nhà điều hành' }]}
        >
          <Select options={operatorOptions} />
        </Form.Item>
        <Form.Item
          label="Vai trò"
          name="role"
          rules={[{ required: true, message: 'Vui lòng chọn vai trò' }]}
        >
          <Select options={roleOptions} />
        </Form.Item>
        <Form.Item
          name="isAdmin_full"
          valuePropName="checked"
        >
          <Checkbox>isAdmin_full</Checkbox>
        </Form.Item>

        <Form.Item>
          {
            editUser ? (
              <Button type="primary" htmlType="submit" style={{ float: 'right' }}>
                Cập nhật
              </Button>
            ) : (
              <Button type="primary" htmlType="submit" style={{ float: 'right' }}>
                Tạo mới
              </Button>
            )
          }
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AdminDialog;
