function Card({func, title, chartName, data}){
    if(func === "Dashboard"){
        return(
            <div className="card-container">
                <h3>{title}</h3>
                <p>{data}</p>
            </div>
        );
    }
}

export default Card;