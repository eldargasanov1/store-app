import { FC } from 'react';
import styles from './LoginForm.module.scss';
import { useLogin } from 'entities/user';
import { useForm } from 'react-hook-form';
import { Button, MyInput, MyInputProps } from 'shared';

export const LoginFormPresentational: FC = () => {
	const { loginUser, status } = useLogin();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onSubmit',
	});

	const inputProps: MyInputProps[] = [
		{
			placeholder: 'E-mail',
			type: 'email',
			autoComplete: 'off',
			registerProps: register('email', { required: 'Enter email' }),
			error: errors.email,
		},
		{
			placeholder: 'Password',
			type: 'password',
			autoComplete: 'off',
			registerProps: register('password', { required: 'Enter password' }),
			error: errors.password,
		},
	];

	return (
		<form className={styles['login-form']} onSubmit={handleSubmit(loginUser)}>
			<div className={styles['inputWrapper']}>
				{inputProps.map((inputProp, i) => (
					<MyInput
						key={i}
						className={styles['input']}
						disabled={status === 'pending'}
						{...inputProp}
					/>
				))}
			</div>
			<Button
				type='submit'
				className={styles['btn']}
				loading={status === 'pending'}
			>
				Login
			</Button>
		</form>
	);
};
