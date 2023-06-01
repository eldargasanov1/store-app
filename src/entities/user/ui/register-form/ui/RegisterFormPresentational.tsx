import { FC, useState } from 'react';
import styles from './RegisterForm.module.scss';
import { Button, MyInput, MyInputProps } from 'shared';
import { useForm } from 'react-hook-form';
import { useCheckEmailMutation, useRegister } from 'entities/user';

export const RegisterFormPresentational: FC = () => {
	const [errorsCount, setErrorsCount] = useState(0);

	const [checkEmail, { status: checkStatus }] = useCheckEmailMutation();
	const { registerUser, status: registerStatus } = useRegister();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			name: '',
		},
		mode: 'onSubmit',
	});

	const inputProps: MyInputProps[] = [
		{
			placeholder: 'E-mail',
			type: 'email',
			autoComplete: 'off',
			registerProps: register('email', {
				required: 'Enter email',
				validate: async email => {
					const emailObj = {
						email,
					};
					const isAvailable = await checkEmail(emailObj)
						.unwrap()
						.then(res => res.isAvailable);

					if (!isAvailable) {
						setErrorsCount(prev => prev + 1);
					}

					return errorsCount < 2 ? 'Email is not available' : true;
				},
			}),
			error: errors.email,
		},
		{
			placeholder: 'Password',
			type: 'password',
			autoComplete: 'off',
			registerProps: register('password', { required: 'Enter password' }),
			error: errors.password,
		},
		{
			placeholder: 'Username',
			type: 'text',
			autoComplete: 'off',
			registerProps: register('name', { required: 'Enter username' }),
			error: errors.name,
		},
	];

	return (
		<form
			className={styles['register-form']}
			onSubmit={handleSubmit(registerUser)}
		>
			<div className={styles['inputWrapper']}>
				{inputProps.map((inputProp, i) => (
					<MyInput
						key={i}
						className={styles['input']}
						disabled={checkStatus === 'pending' || registerStatus === 'pending'}
						{...inputProp}
					/>
				))}
			</div>
			<Button
				type='submit'
				className={styles['btn']}
				loading={checkStatus === 'pending' || registerStatus === 'pending'}
			>
				Create an account
			</Button>
		</form>
	);
};
