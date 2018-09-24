import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.darkGrey};
  height: ${props => props.theme.module * 8}px;
  position: absolute;
  right: ${props => props.theme.module}px;
  top: ${props => props.theme.module * 1.2}px;
  width: ${props => props.theme.module * 8}px;
`;

const Ilustration = styled.svg`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.lightGrey};
`;

export { Container, Ilustration };