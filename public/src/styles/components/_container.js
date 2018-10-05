import styled from 'styled-components';

const Container = styled.div`
  // border: 1px solid ${props => props.theme.darkGrey};
  box-sizing: border-box;
  height: ${props => props.theme.module * 6.3}px;
  padding: ${props => props.theme.sSize * .5}px;
  position: absolute;
  right: ${props => props.theme.module}px;
  top: ${props => props.theme.module * 10.7 - 10}px;
  width: ${props => props.theme.module * 8}px;
`;

const Title = styled.h5`
  color: ${props => props.theme.mediumBlue};
  font-family: ${props => props.theme.mainFont};
  font-size: ${props => props.theme.sSize}px;
  font-weight: 400;
  letter-spacing: 1px;
  margin: ${props => props.theme.sSize * .5}px 0;
  text-align: left;

  &:first-of-type {
    margin-top: 0;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: ${props => props.theme.module / 3}px;
  text-align: left;
`;

export { Container, Title, Paragraph };