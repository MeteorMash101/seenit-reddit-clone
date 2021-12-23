import classes from './SearchBar.module.css';
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props) => {
  return (
    <div className={classes.wrapper}>
        <input
            className={classes.searchInput}
            type="text"
            placeholder="search..."
            // value={this.state.value}
            // onChange={this.handleChange}
        />
        <button type="submit" className={classes.searchBtn}>
            <AiOutlineSearch/>
        </button>
    </div>
  );
}

export default SearchBar;
