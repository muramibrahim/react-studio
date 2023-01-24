// TODO: create a component that displays a single bakery it
import "../App.css";

export default function SortPrice(props) {
  // const name = item.name
  function onSortChange(event){
    props.sortselected(event.target.value)
    console.log(event.target.value)
  }
  return ( <div>
    <select name="sort" onChange={onSortChange}>
      <option value="Popular">Popular</option>
      <option value="asc">Price - High</option>
      <option value="des">Price - Low</option>
    </select>
    </div>
  );
}