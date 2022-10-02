import {Link} from 'react-router-dom'

function Meal (props) {
    const {strMeal, idMeal, strMealThumb} = props


    return (
        <>
            <div className="card">
                        <div className="card-image">
                            <img alt={strMeal} src={strMealThumb} />
                        </div>
                        <div className="card-content">
                            <span className="card-title">{strMeal}</span>
                            
                        </div>
                        <div className="card-action">
                            <Link to={`/meal/${idMeal}`} className='btn pink lighten-2'>Watch reciepe</Link>
                        </div>

                </div>

        
        </>
    )
}

export {Meal}