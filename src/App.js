

import gomycode from './gomycode.jpeg'
function App() {
  return (

<div>  


<div style={{border:'solid 1px black',maxWidth:'100vw'}}>
<h1 className="title red">Your name here</h1>

<br />

<img src= {gomycode} />

<br />

<img src={gomycode} />
</div>
<iframe width="560" height="315" src={"https://www.youtube.com/embed/xwNerI7TufY"} title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>


  );
}

export default App