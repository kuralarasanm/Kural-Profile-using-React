
import "../styles/education.css"
import certicate from "../image/Jspiderscertificate .png"
const Education = () => {
    return (
        <div>
            <section class="education" id="education">
                <div class="educationhead">
                    <h1 id="educationdesign">EDUCATION</h1>
                    <h1>MY EDUCATION</h1>
                </div>
                <div class="educationcontent container">
                    <div class="educationcontentdegree">
                        <h1>BACHELOR DEGREE(BE)</h1>
                        <p>Adhiyamaan College Of Engineering-hosur</p>
                        <p>Electronics And Communication Engineering(ECE)</p>
                        <p>yop - 2019 to 2023</p>
                        <p id="perc">7.5CGPA</p>
                    </div>
                    <div class="educationcontent12">
                        <h1>HSC/12th</h1>
                        <p>Dawn Matric Hr.Sec School-Dharmapuri </p>
                        <p>Maths Biology group</p>
                        <p>yop - 2019</p>
                        <p id="perc">50%</p>
                    </div>
                    <div class="educationcontent10">
                        <h1>SSLC/10th</h1>
                        <p>Sriram Matric Hr.Sec School-Dharmapuri</p>
                        <p>yop - 2017</p>
                        <p id="perc">84%</p>
                    </div>
                </div>
                <div className="container course mt-5">
                    <h1 style={{color:'#0BCEAF',fontSize:'40px'}}><u>Addtional education/Course:</u></h1>
                    <h3 className="mt-3">Completed - JAVA Full Stack Developer in Bengaluru.</h3>
                    <img src={certicate} alt="" height={"500px"}/>
                </div>
            </section>
        </div>
    );
}

export default Education;