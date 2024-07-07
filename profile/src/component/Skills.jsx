
import "../styles/skills.css"
import html from "../image/html.png"
import css from "../image/css.png"
import bootstrap from "../image/bootstrap.jpeg"
import tailwind from "../image/tailwind.jpeg"
import javascript from "../image/JavaScript.png"
import reactjs from "../image/react.png"
import redux from "../image/redux.png"
import java from "../image/java.png"
import jdbc from "../image/jdbc.png"
import hibernate from "../image/hibernate.jpeg"
import spring from "../image/spring.png"
import springboot from "../image/spring boot.png"
import git from "../image/git.png"
import github from "../image/github.png"
import postman from "../image/postman.png"
import eclipse from "../image/eclipse.png"
import visualstudio from "../image/visual Studio.png"
import sql from "../image/sql.jpeg"
const Skills = () => {
    return (
        <div>
            <section class="skills" id="skills">

                <div class="skillhead">
                    <h1 id="skilldesign">SKILLS</h1>
                    <h1>MY SKILLS</h1>
                </div>
                <div class="skillcontent">
                    <div class="skillcontentleft">
                        <h1>Front-End Developer skills:</h1>
                        <div className="html d-flex mb-4">
                            <img src={html} alt="" height={"60px"} />
                            <li>HTML</li>
                        </div>
                        <div className="css d-flex mb-4">
                            <img src={css} alt="" height={"60px"} />
                            <li>Css</li>
                        </div>
                        <div className="javascript d-flex mb-4">
                            <img src={javascript} alt="" height={"60px"} />
                            <li>JAVASCRIPT</li>
                        </div>
                        <div className="reactjs d-flex mb-4">
                            <img src={reactjs} alt="" height={"60px"} />
                            <li>ReactJS</li>
                        </div>
                        <div className="bootstrap d-flex mb-4">
                            <img src={bootstrap} alt="" height={"60px"} />
                            <li>BootStrap css</li>
                        </div>
                        <div className="tailwind d-flex mb-4">
                            <img src={tailwind} alt="" height={"60px"} />
                            <li>Tailwind css</li>
                        </div>
                        <div className="redux d-flex mb-4">
                            <img src={redux} alt="" height={"60px"} />
                            <li>Redux</li>
                        </div>
                    </div>
                    <div class="skillcontentcenter">
                        <h1>Back-End Developer Skills:</h1>
                        <ul>
                            <div className="java d-flex mb-2">
                                <img src={java} alt="" height={"60px"} />
                                <li className="mt-2">CORE JAVA</li>
                            </div>

                            <li><h4 className="text-danger">Advance JAVA like -</h4>
                                <ul>
                                    <div className="jdbc d-flex mb-4">
                                        <img src={jdbc} alt="" height={"60px"} />
                                        <li className="mt-2">JDBC</li>
                                    </div>
                                    <div className="hibernate d-flex mb-4">
                                        <img src={hibernate} alt="" height={"60px"} />
                                        <li className="mt-2">Hibernate</li>
                                    </div>
                                    <div className="spring d-flex mb-4">
                                        <img src={spring} alt="" height={"60px"} />
                                        <li className="mt-2">Spring</li>
                                    </div>
                                    <div className="springboot d-flex mb-4">
                                        <img src={springboot} alt="" height={"60px"} />
                                        <li className="mt-2">SpringBoot</li>
                                    </div>
                                </ul>
                            </li>
                            <li><h4 className="text-danger">Data Base -</h4>
                            <ul>
                            <div className="sql d-flex mb-4">
                                        <img src={sql} alt="" height={"60px"} />
                                        <li className="mt-2">Oracle SQL</li>
                                    </div>
                            </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="skillcontentend">
                        <h1>Others Skills:</h1>
                        {/* <li>Maven Project</li> */}
                        <div className="eclipse d-flex mb-4">
                            <img src={eclipse} alt="" height={"60px"} />
                            <li className="mt-2">Eclipse</li>
                        </div>
                        <div className="visualstudio d-flex mb-4">
                            <img src={visualstudio} alt="" height={"60px"} />
                            <li className="mt-2">Visual Studio</li>
                        </div>
                        <div className="git d-flex mb-4">
                            <img src={git} alt="" height={"60px"} />
                            <li className="mt-2">Git</li>
                        </div>
                        <div className="github d-flex mb-4">
                            <img src={github} alt="" height={"60px"} />
                            <li className="mt-2">GitHub</li>
                        </div>
                        <div className="postman d-flex mb-4" style={{ position: "relative", right: '15px' }}>
                            <img src={postman} alt="" height={"60px"} />
                            <li className="mt-2" style={{ position: "relative", right: '22px' }}>PostMan</li>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;