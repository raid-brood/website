import { Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { MEDIA_FILES } from "../../utils/constants";

const StyledFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledContainer = styled(SimpleGrid)`
  grid-gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  align-items: center;
`;
const StyledSubContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
`;
const StyledHeading = styled(Text)`
  width: 100%;
  font-family: ${theme.fonts.uncial};
  line-height: 48px;
  color: ${theme.colors.bodyHorrorGreen};
  text-align: left;
  margin-bottom: 1rem;
  text-shadow: ${theme.colors.bodyHorrorRed} 2px 5px;
  text-align: center;
`;
const StyledBodyText = styled(Text)`
  font-family: ${theme.fonts.garamond};
  text-align: left;
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
  color: ${theme.colors.bodyHorrorRed};
  opacity: 1;
  :hover {
    opacity: 0.85;
  }
`;

export const ProofOfDrink = () => {
  return (
    <StyledFlex px={{ lg: "5rem", md: "3rem", base: "1rem" }}>
      <StyledHeading fontSize={{ xl: "54px", lg: "44px", base: "36px" }}>
        Proof Of Drink
      </StyledHeading>
      <StyledContainer
        columns={{ base: 1, md: 2, lg: 2 }}
        px={{ lg: "8rem", md: "4rem", base: "2rem" }}
      >
        <Image
          src="/POD_Badge.svg"
          alt="illustration"
          w={{ lg: "450px", base: "200px" }}
          ml="auto"
          mr={{ lg: "0", base: "auto" }}
        />
        <StyledSubContainer ml="auto" mr={{ lg: "0", base: "auto" }}>
          <StyledBodyText
            fontSize={{ lg: "24px", base: "18px" }}
            fontWeight="700"
          >
            Collect Liquidity
          </StyledBodyText>
          <StyledBodyText fontSize={{ lg: "24px", base: "18px" }}>
            Brood&apos;s POD NFTs are digital collectables tied to our
            in-your-hand beer releases.
          </StyledBodyText>
          <StyledBodyText fontSize={{ lg: "24px", base: "18px" }}>
            Make a beer with the only beer DAO in the world with a web3
            <StyledLink href="https://pod.brood.beer"> Protocol</StyledLink>.
          </StyledBodyText>
        </StyledSubContainer>
      </StyledContainer>
    </StyledFlex>
  );
};
