import { IProductResponse } from '../../utils/interfaces/product.interface';
import axios from 'axios'

class ProductService{
    private static BASE_URL_API:string = import.meta.env.VITE_API_URL + "products"

    getAll(){
        return axios.get<IProductResponse[]>(ProductService.BASE_URL_API)
    }
}

export default new ProductService()