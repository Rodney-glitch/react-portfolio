// import CheckIcon from "@mui/icons-material/Check";
import { Check } from "@material-ui/icons";
import "./itemList.css";

const ItemList = ({ item, id }) => {
  return (
    <li style={id > 0 ? { marginTop: "-10px" } : {}}>
      <Check className="check" fontSize="small" />
      {item}
    </li>
  );
};

export default ItemList;
