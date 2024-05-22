import '../style.css';
import Anchor from './Anchor';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Anchor link="index.html" className="active"  innerText="Home" /></li>
                <li><Anchor link="routes.html" className=""  innerText="Routes" /></li>
                <li><Anchor link="work.html" className=""  innerText="Work" /></li>
                <li><Anchor link="partners.html" className=""  innerText="Partners" /></li>
                <li><Anchor link="contactUs.html" className=""  innerText="Contact Us" /></li>
            </ul>
        </nav>
    )
}

export default Navbar;