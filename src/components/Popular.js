
import one from "../assets/c1.jpg";
import two from "../assets/c2.jpg";
import three from "../assets/c3.jpg";
import four from "../assets/c4.jpg";
function Popular(){
    return(
      <div class="popular">
              <h1 class="popular__title">Most Popular</h1>
              <p class="popular__subtitle"> pick the best fit</p>
              <div class="popular__container">
                  <div class="course-card">
                      <img src={one}/>
                      <h3>2023 Python Data Visualization Masterclass</h3>
                      <p> Col Steele</p>
                      <p>4.4 ⭐⭐⭐⭐</p>
                      <p>499 <del>999</del></p>
                  </div>
                  <div class="course-card">
                      <img src={two}/>
                      <h3>Web Development Bootcamp 2023</h3>
                      <p> Col Steele</p>
                      <p>4.4 ⭐⭐⭐⭐</p>
                      <p>499 <del>999</del></p>
                  </div>
                  <div class="course-card">
                      <img src={three}/>
                      <h3>Master UI/UX Designing with Figma</h3>
                      <p> Col Steele</p>
                      <p>4.4 ⭐⭐⭐⭐</p>
                      <p>499 <del>999</del></p>
                  </div>
                  <div class="course-card">
                      <img src={four}/>
                      <h3>Basic to Advance programming with EMC</h3>
                      <p> Col Steele</p>
                      <p>4.9 ⭐⭐⭐⭐</p>
                      <p>499 <del>999</del> </p>
                  </div>
                  <div class="course-card">
                      <img src={three}/>
                      <h3>Master UI/UX Designing with Figma</h3>
                      <p> Col Steele</p>
                      <p>4.4 ⭐⭐⭐⭐</p>
                      <p>499 <del>999</del></p>
                  </div>
                  <div class="course-card">
                      <img src={one}/>
                      <h3>2023 Python Data Visualization Masterclass</h3>
                      <p> Col Steele</p>
                      <p>4.4 ⭐⭐⭐⭐</p>
                      <p>499 <del>999</del></p>
                  </div>
                  <div class="course-card">
                      <img src={four}/>
                      <h3>Basic to Advance programming with EMC</h3>
                      <p> Col Steele</p>
                      <p>4.9 ⭐⭐⭐⭐</p>
                      <p>499 <del>999</del> </p>
                  </div>
                  <div class="course-card">
                      <img src={two}/>
                      <h3>Web Development Bootcamp 2023</h3>
                      <p> Col Steele</p>
                      <p>4.4 ⭐⭐⭐⭐</p>
                      <p>499 <del>999</del></p>
                  </div>
  
  
  
              </div>
  
          </div>
    )
  }
  export default Popular