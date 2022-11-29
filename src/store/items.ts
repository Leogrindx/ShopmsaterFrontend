import {IUser} from '../models/AuthResponse'
import {makeAutoObservable} from 'mobx'
import ItemService from '../service/ItemService'
import loading from '../components/loading/Loading'
import {ItemResponse, Filters} from '../models/ItemResponse'
export default class ItemsStore{
    items: ItemResponse[] = []

    constructor(){
        makeAutoObservable(this)
    }

    private setItems(items: ItemResponse[]){
        this.items = items
    }

    async all(){
        try{
            const res = await ItemService.all()
            this.setItems(res.data)
        }catch(e){
            this.setItems([])
        }
    }

    async route(path: string){
        try{
            loading(true)
            const res = await ItemService.route(path)
            this.setItems(res.data)
            loading(false)
        }catch(e){
            this.setItems([])
            loading(false)
        }
    }

    async filter(url: string){
        try{
            loading(true)
            const res = await ItemService.filter(url)
            this.setItems(res.data)
            loading(false)
        }catch(e){
            this.setItems([])
            loading(false)
        }
    }

    async getOne(ean: string){
        try{
            const res = await ItemService.getOne(ean)
            return res.data
        }catch(e){
            this.setItems([])
        }
    }
}