import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getMealById } from "../api"

export  function DetailPage() {

    const [meal, setMeal] = useState({});

    const {id} = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        getMealById(id).then(data => {
            console.log(data.meals[0]);
            setMeal(data.meals[0])
        })
    },[id])

  return (
    <div className="DetailPage container mx-auto">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-[300px] mx-auto my-3" />
      <div className="text-center">Name: {meal.strMeal}</div>
      <div className="text-center">Area: {meal.strArea}</div>
      <div className="text-center">Category: {meal.strCategory}</div>
      <button className=" p-2 bg-red-600 text-white" onClick={() => navigate(-1)}>Go To Back</button>
    </div>
  )
}
