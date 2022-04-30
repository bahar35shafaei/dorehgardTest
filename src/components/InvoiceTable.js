import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { setReceipt, getReceipt } from "../redux/actions/receipt";

const InvoiceTable = (props) => {
  const { Receipt } = props;

  const [showInsertRow, setShowInsertRow] = useState(false);
  const [newRow, setNewRow] = useState({});
  const [rows, setRows] = useState(Receipt.invoices);
  const [errors, setErrors] = useState({
    title: false,
    quantity: false,
    price: false,
  });

  const insertRow = () => {
    const { title, price, quantity } = newRow;
    if (!title || title === " ") {
      setErrors({ ...errors, title: true });
      return;
    }
    if (!quantity || quantity === " ") {
      setErrors({ ...errors, quantity: true });
      return;
    }
    if (!price || price === " ") {
      setErrors({ ...errors, price: true });
      return;
    }
    setShowInsertRow(false);
    setNewRow({});
    if (newRow.id) {
      const index = rows.findIndex((item) => item.id === newRow.id);
      const tmpRows = rows;
      tmpRows[index] = newRow;
      setRows(tmpRows);
      props.setReceipt({ ...Receipt, invoices: tmpRows });
    } else {
      props.setReceipt({
        ...Receipt,
        invoices: [...rows, { id: uuidv4(), ...newRow }],
      });
      setRows([...rows, { id: uuidv4(), ...newRow }]);
    }
  };

  const removeRow = (row) => {
    setRows(rows.filter((item) => item.id !== row.id));
  };
  const editRow = (row) => {
    setNewRow(row);
    setShowInsertRow(true);
  };
  const rowMaker = (row) => {
    const { title, price, quantity, description } = row;
    const tax = 10;
    return (
      <tr key={row}>
        <td>
          <span className="Item-name">{title}</span>
          <span className="Item-description">{description}</span>
        </td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{tax}</td>
        <td>{quantity * price - tax}</td>
        <td>
          <span className="Edit-btn" onClick={() => editRow(row)}>
            edit
          </span>
          <span className="Remove-btn" onClick={() => removeRow(row)}>
            remove
          </span>
        </td>
      </tr>
    );
  };

  return (
    <>
      <table className="InvoiceTable">
        <tr>
          <th>Item</th>
          <th>HRS/QTY</th>
          <th>Rate</th>
          <th>Tax</th>
          <th>Subtotal</th>
          <th>Actions</th>
        </tr>
        {rows.map((row) => rowMaker(row))}
      </table>
      {showInsertRow ? (
        <div className="New-row-container">
          <div className="New-table-row">
            <div className="Item-properties">
              <input
                className={`${errors.title ? "Error" : ""}` + " Item-title "}
                placeholder="Title"
                onChange={(e) => {
                  setNewRow({
                    ...newRow,
                    title: e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""),
                  });
                  setErrors({
                    ...errors,
                    title: false,
                  });
                }}
                value={newRow.title}
                maxLength={20}
              />
              <input
                className={
                  `${errors.quantity ? "Error" : ""}` + " Item-details "
                }
                placeholder="Quantity"
                onChange={(e) => {
                  setNewRow({
                    ...newRow,
                    quantity: e.target.value.replace(/[^Z0-9 ]/g, ""),
                  });
                  setErrors({
                    ...errors,
                    quantity: false,
                  });
                }}
                value={newRow.quantity}
                maxLength={5}
                type="tel"
              />
              <input
                className={`${errors.price ? "Error" : ""}` + " Item-details "}
                placeholder="Price"
                onChange={(e) => {
                  setNewRow({
                    ...newRow,
                    price: e.target.value.replace(/[^Z0-9 ]/g, ""),
                  });
                  setErrors({
                    ...errors,
                    price: false,
                  });
                }}
                value={newRow.price}
                maxLength={5}
                type="tel"
              />
              <input
                className="Item-details"
                disabled
                value={10}
                onChange={(e) => {
                  setNewRow({ ...newRow, tax: e.target.value });
                }}
              />
            </div>
            <textarea
              placeholder="Description"
              onChange={(e) => {
                setNewRow({
                  ...newRow,
                  description: e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""),
                });
              }}
              value={newRow.description}
              maxLength={30}
            />
          </div>
          <div className="Confirm-button" onClick={insertRow}>
            confirm
          </div>
        </div>
      ) : (
        <div className="Add-new-row" onClick={() => setShowInsertRow(true)}>
          <span>Add New Invoice Item</span>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return { Receipt: state.Receipt };
};

const connector = connect(mapStateToProps, { setReceipt, getReceipt });

export default connector(InvoiceTable);
