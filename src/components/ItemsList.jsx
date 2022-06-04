import React from 'react'
import Item from './Item';

const styles = {
	ul: {
		listStyle: "none",
		margin: 0,
		padding: 0,
	}
}

const ItemsList = ({cars, title, remove,} ) => {
	return (
		<ul style={styles.ul}>
				<h1 style={{ textAlign: "center" }}>
					{title}
				</h1>
			{cars.map((car, index) => 
					<Item remove={remove} car={car} key={car.id} index={index + 1}/>
			)}
		</ul>
	)
}

export default ItemsList