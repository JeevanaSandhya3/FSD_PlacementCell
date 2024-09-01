import ImageSlider from "./Imgslider";
import './WhyRecruitUS.css';
const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.png", title: "beach" },
    { url: "http://localhost:3000/image-2.png", title: "boat" },
    { url: "http://localhost:3000/image-3.png", title: "forest" },
    { url: "http://localhost:3000/image4.png", title: "forest" },
  ];
  const containerStyles = {
    width: "1600px",
    height: "450px",
    margin: "0 auto",
  };
  return (
    <div className="WhyRecruitUs" id='whyrecruitus'>
      <h2 className="heading">Why Recruit US</h2>
      <span className='line'></span>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;