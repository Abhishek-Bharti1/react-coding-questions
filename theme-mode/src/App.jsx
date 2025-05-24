import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "./ThemeContext";
const App = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProduct] = useState([]);
  const [search, setSearch] = useState('');
  const { mode, toggleTheme } = useTheme();
  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // Debounce logic
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (search.trim() === '') {
        setSearchProduct([]);
        return;
      }
      //Call api here if you have, that will trigger after every 500ms
      const filtered = products.filter(product =>
        product.title.toLowerCase().startsWith(search.toLowerCase())
      );
      setSearchProduct(filtered);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [search, products]);

  return (
    <div className="relative h-screen px-6 py-4 overflow-y-auto">
      <div className="text-end" >
        <button className="cursor-pointer">
          {

            mode === 'dark' ? <MdDarkMode className={`${mode === 'dark' && 'text-white'} size-8`} onClick={toggleTheme} /> : <MdOutlineDarkMode className={`${mode === 'dark' && 'text-white'} size-8`} onClick={toggleTheme} />
          }        </button>
      </div>
      <div className="w-full text-center mb-6 relative">
        <div className="inline-block relative w-1/2">
          <input
            type="text"
            placeholder="What are you searching for?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${mode === 'dark' && 'text-white border-white'} w-full h-16 border border-gray-600/40 rounded-tl-lg rounded-tr-lg px-4`}
          />
          {
            searchProducts.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-bl-lg rounded-br-lg z-10 max-h-64 overflow-y-auto">
                {
                  searchProducts.map(item => (
                    <div
                      key={item.id}
                      className="px-6 py-2 hover:bg-gray-100 cursor-pointer text-left"
                    >
                      <div className="flex items-center justify-between">
                        <p>{item.title}</p>
                        <img src={item.thumbnail} className="size-10" />
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>

      {
        products.length > 0 && (
          <div className="grid grid-cols-5 gap-4">
            {
              products.map((el) => (
                <div
                  className={`${mode === 'dark' && 'border border-white'} border border-gray-600/40 p-4 rounded-lg shadow-md flex flex-col items-center justify-center`}
                  key={el.id}
                >
                  <img src={el.thumbnail} alt='product' className="size-32 text-center" />
                  <h3 className="text-center">{el.title}</h3>
                  <p>${el.price}</p>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default App;
