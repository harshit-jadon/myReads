import { Link } from "react-router-dom";
import "./BackNavigation.css"

const BackNavigation = (props)=>{
    return(
        <div className="search-books-bar">
        <Link to="/" className="close-search">
          close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={props.handleSearchValue}
            value={props.searchValue}
          />
        </div>
      </div>
    )
    
}

export default BackNavigation;