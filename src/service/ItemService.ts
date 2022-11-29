import $api from '../http/Htttp'
import {AxiosResponse} from 'axios'
import {ItemResponse, Filters} from '../models/ItemResponse'

export default class ItemService{
    static all(): Promise<AxiosResponse<ItemResponse[]>>{
        return $api.get<ItemResponse[]>(`/items`)
    }

    static getOne(ean: string): Promise<AxiosResponse<ItemResponse>>{
        return $api.get<ItemResponse>(`/item/${ean}`)
    }
    
    static route(path: string): Promise<AxiosResponse<ItemResponse[]>>{
        return $api.get<ItemResponse[]>(`/items/${path}`)
    }

    static filter(url: string): 
    Promise<AxiosResponse<ItemResponse[]>>{
        return $api.get<ItemResponse[]>(`/items${url}`)
    }
    
}

// router.post('/item', itemController.create)
// router.get('/item/:id', itemController.getOne)
// router.put('/item/', itemController.update)
// router.delete('/item/:id', itemController.delete)