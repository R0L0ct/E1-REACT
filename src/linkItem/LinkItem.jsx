import React from 'react'
import { LinkItemStyled } from './LinkItemStyled'

export const LinkItem = ({to,children}) => {
  return (
		<LinkItemStyled className={({isActive}) => (isActive ? 'active' : '')} to={to}>
		{children}
		</LinkItemStyled>
  )
}

