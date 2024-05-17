import { Link } from "react-router-dom";

const ResCard = (props) => {
  const { restaurants } = props;

  return (
    <>
      <div className="res-cont">
        <Link to={"/restaurants/" + restaurants.id}>
          <div className="res-card">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                restaurants.cloudinaryImageId
              }
            ></img>
            10575
            <div>
              <h3>{restaurants.name}</h3>
            </div>
            <div>
              <span>{restaurants.avgRatingString}</span> |{" "}
              <span>{restaurants.costForTwo}</span>
            </div>
            <div>{restaurants.cuisines.join(", ")}</div>
            <div>{restaurants.areaName}</div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default ResCard;
