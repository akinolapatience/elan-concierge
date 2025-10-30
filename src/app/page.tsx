"use client";
import {
  Container,
  Stack,
  Title,
  Text,
  Button,
  Image,
  Grid,
  Box,
  Group,
  Divider,
  Drawer,
  Burger,
} from "@mantine/core";
import {
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function LuxuryConcierge() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const logos = [
    "/Vector (3).png",
    "/Vector (4).png",
    "/Vector (3).png",
    "/Vector (4).png",
    "/Vector (3).png",
    "/Vector (4).png",
    "/Vector (3).png",
    "/Vector (4).png",
    "/Vector (3).png",
    "/Vector (4).png",
    "/Vector (3).png",
    "/Vector (4).png",
    "/Vector (3).png",
    "/Vector (4).png",
    "/Vector (3).png",
    "/Vector (4).png",
    "/Vector (3).png",
  ];

  const services = [
    {
      image: "/Rectangle 5.png",
      title: "Global Travel & Aviation",
      description:
        "Private jets, luxury yachts, bespoke itineraries, and seamless escapes worldwide.",
    },
    {
      image: "/Rectangle 5 (1).png",
      title: "Lifestyle & Access",
      description:
        "VIP reservations, sold-out events, red carpet entry, and elite gatherings.",
    },
    {
      image: "/Rectangle 5 (2).png",
      title: "Hospitality & Wellness",
      description:
        "Signature hotels, private villas, spa retreats, and global health management.",
    },
    {
      image: "/Rectangle 5 (3).png",
      title: "Fashion & Influence",
      description:
        "Personal styling, couture exclusives, private shopping, and cultural fashion integration.",
    },
    {
      image: "/Rectangle 5 (4).png",
      title: "Corporate Concierge",
      description:
        "Streamlined support for organizations from travel coordination to premium experiences, we handle the details so your team can focus on what matters most.",
    },
    {
      image: "/Rectangle 5 (5).png",
      title: "Bespoke Experiences",
      description:
        "Curated lifestyle packages, milestone celebrations, and once-in-a-lifetime journeys.",
    },
    {
      image: "/Rectangle 5 (6).png",
      title: "Luxury Car Hire",
      description:
        "From elite sedans to chauffeur-driven classics, we deliver bespoke car hire experiences designed to match your lifestyle and schedule.",
    },
  ];

  return (
    <Box
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        style={{
          borderLeft: "1px solid #E2DAD8",
          borderRight: "1px solid #E2DAD8",
          borderTop: "none",
          borderBottom: "none",
        }}
      >
        <Group justify="space-between" pl="20px" pr="20px" pt="20px" pb="20px">
          <Image src="/Logo.png" alt="logo" h="57.63px" w="149.62px" />
          <Group
            gap="lg"
            visibleFrom="sm"
            style={{
              color: "#FFFFFF",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <Text c="#FFFFFF" style={{ cursor: "pointer" }}>
              Services
            </Text>
            <Text c="#FFFFFF" style={{ cursor: "pointer" }}>
              About Us
            </Text>
            <Text c="#FFFFFF" style={{ cursor: "pointer" }}>
              Contact Us
            </Text>
            <Button
              variant="filled"
              size="sm"
              bg="#291B0E"
              radius={0}
              c="#FFE0B2"
              style={{ fontWeight: 600 }}
            >
              Schedule Call
            </Button>
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            color="white"
            size="sm"
          />

          <Drawer
            opened={opened}
            onClose={close}
            padding="md"
            size="xs"
            overlayProps={{ opacity: 0.55, blur: 3 }}
            styles={{
              content: { backgroundColor: "#000000", color: "#FFFFFF" },
              header: { backgroundColor: "#000000", color: "#FFFFFF" },
              title: { color: "#FFFFFF" },
            }}
          >
            <Stack gap="md" ta="center">
              <Text onClick={close} c="#FFFFFF" style={{ cursor: "pointer" }}>
                Services
              </Text>
              <Divider />
              <Text onClick={close} c="#FFFFFF" style={{ cursor: "pointer" }}>
                About Us
              </Text>
              <Divider />
              <Text onClick={close} c="#FFFFFF" style={{ cursor: "pointer" }}>
                Contact Us
              </Text>
              <Button
                variant="filled"
                bg="#291B0E"
                radius={0}
                c="#FFE0B2"
                onClick={close}
              >
                Schedule Call
              </Button>
            </Stack>
          </Drawer>
        </Group>
        <Divider
          style={{
            width: "200vw",
            marginLeft: "-170px",
            borderTop: "1px solid #e9ecef",
          }}
        />
        <Stack gap="xl">
          <Box
            ta="left"
            ml="lg"
            mt="lg"
            style={{ maxWidth: "100%", overflow: "hidden" }}
          >
            <Image
              src="/Rectangle 3.png"
              alt="Concierge service"
              w="100%"
              h="auto"
              pr="xl"
              style={{
                maxWidth: "920px",
                width: "100%",
                borderRadius: "8px",
              }}
            />

            <Title
              c="#FFFFFF"
              fz={{ base: 32, sm: 48, md: 64, lg: 96 }}
              fw={400}
              mt="md"
            >
              Luxury Begins With a Conversation.
            </Title>

            <Text
              fz={{ base: 14, sm: 15, md: 16 }}
              fw={400}
              c="#D4D4D4"
              maw="90%"
              style={{ lineHeight: 1.6 }}
            >
              At ÉLAN, we believe true luxury is personal. That’s why every
              journey starts with a “45 minutes Get to Know Me call” — a private
              conversation where we understand your world, your tastes, and your
              vision of the extraordinary. From that moment, we design
              experiences and services that are uniquely yours.
            </Text>
          </Box>

          <Divider />

          {isSmallScreen ? (
            <Stack align="center" gap="lg" w="100%" ta="center">
              <Image
                src="/Rectangle 4.png"
                alt="luxury living"
                w="100%"
                h="auto"
                radius="md"
              />

              <Box w="90%">
                <Image
                  src="/Vector (5).png"
                  alt="icon"
                  w="40px"
                  h="40px"
                  c="#FFE0B2"
                />
                <Text c="#F3C989" fz="16px" fw={500}>
                  ABOUT US
                </Text>
                <Title c="#FFFFFF" fz="40px" fw={400}>
                  Redefining Luxury Living
                </Title>
                <Text c="#D4D4D4" fz="16px" fw={400}>
                  ÉLAN is a global luxury concierge brand dedicated to curating
                  tailored experiences for individuals who value discretion,
                  access, and sophistication. From everyday privileges to
                  once-in-a-lifetime moments, our role is to simplify your world
                  and elevate every detail.
                </Text>

                <Button
                  variant="filled"
                  color="#291B0E"
                  size="md"
                  radius={0}
                  mt="lg"
                  rightSection={<IconArrowUpRight size={18} color="#FFE0B2" />}
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#FFE0B2",
                  }}
                >
                  Schedule Call
                </Button>
              </Box>
            </Stack>
          ) : (
            <Group w="920px" h="580px" justify="space-between" gap="lg">
              <Image
                src="/Rectangle 4.png"
                alt="luxury living"
                w="450px"
                h="500px"
                p="20px"
              />

              <Divider size="xs" orientation="vertical" />

              <Box
                w="403px"
                h="514px"
                style={{
                  position: "relative",
                }}
              >
                <Image
                  src="/Vector (5).png"
                  alt="icon"
                  w="40px"
                  h="40px"
                  c="#FFE0B2"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 36,
                  }}
                />
                <Box mt="60px">
                  <Text c="#F3C989" fz="16px" fw={500}>
                    ABOUT US
                  </Text>
                  <Title c="#FFFFFF" fz="60px" fw={400}>
                    Redefining Luxury Living
                  </Title>
                  <Text c="#D4D4D4" fz="16px" fw={400}>
                    ÉLAN is a global luxury concierge brand dedicated to
                    curating tailored experiences for individuals who value
                    discretion, access, and sophistication. From everyday
                    privileges to once-in-a-lifetime moments, our role is to
                    simplify your world and elevate every detail.
                  </Text>

                  <Button
                    variant="filled"
                    color="#291B0E"
                    size="md"
                    radius={0}
                    mt="lg"
                    rightSection={
                      <IconArrowUpRight size={18} color="#FFE0B2" />
                    }
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#FFE0B2",
                    }}
                  >
                    Schedule Call
                  </Button>
                </Box>
              </Box>
            </Group>
          )}

          <Divider />

          <Group
            h="76.6px"
            justify="space-between"
            mr="lg"
            ml="lg"
            style={{
              flexWrap: "wrap",
              justifyContent: isSmallScreen ? "center" : "space-between",
              gap: isSmallScreen ? "16px" : "0px",
              maxWidth: "100%",
            }}
          >
            {logos
              .slice(0, isSmallScreen ? 9 : logos.length)
              .map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  h={index % 2 === 0 ? "52.6px" : "12px"}
                  w={index % 2 === 0 ? "52.6px" : "12px"}
                />
              ))}
          </Group>
          <Divider />

          <Box>
            <Text ta="center" mb="sm" c="#F3C989" fz="16px" fw={500}>
              OUR SERVICES
            </Text>
            <Title c="#FFFFFF" fz="60px" fw={400} ta="center">
              Your Desires Perfectly Managed
            </Title>
            <Text
              fz="16px"
              c="#D4D4D4"
              ta="center"
              maw={700}
              fw={400}
              mx="auto"
              mb="xl"
            >
              Our services span the following, which allow us to serve your
              needs and requirements wherever you are. We will look to deliver
              and exceed, ensuring a 5-star delivery at all times.
            </Text>
            <Group justify="center" mb="lg">
              <Button
                variant="filled"
                color="#291B0E"
                size="md"
                radius={0}
                rightSection={<IconArrowUpRight size={18} color="#FFE0B2" />}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#FFE0B2",
                }}
              >
                Exclusive Introductory Call{" "}
              </Button>
            </Group>

            <Grid gutter="lg" mb="lg" ml="sm" mr="lg">
              {services.slice(0, 3).map((service, idx) => (
                <Grid.Col
                  key={idx}
                  span={{ base: 12, sm: 4 }}
                  style={{ display: "flex" }}
                >
                  <Box>
                    <Image
                      src={service.image}
                      alt={service.title}
                      radius="0"
                      mb="sm"
                    />
                    <Title order={4} mb="xs" fz="24px" c="#FFFFFF" fw={400}>
                      {service.title}
                    </Title>
                    <Text fz="14px" fw={400} c="#CCCCCC">
                      {service.description}
                    </Text>
                  </Box>
                  {idx < 2 && (
                    <Divider
                      c="#E2DAD8"
                      orientation="vertical"
                      mx="md"
                      style={{
                        height: "auto",
                      }}
                    />
                  )}
                </Grid.Col>
              ))}
            </Grid>

            <Divider c="#E2DAD8" my="md" />

            <Grid gutter="lg" ml="lg" mr="lg">
              {services.slice(3).map((service, idx) => (
                <Grid.Col
                  key={idx}
                  span={{ base: 12, sm: 6, md: 3 }}
                  style={{ display: "flex" }}
                >
                  <Box>
                    <Image
                      src={service.image}
                      alt={service.title}
                      radius="0"
                      mb="sm"
                    />
                    <Title order={5} mb="xs" fz="24px" c="#FFFFFF" fw={400}>
                      {service.title}
                    </Title>
                    <Text fz="14px" fw={400} c="#CCCCCC">
                      {service.description}
                    </Text>
                  </Box>
                  {idx < 3 && (
                    <Divider
                      c="#E2DAD8"
                      orientation="vertical"
                      mx="md"
                      style={{
                        height: "auto",
                      }}
                    />
                  )}
                </Grid.Col>
              ))}
            </Grid>
          </Box>
          <Box>
            <Image src="/Frame 22.png" alt="Professional team" radius="0" />
          </Box>

          <Group
            p="xl"
            bg="#000000"
            justify={isSmallScreen ? "center" : "space-between"}
            align={isSmallScreen ? "center" : "flex-start"}
            style={{
              flexDirection: isSmallScreen ? "column" : "row",
              textAlign: isSmallScreen ? "center" : "left",
              borderRadius: "0",
              gap: isSmallScreen ? "0px" : "16px",
            }}
          >
            <Box
              w={isSmallScreen ? "100%" : "480px"}
              style={{
                gap: "16px",
              }}
            >
              <Title
                c="#E6E6E6"
                fz={isSmallScreen ? "32px" : "48px"}
                fw={400}
                mb="sm"
              >
                Your World, Curated in 45 Minutes.
              </Title>
              <Text c="#FFFFFF" fz="16px" fw={400}>
                It takes just one conversation to begin your journey with ÉLAN.
                A 45-minute Get to Know Me call is all it takes for us to
                understand your lifestyle and start building the experiences
                that will define your membership.
              </Text>
            </Box>

            <Group
              justify="center"
              mb={isSmallScreen ? "0" : "lg"}
              style={{ paddingTop: "76px" }}
            >
              <Button
                variant="filled"
                color="#291B0E"
                size={isSmallScreen ? "md" : "lg"}
                radius={0}
                rightSection={<IconArrowUpRight size={18} color="#FFE0B2" />}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#FFE0B2",
                }}
              >
                Schedule My 45-Minutes Call
              </Button>
            </Group>
          </Group>
        </Stack>
        <Divider />

        <Stack
          justify="space-around"
          pl="lg"
          pr="lg"
          pt="lg"
          gap="md"
          align={isSmallScreen ? "center" : "stretch"}
        >
          <Group
            justify="space-between"
            align={isSmallScreen ? "center" : "flex-start"}
            style={{
              flexDirection: isSmallScreen ? "column" : "row",
              textAlign: isSmallScreen ? "center" : "left",
              gap: isSmallScreen ? "sm" : "md",
            }}
          >
            <Image src="/Logo.png" alt="logo" h="57.63px" w="149.62px" />
            <Group gap="xs">
              <Text
                c="#D4D4D4"
                fz="16px"
                fw={400}
                style={{ cursor: "pointer" }}
              >
                Services
              </Text>
              <Divider orientation="vertical" c="#D7D8DF" />
              <Text
                c="#D4D4D4"
                fz="16px"
                fw={400}
                style={{ cursor: "pointer" }}
              >
                About Us
              </Text>
            </Group>
          </Group>

          <Text
            c="#D4D4D4"
            fz="16px"
            fw={500}
            ta={isSmallScreen ? "center" : "left"}
          >
            A global luxury concierge brand redefining exclusivity, privacy, and
            curated living.
          </Text>

          <Box ta={isSmallScreen ? "center" : "left"}>
            <Button
              variant="subtle"
              size="md"
              rightSection={<IconArrowUpRight size={18} color="#FFE0B2" />}
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#FFFFFF",
              }}
            >
              More about us
            </Button>
          </Box>
        </Stack>

        <Group
          justify="space-between"
          gap="sm"
          pl="lg"
          pr="lg"
          pb="lg"
          mt="xl"
          style={{
            flexDirection: isSmallScreen ? "column" : "row",
            textAlign: isSmallScreen ? "center" : "left",
            gap: isSmallScreen ? "md" : "sm",
          }}
        >
          <Group justify={isSmallScreen ? "center" : "flex-start"} gap="xs">
            <IconBrandInstagram size={15} color="#EFEFF2" />
            <IconBrandLinkedin size={15} color="#EFEFF2" />
          </Group>

          <Text c="#D4D4D4" fz="14px" fw={400}>
            © 2025 — Copyright. All Rights reserved.
          </Text>

          <Stack
            align={isSmallScreen ? "center" : "flex-end"}
            justify="flex-start"
            gap="md"
          >
            <Title c="#FFFFFF" fz="16px" fw={600}>
              Contact Us
            </Title>
            <Text c="#D4D4D4" fz="14px" fw={400}>
              +234 (123) 456-78-90
            </Text>
            <Text c="#D4D4D4" fz="14px" fw={400}>
              hello@élanluxury.com
            </Text>
          </Stack>
        </Group>
      </Container>
    </Box>
  );
}
