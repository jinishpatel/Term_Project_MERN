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
import CheckOutSteps from './CheckOutSteps';
import {
	isValidNumber,
	parsePhoneNumberFromString,
} from 'google-libphonenumber';

const ShippingInfo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading } = useSelector((state) => state.user);
	const { shippingInfo } = useSelector((state) => state.cart);
	const [address, setAddress] = React.useState(shippingInfo.address);
	const [city, setCity] = React.useState(shippingInfo.city);
	const [phoneNo, setPhoneNo] = React.useState(shippingInfo.phoneNo);
	const [pinCode, setpinCode] = React.useState(shippingInfo.pinCode);
	const [country, setCountry] = React.useState(shippingInfo.country);
	const [state, setState] = React.useState(shippingInfo.state);

	// const selectedCountry = Country.getCountryByCode(country);
	// console.log("selectedCountry",selectedCountry.isoCode)
	// console.log('asadasd', stateCity.getAllStatesByCountryId('IN'));
	const shippingSubmit = (e) => {
		e.preventDefault();
		// if (selectedCountry) {
		// Validate and format the phone number
		// const phoneNumber = parsePhoneNumberFromString(phoneNo, selectedCountry.iso2);
		// if (phoneNumber && isValidNumber(phoneNumber))
		// {
		// 	const formattedPhoneNumber = phoneNumber.formatInternational();
		// 	// Now you can use the formattedPhoneNumber in your submission logic
		// 	console.log('Formatted Phone Number:', formattedPhoneNumber);
		// } else {
		// 	console.log('Invalid Phone Number');
		// }
		if (phoneNo.length < 10 || phoneNo.length > 10) {
			alert('Please enter valid phone number');
			return;
		}
		dispatch(
			saveShippingInfo({
				address,
				city,
				phoneNo,
				pinCode,
				country,
				state,
			}),
		);
		navigate('/order/confirm');
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
										value={pinCode}
										onChange={(e) => setpinCode(e.target.value)}
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
											<option
												key={item.isoCode}
												value={item.isoCode}
											>
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
											value={state}
											onChange={(e) => setState(e.target.value)}
										>
											<option value="">State</option>
											{stateCity
												.getStatesOfCountry(country)
												.map((item) => (
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

								<input
									type="submit"
									value="Continue"
									className="shippingBtn"
									disabled={!state}
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
