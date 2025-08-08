"use client";
import EvoCard from "@/component/common/EvoCard/EvoCard";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Col, Form, Row, Upload, UploadProps } from "antd";
import { useWatch } from "antd/es/form/Form";
import React from "react";

const { Dragger } = Upload;

const BannerConfig = () => {
  const [form] = Form.useForm();
  const background = useWatch("background", form);

  const props: UploadProps = {
    name: "background",
    multiple: false,
    beforeUpload: (file) => {
      const isImage = ["image/png", "image/jpg", "image/jpeg"].includes(
        file.type
      );
      if (!isImage) {
        console.log("Đây không phải là file ảnh");
      }
      return isImage || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      const file = info.file;
      if (file.status !== "removed" && file.originFileObj) {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => {
          const base64 = reader.result;
          form.setFieldsValue({
            background: base64,
          });
        };
      } else if (file.status === "removed") {
        form.setFieldsValue({ background: undefined });
      }
    },
    showUploadList: false,
  };

  return (
    <Form form={form} layout="vertical">
      <EvoCard>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Form.Item name="background" label="Upload ảnh">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Vui lòng chọn 1 hình ảnh</p>
              </Dragger>
              {background && (
                <img
                  src={background}
                  alt="Ảnh nền"
                  style={{ width: 200, marginTop: 10 }}
                />
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button type="primary">Lưu</Button>
          </Col>
        </Row>
      </EvoCard>
    </Form>
  );
};

export default BannerConfig;
