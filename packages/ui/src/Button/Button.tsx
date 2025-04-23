import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react'
import { ButtonSize, ButtonStyleType } from './button.type'
import styled from 'styled-components'
import { flex } from '@merried/utils'
import { getButtonSize, getButtonStyle } from './button.style'

type Props = {
	children: ReactNode
	styleType?: ButtonStyleType
	size?: ButtonSize
	width?: CSSProperties['width']
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ onClick, children, styleType = 'DEFAULT', size = 'MEDIUM', width, style, disabled }: Props) => {
	return (
		<StyledButton style={{ width, ...style }} onClick={onClick} styleType={styleType} size={size} disabled={disabled || styleType === 'DISABLED'}>
			{children}
		</StyledButton>
	)
}

export default Button

const StyledButton = styled.button<{
	styleType: ButtonStyleType
	size: ButtonSize
}>`
	${flex({ alignItems: 'center', justifyContent: 'center' })}
	border-radius: 8px;
	word-break: keep-all;

	${(props) => props && getButtonStyle[props.styleType]};
	${(props) => props && getButtonSize[props.size]};
`
