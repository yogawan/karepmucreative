import { Link } from "react-router-dom"

const NavigationMolecules = () => {
    return (
        <nav>
            <ul>
                <img src="./logo.png" alt="" />
            </ul>
            <ul>
                <li><img src="./home.png" alt="img" /><Link to={"/"}>Home</Link></li>
                <li><img src="./work.png" alt="img" /><Link to={"/product"}>Product</Link></li>
                <li><img src="./hero.png" alt="img" /><Link to={"/brand"}>Brand</Link></li>
                <li><img src="./sun.png" alt="img" /><Link to={"/team"}>Our Team</Link></li>
            </ul>
        </nav>
    );
};

export default NavigationMolecules;