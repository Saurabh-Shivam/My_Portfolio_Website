import "./education.scss";

export default function Education() {
  const data = [
    {
      id: 1,
      name: "St. Karen's High School",
      title: "Higher secondary education",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d7/St_Karen%27s_Logo.png",
      //   icon: "assets/twitter.png",
      date: "2017 - 2019",
      desc: "Completed with PCM(Physics, Chemistry and Mathematics), IT(Information Technology) and English as the major subjects.",
    },
    {
      id: 2,
      name: "Patna University",
      title: "Patna Science College",
      img: "https://media.licdn.com/dms/image/C4D0BAQGgLzDw0lJ96w/company-logo_200_200/0/1594662401192?e=2147483647&v=beta&t=hlhRFdFKmi-iS840Ij5G9kfo_RJb4jR7jAuOZBiTBfs",
      //   icon: "assets/youtube.png",
      date: "2019 - 2022",
      desc: "Completed BCA(Bachelors's in Computer Application) with __ CJPA.",
      featured: true,
    },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/linkedin.png",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              {/* <img className="right" src={d.icon} alt="" /> */}
              {/* <span className="right">{d.date}</span> */}
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
              <h6>{d.date}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
