import React, { useState } from "react";

const FooterCard = ({ dev }) => {
  const [trigger, setTrigger] = useState(false);

  const triggerToggle = () => {
    setTrigger(!trigger);
  };

  const backgroundImage = (name) => {
    const backImg = {
      backgroundImage: `url(${name})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
    };
    return backImg;
  };

  return (
    <div
      className="profile-container"
      onMouseEnter={triggerToggle}
      onMouseLeave={triggerToggle}
    >
      <a href={dev.github} target="_blank" rel="noreferrer">
        <div
          style={backgroundImage(`${dev.picture}`)}
          className="dev-profile"
        ></div>

        <h3 className={`dev-name ${trigger ? "dev-name-down" : "dev-name-up"}`}>
          {dev.name}
        </h3>
      </a>
    </div>
  );
};

export default FooterCard;
