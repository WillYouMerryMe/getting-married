'use client'

import { GlobalStyle } from '@merried/design-system'
import type { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

interface Props {
	children: ReactNode
}

const Provider = ({ children }: Props) => {
	return (
		<RecoilRoot>
			<GlobalStyle />
			{children}
		</RecoilRoot>
	)
}

export default Provider
