import { ReactNode, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ButtonProps } from 'shared';

export interface PropsWithChildren {
	children: ReactNode;
}

export interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
	after?: any;
	className?: string;
	registerProps?: UseFormRegisterReturn<'email' | 'password' | 'name'>;
	error?: Record<string, any>;
}

export interface MenuButtonProps extends ButtonProps {
	text: string;
}
