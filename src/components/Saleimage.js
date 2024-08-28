
import saleimage from "../assets/sale-image.jpg";

function Saleimage(){
    return(
      <div className="sale-image">
          <img src={saleimage} alt="sale-image"/>
          <div className="sale-image__offer">
  
              <h2>Udemy Flash Sale! 24 hours to save.</h2>
              <p>Get the Top courses for just 499! Just one day to save but lifetime to learn</p>
          </div>
  
      </div>
    )
  }

  export default Saleimage