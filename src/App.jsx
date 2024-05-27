import DevInfo from "./Components/DevInfo/DevInfo";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AllRecipes from "./Components/Recipe/AllRecipes";
import SuccessStories from "./Components/SuccessStories/SuccessStories";


function App() {
  return (
    <>
     <Header/>
     <SuccessStories/>
     <DevInfo/>
     <AllRecipes/>
      <Footer/>
    </>
  );
}

export default App;
