import "./SelectionItem.css";

const SelectionItem = ({ ClassNumber, number, text }) => {
  return (
    <div className={`selection-item  selection-item_${ClassNumber}`}>
      <p className="selection-item_number">{number}</p>
      <p className="selection-item_text">{text}</p>
    </div>
  );
};

export default SelectionItem;
