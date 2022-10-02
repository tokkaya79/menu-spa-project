import {Link} from 'react-router-dom'

function CategoryItem (props) {
    const {
            strCategory, 
            strCategoryThumb, 
            strCategoryDescription
            } = props
    

    return (
                
                <div className="card">
                        <div className="card-image">
                            <img alt={strCategory} src={strCategoryThumb} />
                        </div>
                        <div className="card-content">
                            <span className="card-title">{strCategory}</span>
                            <p>{strCategoryDescription.slice(0, 130)}...</p>
                        </div>
                        <div className="card-action">
                            <Link to={`/category/${strCategory}`} className='btn pink lighten-2'>Watch CATEGORY</Link>
                        </div>

                </div>

    )

}

export {CategoryItem}