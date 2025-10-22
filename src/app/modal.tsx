"use client";
import {
  Modal,
  Text,
  Box,
  Group,
  Button,
  Textarea,
  Divider,
  Container,
  Stack,
  Image,
  ScrollArea,
  Flex,
} from "@mantine/core";
import { useState } from "react";

interface ChatModalProps {
  opened: boolean;
  onClose: () => void;
}

const conversation = [
  {
    speaker: "Host",
    message: "Good evening! Welcome to our show. How are you feeling today?",
    timestamp: "2025-10-21T18:00:00Z",
  },
  {
    speaker: "Guest",
    message:
      "I’m doing great, thank you for having me. It’s a pleasure to be here.",
    timestamp: "2025-10-21T18:00:10Z",
  },
  {
    speaker: "Host",
    message:
      "We’re excited to have you! Let’s start by talking about your latest project. What inspired it?",
    timestamp: "2025-10-21T18:00:25Z",
  },
  {
    speaker: "Guest",
    message:
      "Well, the idea came during the lockdown. I wanted to create something that connected people even when they were apart.",
    timestamp: "2025-10-21T18:00:45Z",
  },
  {
    speaker: "Host",
    message:
      "That’s really thoughtful. What kind of challenges did you face while working on it?",
    timestamp: "2025-10-21T18:01:00Z",
  },
  {
    speaker: "Guest",
    message:
      "Honestly, coordinating remotely was tough at first. But after a while, the team adapted and it turned into a great learning experience.",
    timestamp: "2025-10-21T18:01:20Z",
  },
  {
    speaker: "Host",
    message: "That’s inspiring. And what’s next for you after this project?",
    timestamp: "2025-10-21T18:01:40Z",
  },
  {
    speaker: "Guest",
    message:
      "I’m planning to take a short break, then start working on a documentary. It’s something I’ve wanted to do for a while.",
    timestamp: "2025-10-21T18:02:00Z",
  },
  {
    speaker: "Host",
    message:
      "Sounds exciting! We’ll definitely be looking forward to it. Thanks so much for joining us today.",
    timestamp: "2025-10-21T18:02:20Z",
  },
  {
    speaker: "Guest",
    message: "Thank you for having me. It’s been wonderful talking with you.",
    timestamp: "2025-10-21T18:02:35Z",
  },
];

export default function ChatModal({ opened, onClose }: ChatModalProps) {
  const [message, setMessage] = useState("");

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="lg"
      withCloseButton
      title={
        <Text fw={600} fz="24px" c="#000000">
          Chat with Host
        </Text>
      }
      styles={{
        header: { borderBottom: "1px solid #e0e0e0", paddingBottom: 10 },
      }}
    >
      <Container
        style={{
          border: "1px solid #E0E0E0",
          background: "#F5F6F7",
          marginBottom: 0,
        }}
      >
        <ScrollArea
          h="230px"
          style={{
            flex: 1,
            padding: "16px",
            marginBottom: "70px",
          }}
        >
          <Stack gap="40px">
            {conversation.map((chat, index) => {
              const isHost = chat.speaker === "Host";

              return (
                <Flex
                  direction={isHost ? "row" : "row-reverse"}
                  key={index}
                  w="100%"
                >
                  <Box w={isHost ? "80%" : "60%"}>
                    <Box
                      bg={isHost ? "#FFFFFF" : "#D1ECF0"}
                      p="14px"
                      style={{
                        borderRadius: 4,
                      }}
                    >
                      <Text fz="14px" fw={500} c="#000000">
                        {chat.message}
                      </Text>
                    </Box>

                    <Text fz="10px" fw={500} c="#6B7280" mt={5}>
                      {chat.speaker} ·{" "}
                      {new Date(chat.timestamp).toLocaleTimeString()}
                    </Text>
                  </Box>
                </Flex>
              );
            })}
          </Stack>
        </ScrollArea>
        <Divider my="md" />
        <Box ta="center" mb={10}>
          <Text fz="14px" fw={500} c="#6B7280" mb={8}>
            Quick Messages:
          </Text>
          <Group gap="12px" justify="center">
            <Button
              variant="outline"
              fz="14px"
              fw={500}
              radius="100px"
              c="#16909C"
              style={{
                borderColor: "#8FD5DB",
              }}
            >
              Check in time
            </Button>
            <Button
              variant="outline"
              fz="14px"
              fw={500}
              radius="100px"
              c="#16909C"
              style={{
                borderColor: "#8FD5DB",
              }}
            >
              Parking Info
            </Button>
            <Button
              variant="outline"
              fz="14px"
              fw={500}
              radius="100px"
              c="#16909C"
              style={{
                borderColor: "#8FD5DB",
              }}
            >
              Key Pickup
            </Button>
          </Group>
        </Box>
      </Container>

      <Group gap={12} w="100%" mt={16}>
        <Textarea
          placeholder="Reply..."
          style={{ flex: 1 }}
          autosize
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          styles={{
            input: {
              borderColor: "#F2F4F7",
              backgroundColor: "#F9FAFB",
              borderRadius: "4px",
            },
          }}
        />

        <Button
          radius="100px"
          size="35"
          bg="#046F7B"
          onClick={() => {
            console.log("Message Sent:", message);
            setMessage("");
          }}
        >
          <Image
            src="/Vector (2).png"
            alt="Send icon"
            width={20}
            height={20}
            c="#FFFFFF"
          />
        </Button>
      </Group>
    </Modal>
  );
}
