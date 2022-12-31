import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Raunit",
      title: "Engineer at Kendryl",
      img: "assets/profile1.jpg",
      icon: "assets/twitter.png",
      desc: "Without doubt one of the talented programmers out there. I always go back to Saurabh when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional. You won't be disappointed.",
    },
    {
      id: 2,
      name: "Shubhamm Raj",
      title: "Head of SRIT",
      img: "assets/profile.jpg",
      icon: "assets/linkedin.png",
      desc: "A very good programmer and student of mine. He developed me my institute's website in very less time and with all the important functionality I asked to add in.",
    },
    {
      id: 3,
      name: "Abhishek",
      title: "MCA Student",
      img: "assets/profile7.jpeg",
      icon: "assets/youtube.png",
      desc: "My programming buddy, helped me understand Full Stack Development very easily and also helped me in building my final year project. He is very supportive and cooperative with others and also have this open to learn new things mentality. ",
      featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
