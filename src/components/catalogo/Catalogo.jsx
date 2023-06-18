import "bootstrap/dist/css/bootstrap.min.css";

const Catalogo = ({ data }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={data.image} className="card-img-top" alt={data.id} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  );
};

export default Catalogo;
