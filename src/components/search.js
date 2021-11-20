function Search() {
  return (
    <div className="search vh-100">
      <div className="row p-2 bg-white">
        <div className="col-10">
          {" "}
          <input
            type="search"
            className="form-control search"
            placeholder="search"
          />
        </div>
        <div className="col-2 btn btn-warning border cancel">cancel</div>
      </div>
      <p className="text-capitalize fs-3">find products</p>
      <p className="text-capitalize text-secondary">
        type in what you are looking for
      </p>
    </div>
  );
}

export default Search;
