import logo from './logo.svg';
import './App.css';

import Heading from './components/Heading';
import Counter from './components/Counter';
import Step from './components/Step';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Heading newHeding='Nowy React' className='red' />
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Counter counterInitValue={15} />
				<Step counetStep={[5,10,15]}/>
				<Counter />
				
			</header>
		</div>
	);
}

export default App;
