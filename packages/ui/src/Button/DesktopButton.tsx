import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react'
import { ButtonStyleType, DesktopButtonSize } from './button.type'
import styled from 'styled-components'
import { flex } from '@merried/utils'
import { getDesktopButtonSize, getButtonStyle } from './button.style'
import { color } from '@merried/design-system'

type Props = {
	children: ReactNode
	styleType?: ButtonStyleType
	size?: DesktopButtonSize
	width?: CSSProperties['width']
} & ButtonHTMLAttributes<HTMLButtonElement>

const DesktopButton = ({ onClick, children, styleType = 'DEFAULT', size = 'SMALL', width, style }: Props) => {
	return (
		<StyledButton style={{ width, ...style }} onClick={onClick} styleType={styleType} size={size} disabled={styleType === 'DISABLED'}>
			{children}
		</StyledButton>
	)
}

export default DesktopButton

const StyledButton = styled.button<{
	styleType: ButtonStyleType
	size: DesktopButtonSize
}>`
	${flex({ alignItems: 'center', justifyContent: 'center' })}
	border-radius: 8px;
	word-break: keep-all;

	${(props) => props && getButtonStyle[props.styleType]};
	${(props) => props && getDesktopButtonSize[props.size]};

	${(props) => props.styleType === 'SECOND' && props.size === 'LARGE' && `color: ${color.G900};`}
`
