import { useState } from "react";

const NavBar = ({ movieSearch, setMovieSearch }) => {
  const [searchOpen, setSearchOpen] = useState();

  const clearText = () => {
    document.getElementById("input").value = "";
  };

  const titleChecker = (e) => {
    e.preventDefault();
    if (e.target[0].value.length < 3) {
      alert("Please search a movie title with more than two letters");
    } else {
      setMovieSearch(e.target[0].value);
    }
  };

  return (
    <div className="header">
      <nav className="navigation">
        <div className="logo-container">
          <img src={"./logo.svg"} alt="ToadTv logo" className="logo" />
        </div>

        <div>
          <form
            className={
              searchOpen === undefined
                ? "initial"
                : searchOpen
                ? `search-open`
                : `search-close`
            }
            onSubmit={(e) => titleChecker(e)}
          >
            <img
              onClick={() => {
                setSearchOpen(true);
              }}
              className="search-icon"
              src={"./Search_Icon.svg"}
              alt="none"
            />
            <input
              id="input"
              type="text"
              className={searchOpen ? "search-bar" : "search-bar-close"}
            ></input>
            <button
              type="button"
              onClick={() => {
                setSearchOpen(false);
                clearText();
              }}
              className={searchOpen ? "button-show" : "button-hide"}
            >
              <img className="button-img" alt="" src="./cancel.svg" />
            </button>
          </form>
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
