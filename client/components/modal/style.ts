import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

export const Contents = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: #fff;
  z-index: 11;
`;
