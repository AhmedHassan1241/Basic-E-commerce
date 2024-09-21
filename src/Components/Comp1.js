import "../style.css"

function Comp1(){
    let person={
        name:"Ahmed",
        age:"25",
        job:"React FrontEnd"
    }
    function handleClick(){
        console.log("Clicked");
    }
    return (
        <>
            <h1 className="test">Name: {person.name} </h1>
            <h2 style={{backgroundColor:"black",color:"white"}}>Age: {person.age} </h2>
            <h3 onClick={handleClick}>Job : {person.job}</h3>
        </>
    )
}

export default Comp1;