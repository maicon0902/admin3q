"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Collapse,
  FormInstance,
  Tree,
  Select,
} from "antd";

const { Panel } = Collapse;

interface PermissionGroup {
  title: string;
  key: string;
  children: {
    title: string;
    key: string;
  }[];
}

interface Props {
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  form: FormInstance<any>;
}

const treeData: PermissionGroup[] = [
  {
    title: 'Quản lý người dùng - Danh sách user',
    key: 'group_user_list',
    children: [
      { title: 'Xuất excel', key: 'export_user' },
      { title: 'Khóa user', key: 'ban_user' },
      { title: 'Xem', key: 'view_user' },
    ],
  },
  {
    title: 'Quản lý người dùng - Danh sách admin',
    key: 'group_admin_list',
    children: [
      { title: 'Tạo mới tài khoản quản lý', key: 'create_admin' },
      { title: 'Khóa admin', key: 'ban_admin' },
      { title: 'Xem', key: 'view_admin' },
    ],
  },
  {
    title: 'Quản lý người dùng - Quản lý vai trò',
    key: 'group_roles',
    children: [
      { title: 'Tạo mới vai trò', key: 'create_role' },
      { title: 'Khóa user', key: 'ban_role_user' },
      { title: 'Xem', key: 'view_role' },
    ],
  },
  {
    title: 'Quản lý game - Quản lý vòng quay',
    key: 'group_game_spin',
    children: [
      { title: 'Cài đặt biểu tượng', key: 'setting_icon' },
      { title: 'Cài đặt mức cược', key: 'setting_bet' },
      { title: 'Cài đặt hệ thống', key: 'setting_system' },
    ],
  },
  {
    title: 'Quản lý game - Quản lý nội dung',
    key: 'group_game_content',
    children: [{ title: 'Chỉnh sửa nội dung', key: 'edit_content' }],
  },
  {
    title: 'Quản lý nhà điều hành',
    key: 'group_operator',
    children: [
      { title: 'Tạo mới', key: 'create_operator' },
      { title: 'Xem', key: 'view_operator' },
      { title: 'Xóa nhà điều hành', key: 'delete_operator' },
      { title: 'Chỉnh sửa', key: 'edit_operator' },
    ],
  },
  {
    title: 'Thống kê',
    key: 'group_stats',
    children: [
      { title: 'Xem', key: 'view_stats' },
      { title: 'Xuất excel', key: 'export_stats' },
    ],
  },
  {
    title: 'Quản lý dòng tiền',
    key: 'group_money',
    children: [
      { title: 'Xem', key: 'view_money' },
      { title: 'Xuất excel', key: 'export_money' },
    ],
  },
];

const RoleModal = forwardRef(({ open, handleCancel, handleOk, form }: Props, ref) => {
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);

  useImperativeHandle(ref, () => ({
    checkedKeys,
    setCheckedKeys
  }));

  const operatorOptions = [
    { label: "ndh1", value: "ndh1" },
    { label: "ndh2", value: "ndh2" },
    { label: "ndh3", value: "ndh3" },
    { label: "ndh4", value: "ndh4" },
    { label: "ndh5", value: "ndh5" },
  ];

  return (
    <>
      <Modal
        title="Tạo mới vai trò"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        footer={[
          // <Button key="cancel" onClick={handleCancel}>
          //   Hủy
          // </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Tạo mới
          </Button>,
        ]}
      >
        <Form.Item
          name="operator"
          label="Nhà điều hành"
        >
          <Select options={operatorOptions} />
        </Form.Item>

        <Form.Item
          name="roleName"
          label="Tên vai trò"
        >
          <Input placeholder="Tên vai trò" />
        </Form.Item>

        <Form.Item name="permissions" label="Quyền hạn">
        <Tree
              checkable
              defaultExpandAll
              onCheck={(checked) => setCheckedKeys(checked as React.Key[])}
              checkedKeys={checkedKeys}
              treeData={treeData}
            />
        </Form.Item>
      </Modal>
    </>
  );
});

export default RoleModal;
