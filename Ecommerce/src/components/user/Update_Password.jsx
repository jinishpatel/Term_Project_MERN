/** @format */

import React, { Fragment, useState, useEffect } from 'react';
import './Update_Password.css';
import { useSelector, useDispatch } from 'react-redux';
import {
	loaduser,
	updatePassword,
	clearErrors,
} from '../../actions/userAction';
import Loader from '../loader/loader';
import { Link, useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import LockOpenIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/Key';
import FaceIcon from '@mui/icons-material/Face';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import {
	CLEAR_ERRORS,
	UPDATE_PASSWORD_SUCCESS,
	UPDATE_PROFILE_RESET,
} from '../../constants/userConstants';

const Update_Password = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { error, isUpdated, loading } = useSelector((state) => state.profile);

	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const updatePasswordSubmit = (e) => {
		e.preventDefault();
		const myForm = new FormData();
		myForm.set('oldPassword', oldPassword);
		myForm.set('newPassword', newPassword);
		myForm.set('confirmPassword', confirmPassword);

		console.log('myform', myForm);
		dispatch(updatePassword(myForm));
	};

	useEffect(() => {
		if (error) {
			// setOpenAlert(true);
			dispatch(clearErrors());
		}
		console.log('isUpdated', isUpdated);
		if (isUpdated) {
			const fetchData = async () => {
				navigate('/me');
				dispatch({ type: UPDATE_PASSWORD_SUCCESS });
			};
			fetchData();
		}
	}, [dispatch, error, isUpdated, navigate]);

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<div className="updatePasswordContainer">
						<div className="updatePasswordBox">
							<h2 className="main-h2">Update Profile</h2>
							<div>
								<form
									className="updatePasswordForm"
									encType="multipart/form-data"
									onSubmit={updatePasswordSubmit}
								>
									<div className="loginPassword">
										<KeyIcon />
										<input
											type="password"
											placeholder="Old Password"
											required
											value={oldPassword}
											onChange={(e) =>
												setOldPassword(e.target.value)
											}
										/>
									</div>

									<div className="loginPassword">
										<LockOpenIcon />
										<input
											type="password"
											placeholder="New Password"
											required
											value={newPassword}
											onChange={(e) =>
												setNewPassword(e.target.value)
											}
										/>
									</div>
									<div className="loginPassword">
										<LockOpenIcon />
										<input
											type="password"
											placeholder="Confirm Password"
											required
											value={confirmPassword}
											onChange={(e) =>
												setConfirmPassword(e.target.value)
											}
										/>
									</div>
									<input
										type="submit"
										value="Change Password"
										className="updatePasswordBtn"
									/>
								</form>
							</div>
						</div>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Update_Password;
