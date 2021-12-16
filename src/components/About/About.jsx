import "./about.css";
import Award from "../../img/Award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg">here</div>
        <div className="a-card">
          <img
            src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It's a long established fact that reader will be Lorem ipsum dolor sit
          amet.
        </p>
        <p className="a-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          debitis eveniet aliquam quasi cum repudiandae! Modi ipsum doloremque
          mollitia sapiente?
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Designer</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              maxime delectus quaerat?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
