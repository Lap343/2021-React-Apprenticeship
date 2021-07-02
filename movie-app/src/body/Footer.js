import {useState} from 'react';
import paul from '../assets/paul.jpeg';
import luis from '../assets/luis.jpg';
import garrett from '../assets/garrett.jpg';
import kenny from '../assets/kenny.jpg';
import connie from '../assets/connie.jpg';

const developers = [
    {
        name: `Paul Gonzales`,
        picture: paul,
        github: `https://github.com/gonzalespaulb`,
    },
    {
        name: `Luis Perez`,
        picture: luis,
        github: `https://github.com/Lap343`,
    },
    {
        name: `Garrett Johnson`,
        picture: garrett,
        github: `https://github.com/Gjhnsn`,
    },
    {
        name: `Kenneth Ferrell`,
        picture: kenny,
        github: `https://github.com/krferrell`,
    },
    {
        name: `Connie Lai`,
        picture: connie,
        github: `https://github.com/connielion`,
    },
];

const backgroundImage = (name) => {

    const backImg = {
        backgroundImage: `url(${name})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
    }
    return backImg;
}


const Footer = () => {

    const [ptrigger, setPTrigger] = useState(false);
    const [ctrigger, setCTrigger] = useState(false);
    const [ktrigger, setKTrigger] = useState(false);
    const [gtrigger, setGTrigger] = useState(false);
    const [ltrigger, setLTrigger] = useState(false);

    const triggerToggle = (name) => {
        if (name === `paul`) return setPTrigger(!ptrigger);
        if (name === `kenny`) return setKTrigger(!ktrigger);
        if (name === `garrett`) return setGTrigger(!gtrigger);
        if (name === `connie`) return setCTrigger(!ctrigger);
        if (name === `luis`) return setLTrigger(!ltrigger);
    }

    return(
        <div className="footer">
            <h2>The talents that brought you ToadTV</h2>
            <div className="dev-container">
                <div
                    className="profile-container"
                    onMouseEnter={() => triggerToggle(`paul`)}
                    onMouseLeave={() => triggerToggle(`paul`)}
                >
                    <a href={developers[0].github} target="_blank">
                        <div style={backgroundImage(`${paul}`)} className="dev-profile"></div>

                        <h3 className={`dev-name ${ptrigger ? "dev-name-down" : "dev-name-up"}`}>
                            {developers[0].name}
                        </h3>
                    </a>
                </div>

                <div
                    className="profile-container"
                    onMouseEnter={() => triggerToggle(`luis`)}
                    onMouseLeave={() => triggerToggle(`luis`)}
                >
                    <a href={developers[1].github} target="_blank">
                        <div style={backgroundImage(`${luis}`)} className="dev-profile"></div>
                        <h3 className={`dev-name ${ltrigger ? "dev-name-down" : "dev-name-up"}`}>
                            {developers[1].name}
                        </h3>
                    </a>
                </div>

                <div
                    className="profile-container"
                    onMouseEnter={() => triggerToggle(`garrett`)}
                    onMouseLeave={() => triggerToggle(`garrett`)}
                >
                    <a href={developers[2].github} target="_blank">
                        <div style={backgroundImage(`${garrett}`)} className="dev-profile"></div>
                        <h3 className={`dev-name ${gtrigger ? "dev-name-down" : "dev-name-up"}`}>
                            {developers[2].name}
                        </h3>
                    </a>
                </div>

                <div
                    className="profile-container"
                    onMouseEnter={() => triggerToggle(`kenny`)}
                    onMouseLeave={() => triggerToggle(`kenny`)}
                >
                    <a href={developers[3].github} target="_blank">
                        <div style={backgroundImage(`${kenny}`)} className="dev-profile"></div>
                        <h3 className={`dev-name ${ktrigger ? "dev-name-down" : "dev-name-up"}`}>
                            {developers[3].name}
                        </h3>
                    </a>
                </div>

                <div
                    className="profile-container"
                    onMouseEnter={() => triggerToggle(`connie`)}
                    onMouseLeave={() => triggerToggle(`connie`)}
                >
                    <a href={developers[4].github} target="_blank">
                        <div style={backgroundImage(`${connie}`)} className="dev-profile"></div>
                        <h3 className={`dev-name ${ctrigger ? "dev-name-down" : "dev-name-up"}`}>
                            {developers[4].name}
                        </h3>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer;