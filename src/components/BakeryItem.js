// TODO: create a component that displays a single bakery it
import "../App.css";

export default function BakeryItem({item}) {
 // const name = item.name
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img height={100} src={item.image}/>

    </div>
  );
}