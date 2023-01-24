// TODO: create a component that displays a single bakery it
import "../App.css";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export default function ToggleCart(props) {
  // const name = item.name
  function onToggle(event){
    props.toggleselected(event.target.value)
    console.log(event.target.value)
  }
  return ( <div>
    <ToggleButtonGroup exclusive size="small" color="standard" onChange={onToggle}>
      <ToggleButton value="all">All Items</ToggleButton>
      <ToggleButton value="cart">Cart Items</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}