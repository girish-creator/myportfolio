import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"


import pythonImage from "../assets/img/python-svgrepo-com_new.svg"
import dockerImage from "../assets/img/docker-svgrepo-com_new.svg"
import azureImage from "../assets/img/microsoftazure-svgrepo-com.svg"
import devopsImage from "../assets/img/azure-devops-svgrepo-com.svg"
import githubImage from "../assets/img/github-142-svgrepo-com.svg"
import djangoImage from "../assets/img/django-svgrepo-com.svg"
import flaskImage from "../assets/img/flask-svgrepo-com.svg"
import airflowImage from "../assets/img/airflow-svgrepo-com.svg"
import linuxImage from "../assets/img/linux-svgrepo-com.svg"
import pandasImage from "../assets/img/pandas-svgrepo-com.svg"
import jenkinsImage from "../assets/img/jenkins-svgrepo-com.svg"
import nginxImage from "../assets/img/nginx-svgrepo-com.svg"
import javascriptImage from "../assets/img/javascript-svgrepo-com.svg"
import postgresImage from "../assets/img/postgresql-svgrepo-com.svg"
import reactImage from "../assets/img/react-svgrepo-com.svg"
import seleniumImage from "../assets/img/selenium-svgrepo-com.svg"
import sqliteImage from "../assets/img/sqlite-svgrepo-com.svg"
import bambooImage from "../assets/img/bamboo-svgrepo-com.svg"
import androidImage from "../assets/img/android-color-svgrepo-com.svg"
import cmdImage from "../assets/img/command-line-svgrepo-com.svg"

export const Certification = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="certs-bx wow zoomIn">
                        <h2>Certifications & Bages</h2>
                        <p></p>
                        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={pythonImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={dockerImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={azureImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={airflowImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={postgresImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={reactImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={devopsImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={githubImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={djangoImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={flaskImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={jenkinsImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={linuxImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={pandasImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={nginxImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={javascriptImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={sqliteImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={seleniumImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={bambooImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={androidImage} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={cmdImage} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
