import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown, Avatar, Typography } from "neetoui";

export const renderNameRoleAvatar = (name, { role }) => (
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

export const renderDropdown = setShowDeleteAlert => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal} strategy="fixed">
    <li>Edit</li>
    <li onClick={setShowDeleteAlert}>Delete</li>
  </Dropdown>
);
