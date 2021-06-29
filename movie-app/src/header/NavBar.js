import { useState } from "react";
import cancel from '../assets/search-cancel.svg';
import search from '../assets/search-magnify.svg';

const NavBar = ({ pageSet, movieSearch, setMovieSearch }) => {
  const [active, setActive] = useState(false);
  const [cherryPopped, setCherryPopped] = useState(false);

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

  const openSwitch = (e) => {
    setActive(true);
    setCherryPopped(true);
  }

  const closeSwitch = (e) => {
    e.stopPropagation();
    setActive(false)
  }

  const applyStyles = (el) => {
    const styleApplier = () => {
      let currStyle = `btn-el_${el}`;
      if(cherryPopped) {
        if(active) { return currStyle + ` sidexside_${el}` } 
        if(!active) { return currStyle +  ` stacked_${el}`}
      }
      return currStyle;
    }
    return styleApplier();
  }

  return (
    <div className="header">
      <nav className="navigation">
        <div className="logo-container">
          <img src={"./logo.svg"} alt="ToadTv logo" className="logo" />
        </div>
        <form onSubmit={(e) => titleChecker(e)}>
          <div 
            onClick={openSwitch} 
            className={applyStyles(`btn`)}
          >
            <img 
              onClick={openSwitch} 
              className="btn-el_search" 
              src={search}  
              alt="search-icon" 
            />
            <input 
              className={applyStyles(`input`)} 
              id="input"
            />
            <img 
              onClick={(e) => {
                closeSwitch(e);
                clearText();
                setMovieSearch();
                pageSet(1);
              }}
              className={applyStyles(`cancel`)} 
              src={cancel} 
              alt="cancel-icon" 
            />
          </div>
        </form>
      </nav>
        <div className="hero">
          <h2 className="hero-text">
            You're now being <br /> controlled by ToadTV
          </h2>
        <div className="hero-line"></div>
      </div>
    </div>
  )
}

export default NavBar;