"use client";
import { useState } from "react";
import {
  Card,
  Text,
  Group,
  Button,
  Checkbox,
  SimpleGrid,
  Stack,
  Container,
} from "@mantine/core";
import { IconMail, IconBriefcase2, IconPlus } from "@tabler/icons-react";
import { AddMemberModal } from "@/app/team-member/modal";

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
}

const members: TeamMember[] = [
  {
    id: 1,
    name: "Gabriell Anyiam",
    email: "gabriellanyiam@gmail.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Gabriell Anyiam",
    email: "gabriellanyiam@gmail.com",
    role: "Admin",
  },
  {
    id: 3,
    name: "Gabriell Anyiam",
    email: "gabriellanyiam@gmail.com",
    role: "Admin",
  },
];

export default function SelectTeamMember() {
  const [selected, setSelected] = useState<number | null>(null);
  const [opened, setOpened] = useState(false);

  const handleAddMember = (member: {
    fullName: string;
    email: string;
    role: string;
  }) => {
    console.log("New member added:", member);
  };

  return (
    <Container
      style={{
        border: "1px solid #E9E9EA",
        borderRadius: 8,
        padding: "2rem",
        margin: "40px auto",
      }}
    >
      <Stack>
        <img
          src="/Whisk_08f9d0dc9d8881abfdd4b01b2caa15d0dr 1 (1).png"
          alt="Team Icon"
          width={120}
          height={78}
          style={{ objectFit: "contain" }}
        />
        <Text fz="24px" fw={600} c="#1F2937">
          Select from Existing Team Member
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          {members.map((member) => (
            <Card
              key={member.id}
              withBorder
              radius="2px"
              onClick={() => setSelected(member.id)}
              style={{
                borderColor: selected === member.id ? "#EDEEF0" : "#EDEEF0",
              }}
            >
              <Group justify="flex-start">
                <Checkbox
                  radius={1}
                  w={24}
                  h={24}
                  pb="40px"
                  color="#046F7B"
                  style={{
                    cursor: "pointer",
                    borderColor: "#EAECF0",
                  }}
                  checked={selected === member.id}
                  onChange={() => setSelected(member.id)}
                />
                <div>
                  <Text fw={600} c="#111827" fz="16px">
                    {member.name}
                  </Text>
                  <Group gap={5} mt={4}>
                    <IconMail width={16} height={16} color="#6B7280" />
                    <Text fz="12px" fw={500} c="#6B7280">
                      {member.email}
                    </Text>
                  </Group>
                  <Group gap={5} mt={2}>
                    <IconBriefcase2 width={16} height={16} color="#6B7280" />
                    <Text fz="12px" fw={500} c="#6B7280">
                      {member.role}
                    </Text>
                  </Group>
                </div>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
        <Button
          w="190px"
          h="40px"
          radius={0}
          variant="outline"
          leftSection={<IconPlus size={16} color="#374151" />}
          onClick={() => setOpened(true)}
          styles={{
            root: {
              border: "1px solid #EAECF0",
              color: "#374151",
              fontSize: "14px",
              fontWeight: 500,
              paddingLeft: "16px",
              gap: "10px",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            },
            section: {
              marginRight: "8px",
            },
          }}
        >
          Add New Member
        </Button>
        <AddMemberModal
          opened={opened}
          onClose={() => setOpened(false)}
          onAddMember={handleAddMember}
        />

        <Group justify="space-between" mt="lg">
          <Button
            disabled={!selected}
            variant="outline"
            style={{
              borderRadius: "0px",
              borderColor: selected ? "#2E2D3A" : "#A6ADBA",
              color: selected ? "#2E2D3A" : "#A6ADBA",
              backgroundColor: "transparent",
              "&[data-disabled]": {
                opacity: 0.5,
                cursor: "not-allowed",
              },
            }}
          >
            Previous
          </Button>
          <Group>
            <Button
              disabled={!selected}
              style={{
                borderRadius: "0px",
                color: selected ? "#2E2D3A" : "#A6ADBA",
                backgroundColor: "#F9FAFB",
                "&[data-disabled]": {
                  opacity: 0.5,
                  cursor: "not-allowed",
                },
              }}
            >
              Save and Continue Later
            </Button>
            <Button
              disabled={!selected}
              style={{
                borderRadius: "0px",
                color: selected ? "#FFFFFF" : "#FFFFFF",
                backgroundColor: selected ? "#0D818D" : "#6FBEC4",
                "&[data-disabled]": {
                  opacity: 0.5,
                  cursor: "not-allowed",
                },
              }}
            >
              Submit
            </Button>
          </Group>
        </Group>
      </Stack>
    </Container>
  );
}
