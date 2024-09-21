import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const DetailsProduct = () => {
  let { productId } = useParams();

  const [product, setProduct] = useState({});
  const urlApi = "https://fakestoreapi.com/products/";
  const productData = async () => {
    await fetch(`${urlApi}${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  
  useEffect(() => {
    productData();
    window.scrollTo({top:0});
  },);

  return (
    <>
      <ProductCard
        title={product.title}
        desc={product.category}
        price={product.price}
        image={product.image}
        id={product.id}
        showBtn={false}
      />
    </>
  );
};

export default DetailsProduct;
