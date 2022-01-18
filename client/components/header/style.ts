import Link from 'next/link';
import styled from 'styled-components';
import palette from '../../styles/palette';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 8%;
  background: ${palette.black};
  * {
    color: #fff;
  }
`;

export const Logo = styled(Link)``;

export const MenuWrapper = styled.div`
  display: flex;

  button {
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    background: none;
  }
`;
