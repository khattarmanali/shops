import { Button, Modal, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const { Option } = Select;
function EditShopModal({ record }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const area = [
    "Thane",
    "Pune",
    "Mumbai Suburdan",
    "Nashik",
    "Nagpur",
    "Ahmednagar",
    "Solapur",
  ];
  const category = [
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Stationary shop",
  ];
  const [open, setOpen] = useState(true);
  const handleOk = () => {
    console.log(record);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      ></Modal>
    </div>
  );
}

export default EditShopModal;
