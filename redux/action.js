import * as SecureStore from 'expo-secure-store';

import axios from 'axios';

const BackendUrl = 'https://university-app-backend.onrender.com/api/v1';

export const login = (email, password) => async (dispatch) => {
	try {
		// dispatch({ type: 'loginRequest' });

		const { data } = await axios.post(
			`${BackendUrl}/login`,
			{ email, password },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch({ type: 'loginSuccess', payload: data });
	} catch (error) {
		alert(error.response.data.message);
		dispatch({ type: 'loginFailure', payload: error.response.data.message });
	}
};

export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: 'loadUserRequest' });

		const { data } = await axios.get(`${BackendUrl}/me`);
		dispatch({ type: 'loadUserSuccess', payload: data });
	} catch (error) {
		alert(error.response.data.message);
		dispatch({ type: 'loadUserFailure', payload: error.response.data.message });
	}
};

export const updateProfile = (formData) => async (dispatch) => {
	try {
		dispatch({ type: 'updateProfileRequest' });

		const { data } = await axios.put(`${BackendUrl}/updateprofile`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		dispatch({ type: 'updateProfileSuccess', payload: data });
	} catch (error) {
		dispatch({
			type: 'updateProfileFailure',
			payload: error.response.data.message,
		});
	}
};

export const register = (formData) => async (dispatch) => {
	try {
		// dispatch({ type: 'registerRequest' });

		const { data } = await axios.post(`${BackendUrl}/register`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		dispatch({ type: 'registerSuccess', payload: data });
	} catch (error) {
		alert(error.response.data.error);
		dispatch({ type: 'registerFailure', payload: error.response.data.message });
	}
};

export const logOut = () => async (dispatch) => {
	try {
		dispatch({ type: 'logoutRequest' });

		await axios.get(`${BackendUrl}/logout`);
		await SecureStore.deleteItemAsync('token');
		dispatch({ type: 'logoutSuccess' });
	} catch (error) {
		dispatch({
			type: 'logoutFailure',
			payload: error.response.data.message,
		});
	}
};

export const updatePassword =
	(oldPassword, newPassword) => async (dispatch) => {
		try {
			dispatch({ type: 'updatePasswordRequest' });

			const { data } = await axios.put(
				`${BackendUrl}/updatepassword`,
				{ oldPassword, newPassword },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			dispatch({ type: 'updatePasswordSuccess', payload: data });
		} catch (error) {
			dispatch({
				type: 'updatePasswordFailure',
				payload: error.response.data.message,
			});
		}
	};

export const verification = (otp) => async (dispatch) => {
	try {
		dispatch({ type: 'verificationRequest' });

		const { data } = await axios.post(
			`${BackendUrl}/verify`,
			{ otp },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch({ type: 'verificationSuccess', payload: data.message });
	} catch (error) {
		dispatch({
			type: 'verificationFailure',
			payload: error.response.data.message,
		});
	}
};

export const forgetPassword = (email) => async (dispatch) => {
	try {
		dispatch({ type: 'forgetPasswordRequest' });

		const { data } = await axios.post(
			`${BackendUrl}/forgetpassword`,
			{ email },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch({ type: 'forgetPasswordSuccess', payload: data.message });
	} catch (error) {
		dispatch({
			type: 'forgetPasswordFailure',
			payload: error.response.data.message,
		});
	}
};

export const resetPassword = (otp, newPassword) => async (dispatch) => {
	try {
		dispatch({ type: 'resetPasswordRequest' });

		const { data } = await axios.put(
			`${BackendUrl}/resetpassword`,
			{ otp, newPassword },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch({ type: 'resetPasswordSuccess', payload: data.message });
	} catch (error) {
		dispatch({
			type: 'resetPasswordFailure',
			payload: error.response.data.message,
		});
	}
};
