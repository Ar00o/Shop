import axios from "axios";


async function getAllCategories(){
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    return response.data
}

async function getFilteredCategory(name){
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' +name)
    return response.data
}

async function getMealById(id){
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +id)
    return response.data
}

export {getAllCategories, getFilteredCategory, getMealById}