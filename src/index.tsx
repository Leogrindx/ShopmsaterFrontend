import {createContext} from 'react'
import * as ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import AuthStore from './store/auth'
import ItemsStore from './store/items'
import App from './App'
interface State{
  auth: AuthStore,
  items: ItemsStore
}
const auth = new AuthStore()
const items = new ItemsStore()

export const Context = createContext<State>({
  auth,
  items,
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement)
export const rootLoading = ReactDOM.createRoot(document.getElementById('loading') as HTMLDivElement)
root.render(
  <Context.Provider value={{auth, items}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </Context.Provider>
);
