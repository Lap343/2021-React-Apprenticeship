const NavBar = () => {
  return (
      <div className = "header">

        <nav className = "navigation">

          <div className= "logo-container">
            <img src={'./logo.svg'} alt="ToadTv logo" className="logo"/>
          </div>

          <div className ="searchbar-container">
            <div className = "searchbar"></div>
          </div>

        </nav>

        <div className="hero">
          <h2 className= "hero-text">You're now being <br/> controlled by ToadTV</h2>

          <div className="hero-line"></div>
        </div>
      </div>
    );
};

export default NavBar;
