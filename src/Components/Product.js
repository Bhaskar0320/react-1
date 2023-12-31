import React from "react";
import './Product.css';

const Products =(props)=>{

    const renderProducts = props.products.map((item)=>{
        return(
            <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.desciption}</p>
                    <p>Rs.{item.cost}</p>
                    <p>{item.uses}</p>
                </div>
            </div>
            
        )
    })


    return(
        <div className="main">
           {renderProducts}
        </div>
        )
}

// class Products extends Component{

//     constructor(props){
//         super(props)


//     }

//     render(){

//         console.log(this.props)
//         return(
//         <div>
//             Product Page
//         </div>
//         )
//     }
// }

export default Products;