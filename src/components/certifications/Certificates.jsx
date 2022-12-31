import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./certificates.scss";
// import {
//   featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   morePortfolio,
//   // contentPortfolio,
// } from "../../data";

import { certiData } from "../../certiData";
// import resume from "./resume.pdf";

export default function Certificates() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  // const list = [
  //   {
  //     id: "featured",
  //     title: "Featured",
  //   },
  //   {
  //     id: "web",
  //     title: "Web App",
  //   },
  //   {
  //     id: "mobile",
  //     title: "Mobile App",
  //   },
  //   {
  //     id: "more",
  //     title: "More",
  //   },
  //   // {
  //   //   id: "content",
  //   //   title: "Content",
  //   // },
  // ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(certiData);
        break;

      default:
        setData(certiData);
    }
  }, [selected]);

  return (
    <div className="certificate" id="certificates">
      <h1>Certificate</h1>

      <div className="container">
        {data.map((d) => (
          <div key={d.id} className="item">
            <a href={d.goto} target="_blank" rel="noreferrer">
              {" "}
              <img src={d.img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
