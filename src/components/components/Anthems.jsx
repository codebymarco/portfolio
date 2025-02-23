import { FaMusic } from "react-icons/fa";
import pic from "../../assets/bjpm.jpg";
import pic2 from "../../assets/wfstf.jpg";
import pic3 from "../../assets/bjv.jpg";
import pic4 from "../../assets/ub40kt.jpg";
import "../../styles/about.css";

const anthemsData = [
  {
    id: 1,
    title: "waiting for a star to fall",
    artist: "boy meets girl",
    image: pic2,
  },
  {
    id: 2,
    title: "vienna",
    artist: "billy joel",
    image: pic3,
  },
  {
    id: 3,
    title: "piano man",
    artist: "billy joel",
    image: pic,
  },
  {
    id: 4,
    title: "kingston town",
    artist: "ub40",
    image: pic4,
  },
];

const Anthems = () => {
  return (
    <div className="about-stats">
      <div className="about-stats-top">
        <FaMusic style={{ color: "gray" }} />
        <span style={{ color: "white" }}>Anthems</span>
      </div>
      <div className="about-stats-container-anthem">
        {anthemsData.map((anthem) => (
          <div key={anthem.id} className="about-anthems-box">
            <img src={anthem.image} alt={anthem.title} />
            <div>
              <span style={{ color: "white" }}>{anthem.title}</span>
              <span style={{ color: "gray" }}>{anthem.artist}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anthems;
