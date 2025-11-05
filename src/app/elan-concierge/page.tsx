"use client";
// import { useState } from "react";
// import {
//   Container,
//   Box,
//   Title,
//   Stack,
//   Image,
//   Button,
//   Card,
//   Group,
//   Text,
//   Flex,
//   Divider,
// } from "@mantine/core";
// import { ClockHour4, Check } from "tabler-icons-react";
// import MessageModal from "./modal";
// import { IconCircleFilled } from "@tabler/icons-react";

// interface Steps {
//   icon: "ClockHour4";
//   title: string;
//   description: string;
//   status: "completed" | "in-progress" | "pending";
//   dateTime?: string;
// }

// const steps: Steps[] = [
//   {
//     icon: "ClockHour4",
//     title: "Booking",
//     description: "You've placed your booking request.",
//     status: "completed",
//     dateTime: "12 Sept 2025, 11:20 AM",
//   },
//   {
//     icon: "ClockHour4",
//     title: "Acceptance",
//     description: "Your booking has been accepted by the host.",
//     status: "in-progress",
//     dateTime: "12 Sept 2025, 11:20 AM",
//   },
//   {
//     icon: "ClockHour4",
//     title: "Payment",
//     description: "You've agreed to the house rules.",
//     status: "pending",
//   },
//   {
//     icon: "ClockHour4",
//     title: "House Rules",
//     description: "You've agreed to the house rules.",
//     status: "pending",
//   },
//   {
//     icon: "ClockHour4",
//     title: "Verification",
//     description: "You're verifying your identity to keep the stay safe",
//     status: "pending",
//   },
//   {
//     icon: "ClockHour4",
//     title: "Insurance & Protection",
//     description: "Your booking will be covered with insurance and protection.",
//     status: "pending",
//   },
//   {
//     icon: "ClockHour4",
//     title: "Check-in",
//     description: "You'll check in to the property.",
//     status: "pending",
//   },
//   {
//     icon: "ClockHour4",
//     title: "Inspection (Arrival)",
//     description: "The property will be inspected at check-in.",
//     status: "pending",
//   },
//   {
//     icon: "ClockHour4",
//     title: "Checkout",
//     description: "You'll check out of the property.",
//     status: "pending",
//   },
//   {
//     icon: "ClockHour4",
//     title: "Inspection (Departure)",
//     description: "The property will be inspected after checkout.",
//     status: "pending",
//   },
// ];

// export default function EmptyState() {
//   const [opened, setOpened] = useState(false);
//   return (
//     <Container
//       w="1010px"
//       top="164px"
//       left="251px"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <Box
//         h="124px"
//         w="1010px"
//         bg="#16909C"
//         style={{
//           gap: "8px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "28px 20px",
//         }}
//       >
//         <Title order={1} fz="32px" fw={700} c="#FFFFFF" fs="bold">
//           Your Booking Journey
//         </Title>
//         <Title order={6} fz="16px" fw="500" c="#FFFFFF" fs="medium">
//           Track every step of your stay
//         </Title>
//       </Box>
//       <Container>
//         <Stack
//           w="930px"
//           gap="24px"
//           pt="12px"
//           pr="12px"
//           pb="24px"
//           pl="12px"
//           bg="#F5F6F799"
//           style={{
//             gap: "24px",
//             alignItems: "center",
//             marginTop: "50px",
//           }}
//         >
//           <Image
//             radius="1.88px"
//             w="906px"
//             h="313px"
//             src="/image.png"
//             alt="logo"
//           />
//           <Title order={2} fw={700} fz="28px" c="#000000">
//             The Purple Home
//           </Title>
//           <Title order={4} fw={600} fz="20px" c="#6B7280">
//             ID: 234567898764
//           </Title>
//           <Button
//             fw={500}
//             fz={12}
//             radius={0}
//             h={40}
//             w={194}
//             color="#2E2D3A"
//             onClick={() => setOpened(true)}
//           >
//             Message Host
//           </Button>
//         </Stack>
//         <Stack mt={24}>
//           {steps.map((step, index) => (
//             <Flex gap={16}>
//               <Stack justify="center" align="center">
//                 <IconCircleFilled color="#EAECF0" size={24} />

//                 <Divider
//                   orientation="vertical"
//                   color="black"
//                   h="100%"
//                   mx="auto"
//                   style={{
//                     border: "2px solid #EDEEF0",
//                   }}
//                 />
//               </Stack>

//               <Card
//                 key={index}
//                 flex={1}
//                 withBorder
//                 style={{
//                   padding: "10px",
//                   backgroundColor:
//                     step.status === "completed"
//                       ? index === 0
//                         ? "#ECFDF5"
//                         : "#A7F3D0"
//                       : step.status === "in-progress"
//                         ? "#FFFFFF"
//                         : "#fff",
//                   border:
//                     step.status === "completed"
//                       ? "1px solid #A7F3D0"
//                       : step.status === "in-progress"
//                         ? "1px solid #EDEEF0"
//                         : step.status === "pending"
//                           ? "1px solid #F5F6F7"
//                           : undefined,
//                 }}
//               >
//                 <Group>
//                   {(() => {
//                     if (step.status === "completed") {
//                       return (
//                         <Box
//                           style={{
//                             backgroundColor: "#16A34A",
//                             padding: "6px",
//                             borderRadius: "50%",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <Check color="#FFFFFF" size={24} />
//                         </Box>
//                       );
//                     }
//                     if (step.status === "in-progress") {
//                       return (
//                         <Box
//                           style={{
//                             backgroundColor: "#D1ECF0",
//                             padding: "6px",
//                             borderRadius: "50%",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <ClockHour4 color="#26A5B0" size={24} />
//                         </Box>
//                       );
//                     }
//                     return (
//                       <Box
//                         style={{
//                           backgroundColor: "#EAECF0",
//                           padding: "6px",
//                           borderRadius: "50%",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <ClockHour4 color="#A6ADBA" size={24} />
//                       </Box>
//                     );
//                   })()}
//                   <Stack gap="4px">
//                     <Text
//                       fw={700}
//                       c={
//                         step.status === "completed"
//                           ? "#16A34A"
//                           : step.status === "in-progress"
//                             ? "#1F2937"
//                             : step.status === "pending"
//                               ? "#6B7280"
//                               : undefined
//                       }
//                     >
//                       {step.title}
//                       {step.status === "in-progress" && (
//                         <Text
//                           component="span"
//                           fw={500}
//                           fz="10px"
//                           style={{
//                             backgroundColor: "#E1F2F4",
//                             color: "#26A5B0",
//                             padding: "2px 6px",
//                             borderRadius: "60px",
//                             marginLeft: "8px",
//                           }}
//                         >
//                           You are here
//                         </Text>
//                       )}
//                     </Text>
//                     <Text fz="12px" fw={600} c="#6B7280">
//                       {step.description}
//                     </Text>
//                     {step.status === "pending" && (
//                       <Text fz="10px" fw={400} c="#6B7280">
//                         Pending
//                       </Text>
//                     )}
//                     {step.dateTime && (
//                       <Text fz="10px" c="#6B7280" fw={500}>
//                         {step.dateTime}
//                       </Text>
//                     )}
//                   </Stack>
//                 </Group>
//               </Card>
//             </Flex>
//           ))}
//         </Stack>
//       </Container>
//       <MessageModal opened={opened} onClose={() => setOpened(false)} />
//     </Container>
//   );
// }
