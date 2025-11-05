// "use client";
// import { useState } from "react";
// import {
//   Container,
//   Box,
//   Title,
//   Stack,
//   Image,
//   Center,
//   Grid,
//   Paper,
//   Table,
//   Modal,
//   Button,
//   Card,
//   Group,
//   Text,
//   Flex,
//   Divider,
//   Anchor,
//   Accordion,
//   Tabs,
//   AccordionControl,
// } from "@mantine/core";
// import { IconMapPin, IconArrowRight, IconBed } from "@tabler/icons-react";
// {/* <Image src="/Frame 2121453478.png" alt="dropdown" width={18} height={18} />; */}

// const amenities = [
//   "Parking Space",
//   "Pool",
//   "Playground",
//   "Tennis Court",
//   "Power Backup",
//   "Garden",
//   "Security Cameras",
// ];
// const features = ["1 Bedroom", "1 Bed", "1 Bathroom", "1 Kitchen"];
// const amenitiess = ["TV", "AirCondition", "Water Heater", "Microwave"];
// const services = ["A Chef", "Airport Pickup", "A Cleaner"];

// export default function SingleShortlet() {
//   const [value, setValue] = useState<string | null>("units");

//   return (
//     <Container top="164px" fluid>
//       <Group justify="space-between" pt="36px">
//         <Stack>
//           <Title order={1} fz="32px" fw={700} c="#046F7B">
//             The Sourgy Lounge Shortlet{" "}
//           </Title>
//           <Group gap={8}>
//             <IconMapPin size={20} color="#046F7B" />
//             <Title order={6} fz="16px" fw="500" c="#4B5563">
//               House 40, Road 22, Kado Estate, Abuja.{" "}
//             </Title>
//           </Group>
//         </Stack>
//         <Box
//           bg="#ECFDF5"
//           fz="16px"
//           c="#16A34A"
//           fw={700}
//           style={{
//             borderRadius: "100px",
//             height: "40px",
//             width: "111px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           Available
//         </Box>
//       </Group>

//       <Group wrap="nowrap" gap="36px" pt="lg">
//         <Stack>
//           <Image
//             src="/image (3).png"
//             alt="home"
//             h="400px"
//             w="610px"
//             radius="2px"
//           />
//           <Group>
//             <Image
//               src="/image (4).png"
//               alt="home"
//               h="130px"
//               w="192px"
//               radius="2px"
//             />
//             <Image
//               src="/image (5).png"
//               alt="home"
//               h="130px"
//               w="192px"
//               radius="2px"
//             />
//             <Image
//               src="/image (6).png"
//               alt="home"
//               h="130px"
//               w="192px"
//               radius="2px"
//             />
//           </Group>
//         </Stack>

//         <Stack align="flex-start" justify="flex-start">
//           <Title c="#1F2937" fz="14px" fw={700}>
//             About this place:
//           </Title>
//           <Box
//             bg="#F5F6F7B2"
//             h="100px"
//             w="570px"
//             p="16px"
//             style={{
//               borderRadius: "4px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Text c="#6B7280" fz="14px" fw={600}>
//               Welcome to our cozy and stylish shortlet apartment, designed to
//               make you feel at home. Enjoy a fully furnished space with modern
//               amenities, including a well-equipped kitchen, comfortable living
//               area, and high-speed Wi-Fi...Read More{" "}
//             </Text>
//           </Box>
//           <Title c="#1F2937" fz="14px" fw={700}>
//             Property Type;
//           </Title>
//           <Box
//             bg="#E1F2F4"
//             h="31px"
//             w="86px"
//             style={{
//               borderRadius: "1000px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Text c="#046F7B" fz="14px" fw={500}>
//               Duplex
//             </Text>
//           </Box>
//           <Title c="#1F2937" fz="14px" fw={700}>
//             Property Amenities:
//           </Title>
//           <Group justify="space-between" gap="12px">
//             <Grid>
//               {amenities.map((amenity, index) => (
//                 <Grid.Col span={3} key={index}>
//                   <Card
//                     w="130px"
//                     h="64px"
//                     radius="8px"
//                     withBorder
//                     style={{ border: "1px solid #EDEEF0" }}
//                   >
//                     <Stack align="center" gap="2px">
//                       <IconBed size={20} color="#374151" />
//                       <Text c="#374151" fz="14px" fw={500}>
//                         {amenity}
//                       </Text>
//                     </Stack>
//                   </Card>
//                 </Grid.Col>
//               ))}
//               <Grid.Col span={1}>
//                 <Card
//                   radius="8px"
//                   w="130px"
//                   h="64px"
//                   withBorder
//                   style={{ border: "1px solid #EDEEF0" }}
//                 >
//                   <Center>
//                     <Anchor href="#" c="#046F7B">
//                       See All →
//                     </Anchor>
//                   </Center>
//                 </Card>
//               </Grid.Col>
//             </Grid>
//           </Group>

//           <Title c="#1F2937" fz="14px" fw={700}>
//             Host
//           </Title>
//           <Group
//             justify="space-between"
//             gap="sm"
//             bg="#F5F6F7"
//             h="80px"
//             w="570px"
//             pl="12px"
//             pr="12px"
//           >
//             <Group>
//               <Image
//                 src="/image (7).png"
//                 alt="user"
//                 h="40px"
//                 w="42px"
//                 radius="6px"
//               />
//               <Box>
//                 <Title c="#1F2937" fz="14px" fw={700}>
//                   Joseph Matthew
//                 </Title>
//                 <Text c="#6B7280" fz="12px" fw={500}>
//                   josephmatthe@gmail.com
//                 </Text>
//               </Box>
//             </Group>
//             <Group justify="flex-end">
//               <Text
//                 c="#201F29"
//                 fz="12px"
//                 fw={600}
//                 style={{
//                   textDecoration: "underline",
//                   textUnderlineOffset: "2px",
//                   textDecorationThickness: "1px",
//                 }}
//               >
//                 Other shortlets owned by host
//               </Text>
//               <IconArrowRight size={16} />
//             </Group>
//           </Group>
//         </Stack>
//       </Group>

//       <Container bg="#FFFFFF" fluid h="1500px" pt="36px">
//         <Tabs
//           color="#046F7B"
//           defaultValue="units"
//           value={value}
//           onChange={setValue}
//         >
//           <Tabs.List>
//             <Tabs.Tab
//               value="units"
//               c={value === "units" ? "#046F7B" : "#6B7280"}
//               fw={value === "units" ? "700" : "500"}
//               fz="20px"
//             >
//               Property Units
//             </Tabs.Tab>
//             <Tabs.Tab
//               value="things"
//               c={value === "things" ? "#046F7B" : "#6B7280"}
//               fw={value === "things" ? "700" : "500"}
//               fz="20px"
//             >
//               Things to Know
//             </Tabs.Tab>
//             <Tabs.Tab
//               value="policies"
//               c={value === "policies" ? "#046F7B" : "#6B7280"}
//               fw={value === "policies" ? "700" : "500"}
//               fz="20px"
//             >
//               House Policies
//             </Tabs.Tab>
//           </Tabs.List>
//           <Tabs.Panel value="units" pt="md">
//             <Paper bg="#F5F6F7" radius="8px" p="24px">
//               <Card bg="#FFFFFF" h="445px" radius={8} padding="24px">
//                 <Group justify="space-between">
//                   <Title c="#1F2937" fz="20px" fw={700}>
//                     The Secluded Inn
//                   </Title>
//                   <Button
//                     variant="filled"
//                     radius="0"
//                     bg="#201F29"
//                     h="40px"
//                     w="87px"
//                     fz="12px"
//                     c="#FFFFFF"
//                     fw={600}
//                   >
//                     Reserve
//                   </Button>
//                 </Group>
//                 <Group justify="space-between" pt="24px">
//                   <Box
//                     h="333px"
//                     w="331px"
//                     style={{
//                       border: "1px solid #EDEEF0",
//                       padding: "16px",
//                       borderRadius: "2px",
//                     }}
//                   >
//                     <Image
//                       src="/Component 56.png"
//                       alt="......"
//                       w="299px"
//                       h="301px"
//                     />
//                   </Box>
//                   <Stack align="flex-start" justify="flex-start" gap="16px">
//                     <Box
//                       h="96px"
//                       w="750px"
//                       pb="24px"
//                       style={{
//                         border: "1px solid #EDEEF0",
//                         padding: "16px",
//                         borderRadius: "2px",
//                         gap: "8px",
//                       }}
//                     >
//                       <Title c="#1F2937" fz="14px" fw={700} lh="19.2px">
//                         About this Unit:
//                       </Title>
//                       <Text c="#4B5563" fz="12px" fw={500}>
//                         Welcome to our cozy and stylish shortlet apartment,
//                         designed to make you feel at home. Enjoy a fully
//                         furnished space with modern amenities, including a
//                         well-equipped kitchen, comfortable living area, and
//                         high-speed Wi-Fi.
//                       </Text>
//                     </Box>
//                     <Group>
//                       <Box
//                         h="70px"
//                         w="366px"
//                         style={{
//                           border: "1px solid #EDEEF0",
//                           gap: "8px",
//                           padding: "16px",
//                         }}
//                       >
//                         <Title c="#6B7280" fz="10px" fw={500}>
//                           Price:
//                         </Title>
//                         <Group gap="xs">
//                           <Title c="#035F6A" fz="20px" fw={700}>
//                             ₦50,000
//                           </Title>
//                           <Text c="#A6ADBA" fz="14px" fw={500}>
//                             /night
//                           </Text>
//                         </Group>
//                       </Box>
//                       <Box h="70px" w="366px">
//                         <Table
//                           withTableBorder
//                           withRowBorders={false}
//                           h="70px"
//                           w="366px"
//                         >
//                           <Table.Thead>
//                             <Table.Tr>
//                               <Table.Th>
//                                 <Text fz="10px" fw={500} c="#6B7280">
//                                   Check In
//                                 </Text>
//                               </Table.Th>
//                               <Table.Th>
//                                 <Text fz="10px" fw={500} c="#6B7280">
//                                   Check Out
//                                 </Text>
//                               </Table.Th>
//                               <Table.Th>
//                                 <Text fz="10px" fw={500} c="#6B7280">
//                                   Maximum Guests
//                                 </Text>
//                               </Table.Th>
//                             </Table.Tr>
//                           </Table.Thead>

//                           <Table.Tbody>
//                             <Table.Tr>
//                               <Table.Td>
//                                 <Text fw={600} fz="12px" c="#111827">
//                                   11:00pm - 12:00am
//                                 </Text>
//                               </Table.Td>
//                               <Table.Td>
//                                 <Text fw={600} fz="12px" c="#111827">
//                                   12:00pm- 12:15pm{" "}
//                                 </Text>
//                               </Table.Td>
//                               <Table.Td>
//                                 <Text fw={600} fz="12px" c="#111827">
//                                   3
//                                 </Text>
//                               </Table.Td>
//                             </Table.Tr>
//                           </Table.Tbody>
//                         </Table>
//                       </Box>
//                     </Group>
//                     <Group>
//                       <Box
//                         h="130px"
//                         w="366px"
//                         style={{
//                           border: "1px solid #EDEEF0",
//                           gap: "8px",
//                           padding: "16px",
//                         }}
//                       >
//                         <Title c="#374151" fz="14px" fw={600}>
//                           Features:
//                         </Title>
//                         <Grid style={{ gap: "12px", paddingTop: "12px" }}>
//                           {features.map((features, index) => (
//                             <Grid.Col span={4} key={index}>
//                               <Group gap="4px" w="105px" h="25px">
//                                 <IconBed size={18} color="#6B7280" />
//                                 <Text c="#6B7280" fz="12px" fw={500}>
//                                   {features}
//                                 </Text>
//                               </Group>
//                             </Grid.Col>
//                           ))}
//                         </Grid>
//                       </Box>
//                       <Box
//                         h="130px"
//                         w="366px"
//                         style={{
//                           border: "1px solid #EDEEF0",
//                           gap: "8px",
//                           padding: "16px",
//                         }}
//                       >
//                         <Title c="#374151" fz="14px" fw={600}>
//                           Amenities:
//                         </Title>
//                         <Grid>
//                           {amenitiess.map((amenity, index) => (
//                             <Grid.Col span={4} key={index}>
//                               <Group gap="2px" bg="#EDF9FA" h="29px" p="2px">
//                                 <IconBed size={20} color="#046F7B" />
//                                 <Text c="#046F7B" fz="12px" fw={500}>
//                                   {amenity}
//                                 </Text>
//                               </Group>
//                             </Grid.Col>
//                           ))}
//                           <Grid.Col span={1}>
//                             <Button
//                               variant="outline"
//                               radius="2px"
//                               w="62px"
//                               h="27px"
//                               fz="12px"
//                               fw={500}
//                               p="6px"
//                               c="#6B7280"
//                               style={{
//                                 border: "1px solid #EDEEF0",
//                               }}
//                             >
//                               +4more
//                             </Button>
//                           </Grid.Col>
//                         </Grid>
//                       </Box>
//                     </Group>
//                   </Stack>
//                 </Group>
//               </Card>
//             </Paper>
//           </Tabs.Panel>
//           <Tabs.Panel value="things" pt="md">
//             <Paper bg="#F5F6F7" radius="8px" p="24px">
//               <Card bg="#FFFFFF" radius="12px" h="92px">
//                 <Title c="#201F29" fz="16px" fw={700}>
//                   Payment Method
//                 </Title>
//                 <Text c="#4B5563" fz="14px" fw={500} mt="10px">
//                   Both Card and Bank Transfer are available.
//                 </Text>
//               </Card>
//               <Card bg="#FFFFFF" radius="12px" h="112px" mt="22px">
//                 <Title c="#111827" fz="16px" fw={700}>
//                   Special Services
//                 </Title>
//                 <Grid mt="12px" style={{ gap: "16px", paddingTop: "8px" }}>
//                   {services.map((service, index) => (
//                     <Grid.Col span={2} key={index}>
//                       <Card
//                         w="137px"
//                         h="36px"
//                         p="6px"
//                         withBorder
//                         style={{ border: "1px solid #EDEEF0" }}
//                       >
//                         <Group gap="4px">
//                           <IconBed size={20} color="#374151" />
//                           <Text c="#374151" fz="12px" fw={500}>
//                             {service}
//                           </Text>
//                         </Group>
//                       </Card>
//                     </Grid.Col>
//                   ))}
//                 </Grid>
//               </Card>
//               <Card mt="22px" radius="12px" h="551px">
//                 <Title fz="16px" fw={700} c="#111827">
//                   Where you would be on the map
//                 </Title>
//                 <Image
//                   src="/image 3.png"
//                   alt="map"
//                   h="471px"
//                   w="1120px"
//                   mt="22px"
//                 />
//               </Card>
//             </Paper>
//           </Tabs.Panel>
//           <Tabs.Panel value="policies" pt="md">
//             <Paper bg="#F5F6F7" radius="8px" p="24px">
//               <Accordion
//                 defaultValue="house-rules"
//                 variant="contained"
//                 chevronPosition="right"
//                 styles={{
//                   item: {
//                     border: "none",
//                     backgroundColor: "#FFFFFF",
//                     marginBottom: "8px",
//                   },
//                   control: {
//                     fontWeight: "700",
//                     fontSize: "20px",
//                     color: "#111827",
//                   },
//                   chevron: {
//                     color: "#00A6FB",
//                   },
//                 }}
//               >
//                 <Accordion.Item value="house-rules">
//                   <Accordion.Control>
//                     <Title c="#111827" fz="20px" fw={700}>
//                       House Rules
//                     </Title>
//                   </Accordion.Control>
//                   <Accordion.Panel>
//                     <Text fz="14px" c="#46454D" fw={500}>
//                       Lorem ipsum dolor sit amet consectetur. Pellentesque
//                       pretium vestibulum orci eu. Amet ullamcorper integer
//                       convallis magna euismod orci eu eros. Ultricies sagittis
//                       ultrices tortor amet pretium blandit pharetra.
//                     </Text>
//                     <Text fz="14px" c="#46454D" fw={500}>
//                       Lorem ipsum dolor sit amet consectetur. Pellentesque
//                       pretium vestibulum orci eu. Amet ullamcorper integer
//                       convallis magna euismod orci eu eros. Ultricies sagittis
//                       ultrices tortor amet pretium.
//                     </Text>
//                     <Text fz="14px" c="#46454D" fw={500}>
//                       Lorem ipsum dolor sit amet consectetur. Pellentesque
//                       pretium vestibulum orci eu. Amet ullamcorper.
//                     </Text>
//                     <Text fz="14px" c="#46454D" fw={500}>
//                       Lorem ipsum dolor sit amet consectetur. Pellentesque
//                       pretium vestibulum orci eu. Amet ullamcorper.
//                     </Text>
//                     <Text fz="14px" c="#46454D" fw={500}>
//                       Lorem ipsum dolor sit amet consectetur. Pellentesque
//                       pretium vestibulum orci eu. Amet ullamcorper.
//                     </Text>
//                   </Accordion.Panel>
//                 </Accordion.Item>

//                 <Accordion.Item value="terms">
//                   <Accordion.Control>
//                     {" "}
//                     <Title c="#111827" fz="20px" fw={700}>
//                       Terms & Conditions{" "}
//                     </Title>
//                   </Accordion.Control>
//                   <Accordion.Panel>
//                     <Text fz="14px" c="#46454D" fw={500}>
//                       Lorem ipsum dolor sit amet consectetur. Pellentesque
//                       pretium vestibulum orci eu. Amet ullamcorper integer
//                       convallis magna euismod orci eu eros.
//                     </Text>
//                   </Accordion.Panel>
//                 </Accordion.Item>

//                 <Accordion.Item value="cancellation">
//                   <AccordionControl>
//                     <Title c="#111827" fz="20px" fw={700}>
//                       Cancellation Policy{" "}
//                     </Title>{" "}
//                   </AccordionControl>
//                   <Accordion.Panel>
//                     <Text fz="14px" c="#46454D" fw={500}>
//                       Lorem ipsum dolor sit amet consectetur. Pellentesque
//                       pretium vestibulum orci eu. Amet ullamcorper integer
//                       convallis magna euismod orci eu eros.
//                     </Text>
//                   </Accordion.Panel>
//                 </Accordion.Item>
//               </Accordion>
//             </Paper>
//           </Tabs.Panel>
//         </Tabs>
//       </Container>
//     </Container>
//   );
// }
