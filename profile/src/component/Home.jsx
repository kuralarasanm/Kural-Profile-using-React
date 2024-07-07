
import React from 'react';
import image from "../image/3G4A1769.JPG"

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import imagearrow from "../image/down-arrow.png"
import "../styles/home.css"
function Home() {
    var [typingeffect] = useTypewriter({
        words: ["Java Full Stack Developer"],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 80,
    })
    return (
        <div>
            {/* <section class="profile" id="home">
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={image} roundedCircle height={"400px"} width={"400px"} />
                        </Col>
                        <Col>
                            <p id="iam">I'm</p>
                            <h1 id="name">KURALARASAN</h1>
                            <span style={{ fontWeight: 'bold', color: 'white' }}>{typingeffect}<span style={{ color: 'red' }}><Cursor /></span></span><br />
                            <a href="Kuralarasan M Resume .docx" download="kuralarasan_M Resume"><button>Download CV</button></a>
                            <a href="Kuralarasan M Resume .pdf"><button>View CV</button></a>
                        </Col>
                    </Row>
                </Container>
            </section> */}



            <section class="profile" id="home">
                <img src={image} alt="" />
                <div class="profilecontent">
                    <p id="iam">I'm</p>
                    <h1 id="name">KURALARASAN</h1>

                    <div class="container1">
                        <h1>
                            <span>{typingeffect}<span style={{ color: 'red' }}><Cursor /></span></span><br />
                        </h1>
                        <a href="Kuralarasan M Resume .docx" download="kuralarasan_M Resume"><button className='me-2'>Download CV</button></a>
                        <a href="Kuralarasan M Resume .pdf"><button>View CV</button></a>

                        <img id="down" src={imagearrow} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
