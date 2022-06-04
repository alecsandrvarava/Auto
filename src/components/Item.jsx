import React, {useContext} from "react";
import MyButton from './UI/button/MyButton';

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '5px 15px',
		border: '1px solid green',
		marginBottom: '10px',
		borderRadius: '5px',
		
	},
	strong : {
		margin: '0 5px 0 0',
	},
	span : {
		fontWeight: '700'
	},
}
const Item = (props) => {
  return (
    <li style={styles.li}>
			<strong style={styles.strong}>{props.index}</strong>
			<div className="card">
				<span style={styles.span}> {props.car.brand}</span>
				<span style={styles.span}>{props.car.model}</span>
				<span style={styles.span}>{props.car.color}</span>
			</div>
      <MyButton onClick={() => props.remove(props.car)}>X</MyButton>
    </li>
  );
};

export default Item;
