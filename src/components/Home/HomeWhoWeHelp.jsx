import { useState } from "react";
import ReactPaginate from "react-paginate";
import "../../scss/Home/HomeWhoWeHelp.scss";
import { foundations, organizations, collections } from "../../data";

const HomeWhoWeHelp = () => {
  const [category, setCategory] = useState("foundations");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const getData = () => {
    switch (category) {
      case "foundations":
        return foundations;
      case "organizations":
        return organizations;
      case "collections":
        return collections;
      default:
        return [];
    }
  };

  const data = getData();
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const displayedItems = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="who_we_help" className="who-we-help">
      <div className="who-we-help__header">
        <h1>Komu pomagamy?</h1>
        <div className="who-we-help__decoration"></div>
      </div>

      <div className="who-we-help__buttons">
        <button
          className="who-we-help__button"
          onClick={() => {
            setCategory("foundations");
            setCurrentPage(0);
          }}
        >
          Fundacjom
        </button>
        <button
          className="who-we-help__button"
          onClick={() => {
            setCategory("organizations");
            setCurrentPage(0);
          }}
        >
          Organizacjom <br />
          pozarządowym
        </button>
        <button
          className="who-we-help__button"
          onClick={() => {
            setCategory("collections");
            setCurrentPage(0);
          }}
        >
          Lokalnym zbiórkom
        </button>
      </div>

      <div className="who-we-help__text">
        {" "}
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
      </div>

      <div className="who-we-help__list">
        {displayedItems.map((item) => (
          <div key={item.id} className="who-we-help__item">
            <div className="item-left">
              <h3>{item.name}</h3>
              <p>
                <strong>Cel i misja:</strong> {item.mission}
              </p>
            </div>
            <div className="item-right">
              <p>{item.needs}</p>
            </div>
          </div>
        ))}
      </div>

      {pageCount > 1 && (
        // blokuje paginacje konkretnej strony bez względu na ilość stron: {pageCount > 1 && category !== "collections" && (
        <ReactPaginate
          previousLabel={null}
          nextLabel={null}
          breakLabel={null}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
    </section>
  );
};

export default HomeWhoWeHelp;
