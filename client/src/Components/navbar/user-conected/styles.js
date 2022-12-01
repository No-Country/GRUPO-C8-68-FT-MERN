import styled from 'styled-components'

export const UserConectedContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
li{
      cursor: pointer;
      transition: transform 0.3s ease;
      :hover {
        transform: scale(1.04);
      }
    span{
        display: flex;
        align-items: center;
    }
}
`