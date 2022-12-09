import { Button, Space, Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import EditShopModal from "./EditShopModal";
const ShopList = () => {
  const onEdit = (record) => {
    console.log(record);
    <EditShopModal record={record} />;
  };
  const { shops } = useSelector((state) => state.shops);
  const columns = [
    {
      title: "Shop Name",
      dataIndex: "shopName",
      key: "shopName",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Opening Date",
      dataIndex: "openingDate",

      key: "openingDate",
    },
    {
      title: "Closing Date",
      dataIndex: "closingDate",
      key: "closingDate",
    },
    {
      title: "Action",

      key: "action",

      render: (text, record) => (
        <Space size="middle">
          <Button
            className="rounded-lg  bg-green-300 hover:bg-green-400 duration-300"
            onClick={() => onEdit(record)}
          >
            Edit
          </Button>

          <Button className="rounded-lg  bg-red-600 text-red-100 hover:bg-red-700 duration-300">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <div>{<Table dataSource={shops} columns={columns} />}</div>;
};

export default ShopList;
