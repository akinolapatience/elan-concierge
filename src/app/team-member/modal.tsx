import { useState } from "react";
import { Modal, Button, TextInput, Select, Stack } from "@mantine/core";

interface AddMemberModalProps {
  opened: boolean;
  onClose: () => void;
  onAddMember: (member: {
    fullName: string;
    email: string;
    role: string;
  }) => void;
}

export function AddMemberModal({
  opened,
  onClose,
  onAddMember,
}: AddMemberModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = () => {
    if (fullName && email && role) {
      onAddMember({ fullName, email, role });
      setFullName("");
      setEmail("");
      setRole("");
      onClose();
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="50%"
      radius={0}
      centered
      title={
        <div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#000000",
              marginBottom: "12px",
            }}
          >
            Add New Team Member
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#6B7280",
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            Enter the details of the new team member.{" "}
          </div>
        </div>
      }
    >
      <Stack>
        <TextInput
          label="Full Name"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.currentTarget.value)}
          required
          mb={12}
          styles={{
            label: {
              fontSize: "14px",
              fontWeight: 500,
              color: "#1F2937",
              marginBottom: "12px",
            },
            input: {
              fontSize: "14px",
              fontWeight: "500",
              color: "#101828",
              border: "1px solid #EDEEF0",
              borderRadius: "0px",
              padding: "8px 12px",
              "::placeholder": {
                color: "#A6ADBA",
              },
            },
          }}
        />
        <TextInput
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
          mb={12}
          styles={{
            label: {
              fontSize: "14px",
              fontWeight: 500,
              color: "#1F2937",
              marginBottom: "12px",
            },
            input: {
              fontSize: "14px",
              fontWeight: "500",
              color: "#101828",
              border: "1px solid #EDEEF0",
              borderRadius: "0px",
              padding: "8px 12px",
              "::placeholder": {
                color: "#A6ADBA",
              },
            },
          }}
        />
        <Select
          label="Role"
          placeholder="Select Role"
          data={["Developer", "Designer", "Admin"]}
          value={role}
          onChange={(value) => setRole(value || "")}
          required
          mb={12}
          styles={{
            label: {
              fontSize: "14px",
              fontWeight: 500,
              color: "#1F2937",
              marginBottom: "12px",
            },
            input: {
              fontSize: "14px",
              fontWeight: "500",
              color: "#101828",
              border: "1px solid #EDEEF0",
              borderRadius: "0px",
              padding: "8px 12px",
              "::placeholder": {
                color: "#A6ADBA",
              },
            },
          }}
        />
        <Button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#2E2D3A",
            borderRadius: 0,
            height: "40px",
          }}
        >
          Add Member
        </Button>
      </Stack>
    </Modal>
  );
}
