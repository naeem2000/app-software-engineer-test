import BottomHomeSection from './components/BottomHomeSection';
import BottomTextSection from './components/BottomTextSection';
import MidHome from './components/MidHome';
import Hero from './components/Hero';
import Nav from './stories/Nav';
import './App.scss';

function App() {
	return (
		<main className='App'>
			<Nav />
			<Hero />
			<MidHome />
			<BottomHomeSection />
			<BottomTextSection />
		</main>
	);
}

export default App;
