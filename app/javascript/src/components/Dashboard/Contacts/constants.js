import { buildSelectOptions } from "utils";
import * as yup from "yup";

import { renderNameRoleAvatar, renderDropdown } from "./ContactsList";

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const ROLES = buildSelectOptions(["Team Lead", "Manager"]);

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  role: yup
    .object()
    .nullable()
    .required("Role is required")
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    }),
});

export const contactListData = setShowDeleteAlert => [
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
    render: () => renderDropdown(setShowDeleteAlert),
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
