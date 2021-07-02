import {useState} from 'react';
import paul from '../assets/paul.jpeg';
import luis from '../assets/luis.jpg';
import garrett from '../assets/garrett.jpg';
import kenny from '../assets/kenny.jpg';
import connie from '../assets/connie.jpg';
import FooterCard from './FooterCard';

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

const addDeveloper = developers.map((dev, i) => {
    return (
        <FooterCard dev={dev} key={i}/>
    )
   
});

const Footer = () => {

    return(
        <div className="footer">
            <h2 className="footer-title" >The talents that brought you ToadTV</h2>
            <div className="dev-container">
                {addDeveloper}
            </div>
        </div>
    )
}

export default Footer;