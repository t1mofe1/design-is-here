import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const useForm = (validate: any) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [shouldSubmit, setShouldSubmit] = useState(false);

	const openNotificationWithIcon = () => {
		MySwal.fire({
			title: 'Success',
			text: 'Your message has been sent!',
			icon: 'success',
		});
	};

	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		setErrors(validate(values));
		// Your url for API
		const url = '';
		if (Object.keys(values).length === 3) {
			axios
				.post(url, {
					...values,
				})
				.then(() => {
					setShouldSubmit(true);
				});
		}
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && shouldSubmit) {
			setValues('');
			openNotificationWithIcon();
		}
	}, [errors, shouldSubmit]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.persist();
		setValues((values) => ({
			...values,
			[event.target.name]: event.target.value,
		}));
		setErrors((errors) => ({ ...errors, [event.target.name]: '' }));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};
