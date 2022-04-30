import { connect } from "react-redux";
import ImageTemplate from "../assets/user-dot.svg";
import { setReceipt, getReceipt } from "../redux/actions/receipt";

const Customer = (props) => {
  const { recipient, setCustomerModalVisible, Receipt, setRecipientFlag } =
    props;
  const customerTitle = recipient
    ? {
        fromOrTo: "To",
        title: "Recipient Name",
        detail: "Recipient Contract Details",
      }
    : {
        fromOrTo: "From",
        title: "Sender Name",
        detail: "Sender Contract Details",
      };
  const { fromOrTo, title, detail } = customerTitle;
  const CustomerData = recipient ? Receipt.receiver : Receipt.sender;
  const {
    name,
    country,
    firstName,
    lastName,
    taxRegistrationNumber,
    email,
    address1,
    address2,
    phone,
    website,
  } = CustomerData;

  return (
    <div className="Customer Padding Hover">
      <span className="From">{fromOrTo}</span>
      {firstName !== "" ? (
        <div className="Info-container">
          <span className="Header">
            {name === "company" ? "Company" : "Client"}
          </span>
          <div className="Content">
            <span>
              {firstName}
              {lastName}
            </span>
            <span>{address1}</span>
            <span>{address2}</span>
            <span>{country}</span>
          </div>
          <div className="Content">
            <span>{email}</span>
            <span>{phone}</span>
            <span>{website}</span>
          </div>
          <div className="Content">
            <span>Tax Registration Number :</span>
            <span>{taxRegistrationNumber}</span>
          </div>
        </div>
      ) : (
        <div
          className="Content"
          onClick={() => {
            if (recipient) {
              setRecipientFlag(true);
              setCustomerModalVisible(true);
            } else setCustomerModalVisible(true);
          }}
        >
          <img src={ImageTemplate} className="Image-template" alt="logo" />
          <div className="Description">
            <span className="Name">{title}</span>
            <span className="Detail">{detail}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { Receipt: state.Receipt };
};

const connector = connect(mapStateToProps, { setReceipt, getReceipt });

export default connector(Customer);
