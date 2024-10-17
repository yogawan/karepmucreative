import { Link } from "react-router-dom";

const CardMolecules = () => {
    return (
        <div className="products">
            <li><Link to={""}>Our Products</Link></li>
            <div className="card">
                <div className="content">
                    <h2>UI Kit</h2>
                    <p>We create Design</p>
                    <hr /><br />
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Create Lo-Fi and Hi-Fi <br />Design in Figma</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Understand Components, <br />Variants and Auto Layouts in Figma</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Using Plugin in Figma</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Prototyping in Figma</p></div>
                </div>
                <div className="content">
                    <h2>Template <br /> Presentasi</h2>
                    <p>We build robust and scalable <br />web and mobile applications.</p>
                    <hr /><br />
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Frontend Development <br />(React, Vue, Angular)</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Backend Development <br />(Node.js, Python, Ruby on Rails)</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Database Design</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Deployment</p></div>
                </div>
                <div className="content">
                    <h2>Template <br />Website</h2>
                    <p>We create stunning 3D visualizations <br />for your products and environments.</p>
                    <hr /><br />
                    <div className="poin"><img src="./poin.png" alt="img" /><p>3D Modeling</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Texturing</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>3D Animation</p></div>
                    <div className="poin"><img src="./poin.png" alt="img" /><p>Visual Architecture</p></div>
                </div>
            </div>
        </div>
    )
}

export default CardMolecules;