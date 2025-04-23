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

export const getButtonSize = {
	SMALL: css`
		width: 166px;
		height: 52px;
		padding: 18px 69px;
	`,
	MEDIUM: css`
		width: 185px;
		height: 50px;
		padding: 17px 40px;
	`,
	LARGE: css`
		width: 319px;
		height: 50px;
		padding: 18px 120px;
	`,
	VERY_LARGE: css`
		width: 351px;
		height: 52px;
		padding: 19px 137px;
	`,
}
