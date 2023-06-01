import { forwardRef, memo, useState } from 'react';
import styles from './AuthForm.module.scss';
import { LoginFormEntity, RegisterFormEntity } from 'entities/user';
import { Button } from 'shared';

interface PresentationalProps {
	onClose: () => void;
}

export const AuthFormPresentational = memo(
	forwardRef<HTMLDivElement, PresentationalProps>(({ onClose }, ref) => {
		const [isLoginForm, setIsLoginForm] = useState(false);

		return (
			<div className={styles['auth-form']} ref={ref}>
				<div className={styles['body']}>
					<div className={styles['title']}>
						{isLoginForm ? 'Login' : 'Register'}
					</div>
					{isLoginForm ? <LoginFormEntity /> : <RegisterFormEntity />}
				</div>
				<Button
					disableDefaultStyles={true}
					className={styles['close']}
					onClick={onClose}
				>
					<svg className={styles['icon']}>
						<use href='images/sprite.svg#close' />
					</svg>
				</Button>
				<Button
					disableDefaultStyles={true}
					className={styles['change-form']}
					onClick={() => setIsLoginForm(isLoginForm ? false : true)}
				>
					{isLoginForm ? 'Create an account' : 'Login'}
				</Button>
			</div>
		);
	})
);
