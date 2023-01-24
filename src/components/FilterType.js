// TODO: create a component that displays a single bakery it
import "../App.css";

export default function FilterType(props) {
  // const name = item.name
  function onFilterTypeChange(event){
    props.typeSelected(event.target.value)
    console.log(event.target.value)
  }
  return ( <div>
    <select name="type" onChange={onFilterTypeChange}>
      <option value="all">All</option>
      <option value="pastry">Pastry</option>
      <option value="drink">Drink</option>
    </select>
    </div>
  );
}