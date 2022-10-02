import { useNavigate } from "react-router-dom";



function About() {

    const navigate = useNavigate(); //чтобы вернуться на предыдущую страницу
   
    return (
        <>
            <h1>Hello from About page!</h1>
            <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
        </>
    
    ) 
        
}
export { About };
