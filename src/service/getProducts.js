import axios from "axios";

export async function getProducts(){
    try{
        return await axios.get('https://akata-marketplace.goavana.com/products')
    } catch (error) {
        console.error(error);
    }
}
