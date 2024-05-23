import React from 'react'

type Props = {
    children:React.ReactNode;
}

const Product = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default Product