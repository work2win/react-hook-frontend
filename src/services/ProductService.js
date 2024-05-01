import axios from 'axios'

const PRODUCT_BASE_REST_URL = "http://localhost:9091/products";

class ProductService{

    getAllProducts(){

        //axios.get("http://localhost:9091/products").then(resp => {
          //  console.log(resp.data);
        //})
        return axios.get(PRODUCT_BASE_REST_URL);
    }
}

export default new ProductService();
