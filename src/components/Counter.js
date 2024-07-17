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
	const [step, setStep] = useState(5);
	// tworze funkcje
	const updateStep = (event) => {
		const newStep = parseInt(event.target.value, 10) || 0;
		setStep(newStep);
	};

	const updateCounter = (action) => {
		if (action === 'add') {
			// zamiast wartości jeden damłem seStep
			setCounter(counter + step);
		} else if (action === 'reset') {
			setCounter(props.counterInitValue);
		} else {
			setCounter(0);
		}
	};
	const Step = (props) => {
		return (
			<div className='step'>
				<h2>Krok</h2>
				<input type='number' value={step} onChange={updateStep} />
			</div>
		);
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
			<Step counetStep={step} />
		</div>
	);
};
export default Counter;
