import "./certificates.scss";

import { certiData } from "../../certiData";

export default function Certificates() {
  return (
    <div className="certificate" id="certificates">
      <h1>Certificate</h1>

      <div className="container">
        {certiData.map((d) => (
          <div key={d.id} className="item">
            <a href={d.goto} target="_blank" rel="noreferrer">
              <img src={d.img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
