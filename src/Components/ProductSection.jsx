import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
const urlApi = "https://fakestoreapi.com/products/"


  const [products, setProducts] = useState([]);
const [categories,setCategories] = useState([]);

  const productData = async () => {
    await fetch(`${urlApi}`)
      .then((res) => res.json())
      .then((data) =>setProducts(data));
  };
  const getAllCategories=async()=>{
    await fetch(`${urlApi}categories`)
    .then((res)=>res.json())
    .then((data)=>setCategories(data))
  }
async function getCatergory(catName){
  await fetch(`${urlApi}category/${catName}`)
  .then((res)=>res.json())
  .then((data)=>setProducts(data))
}
const getCategories= ()=>{
  productData()
}
  useEffect(() => {
    productData();
    getAllCategories();
  }, []);

  return (
    <>
      <div className="container my-3">
      <button className="btn btn-info m-2" onClick={getCategories}>All</button>
      {categories.map((cat)=>{
        return <button className="btn btn-info m-2" onClick={()=>getCatergory(cat)}>{cat}</button>
      })}
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-6 col-12 my-3" key={product.id}>
              <ProductCard
                title={product.title}
                desc={product.category}
                price={product.price}
                image={product.image}
                id ={product.id}
                showBtn={true}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
