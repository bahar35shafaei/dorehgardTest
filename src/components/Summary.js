import { connect } from "react-redux";
import { setReceipt, getReceipt } from "../redux/actions/receipt";

const Summary = (props) => {
  const { Receipt } = props;
  const tax = Receipt?.invoices.length * 10;
  const subtotal = Receipt?.invoices.reduce((acc, object) => {
    return acc + object.quantity * object.price;
  }, 0);
  const total = Receipt?.invoices.reduce((acc, object) => {
    return acc + object.quantity * object.price;
  }, 0);
  return (
    <div className="Summary ">
      <div className="Header Padding">
        <span>Invoice Summary</span>
      </div>
      <div className="Row Padding">
        <span>Subtotal</span>
        <span>{subtotal}</span>
      </div>
      <div className="Row Padding">
        <span>Tax</span>
        <span>{tax || 10}</span>
      </div>
      <div className="Row Padding">
        <span>Total (USD)</span>
        <span>{total - tax}</span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { Receipt: state.Receipt };
};

const connector = connect(mapStateToProps, { setReceipt, getReceipt });

export default connector(Summary);
