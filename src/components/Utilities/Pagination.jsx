const Pagination = ({ page, lastPage, setPage }) => {

  const scrollTop = () => {
    window.scrollTo({
      behavior: "auto",
      top: "0",
    });
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    scrollTop();
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;
    setPage(prevPage);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-primary text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-accent"
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-accent"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
