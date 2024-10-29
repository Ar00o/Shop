import { useState, useEffect } from "react"
import { getFilteredCategory } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { Meals } from "../components/Meals"




export  function MealsPage() {

    const [meals, setMeals] = useState([]);

    const {name} = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        getFilteredCategory(name).then(data => {
            console.log(data.meals);
            setMeals(data.meals)
        })
    }, [name])

  return (
    <div className="MealsPage container mx-auto">
        <button className=" p-2 bg-red-600 text-white" onClick={() => navigate(-1)}>Go To Back</button>
        <Meals meals={meals} />
    </div>
  )
}
