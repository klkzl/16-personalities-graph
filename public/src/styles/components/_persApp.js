import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid ${props => props.theme.darkGrey};
  box-sizing: border-box;
  font-family: Arial;
  font-size: ${props => props.theme.sSize}px;
  font-weight: 300;
  height: ${props => props.theme.module * 18}px;
  margin: ${props => props.theme.module * 2}px auto 0;
  position: relative;
  text-align: center;
  width: ${props => props.theme.module * 27}px;
`;

const Position = styled.div`
  background-color: black;
  border-bottom: 1px solid white;
  box-sizing: border-box;
  color: white;
  height: ${props => props.theme.module * .8}px;
  margin: 0 auto;
  padding: 5px;
  padding-left: ${props => props.theme.module * .5}px;
  text-align: left;
  width: ${props => props.theme.module * 7}px;

  &:hover {
    background-color: ${props => props.theme.mediumBlue};
    cursor: pointer;
  }
`;

export { Container, Position };