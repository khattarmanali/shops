import { Button, DatePicker, Form, Input, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { shopAdded } from "../redux/slice/shopslice";

const { Option } = Select;

function AddShop() {
  // add data to redux store
  const dispatch = useDispatch();
  // const history = useHistory();
  const { shops } = useSelector((state) => state.shops);
  console.log(shops, "shops");

  const handleSubmit = (values) => {
    dispatch(shopAdded(values));
  };
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
  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="text-2xl font-bold text-gray-700 my-4">Add Shop</h3>
      <div className=" sm:w-1/2 w-3/4">
        <Form
          className="bg-white rounded px-8 pt-6 pb-8  my-16"
          style={{
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
          }}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          layout="vertical"
          autoComplete="off"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Shop Name"
            name="shopName"
            rules={[
              {
                required: true,
                message: "Please input your shop name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Area"
            name="area"
            rules={[
              {
                required: true,
                message: "Please input your area!",
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              {area.map((item) => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input your category!",
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              allowClear
            >
              {category.map((item) => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
          </Form.Item>
          <div className="flex justify-around items-center   flex-wrap">
            <Form.Item
              className="flex-1"
              label="Opening Date "
              name="openingDate"
              rules={[
                {
                  required: true,
                  message: "Please input your opening date!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Closing Date "
              className="flex-1"
              name="closingDate"
              rules={[
                {
                  required: true,
                  message: "Please input your closing date!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </div>
          <Form.Item>
            <Button
              htmlType="submit"
              className="rounded-lg w-32 h-10 bg-blue-500 text-blue-100 hover:bg-white hover:text-blue-500 duration-300"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AddShop;
