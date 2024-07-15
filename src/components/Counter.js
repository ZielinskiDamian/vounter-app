import './Counter.css';
const Counter = () => {
	const counter = Math.floor(Math.random() * 100);
	return (
		<div className='counter'>
			<p>Counter: {counter}</p>
			<div className='buttonPanel'>
				<button>Add</button>
			</div>
		</div>
	);
};
export default Counter;
