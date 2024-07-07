
// import Slider from "./Slider.jsx"
// import slides from '../slider.json'
import "../styles/project.css";
const Project = () => {
    return (
        <div>
            <section className="project" id="project">
                <div className="projecthead">
                    <h1 id="projectdesign">PROJECT</h1>
                    <h1>MY PROJECT</h1>
                </div>
                <div className="projectcontent">
                    <h1 id="projectheading"><u>COLLEGE PROJECT</u></h1>
                    <div className="projectcollege">
                        <div className="projectcollegemimi">
                            <h1>MINI PROJECT OBJECT</h1>
                            <h2>Smart Solutions for Railways</h2>
                            <p>The purpose of this project is to primarily provide a completely digital mode of railway ticket
                                booking and eventually eliminate the hassle of paperwork and manual labour and effort gone
                                through getting it done. We aim at fulfilling a purpose of completely digitalized and
                                hassle-free railway travel, that is not only minimal in terms of effort and time, but also
                                wholesomely resulting in keeping the user constantly notified and updated regarding almost all
                                aspects with respect to railways. </p>
                        </div>
                        <div className="projectcollegemain">
                            <h1>MAIN PROJECT OBJECT</h1>
                            <h2>Face Detection Voting System Using Open CV</h2>
                            <p><ul>

                                <li>The objective of face recognition is, from the incoming image, to find a series of data of
                                    the
                                    same face in a set of training images in a database.</li>
                                <li>The great difficulty is ensuring that this process is carried out in real-time, something
                                    that
                                    is not available to all biometric face recognition software providers.</li>
                                <li>OpenCV uses machine learning algorithms to search for faces within a picture.</li>
                                <li>The faces are so complicated, there isn't one simple test that will tell you if it found a
                                    face
                                    or not. Instead, there are thousands of small patterns and features that must be matched.
                                </li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="container">
                <h1>Addtional Project:</h1>
                <Slider slides={slides}/>
            </div> */}
            <div className="container addproject">
                <h2 className="text-center mt-5"><u>Addtional Project:</u></h2>
                <p className="h3">1.E-COMMERCE</p>
                <p><h2 className="text-danger">Decription:</h2>Project Shopkart is a cutting-edge e-commerce application meticulously crafted with HTML, CSS, JavaScript, and React for the frontend, while leveraging the robust Spring Boot framework for the backend, and MySQL for the database. This comprehensive platform features four pivotal modules: Merchant, User, Product, Address, and Order. Seamlessly blending functionalities, it empowers merchants to effortlessly add, view, edit, and remove products, alongside managing their addresses, while users can conveniently browse products and place orders. Notably, the system ensures secure account verification via Java Mail API, exemplifying its dedication to both functionality and security.</p>
                <p className="h3">2.User Management System</p>
                <p><h2 className="text-danger">Decription:</h2>"I'm excited to share details about my project, the User Management System. This robust system is meticulously crafted using React.js to ensure a seamless user experience. Leveraging the power of JSON, it efficiently stores user data, facilitating smooth operations. One of its standout features is the ability to effortlessly add, update, delete, and view user profiles. This comprehensive functionality makes it an exceptionally effective solution for managing users with ease and precision."</p>
                <p className="h3">3.Weather App</p>
                <p><h2 className="text-danger">Decription:</h2>I've created a weather application utilizing HTML, CSS, and JavaScript. The main purpose of this project is to provide users with up-to-date weather information for cities of their choice. Through the application's interface, users can input the name of a city, and the application retrieves and displays relevant weather data such as temperature, humidity, wind speed, and conditions. This functionality enhances users' ability to plan their activities and make informed decisions based on current weather conditions. Additionally, the application may incorporate features such as graphical representations of weather forecasts, interactive maps, and the ability to save favorite locations for quick access to their weather information. Overall, the project offers a user-friendly and efficient way to access weather data for various locations worldwide.</p>
            
            </div>
        </div>
    );
}

export default Project;