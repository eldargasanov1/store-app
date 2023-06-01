import { FC, useMemo, useRef, useState } from 'react';
import { useActionCreators, useAppSelector } from 'app/store';
import { UserProfileEntity, authActions } from 'entities/user';
import { useEvent, useOutsideClick } from 'shared/lib';
import { MenuButtonProps } from 'shared';
import { Menu } from 'features/menu';

export const UserProfile: FC = () => {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLDivElement | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const actions = useActionCreators(authActions);
	const isAuth = Boolean(useAppSelector(state => state.auth.user));
	const logout = useEvent(() => {
		localStorage.removeItem('tokens');
		actions.setAuth({
			user: null,
			tokens: null,
		});
	});
	const onAuth = useEvent(() => actions.setIsAuthFormOpen(true));
	const onCloseMenu = useEvent(() => setIsMenuOpen(false));
	const toggleMenu = useEvent(() => setIsMenuOpen(prev => !prev));
	const menuProps: MenuButtonProps[] = useMemo(
		() => [
			{
				text: isAuth ? 'Log out' : 'Log in',
				onClick: isAuth ? logout : onAuth,
			},
		],
		[isAuth]
	);
	useOutsideClick({
		elementRef: menuRef,
		triggerRef: buttonRef,
		enabled: isMenuOpen,
		onOutsideClick: onCloseMenu,
	});
	const secondaryAction = (
		<Menu menuProps={menuProps} onClose={onCloseMenu} ref={menuRef} />
	);

	return (
		<UserProfileEntity
			secondaryAction={secondaryAction}
			ref={buttonRef}
			isActionOpen={isMenuOpen}
			onClick={toggleMenu}
		/>
	);
};
