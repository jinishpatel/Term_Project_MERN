/** @format */

import NavBar from '../components/header/NavBar';
import Footer from '../components/footer/Footer';
import Confirm from '../components/shipping/Confirm';

const ConfirmOrder = () => {
	return (
		<div>
			<NavBar />
			<Confirm />
			<Footer />
		</div>
	);
};

export default ConfirmOrder;
