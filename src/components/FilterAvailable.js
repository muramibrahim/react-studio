// TODO: create a component that displays a single bakery it
import "../App.css";

export default function FilterAvailable(props) {
  // const name = item.name
  function onFilterAvailableChange(event){
    props.availableSelected(event.target.value)
    console.log(event.target.value)
  }
  return ( <div>
    <select name="isAvailable" onChange={onFilterAvailableChange}>
      <option value="all">All</option>
      <option value="available">Available</option>
      <option value="unavailable">Unavailable</option>
    </select>
    </div>
  );
}