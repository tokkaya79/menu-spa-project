import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Search({cb = Function.prototype}) { //принимает колбек снаружи
    const [value, setValue] = useState('') //изночально value пустой
    //при нажатии на Enter вызываем функцию отправки
    const handleKey = (e) => { //получаем некий евент
        if (e.key === 'Enter') {// проверяем, что этот евент по ключу равен клавиши Enter, тогда отправляем нашу форму
            handleSubmit()
        
        }
    }
    const handleSubmit = () => {
            cb(value)
    }
    const navigate = useNavigate()


    return <div className="row">
        
        <div className="input-field col s12">
            <input
                type="search"
                id="search-field"
                placeholder="search"
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value} 
            />
             <button 
                className="btn "
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                onClick={handleSubmit}
                >Search
            </button>
            <button className="btn " onClick={() => navigate(0)}>Go Back</button>

        </div>
    </div>

}

export {Search}