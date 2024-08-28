import Category from "./components/Category"
import Saleimage from "./components/Saleimage"
import Navbar from "./components/Navbar"
import Recommend from "./components/Recommend"
import Topic from "./components/Topic"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App(){
    return(
<div>
  <Navbar></Navbar>
<Category></Category>
<Saleimage></Saleimage>
<Recommend></Recommend>
<Topic></Topic>
<Popular></Popular>
<Footer></Footer>
</div>
    )
}
export default App