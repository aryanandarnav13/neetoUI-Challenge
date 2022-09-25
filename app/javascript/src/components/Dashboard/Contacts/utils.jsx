import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown, Avatar, Typography } from "neetoui";

const renderNameRoleAvatar = (name, { role }) => (
  <div className="flex space-x-4">
    <Avatar
      user={{
        imageUrl: "https://i.pravatar.cc/300",
      }}
    />
    <div>
      <Typography style="h5">{name}</Typography>
      <Typography className="neeto-ui-text-gray-600" style="body3">
        {role}
      </Typography>
    </div>
  </div>
);

const renderDropdown = () => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal} strategy="fixed">
    <li>Edit</li>
    <li>Delete</li>
  </Dropdown>
);

export const contactListData = [
  {
    dataIndex: "name",
    key: "name",
    title: "NAME & ROLE",
    width: "30%",
    render: renderNameRoleAvatar,
  },
  {
    dataIndex: "email",
    key: "email",
    title: "EMAIL",
    width: "30%",
  },
  {
    title: "CREATED AT",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "30%",
  },
  {
    title: "",
    dataIndex: "more",
    key: "more",
    width: "10",
    render: renderDropdown,
  },
];

export const ROW_DATA = [
  {
    name: "Ronald Richards",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 1,
  },
  {
    name: "Jacob Jones",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 2,
  },
  {
    name: "Ronald Richards",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 3,
  },
  {
    name: "Jacob Jones",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 4,
  },
  {
    name: "Ronald Richards",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 5,
  },
  {
    name: "Jacob Jones",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 6,
  },
  {
    name: "Ronald Richards",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 7,
  },
  {
    name: "Jacob Jones",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 8,
  },
  {
    name: "Ronald Richards",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 9,
  },
  {
    name: "Jacob Jones",
    role: "owner",
    email: "albert@borer.com",
    createdAt: "Feb 05, 2021",
    id: 10,
  },
];
