import { useEffect, useState } from "react";

const App = () => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
   const [totalPages,setTotalPages] = useState(0);
  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total/10));
    }
  }
  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage);

    }
  }
console.log(totalPages)
  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="h-screen flex justify-center items-center flex-col px-6 overflow-y-auto">
      {
        products.length > 0 && <div className="grid grid-cols-5 gap-4">
          {
            products?.map((el) => (
              <div className="border border-gray-600/40 p-4 rounded-lg shadow-md" key={el.id}>
                <img src={el.thumbnail} alt='productimage' />
                <h3 className="text-center">{el.title}</h3>
              </div>
            ))
          }
        </div>
      }
      <div className="flex gap-4 mt-6 items-center">
        <span
          className="border border-gray-600/40 p-2 rounded-md cursor-pointer"
          onClick={() => selectPageHandler(page - 1)}
        >Prev</span>
        {[...Array(totalPages)].map((_, i) => (
          <span key={i} className={`${page === i + 1 && 'bg-gray-700/40 border-gray-900/60'} border border-gray-600/40 p-2 rounded-md cursor-pointer`} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        ))}
        <span className="border border-gray-600/40 p-2 rounded-md cursor-pointer" onClick={() => selectPageHandler(page + 1)}>Next</span>

      </div>

    </div>
  )
}

export default App