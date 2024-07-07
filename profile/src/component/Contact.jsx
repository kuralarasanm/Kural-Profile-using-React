
import "../styles/contact.css"
const Contact = () => {
    return (
        <div>
            <section class="contact" id="contact">
                <div class="contacthead">
                    <h1 id="contactdesign">CONTACT</h1>
                    <h1>CONTACT ME</h1>
                </div>
                <div class="contactcontent">
                    <form action="https://formspree.io/f/mkndnayk" method="post">
                        <div class="contactcontent1">
                            <input type="text" name="text" placeholder="Your Name" className="me-1" />
                            <input type="email" name="email" placeholder="Your Email" />
                        </div>
                        <div class="contactcontent2">
                            <input type="text" name="text" placeholder="Subject" />
                        </div>
                        <div class="contactcontent3">
                            <input type="text" name="text" placeholder="Message" />

                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;