import { useState } from 'react';
import ButtonPanel from './ButtonsPanel';
import Clock from './Clock';
import './Counter.css';
import Display from './Display';
import Step from './Step';

const Counter = (props) => {
	const [counter, setCounter] = useState(props.counterInitValue);
	const [showClock, setShowClock] = useState(true);
	// ustawiłem useState
	const [Step, setStep] = useState(props.counetStep);

	const updateCounter = (action) => {
		if (action === 'add') {
			// zamiast wartości jedne damłem seStep
			setCounter(counter + {setStep});
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
			{showClock ? (
				<Clock setShowClock={setShowClock} />
			) : (
				<p className='clockControl' onClick={() => setShowClock(true)}>
					pokaż zegar
				</p>
			)}
		</div>
	);
};
export default Counter;
