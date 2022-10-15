function Movie({title}) {
  console.log(title)
  return (
      title === "happy" ? <h3>I love Movie!</h3> : <h3>I hate Movie!</h3>
  )
}
function Food(props) {
  console.log(props)
  return props.favorite === "kimchi" ? <h3>I like kimchi and {props.like} !!!</h3> : <h3>I like {props.like} !!!</h3>
}
function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      <Movie title={"happy"}/>
      <Food like="bulgogi" favorite="kimchi" />
      <Food like="ramen" />
      <Food like="samgiopsal" />
      <Food like="chukumi" />
      <Food like="kimbap" />
    </div>
  );
}

export default App;
