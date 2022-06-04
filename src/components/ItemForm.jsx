import React, { useState } from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const ItemForm = ({createCar}) => {
	const [car, setCars] = useState([{ brand: '', model: '', color: '', }])

	const AddNewCar = (e) =>{
		e.preventDefault()
		const newCars = {
					...car, id: Date.now()
				}
		if (car.brand && car.model && car.color) {
			createCar(newCars)
			setCars({ brand: '', model: '', color: '', })
		}
	}
	
return (
		<form style={{ marginBottom: '20px', }}>
			<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px',}}>
				<MyInput 
					value={car.brand || ''}
					// value={car.brand}
					onChange={e => setCars({ ...car, brand: e.target.value })}
					type="text" 
					placeholder="brand" 
				/>
				<MyInput 
					// value={car.model}
					value={car.model || ''}
					onChange={e => setCars({ ...car, model: e.target.value })}
					type="text" 
					placeholder="model" 
				/>
				<MyInput 
					// value={car.color}
					value={car.color || ''}
					onChange={e => setCars({ ...car, color: e.target.value })}
					type="text" 
					placeholder="color" 
				/>
			</div>
			<MyButton onClick={AddNewCar}>Add car</MyButton>
		</form> 
	)
}

export default ItemForm