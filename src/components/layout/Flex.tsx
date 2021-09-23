import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 20px;
    max-width: 37%;
    width: 100%;
    margin: 0 6px;
    margin-bottom: 18px;
  }
`

export default FlexLayout
