 
const ButtonsPanel = (props) => {
	return (
		<div className='buttonPanel'>
			<button onClick={() => props.updateCounter('add')}>Add</button>
			<button onClick={() => props.updateCounter('reset')}>Reset</button>
			<button onClick={() => props.updateCounter('zaro')}>Set 0</button>
		</div>
	);
};

export default ButtonsPanel;
