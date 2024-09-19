import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { PopupButton } from "@typeform/embed-react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const StyledContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  /* background-color: #2b2c34; */
  padding-bottom: 2rem;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 72px;
  text-align: left;
  margin-bottom: 1rem;
  color: ${theme.colors.bodyHororGreen};
  text-shadow: ${theme.colors.bodyHorrorRed} 2px 5px;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.garamond};
  letter-spacing: 1.2px;
  text-align: left;
  margin-bottom: 1rem;
`;

const StyledPopupButton = styled(PopupButton)`
  font-family: ${theme.fonts.garamond};
  background-color: ${theme.colors.bodyHorrorRed};
  font-size: 24px;
  font-weight: 500;
  border-radius: 0px;
  padding: 12px 36px;
  margin-top: 2rem;
  filter: drop-shadow(5px 5px ${theme.colors.bodyHororGreen});

  :hover {
    opacity: 0.85;
  }
`;

const StyledLink = styled.a`
  color: #ff3864;
  opacity: 1;
  :hover {
    opacity: 0.85;
  }
`;

export const Brew = () => {
  return (
    <StyledContainer
      px={{ lg: "8rem", md: "4rem", base: "2rem" }}
      mb={{ md: "5rem", base: "1rem" }}
    >
      <Flex w="100%" direction="column" justifyContent="space-between">
        <StyledHeading fontSize={{ xl: "54px", lg: "44px", base: "36px" }}>
          Brew a Batch
        </StyledHeading>
        <StyledBodyText fontSize={{ lg: "24px", base: "20px" }}>
          RaidBrood brews custom batches for communities, conferences, and other
          events.
        </StyledBodyText>
        <StyledBodyText fontSize={{ lg: "24px", base: "20px" }}>
          Our team of beer experts work to concoct the perfect brew for you. Our
          master brewers capture the tastes and notes that encapsulate what you
          want to do with your brew. Our designers create a logo that
          communicates your brew&apos;s essence. Our developers create an NFT
          for your brew. Our writers pick the perfect words to describe the lore
          of your brew.
        </StyledBodyText>
        <StyledBodyText fontSize={{ lg: "24px", base: "20px" }}>
          Collaborators include{" "}
          <StyledLink href="https://greenpill.party/">
            GreenPill Podcast
          </StyledLink>{" "}
          and{" "}
          <StyledLink href="https://www.sporkdao.org/">
            SporkDAO/ETHDenver 2023
          </StyledLink>
          .
        </StyledBodyText>
        <StyledBodyText fontSize={{ lg: "24px", base: "20px" }}>
          Do you want to join us in the endeavour of exlixir to fuel our fight
          against Moloch by making a batch for you?
        </StyledBodyText>
      </Flex>
      <StyledPopupButton id="KSaCPC3g" className="my-button">
        Contact Us
      </StyledPopupButton>
    </StyledContainer>
  );
};
