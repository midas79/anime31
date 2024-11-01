import { useEffect, useState } from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const [isPageInitialized, setIsPageInitialized] = useState(false);

  const scrollTop = () => {
    scrollTo({
      behavior: "auto",
      top: "0",
    });
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    localStorage.setItem("currentPage", nextPage);
    scrollTop();
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;
    setPage(prevPage);
    localStorage.setItem("currentPage", prevPage);
    scrollTop();
  };

  useEffect(() => {
    // Mengambil nilai halaman dari localStorage saat komponen pertama kali di-mount
    const savedPage = parseInt(localStorage.getItem("currentPage"), 10);
    if (savedPage && savedPage > 0) {
      setPage(savedPage);
    }
    setIsPageInitialized(true); // Menandai bahwa inisialisasi halaman telah selesai
  }, [setPage]);

  if (!isPageInitialized) return null; // Menunggu sampai page terinisialisasi sebelum rendering

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
