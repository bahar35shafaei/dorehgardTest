import { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { setReceipt, getReceipt } from "../redux/actions/receipt";

const CustomerModal = (props) => {
  const { setCustomerModalVisible, Receipt, recipientFlag, setRecipientFlag } =
    props;

  const [customerData, setCustomerData] = useState({});

  const onClick = () => {
    if (recipientFlag) {
      props.setReceipt({ ...Receipt, receiver: customerData });
    } else {
      props.setReceipt({ ...Receipt, sender: customerData });
    }
    setCustomerModalVisible(false);
    setRecipientFlag(false);
  };
  return (
    <Modal isOpen className={"Modal"}>
      <div className="Container">
        <div className="Header">
          <span className="Description">Fill The Information</span>
          <span
            className="Close"
            onClick={() => setCustomerModalVisible(false)}
          >
            X
          </span>
        </div>
        <div className="Row">
          <div className="Form-item">
            <label>Company / Client Name</label>
            <input
              className={"Item-title"}
              placeholder="Name"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  name: e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""),
                });
              }}
              value={customerData?.name}
              maxLength={20}
            />
          </div>
          <div className="Form-item">
            <label>Country</label>
            <input
              className={"Item-title"}
              placeholder="Country"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  country: e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""),
                });
              }}
              value={customerData?.country}
              maxLength={20}
            />
          </div>
        </div>
        <div className="Row">
          <div className="Form-item">
            <label>First Name</label>
            <input
              className={"Item-title"}
              placeholder="First Name"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  firstName: e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""),
                });
              }}
              value={customerData?.firstName}
              maxLength={20}
            />
          </div>
          <div className="Form-item">
            <label>Last Name</label>
            <input
              className={"Item-title"}
              placeholder="Last Name"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  lastName: e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""),
                });
              }}
              value={customerData?.lastName}
              maxLength={20}
            />
          </div>
        </div>
        <div className="Row">
          <div className="Form-item">
            <label>Tax Registration Number</label>
            <input
              className={"Item-title"}
              placeholder="Tax Registration Number"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  taxRegistrationNumber: e.target.value.replace(/[^0-9 ]/g, ""),
                });
              }}
              value={customerData?.taxRegistrationNumber}
              maxLength={20}
            />
          </div>
          <div className="Form-item">
            <label>Email</label>
            <input
              className={"Item-title"}
              placeholder="Email"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  email: e.target.value,
                });
              }}
              value={customerData?.email}
              maxLength={30}
            />
          </div>
        </div>
        <div className="Row">
          <div className="Form-item">
            <label>Address1</label>
            <input
              className={"Item-title"}
              placeholder="Address1"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  address1: e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""),
                });
              }}
              value={customerData?.address1}
              maxLength={20}
            />
          </div>
          <div className="Form-item">
            <label>Address2</label>
            <input
              className={"Item-title"}
              placeholder="Address2"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  address2: e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""),
                });
              }}
              value={customerData?.address2}
              maxLength={20}
            />
          </div>
        </div>
        <div className="Row">
          <div className="Form-item">
            <label>Phone</label>
            <input
              className={"Item-title"}
              placeholder="Phone"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  phone: e.target.value.replace(/[^0-9 ]/g, ""),
                });
              }}
              value={customerData?.phone}
              maxLength={20}
            />
          </div>
          <div className="Form-item">
            <label>Website</label>
            <input
              className={"Item-title"}
              placeholder="Website"
              onChange={(e) => {
                setCustomerData({
                  ...customerData,
                  website: e.target.value,
                });
              }}
              value={customerData?.website}
              maxLength={20}
            />
          </div>
        </div>
        <div className="Confirm-btn" onClick={onClick}>
          Set Details
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return { Receipt: state.Receipt };
};

const connector = connect(mapStateToProps, { setReceipt, getReceipt });

export default connector(CustomerModal);
