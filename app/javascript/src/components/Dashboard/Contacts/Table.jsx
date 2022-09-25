import React from "react";

import { Table as ContactList } from "neetoui";

import { ROW_DATA, contactListData } from "./utils";

const Table = () => (
  <ContactList
    allowRowClick
    pagination
    columnData={contactListData}
    rowData={ROW_DATA}
    onRowClick={() => {}}
  />
);

export default Table;
