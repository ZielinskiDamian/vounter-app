import { useState } from 'react';
import ButtonPanel from './ButtonsPanel';
import './Counter.css';
import Display from './Display';
const Counter = (props) => {
	const [counter, setCounter] = useState(props.counterInitValue);
	const updateCounter = (action) => {
		if (action === 'add') {
			setCounter(counter + 1);
		} else if (action === 'reset') {
			setCounter(props.counterInitValue);
		} else {
			setCounter(0);
		}
	};

	return (
		<div className='counter'>
			<Display counter={counter} />
			<ButtonPanel updateCounter={updateCounter} />
		</div>
	);
};
export default Counter;
