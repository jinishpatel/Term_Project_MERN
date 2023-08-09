/** @format */

import React, { Fragment } from 'react';
import './shipping.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { saveShippingInfo } from '../../actions/cartAction';
import { useDispatch } from 'react-redux';
import Loader from '../loader/loader';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import { Country, State as stateCity } from 'country-state-city';
import CheckOutSteps  from './CheckOutSteps';

const ShippingInfo = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.user);
	const { shippingInfo } = useSelector((state) => state.cart);
	const [address, setAddress] = React.useState(shippingInfo.address);
	const [city, setCity] = React.useState(shippingInfo.city);
	const [phoneNo, setPhoneNo] = React.useState(shippingInfo.phoneNo);
	const [postalCode, setPostalCode] = React.useState(shippingInfo.postalCode);
	const [country, setCountry] = React.useState(shippingInfo.country);
	const [State, setState] = React.useState(shippingInfo.country);
	// console.log('asadasd', stateCity.getAllStatesByCountryId('IN'));
	const shippingSubmit = (e) => {
		console.log('shippingSubmit');
	};
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
					<Fragment>
					<div className="shipping-container">
					<CheckOutSteps activeStep={0} />
						<div className="shipping-info">
							<h1>Shipping Info</h1>
							<form
								className="shippingForm"
								encType="multipart/form-data"
								onSubmit={shippingSubmit}
							>
								<div>
									<HomeIcon />
									<input
										type="text"
										placeholder="Address"
										required
										value={address}
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>

								<div>
									<LocationCityIcon />
									<input
										type="text"
										placeholder="City"
										required
										value={city}
										onChange={(e) => setCity(e.target.value)}
									/>
								</div>

								<div>
									<MarkunreadMailboxIcon />
									<input
										type="number"
										placeholder="Pin Code"
										required
										value={postalCode}
										onChange={(e) => setPostalCode(e.target.value)}
									/>
								</div>

								<div>
									<PhoneIcon />
									<input
										type="number"
										placeholder="Phone Number"
										required
										value={phoneNo}
										onChange={(e) => setPhoneNo(e.target.value)}
										size="10"
									/>
								</div>

								<div>
									<PublicIcon />

									<select
										required
										value={country}
										onChange={(e) => setCountry(e.target.value)}
									>
										<option value="">Country</option>
										{Country.getAllCountries().map((item) => (
											<option key={item.isoCode} value={item.isoCode}>
											{item.name}
											</option>
										))}
									</select>
								</div>

								{country && (
									<div>
										<TransferWithinAStationIcon />

										<select
											required
											value={State}
											onChange={(e) => setState(e.target.value)}
										>
											<option value="">State</option>
											{stateCity.getStatesOfCountry(country).map((item) => (
												<option
													key={item.isoCode}
													value={item.isoCode}
												>
													{item.name}
												</option>
											))}
										</select>
									</div>
								)}

								<input
									type="submit"
									value="Continue"
									className="shippingBtn"
									disabled={!State}
								/>
							</form>
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default ShippingInfo;
