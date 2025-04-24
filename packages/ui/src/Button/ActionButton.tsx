import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react'
import { ButtonIcon } from './button.type'
import styled from 'styled-components'
import { flex } from '@merried/utils'
import { color } from '@merried/design-system'
import { IconAdd } from '@merried/icon'

type Props = {
	children: ReactNode
	icon?: ButtonIcon
	width?: CSSProperties['width']
} & ButtonHTMLAttributes<HTMLButtonElement>

const ActionButton = ({ onClick, children, width, icon = 'NONE', style, disabled }: Props) => {
	return (
		<StyledActionButton style={{ width, ...style }} onClick={onClick} disabled={disabled}>
			{icon === 'ADD_ICON' && <IconAdd color={color.G0} width={12} height={12} />}
			{children}
		</StyledActionButton>
	)
}

export default ActionButton

const StyledActionButton = styled.button`
	${flex({ alignItems: 'center', justifyContent: 'center' })}
	background-color: ${color.primary};
	gap: 8px;
	border-radius: 999px;
	height: 34px;
	padding: 10px 24px;
	word-break: keep-all;
`
