import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"


import microsoftDataFun from "../assets/img/microsoft_data_fundamentals_sym.jpg"
import istqbFoundation from "../assets/img/istqb_foundation_level_sym.jpg"
import databricksDataFun from "../assets/img/databricks_data_fundamentals_sym.jpg"
import databricksGenAIFun from "../assets/img/databricks_generative_ai_sym.jpg"
import liquibaseFun from "../assets/img/liquibase_fundamentals_sym.jpg"

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
                                <img src={microsoftDataFun} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={istqbFoundation} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={databricksDataFun} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={databricksGenAIFun} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={liquibaseFun} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
