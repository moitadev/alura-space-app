import styled from 'styled-components';

const Title = styled.h2`
  color: #7b78e5;
  font-size: 32px;
  font-weight: 400;
  text-align: ${props => props.$align ? props.$align : 'left'}
`;

export default Title;
