import { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page}`);
    const data = await res.json();

    setItems((prev) => [...prev, ...data.products]);
    setHasMore(data.products.length > 0);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
//total visible screen + how far you've scrolled (+ including buffer value) >= total height of page top to bottom
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Infinite Scroll Products</h2>
      <div className="grid grid-cols-4 gap-4">
        {items.map((product) => (
          <div key={product.id} className="border p-2 rounded-lg shadow-md border-gray-600/40 flex flex-col justify-center items-center">
            <img src={product.thumbnail} alt={product.title} className="h-32 object-cover mb-2" />
            <h3 className="text-center">{product.title}</h3>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading...</p>}
      {!hasMore && <p className="text-center mt-4">No more products.</p>}
    </div>
  );
};

export default App;
