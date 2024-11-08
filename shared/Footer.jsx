import { Flex, Grid, Heading, Image, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { MEDIA_FILES } from "../utils/constants";

const StyledContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const StyledNavLink = styled(Link)`
  font-family: ${theme.fonts.texturina};
  color: white;
  text-align: center;
  font-weight: bold;
`;

const StyledHeading = styled(Heading)`
  color: ${theme.colors.bodyHorrorGreen};
`;

const PlainLink = styled(Link)`
  :hover {
    text-decoration: none;
  }
`;

const FooterTextLink = styled.p`
  line-height: 2;
`;

export const Footer = () => {
  return (
    <StyledContainer px={{ lg: "8rem", md: "4rem", base: "2rem" }} py={12}>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        templateAreas={{
          base: `
            "mid mid"
            "left right"
          `,
          lg: `"left mid right"`,
        }}
        templateRows={{ base: "5rem 1fr", lg: "1fr" }}
        w="full"
        rowGap={4}
      >
        <Flex gridArea="left" alignItems="end">
          <StyledNavLink fontSize={{ lg: "16px", base: "14px" }}>
            Made with ⚔️
          </StyledNavLink>
        </Flex>
        <Flex gridArea="mid" justify="center">
          <PlainLink href="/">
            <StyledHeading>BROOD.BEER</StyledHeading>
          </PlainLink>
        </Flex>

        <Flex
          direction="row"
          alignItems="end"
          justifyContent="center"
          gridArea="right"
          ms="auto"
          gap={2}
        >
          <Link href="https://discord.gg/XKGM8u8XTQ" isExternal>
            <Image
              src={MEDIA_FILES.icons.discord}
              alt="discord"
              w={{ lg: "32px", base: "18px" }}
            />
          </Link>
          <Link href="https://twitter.com/RaidBrood" isExternal>
            <Image
              src={MEDIA_FILES.icons.twitter}
              alt="twitter"
              w={{ lg: "32px", base: "18px" }}
            />
          </Link>
          <Link href="https://warpcast.com/~/channel/post-yer-ale" isExternal>
            <Image
              src="/farcaster-white.png"
              alt="twitter"
              w={{ lg: "36px", base: "20px" }}
            />
          </Link>
          <Link href="https://pod.brood.beer" isExternal>
            <FooterTextLink>Proof of Drink</FooterTextLink>
          </Link>
        </Flex>
      </Grid>
    </StyledContainer>
  );
};
