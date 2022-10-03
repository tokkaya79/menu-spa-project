import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {getAllCategories} from '../api'
import {Preloader} from '../components/Preloader'
import {CategoryList} from '../components/CategoryList'
import {Search} from '../components/Search'


function Home() {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])

    // const {pathname, search} = useLocation() //pathname, search достаем из useLocation
    const navigate = useNavigate();
    

    const handleSearch = (str) => {
            setFilteredCatalog(
                // просматриваем будет ли часть строки от пользователя содержать значение в мал. регистке и тогда применяется фильтрованый вариант
                //toLowerCase - привели к нижнему регистру, чтобы проще было искать и включили includes ту строку которую введет пользователь

                catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())
                ),          
                
            )
            navigate(`?search=${str}`) //записівается поиск в командную строку
    }

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories)
            setFilteredCatalog(data.categories.filter((item) => 
                item.strCategory.toLowerCase()
                ) 
                )
        })
    }, [navigate])

    return (
    <>
        <Search cb={handleSearch} />
        {!catalog.length ? ( <Preloader /> ) : (
            <CategoryList catalog={filteredCatalog} />
        )}
    </>
    )
}
export { Home };
