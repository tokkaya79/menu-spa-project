import {useState, useEffect} from 'react'
import {getAllCategories} from '../api'
import {Preloader} from '../components/Preloader'
import {CategoryList} from '../components/CategoryList'
import {Search} from '../components/Search'


function Home() {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const handleSearch = (str) => {
            setFilteredCatalog(
                // просматриваем будет ли часть строки от пользователя содержать значение в мал. регистке и тогда применяется фильтрованый вариант
                catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())) //toLowerCase - привели к нижнему регистру, чтобы проще было искать и включили includes ту строку которую введет пользователь
            )
    }

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories)
            setFilteredCatalog(data.categories)
        })
    }, [])

    return (
    <>
        <Search cb={handleSearch}/>
        {!catalog.length ? ( <Preloader /> ) : (
            <CategoryList catalog={filteredCatalog} />
        )}
    </>
    )
}
export { Home };
