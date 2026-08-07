import { useState, useEffect } from "react";
//productSection.jsx
const ProductSection = ({cart,setCart}) => {
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const exists= cart.find((item)=>item.id===product.id);
    if(exists){
        alert("product already in cart");
        return;
    }
    setCart([...cart,product]);
  };
  const handleRemoveFromCart=(id)=>{

    const remaining= cart.filter(item=>item.id!==id)
    setCart(remaining);

  }

  console.log(cart);

  console.log("ProductSection cart:", cart);

  const handleCheckout=()=>{
    setCart([]);
  }

  return (
    <div>
      <h1>Premium Digital Tools</h1>

      <p>
        Choose from our curated collection of premium digital products designed
      </p>
      <p>to boost your productivity and creativity.</p>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 my-6">
        <button onClick={() => setActiveTab("products")}>Products</button>

        <button onClick={() => setActiveTab("cart")}>
          Cart ({cart.length})
        </button>
      </div>

      {activeTab === "products" ? (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              className="border rounded-xl p-5 shadow"
              key={product.id}
            >
              <h2>{product.icon}</h2>

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <p>
                ${product.price} / {product.period}
              </p>

              <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {product.tag}
                </span>

              <div>
                {product.features.map((feature, index) => (
                  <p key={index}>✔ {feature}</p>
                ))}
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 border px-4 py-2 rounded"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">All Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-4 shadow flex justify-between items-center"
                >
                  <div>
                    <p>{item.icon}</p>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                  </div>

                  <button onClick={()=>handleRemoveFromCart(item.id)} className="border px-3 py-1 rounded">
                    Remove
                  </button>
                </div>
              ))}

<p className="text-xl font-bold">
 Total:${cart.reduce((total,item)=>total+item.price,0)}
</p>
              <button onClick={handleCheckout} className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSection;