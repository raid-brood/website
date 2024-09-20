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
  color: ${theme.colors.bodyHororGreen};
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

export const About = () => {
  return (
    <StyledFlex px={{ lg: "5rem", md: "3rem", base: "1rem" }}>
      <StyledHeading fontSize={{ xl: "54px", lg: "44px", base: "36px" }}>
        WTF is Raid Brood?!?
      </StyledHeading>
      <StyledContainer
        columns={{ base: 1, md: 2, lg: 2 }}
        px={{ lg: "8rem", md: "4rem", base: "2rem" }}
      >
        <StyledSubContainer>
          <StyledBodyText fontSize={{ lg: "24px", base: "18px" }}>
            At RaidBrood, we are about brews, not bags. We are beer lovers. We
            are Web3 builders. We are friends. We hate Moloch.
          </StyledBodyText>
          <StyledBodyText fontSize={{ lg: "24px", base: "18px" }}>
            RaidBrood brews are memetic manifestations in our eternal fight
            against the dastardly gods of disorder and chaos.
          </StyledBodyText>
          <StyledBodyText fontSize={{ lg: "24px", base: "18px" }}>
            The first of its kind, RaidBrood is a DAO dedicated to craft beer.
            Spun out from{" "}
            <StyledLink href="https://www.raidguild.org/">RaidGuild</StyledLink>
            , our master brewer cooked up Blood of Moloch, a special Russian
            Imperial Stout to commemorate EthDenver 2022. In the spirit of Web3,
            we started a beer club as a{" "}
            <StyledLink href="https://app.daohaus.club/dao/0x64/0xc6dd517a5d0e6c6962a8357ad47455c0f7b693bf">
              DAO
            </StyledLink>
            .
          </StyledBodyText>
        </StyledSubContainer>
        <Image
          src="/BOM_GREEN.png"
          alt="Blood of Moloch"
          w={{ lg: "450px", base: "250px" }}
          ml="auto"
          mr={{ lg: "0", base: "auto" }}
          mt={{ base: "0.5rem", lg: "0", md: "0" }}
        />
      </StyledContainer>
    </StyledFlex>
  );
};
