import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService'


const ListProductComponents = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      
       ProductService.getAllProducts().then((response) => {
            setProducts(response.data)
           console.log(response.data);
       })
    }, [])
    return (
        <div className = "container">
            <h2 className = "text-center">List Products</h2>
            <table className = "table table-center table-light">
            <thead>
                <th scope="col"> PRODUCT ID </th>
                <th scope="col"> NAME </th>
                <th scope="col"> QUANTITY </th>
                <th scope="col"> PRICE </th>
            </thead>
            <tbody>
                {
                    products.map(
                        product =>
                        <tr key = {product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                        </tr>
                    )
                }
            </tbody></table>
            
        </div>
    )
}

export default ListProductComponents
