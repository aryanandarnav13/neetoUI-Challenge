import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import SideMenu from "./SideMenu";
import Table from "./Table";

const Contacts = () => {
  const [showContactMenu, setShowContactMenu] = useState(true);
  const [searchContact, setSearchContact] = useState("");

  return (
    <>
      <SideMenu showContactMenu={showContactMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button icon="ri-add-line" label="Add Contact" onClick={() => {}} />
          }
          menuBarToggle={() => {
            setShowContactMenu(showMenu => !showMenu);
          }}
          searchProps={{
            value: searchContact,
            onChange: e => setSearchContact(e.target.value),
            placeholder: "Search Name, Email, Phone Number etc.",
          }}
        />
        <Table />
      </Container>
    </>
  );
};

export default Contacts;
