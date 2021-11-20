import "../css/search-rtl.css";

function Search() {
  return (
    <div className="search-rtl vh-100">
      <div className="row p-2 bg-white">
        <div className="col-10">
          {" "}
          <input
            type="search"
            className="form-control search"
            placeholder="البحث"
          />
        </div>
        <div className="col-2 btn btn-warning border cancel">إلغاء</div>{" "}
      </div>
      <p className="text-capitalize fs-3">البحث عن المنتجات</p>
      <p className="text-capitalize text-secondary">اكتب ما تبحث عنه</p>
    </div>
  );
}

export default Search;
