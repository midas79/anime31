const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => window.scrollTo({ behavior: "smooth", top: 0 });
  return (
    <div className="flex justify-center items-center py-8 gap-3">
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => { setPage(page - 1); scrollTop(); }}
        className="btn btn-secondary"
      >
        Sebelumnya
      </button>
      <span className="num text-sm text-muted px-2">
        {page} dari {lastPage || 1}
      </span>
      <button
        type="button"
        disabled={lastPage ? page >= lastPage : false}
        onClick={() => { setPage(page + 1); scrollTop(); }}
        className="btn btn-secondary"
      >
        Berikutnya
      </button>
    </div>
  );
};

export default Pagination;
