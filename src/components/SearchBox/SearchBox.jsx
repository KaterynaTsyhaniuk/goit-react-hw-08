import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div className={css.searshBox}>
      <label htmlFor="search">Find contacts by name or number</label>
      <input
        id="search"
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.searchInput}
      />
    </div>
  );
}

export default SearchBox;
