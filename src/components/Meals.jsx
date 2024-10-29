import { useNavigate } from "react-router-dom"

export  function Meals({meals}) {

    const navigate = useNavigate()

  return (
    <div className="Meals grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {
            meals.map(meal => <div key={meal.idMeal} onClick={() =>navigate('/detail/' + meal.idMeal)} className="shadow-md p-4 cursor-pointer">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="text-center ">{meal.strMeal}</div>
            </div>)
        }
    </div>
  )
}
