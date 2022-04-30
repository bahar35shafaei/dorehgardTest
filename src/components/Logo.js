import { useState } from "react";
import { connect } from "react-redux";
import ImageTemplate from "../assets/user-dot.svg";
import { setReceipt, getReceipt } from "../redux/actions/receipt";

const Logo = (props) => {
  const { Receipt } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  const onChange = (e) => {
    const img = e.target.files[0];
    setSelectedImage(URL.createObjectURL(img));

    props.setReceipt({ ...Receipt, logo: URL.createObjectURL(img) });
  };

  return (
    <div className="Logo Padding Hover">
      {selectedImage ? (
        <img id="output" src={selectedImage} />
      ) : (
        <>
          <img src={ImageTemplate} className="Image-template" alt="logo" />
          <label className="Description" htmlFor="logo">
            Drag your logo here or <br /> select a file
          </label>
          <input
            onChange={(event) => onChange(event)}
            type="file"
            id="logo"
            accept=".gif,.jpg,.jpeg,.png"
          />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { Receipt: state.Receipt };
};

const connector = connect(mapStateToProps, { setReceipt, getReceipt });

export default connector(Logo);
