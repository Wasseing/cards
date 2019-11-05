import React from 'react'
import styled from 'styled-components'
import { Footer } from 'components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const PageTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
      <div style={{ minWidth: "100%", display: "flex", flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: "center" }}>
        <Footer />
      </div>
    </Wrapper>
  )
}
export { PageTemplate }
