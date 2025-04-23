import { css } from 'styled-components'
import { color } from '@merried/design-system'

export const getButtonStyle = {
	DEFAULT: css`
		background-color: ${color.primary};
		color: ${color.G0};
	`,
	SECOND: css`
		background-color: ${color.G20};
		color: ${color.G300};
	`,
	SELECT: css`
		background-color: ${color.G10};
		border: 1px solid ${color.G50};
		color: ${color.G300};
	`,
	DISABLED: css`
		background-color: ${color.G40};
		color: ${color.G100};
	`,
	WARNING: css`
		background-color: ${color.red};
		color: ${color.G0};
	`,
}
