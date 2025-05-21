
function Card() {
  return (
    <div className="col">
      <div className="card h-100 text-center">
        <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Call to action</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
