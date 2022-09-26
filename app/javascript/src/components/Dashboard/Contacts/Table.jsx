import React from "react";

import { Table as ContactList } from "neetoui";

import { ROW_DATA, contactListData } from "./constants";

const Table = ({ setShowDeleteAlert }) => (
  <ContactList
    allowRowClick
    pagination
    columnData={contactListData(setShowDeleteAlert)}
    rowData={ROW_DATA}
    onRowClick={() => {}}
  />
);

export default Table;
