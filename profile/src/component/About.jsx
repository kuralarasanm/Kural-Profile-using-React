
import kural from "../image/kural.jpg";
const About = () => {
    return (
        <div>
            <section class="aboutme" id="about">
                <div class="abouthead">
                    <h1 id="aboutdesign">ABOUT</h1>
                    <h1>ABOUT ME</h1>
                </div>
                <div class="aboutcontent" id="about">
                    <div class="aboutimage">
                        <img src={kural} alt="" height="300px" width="300px"/>
                    </div>
                    <div class="aboutcontent1">
                        <div class="aboutcontent1left">
                            <p><b>Name:</b> Kuralarasan</p>
                            <p><b>Degree:</b> Bachelor of degree</p>
                            <p><b>phone no:</b> 6380564945 </p>
                            <p><b>Address: </b>2/116b,m.oddapatti(vill),dharmapuri(dt),TamilNadu-635202</p>
                            <div class="aboutbutton">
                                <a href="#home"><button>Hire Me</button></a>
                            </div>
                        </div>
                        <div class="aboutcontet1right">
                            <p><b>Birthday:</b> 31 December 2001</p>
                            <p><b>Experience:</b> Fresher</p>
                            <p><b>Email:</b> kuralarasan3112@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;