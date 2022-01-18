import { Container, Logo, MenuWrapper } from './style';

export default function Header() {
  return (
    <Container>
      <Logo href="/">로고</Logo>
      <MenuWrapper>
        <button>회원가입</button>
        <button>로그인</button>
      </MenuWrapper>
    </Container>
  );
}
