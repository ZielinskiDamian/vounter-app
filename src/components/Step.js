const Step = (props) => {
	return (
		<div className='step'>
			<h2>Krok</h2>
			<input type='number' value={props.step} onChange={props.updateStep} />
		</div>
	);
};
export default Step;
