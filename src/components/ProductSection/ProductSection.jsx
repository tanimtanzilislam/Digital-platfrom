import { useState, useEffect } from "react";
//productSection.jsx

import designTool from "../../assets/products/design-tool.png";
import operation from "../../assets/products/operation.png";
import portfolio from "../../assets/products/portfolio.png";
import shoppingcart from "../../assets/products/shopping-cart.png";
import socialmedia from "../../assets/products/social-media.png";
import writing from "../../assets/products/writing_2327400 1.png";
const ProductSection = ({cart,setCart}) => {
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);
 
const productImages = {
  "design-tool.png": designTool,
  "operation.png": operation,
  "portfolio.png": portfolio,
  "shopping-cart.png": shoppingcart,
  "social-media.png": socialmedia,
  "writing_2327400 1.png": writing
};
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


  console.log("ProductSection cart:", cart);

  const handleCheckout=()=>{
    alert("Checkout successful!");
    setCart([]);
  }


  const tagStyle={
    popular:"bg-purple-100 text-purple-700",
    new:"bg-green-100 text-green-700",
    "best-seller":"bg-yellow-100 text-yellow-700"
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
              className=" relative border rounded-xl p-5 shadow "
              key={product.id}
            >
              <div  className="flex justify-between items-start mb-4">
            <img src={productImages[product.icon]} alt={product.name} className="w-12 h-12 object-contain mb-4"></img>


 <span className={`  inline-block  px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                tagStyle[product.tagType]
              }`}>
                {product.tag}
                </span>
              </div>  

              <h2 className="text-xl font-bold mb-2">{product.name}</h2>

              <p className="text-gray-600 mb-4">{product.description}</p>

              <p className="text-2xl font-bold mb-4">
                ${product.price} 
                <span>
                  {" "}/ {product.period}

                  </span>
              </p>
                

             

              <div>
                {product.features.map((feature, index) => (
                  <p key={index} className="text-gray-600 mb-2">✔ {feature}</p>
                ))}
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-auto w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl text-center font-bold mb-4">All Cart</h2>

          {cart.length === 0 ? (
            <div className="text-center py-12">

              <h3 className="text-xl font-bold mb-2">Your cart is empty.</h3>
                 <p className="text-gray-500">
      Add some products to your cart to get started.
    </p>
              </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-4 shadow flex justify-between items-center"
                >
                  <div>
                   <img src={productImages[item.icon]} alt={item.name} className="w-12 h-12 object-contain"></img>
                    <h3 className="font-bold text-lg ">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>

                  <button onClick={()=>handleRemoveFromCart(item.id)} className="border border-red-500  px-4 py-2 rounded-lg font-medium hover:bg-red-500 hover:text-white transition">
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