import { useState, useRef } from "react";
import cancel from "../assets/search-cancel.svg";
import search from "../assets/search-magnify.svg";

const NavBar = ({ setPage, setMovieSearch, setSearchString, searchString }) => {

  const [active, setActive] = useState(false);
  const [firstClick, setFirstClick] = useState(false);


  const searchBar = useRef(null);

  const clearText = () => {
    setSearchString("");
  };

  const titleChecker = (input) => {
    if (firstClick && input.length < 3) {
      alert("Please search a movie title with more than two letters");
    } else {
      setMovieSearch(input);
      setPage(1);
    }
  };
  // opens search bar and focus on input
  const openSwitch = () => {
    searchBar.current.focus();
    setActive(true);
    setFirstClick(true);
  };

  const closeSwitch = (e) => {
    e.stopPropagation();
    setActive(false);
  };

  const handleSearchChange = (event) => {
    setSearchString(event.target.value);
  };
  const handleSubmit = () => {
    titleChecker(searchString);
  };

  const enterSubmit = (e) => {
    if (e.key === "Enter") {
      titleChecker(searchString);
    }
  };

  const applyStyles = (el) => {
    const styleApplier = () => {
      let currStyle = `btn-el_${el}`;
      if (firstClick) {
        if (active) {
          return currStyle + ` sidexside_${el}`;
        }
        if (!active) {
          return currStyle + ` stacked_${el}`;
        }
      }
      return currStyle;
    };
    return styleApplier();
  };

  return (
    <div className="header">
      <nav className="navigation">
        <div className="logo-container">
          <a href="/">
            <img src={"logo.png"} alt="ToadTv logo" className="logo" />
          </a>
        </div>

        <div onClick={openSwitch} className={applyStyles(`btn`)}>
          {/* search icon */}
          <img
            onClick={active ? handleSubmit : openSwitch}
            className="btn-el_search"
            src={search}
            alt="search icon"
          />
          {/* search input */}
          <input
            className={applyStyles(`input`)}
            id="input"
            type="text"
            placeholder="Search movies by title"
            value={searchString}
            onChange={handleSearchChange}
            onKeyPress={enterSubmit}
            ref={searchBar}
          />
          {/* close search bar, return home, and clear inpu */}
          <img
            onClick={(e) => {
              closeSwitch(e);
              clearText();
              setMovieSearch();
            }}
            className={applyStyles(`cancel`)}
            src={cancel}
            alt="cancel-icon"
          />
        </div>
      </nav>
      <div className="hero">
        <h2 className="hero-text">
          You're now being <br /> controlled by ToadTV
        </h2>
        <div className="hero-line"></div>
      </div>
    </div>
  );
};

export default NavBar;
