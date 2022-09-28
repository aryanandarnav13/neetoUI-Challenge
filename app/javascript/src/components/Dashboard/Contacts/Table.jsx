import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { ROW_DATA, CONTACT_LIST_DATA } from "./constants";

const Table = ({ setShowDeleteAlert }) => (
  <NeetoUITable
    allowRowClick
    pagination
    columnData={CONTACT_LIST_DATA(setShowDeleteAlert)}
    rowData={ROW_DATA}
    onRowClick={() => {}}
  />
);

export default Table;
