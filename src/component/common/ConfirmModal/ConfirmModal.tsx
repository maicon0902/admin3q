import React from "react";
import { Modal } from "antd";

interface ConfirmModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  title: string;
  content: string;
}

const ConfirmModal = ({
  isModalOpen,
  handleCancel,
  handleOk,
  title,
  content,
}: ConfirmModalProps) => {
  return (
    <Modal
      title={title}
      okText="Xác nhận"
      cancelText="Hủy"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {content}
    </Modal>
  );
};

export default ConfirmModal;
