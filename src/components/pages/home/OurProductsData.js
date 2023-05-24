import './OurProducts.css';

function OurProductsData(props){
    return(
        <div className="p-card">
            <div className="p-image">
                <img alt="product" src={props.image} />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.paragraph}</p>
            <a href={props.url} className={props.btnClass}>{props.btnText}</a>
        </div>
    );
}

export default OurProductsData;