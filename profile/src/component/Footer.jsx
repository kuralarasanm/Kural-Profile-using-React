import twitter from "../image/twitter.png"
import facebook from "../image/facebook.png"
import linkedin from "../image/linkedin.png"
import insta from "../image/insta.png"
import "../styles/footer.css"
const Footer = () => {
    return (
        <div>
            <section class="Profileend">
                <div class="end1 text-center">
                    <img src={twitter} alt="" height="50px" width="50px" className="me-1" />
                    <img src={facebook} alt="" height="50px" width="50px" className="me-1" />
                    <img src={linkedin} alt="" height="50px" width="50px" className="me-1" />
                    <img id="insta" src={insta} alt="" height="50px" width="70px"
                        style={{ background: '#0BCEAF' }} className="me-1" />

                </div>
                <div class="end2">
                    <a href="">Privacy</a>
                    <hr />
                    <a href="">Terms</a>
                    <hr />
                    <a href="">FAQs</a>
                    <hr />
                    <a href="">Help</a>
                </div>
                <div class="end3">
                    <p><b>©</b> <a href="#home">Domain Name</a>. All Rights Reserved. Designed by <u className="text-primary">ReactJS and Bootstrap</u>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Footer;