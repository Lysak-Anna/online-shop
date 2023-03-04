import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Button,
  CloseButton,
  Content,
  Overlay,
  StyledLink,
  Text,
} from "./Modal.styled";
const modalRoot = document.querySelector("#modal-root");
export default function Modal({ setIsActive }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  function handleKeyDown(event) {
    if (event.code === "Escape") {
      setIsActive(false);
    }
  }
  function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
      setIsActive(false);
    }
  }
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Content>
        <Button type="button" onClick={() => setIsActive(false)}>
          <CloseButton />
        </Button>
        <Text>
          Please, <StyledLink to="/login">sign in</StyledLink> to add products
          to cart
        </Text>
      </Content>
    </Overlay>,
    modalRoot
  );
}
