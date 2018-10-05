import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  // border: 1px solid ${props => props.theme.darkGrey};
  height: ${props => props.theme.module * 7.5}px;
  position: absolute;
  right: ${props => props.theme.module}px;
  top: ${props => props.theme.module * 3.3}px;
  width: ${props => props.theme.module * 8}px;
`;

const Ilustration = styled.svg`
  width: 100%;
  height: 100%;
`;

const Title = styled.h5`
  color: ${props => props.theme.mediumBlue};
  font-family: ${props => props.theme.mainFont};
  font-size: ${props => props.theme.sSize}px;
  font-weight: 400;
  left: 6px;
  letter-spacing: 1px;
  margin: 0;
  position: absolute;
  text-align: left;
`;

// const CircleWrapper = props => {
//   const isActive = props.className === props.activePers;
//   return (
//     <Circle isActive={isActive} {...props} />
//   )
// }

export { Container, Ilustration, Title };