const Rocket = (props) => {
  const {
    id, name, description, img,
  } = props;

  return (
    <div id={id} className="rocket">
      <img className="rocket-img" src={img} alt="Rocket" />
      <div className="rocket-content">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-info">{description}</p>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
