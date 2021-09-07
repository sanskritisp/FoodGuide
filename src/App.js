import {useState} from 'react'
import './style.css';

 const SouthIndian=[
  
   {name: "Name: DOSA",
    descrp: "Description: A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice.",
    rate: "Ratings: 8/10"},
    
  {
    name: "Name: PONGAL",
    descrp: "Description: Pongal is a sweet rice dish that is usually eaten during special or ceremonial occasions.It is usually cooked in a clay pot over an open fire.",
    rate: "Ratings: 7.5/10"
  },
  {
    name: "Name: UPMA",
    descrp: "Description: Upma is a wholesome Indian dish made with dry semolina or rice flour, cooked into a thick porridge. ",
    rate: "Ratings: 7/10"
  }
];
 const NorthIndian=[
  {
    name: "Name: RAJMA CHAWAL",
    descrp: "Description: Rajma is one of the most popular vegetarian dishes of North India. It consists of red kidney beans which are stewed in a rich gravy combined with numerous spices.",
    rate: "Ratings: 9/10"
  },
  {
    name: "Name: TANDORI CHICKEN",
    descrp: "Description: Tandoori chicken or tandoori murgh is one of the most popular dishes in Indian cuisine, its name derived from the Persian word tannur, meaning fire.",
    rate: "Ratings: 8/10"
  },
  {
    name: "Name: SHAHI PANEER",
    descrp: "Description: Originating from India's Moghul cuisine, shahi paneer is a cheese curry that is prepared with paneer cheese, onions, almond paste, and a rich, spicy tomato-cream sauce.",
    rate: "Ratings: 8.5/10"
  }
];
 const Chinese=[
  {
    name: "Name: CHOW-MEIN",
    descrp: "Description: It is one of the best Chinese dishes, usually made of noodles, onion, sliced meat, green pepper and green onion. ",
    rate: "Ratings: 8/10"
  },
  {
    name: "Name: SPRING ROLLS",
    descrp: "Description: Spring rolls are a Cantonese dim sum of cylindrical shape. The filling of spring rolls could be vegetables or meat, and the taste could be either sweet or savory.",
    rate: "Ratings: 8.5/10"
  },
  {
    name: "Name: MANCHURIAN",
    descrp : "Description: If you love the unique flavour and taste of this semi-Chinese flavour with subtle Indian flavours, you can make healthy Manchurian at home. Healthy Manchurian Calories per serving are 205 calories.",
    rate: "Ratings: 9/10"
  }
];
const Mughlai=[
  {
    name: "Name: BIRYANI",
    descrp: "Description: There is no escaping the bounds of this dish, wherever you go. In India, this is the one dish that you will find all over the country.",
    rate: "Ratings: 8/10"
  },
  {
    name: "Name: NAVRATAN KORMA",
    descrp: "Description: Don’t think we forgot the vegetarians. This very favourite vegetarian dish, we mostly end up ordering at restaurants is an actually a Mughlai speciality. The dish is one where vegetables of many varieties are diced together and a curry is prepared with it.",
    rate: "Ratings: 8.5/10"
  },
  {
    name: "Name: SHAHI TUKDA",
    descrp : "Description: This is a special sweet, which is quite popular in India. But the dish originally has Mughlai roots. The sweet has now many varieties in the country. It is best served chilled.",
    rate: "Ratings: 7/10"
  }
];
var listX ={"SouthIndian":SouthIndian, "NorthIndian":NorthIndian, "Chinese": Chinese , "Mughlai":Mughlai};
var data = Object.keys(listX);

function App() {
  const[listToDisplay, setlistToDisplay] = useState("SouthIndian")
  return (
    <div className="App">
      <h1>FOOD GUIDE</h1>
      <p>Checkout the dishes list with my ratings on it.</p>
      <section>
    <button onClick ={()=>setlistToDisplay("SouthIndian")}>SOUTH INDIAN</button>
     <button onClick ={()=>setlistToDisplay("NorthIndian")}>NORTH INDIAN</button>
     <button onClick ={()=>setlistToDisplay("Chinese")}>CHINESE</button>
     <button onClick ={()=>setlistToDisplay("Mughlai")}>MUGHLAI</button>
     </section>
     { listX[listToDisplay].map((i)=>{
       return(<div>
        {i.name} <br/>
        {i.descrp} <br/>
        {i.rate}
      </div>);

      })}
     
     </div>
  );
}
export default App;













