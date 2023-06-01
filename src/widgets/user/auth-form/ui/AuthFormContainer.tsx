import { FC, useRef } from 'react';
import { AuthFormPresentational } from './AuthFormPresentational';
import { useEvent, useOutsideClick } from 'shared/lib';
import { useActionCreators, useAppSelector } from 'app/store';
import { authActions } from 'entities/user';

export const AuthFormContainer: FC = () => {
	const formRef = useRef<HTMLDivElement>(null);
	const actions = useActionCreators(authActions);
	const isAuthFormOpen = useAppSelector(state => state.auth.isAuthFormOpen);
	const onClose = useEvent(() => actions.setIsAuthFormOpen(false));

	useOutsideClick({
		elementRef: formRef,
		onOutsideClick: onClose,
		enabled: isAuthFormOpen,
	});
	return <AuthFormPresentational ref={formRef} onClose={onClose} />;
};
