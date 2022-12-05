import styled from "styled-components";

export const CardContainerStyled = styled.div`
  width: 350px;
  min-height: 500px;
  background-image: linear-gradient(
    45deg,
    hsl(240deg 100% 20%) 0%,
    hsl(289deg 100% 21%) 11%,
    hsl(315deg 100% 27%) 22%,
    hsl(329deg 100% 36%) 33%,
    hsl(337deg 100% 43%) 44%,
    hsl(357deg 91% 59%) 56%,
    hsl(17deg 100% 59%) 67%,
    hsl(34deg 100% 53%) 78%,
    hsl(45deg 100% 50%) 89%,
    hsl(55deg 100% 50%) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 10px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
`;

export const CardTextContentContainerStyled = styled.div`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 3px;
`;

export const CardTypeContainerStyled = styled.div`
  font-size: 25px;
`;
