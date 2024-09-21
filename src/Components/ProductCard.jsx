/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from "react";
import { Link } from "react-router-dom";

/*eslint-disable*/ //
const ProductCard =(props)=> {

 const [counter,setCounter] = useState(0)
  const title = props.showBtn?props.title.split(" ",2).join(" "):props.title; 
 const handelAdd=()=>{
    setCounter( counter + 1)
  }
    const handelRemove=()=>{
        setCounter( counter - 1);
  }

    return (
      
      <>
        <div className="card h-100 w-auto" style={{ width: "18rem" }}>
          <img
            src={props.image}
            className="card-img-top mt-4"
            alt="..."
            style={{height:"250px", width:"200px",margin:"auto"}}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {props.desc}
            </p>
            <p className="card-text">
              {props.price}
            </p>
            <div className="d-flex justify-content-between">
            {
            <button href="#" className={`btn btn-primary ${counter?'':'w-100'}`}  onClick={handelAdd}>
              Add
            </button> 
            }
            <span style={{display:counter>0? "":"none"}}>{counter}</span>
            <button href="#" className="btn btn-danger " style={{display:counter?"":"none"}} onClick={handelRemove}>
              Remove
            </button>
            </div>
            { props.showBtn &&<Link className="btn btn-success mt-2 w-100" to={`productDetails/${props.id}`}>Details</Link>}
          </div>
        </div>
      </>
    );
  }
export default ProductCard;