import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://contents.sixshop.com/thumbnails/uploadedFiles/72878/product/image_1540176020065_2500.jpg",
        rating: 4.3
    },
    {
        id: 2,
        name: "Samgiopsal",
        image: "https://mp-seoul-image-production-s3.mangoplate.com/mango_pick/uker6u9xhkr1m8.jpg",
        rating: 5.0
    },
    {
        id: 3,
        name: "Bibimbab",
        image: "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/S9Y/image/76pr0EfQi6R21MMIyzefN9hiqIU.jpg",
        // rating: 4.0
    },
    {
        id: 4,
        name: "Doncasu",
        image: "https://pbs.twimg.com/media/COWKAP5UsAEqtuH.jpg",
        rating: 4.8

    },
    {
        id: 5,
        name: "Kimbap",
        image: "https://recipe1.ezmember.co.kr/cache/recipe/2018/12/14/f609b820823418706dca1df13c43def01.jpg",
        rating: 4.5
    }

];
function Food(props) {
  return (
      <div>
          <h3>I like {props.name} !!!</h3>
          <h4>{props.rating}/5.0</h4>
          <img style={{width: "200px"}} src={props.picture} alt={props.name}/>
      </div>
  )
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
}

function renderFood(dish) {
    return <Food name={dish.name} picture={dish.image} />

};
function App() {
  return (
    <div>
      {foodILike.map(function(dish, index){
          return <Food key={dish.id} name={dish.name + " ♥️"} picture={dish.image} rating={dish.rating} />
      })}
      {/*<div>
          {console.log(foodILike.map(renderFood))}
          {foodILike.map(renderFood)}
      </div>*/}
    </div>
  );
}

export default App;
