import { connect } from "react-redux";
import { setReceipt, getReceipt } from "../redux/actions/receipt";

const Details = (props) => {
  const { title, Receipt } = props;

  const onChange = (e) => {
    const titleName = (title[0].toLowerCase() + title.substring(1)).replace(
      " ",
      ""
    );
    props.setReceipt({ ...props.Receipt, [titleName]: e.target.value });
  };
  return (
    <div className="Details Padding">
      <span className="Title">{`${title} :`}</span>
      <input
        className="Description Hover"
        value={
          Receipt[
            (title[0].toLowerCase() + title.substring(1)).replace(" ", "")
          ]
        }
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { Receipt: state.Receipt };
};

const connector = connect(mapStateToProps, { setReceipt, getReceipt });

export default connector(Details);
