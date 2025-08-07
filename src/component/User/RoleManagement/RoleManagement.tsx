"use client";
import { Col, Form, Row, Spin } from "antd";
import React, { useRef, useState } from "react";
import SearchRole from "./SearchRole";
import ListRole from "./ListRole";
import RoleModal from "./RoleModal";

type RoleModalRef = {
  checkedKeys: React.Key[];
  setCheckedKeys: any;
};

const RoleManagement = () => {
  const [form] = Form.useForm<any>();
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [edit, setEdit] = useState<any>(null);
  const roleModalRef = useRef<RoleModalRef>(null);

  const handleSearch = () => {
    const search = form.getFieldValue("roleName");
    console.log("Tìm kiếm:", search);
  };

  const handleCreate = () => {
    setIsOpenModal(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const payload = {
          ...values,
          permissions: roleModalRef.current?.checkedKeys || [],
        };
        console.log("Giá trị form:", payload);
        setIsOpenModal(false);
        form.resetFields();
        roleModalRef.current?.setCheckedKeys([]);
      })
      .catch((info) => {
        console.log("Lỗi:", info);
      });
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  return (
    <Spin spinning={loading}>
      <Form autoComplete="off" form={form} layout="vertical">
        <RoleModal
          handleCancel={handleCancel}
          handleOk={handleOk}
          open={isOpenModal}
          form={form}
          ref={roleModalRef}
        />
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <SearchRole
              handleSearch={handleSearch}
              handleCreate={handleCreate}
              form={form}
            />
          </Col>
          <Col span={24}>
            <ListRole
              setEdit={setEdit}
              setIsOpenModal={setIsOpenModal}
            />
          </Col>
        </Row>
      </Form>
    </Spin>
  );
};

export default RoleManagement;
