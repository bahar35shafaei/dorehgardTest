import { useState } from "react";

import Logo from "./Logo";
import Invoice from "./Invoice";
import Customer from "./Customer";
import Details from "./Details";
import InvoiceTable from "./InvoiceTable";
import Summary from "./Summary";
import CustomerModal from "./CustomerModal";

const Receipt = () => {
  const [customerModalVisible, setCustomerModalVisible] = useState(false);
  const [recipientFlag, setRecipientFlag] = useState(false);

  return (
    <div className="Receipt">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Logo />
        <Invoice />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Customer setCustomerModalVisible={setCustomerModalVisible} />
        <Customer
          setCustomerModalVisible={setCustomerModalVisible}
          recipient
          setRecipientFlag={setRecipientFlag}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Details title="Invoice No" />
          <Details title="Invoice Date" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Details title="Due" />
        </div>
      </div>
      <InvoiceTable />
      <Summary />
      {customerModalVisible && (
        <CustomerModal
          recipientFlag={recipientFlag}
          setRecipientFlag={setRecipientFlag}
          setCustomerModalVisible={setCustomerModalVisible}
        />
      )}
    </div>
  );
};

export default Receipt;
