import { useState } from "react";
import "./works.scss";

export default function Works() {
  // for custom slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Full Stack Development",
      desc: "I have a good experience the MERN(MongoDB, Expressjs, Reactjs, Nodejs) stack technology and have developed multiple web based projects.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Programming Languages",
      desc: "I have some experience with other programming languages such as C, C++, Java, Python too. ",
      img: "https://devmountain.com/wp-content/uploads/2022/04/jlKVKoIlyAU0ptV2dOUQ4vBL-7ogeRJHi-PrzS_0COvLN_fP3e9zp5yB6OhUm3Cok5ZEBzkprU0FHVel2aO-2l87qaNJ5PORLGJv_B3_XARjxcZ8NB86b1mvdLskxTeeyofnMb5f-1.png",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc: "I have developed some skills in android development too by developing some android applications in Java programming language.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
  ];

  // when arrows are clicked
  const handleClick = (way) => {
    way === "left"
      ? // for left arrow -> if currentSlide is grerater than 0 make it goto the previous slide else if the currentSlide is 0 make it go to the last slide
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : // for right arrow -> if currentSlide is less than total slide length(2) make it goto the next slide else if the currentSlide is more than or equal to
        // the total slide(i.e here 2) make it go to the first slide
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    // for slider
    <div className="work" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a
                    href="https://github.com/Saurabh-Shivam?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Projects</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img
                  // src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  // src="https://img.freepik.com/premium-vector/programming-skills-concept-background_51635-3799.jpg"
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
