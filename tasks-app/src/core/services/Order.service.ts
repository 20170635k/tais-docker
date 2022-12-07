import { IOrder } from './../../utils/interfaces/order.interface';
import { IProductResponse } from '../../utils/interfaces/product.interface';
import axios from 'axios'
import { IOrderResponseDetail } from '../../utils/interfaces/order.interface';

class OrderService{

    private static BASE_URL:string = import.meta.env.VITE_API_URL + "orders"

    getAll(){
        return axios.get<IOrderResponseDetail[]>(OrderService.BASE_URL)
    }
    getOrderById(id:number){
        return axios.get<IOrderResponseDetail>(OrderService.BASE_URL+"/"+id)
    }
    delete(id:number){
        return axios.delete<IOrderResponseDetail>(OrderService.BASE_URL+"/"+id)
    }
    update(order:IOrder,id:number){
        let temp:IOrderResponseDetail = {
            id,
            number:order.orderNumber,
            date: order.date,
            orders:order.products
        } 
        return axios.put<any>(OrderService.BASE_URL+"/"+id, temp)
    }
    add(order:IOrder){
        let temp:IOrderResponseDetail = {
            id: 0,
            number:order.orderNumber,
            date: order.date,
            orders:order.products
        } 
        return axios.post<any>(OrderService.BASE_URL, temp)
    }
}

export default new OrderService()