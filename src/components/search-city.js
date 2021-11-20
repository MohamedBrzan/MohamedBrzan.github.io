function SearchCity() {
  return (
    <div className="search-city vh-100">
      <div className="row p-2 bg-white">
        <div className="col-10">
          {" "}
          <input
            type="search"
            className="form-control search"
            placeholder="Type Your Area"
          />
        </div>
        <div className="col-2 btn btn-warning border">search</div>
      </div>
      <p className="text-capitalize fs-3">find area</p>
      <p className="text-capitalize text-secondary">
        type Any Area You Are looking for
      </p>
    </div>
  );
}

export default SearchCity;
