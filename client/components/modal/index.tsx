import { ReactNode, useEffect, useRef, useState } from 'react';
import { Background, Container, Contents } from './style';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

export default function Modal({ children }: Props) {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.querySelector('rootModal');
      ref.current = dom;
    }
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <Container>
        <Background />
        <Contents>{children}</Contents>
      </Container>,
      ref.current,
    );
  }

  return null;
}
