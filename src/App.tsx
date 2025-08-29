import BottomHomeSection from './components/BottomHomeSection';
import BottomTextSection from './components/BottomTextSection';
import MidHome from './components/MidHome';
import Footer from './stories/Footer';
import Hero from './components/Hero';
import Nav from './stories/Nav';

function App() {
	return (
		<main className='App'>
			<Nav />
			<Hero />
			<MidHome />
			<BottomHomeSection />
			<BottomTextSection />
			<Footer />
		</main>
	);
}

export default App;
