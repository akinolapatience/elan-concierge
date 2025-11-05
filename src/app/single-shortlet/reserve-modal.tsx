// "use client";

// import {
//   Modal,
//   TextInput,
//   Group,
//   Button,
//   Stack,
//   Text,
//   Divider,
//   Paper,
//   Box,
//   Title,
//   ActionIcon,
//   Alert,
// } from "@mantine/core";
// import { IconMinus, IconPlus, IconInfoCircle } from "@tabler/icons-react";
// import { useState } from "react";

// interface GuestCounts {
//   adults: number;
//   children: number;
//   infants: number;
// }

// interface PersonalDetails {
//   name: string;
//   email: string;
//   phone: string;
// }

// export default function BookingModal() {
//   const [opened, setOpened] = useState(true);
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState<GuestCounts>({
//     adults: 1,
//     children: 0,
//     infants: 0,
//   });
//   const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const pricePerNight = 20000;

//   const updateGuestCount = (type: keyof GuestCounts, increment: boolean) => {
//     setGuests((prev) => {
//       const currentValue = prev[type];
//       const minValue = type === "adults" ? 1 : 0;
//       const newValue = increment
//         ? currentValue + 1
//         : Math.max(minValue, currentValue - 1);
//       return { ...prev, [type]: newValue };
//     });
//   };

//   const handleReserve = () => {
//     console.log("Reservation details:", {
//       checkIn,
//       checkOut,
//       guests,
//       personalDetails,
//       price: pricePerNight,
//     });
//     alert("Reservation submitted!");
//   };

//   const isFormValid =
//     checkIn &&
//     checkOut &&
//     personalDetails.name &&
//     personalDetails.email &&
//     personalDetails.phone;

//   function GuestCounter({
//     label,
//     description,
//     value,
//     type,
//   }: {
//     label: string;
//     description: string;
//     value: number;
//     type: keyof GuestCounts;
//   }) {
//     return (
//       <Group justify="space-between" py="sm">
//         <Box>
//           <Text fw={500} fz="sm">
//             {label}
//           </Text>
//           <Text fz="xs" c="dimmed">
//             {description}
//           </Text>
//         </Box>
//         <Group gap="xs">
//           <ActionIcon
//             variant="outline"
//             color="gray"
//             onClick={() => updateGuestCount(type, false)}
//             disabled={type === "adults" ? value <= 1 : value <= 0}
//           >
//             <IconMinus size={14} />
//           </ActionIcon>
//           <Text w={24} ta="center" fz="sm">
//             {value}
//           </Text>
//           <ActionIcon
//             variant="outline"
//             color="gray"
//             onClick={() => updateGuestCount(type, true)}
//           >
//             <IconPlus size={14} />
//           </ActionIcon>
//         </Group>
//       </Group>
//     );
//   }

//   return (
//     <Modal
//       opened={opened}
//       onClose={() => setOpened(false)}
//       title={<Title order={4}>Book Unit</Title>}
//       centered
//       size="lg"
//       overlayProps={{
//         backgroundOpacity: 0.55,
//         blur: 3,
//       }}
//     >
//       <Stack gap="lg">
//         {/* Price Section */}
//         <Box>
//           <Text fz="xs" c="dimmed">
//             Price
//           </Text>
//           <Text fz="xl" fw={600} c="blue.6">
//             NGN {pricePerNight.toLocaleString()}{" "}
//             <Text span fz="sm" c="dimmed" fw={400}>
//               per night
//             </Text>
//           </Text>
//         </Box>

//         <Divider />

//         {/* Booking Details */}
//         <Stack>
//           <Text fw={500}>Booking Details:</Text>
//           <TextInput
//             label={
//               <>
//                 Check In{" "}
//                 <Text span c="red">
//                   *
//                 </Text>
//               </>
//             }
//             type="date"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.currentTarget.value)}
//             min={new Date().toISOString().split("T")[0]}
//           />
//           <TextInput
//             label={
//               <>
//                 Check Out{" "}
//                 <Text span c="red">
//                   *
//                 </Text>
//               </>
//             }
//             type="date"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.currentTarget.value)}
//             min={checkIn || new Date().toISOString().split("T")[0]}
//           />
//         </Stack>

//         {/* Guest Section */}
//         <Box>
//           <Text fw={500} mb={4}>
//             Guest{" "}
//             <Text span c="red">
//               *
//             </Text>
//           </Text>
//           <Paper withBorder p="sm" radius="md">
//             <GuestCounter
//               label="Adults"
//               description="18 and above (over Age 17)"
//               value={guests.adults}
//               type="adults"
//             />
//             <Divider />
//             <GuestCounter
//               label="Children"
//               description="Ages 0 - 17 (between aged 2 - 12)"
//               value={guests.children}
//               type="children"
//             />
//             <Divider />
//             <GuestCounter
//               label="Infants"
//               description="Under aged 2"
//               value={guests.infants}
//               type="infants"
//             />
//           </Paper>
//           <Text fz="xs" c="dimmed" mt="xs">
//             This property allows a maximum of 6 guests, not including children
//             and infants.
//           </Text>
//         </Box>

//         {/* Personal Details */}
//         <Box>
//           <Text fw={500} mb={4}>
//             Personal Details:
//           </Text>
//           <Stack gap="sm">
//             <TextInput
//               label={
//                 <>
//                   Name{" "}
//                   <Text span c="red">
//                     *
//                   </Text>
//                 </>
//               }
//               placeholder="Enter Name"
//               value={personalDetails.name}
//               onChange={(e) =>
//                 setPersonalDetails((prev) => ({
//                   ...prev,
//                   name: e.currentTarget.value,
//                 }))
//               }
//             />
//             <TextInput
//               label={
//                 <>
//                   Email{" "}
//                   <Text span c="red">
//                     *
//                   </Text>
//                 </>
//               }
//               type="email"
//               placeholder="Enter Email"
//               value={personalDetails.email}
//               onChange={(e) =>
//                 setPersonalDetails((prev) => ({
//                   ...prev,
//                   email: e.currentTarget.value,
//                 }))
//               }
//             />
//             <TextInput
//               label={
//                 <>
//                   Phone Number{" "}
//                   <Text span c="red">
//                     *
//                   </Text>
//                 </>
//               }
//               type="tel"
//               placeholder="Enter Phone Number"
//               value={personalDetails.phone}
//               onChange={(e) =>
//                 setPersonalDetails((prev) => ({
//                   ...prev,
//                   phone: e.currentTarget.value,
//                 }))
//               }
//             />
//           </Stack>
//         </Box>

//         {/* Info Alert */}
//         <Alert
//           icon={<IconInfoCircle size={16} />}
//           title="Verification Required"
//           color="blue"
//           variant="light"
//         >
//           Please note that verification is required for this booking.
//         </Alert>

//         {/* Reserve Button */}
//         <Button
//           fullWidth
//           size="md"
//           color="dark"
//           onClick={handleReserve}
//           disabled={!isFormValid}
//         >
//           Reserve
//         </Button>
//       </Stack>
//     </Modal>
//   );
// }
