import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useToast,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spinner,
  Flex,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash, FaVideo, FaLink } from "react-icons/fa";
import {
  getMyClasses,
  createClass,
  updateClass,
  deleteClass,
} from "../api/teacherApi";

const BATCH_OPTIONS = ["ONLINE", "OFFLINE", "HYBRID"];
const STATUS_OPTIONS = ["SCHEDULED", "COMPLETED", "CANCELLED"];

function formatTime(t) {
  if (!t) return "—";
  if (typeof t === "string") return t.slice(0, 5);
  return t;
}

export default function ClassManagement() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const [form, setForm] = useState({
    title: "",
    description: "",
    meetingLink: "",
    recordedSessionUrl: "",
    batchType: "ONLINE",
    status: "SCHEDULED",
    scheduledDate: "",
    startTime: "",
    endTime: "",
  });

  const load = async () => {
    setLoading(true);
    try {
      const data = await getMyClasses();
      setClasses(Array.isArray(data) ? data : []);
    } catch (e) {
      toast({ status: "error", title: "Failed to load classes" });
      setClasses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setEditingId(null);
    setForm({
      title: "",
      description: "",
      meetingLink: "",
      recordedSessionUrl: "",
      batchType: "ONLINE",
      status: "SCHEDULED",
      scheduledDate: "",
      startTime: "",
      endTime: "",
    });
    onOpen();
  };

  const openEdit = (c) => {
    setEditingId(c.id);
    setForm({
      title: c.title || "",
      description: c.description || "",
      meetingLink: c.meetingLink || "",
      recordedSessionUrl: c.recordedSessionUrl || "",
      batchType: c.batchType || "ONLINE",
      status: c.status || "SCHEDULED",
      scheduledDate: c.scheduledDate ? c.scheduledDate.toString().slice(0, 10) : "",
      startTime: c.startTime ? c.startTime.toString().slice(0, 5) : "",
      endTime: c.endTime ? c.endTime.toString().slice(0, 5) : "",
    });
    onOpen();
  };

  const handleSubmit = async () => {
    if (!form.title.trim()) {
      toast({ status: "warning", title: "Title is required" });
      return;
    }
    setSaving(true);
    try {
      const body = {
        title: form.title.trim(),
        description: form.description || null,
        meetingLink: form.meetingLink || null,
        recordedSessionUrl: form.recordedSessionUrl || null,
        batchType: form.batchType,
        status: form.status,
        scheduledDate: form.scheduledDate || null,
        startTime: form.startTime || null,
        endTime: form.endTime || null,
      };
      if (editingId) {
        await updateClass(editingId, body);
        toast({ status: "success", title: "Class updated" });
      } else {
        await createClass(body);
        toast({ status: "success", title: "Class created" });
      }
      onClose();
      load();
    } catch (e) {
      toast({ status: "error", title: editingId ? "Update failed" : "Create failed" });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this class?")) return;
    try {
      await deleteClass(id);
      toast({ status: "success", title: "Class deleted" });
      load();
    } catch (e) {
      toast({ status: "error", title: "Delete failed" });
    }
  };

  if (loading) {
    return (
      <Flex minH="50vh" align="center" justify="center">
        <Spinner size="xl" color="teal.500" />
      </Flex>
    );
  }

  return (
    <Box>
      <Heading size="lg" mb={2} color="teal.600">
        Class Management
      </Heading>
      <Text color="gray.600" mb={6}>
        Create and manage your classes, meeting links, and recorded sessions.
      </Text>

      <Button leftIcon={<FaPlus />} colorScheme="teal" mb={4} onClick={openCreate}>
        Add Class
      </Button>

      <Box bg={cardBg} borderRadius="md" border="1px" borderColor={borderColor} overflowX="auto">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Batch</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Status</Th>
              <Th>Meeting</Th>
              <Th>Recording</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {classes.length === 0 ? (
              <Tr>
                <Td colSpan={8} textAlign="center" py={8} color="gray.500">
                  No classes yet. Add one to get started.
                </Td>
              </Tr>
            ) : (
              classes.map((c) => (
                <Tr key={c.id}>
                  <Td fontWeight="medium">{c.title}</Td>
                  <Td>
                    <Badge colorScheme="blue" variant="outline">{c.batchType}</Badge>
                  </Td>
                  <Td>{c.scheduledDate || "—"}</Td>
                  <Td>{formatTime(c.startTime)} – {formatTime(c.endTime)}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        c.status === "COMPLETED" ? "green" : c.status === "CANCELLED" ? "red" : "orange"
                      }
                    >
                      {c.status}
                    </Badge>
                  </Td>
                  <Td>
                    {c.meetingLink ? (
                      <Link href={c.meetingLink} isExternal colorScheme="teal" fontSize="sm">
                        <FaLink /> Join
                      </Link>
                    ) : "—"}
                  </Td>
                  <Td>
                    {c.recordedSessionUrl ? (
                      <Link href={c.recordedSessionUrl} isExternal colorScheme="teal" fontSize="sm">
                        <FaVideo /> Watch
                      </Link>
                    ) : "—"}
                  </Td>
                  <Td>
                    <IconButton
                      aria-label="Edit"
                      icon={<FaEdit />}
                      size="sm"
                      variant="ghost"
                      colorScheme="teal"
                      onClick={() => openEdit(c)}
                    />
                    <IconButton
                      aria-label="Delete"
                      icon={<FaTrash />}
                      size="sm"
                      variant="ghost"
                      colorScheme="red"
                      onClick={() => handleDelete(c.id)}
                    />
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editingId ? "Edit Class" : "Add Class"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired mb={3}>
              <FormLabel>Title</FormLabel>
              <Input
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="e.g. Algebra – Week 3"
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Description</FormLabel>
              <Input
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                placeholder="Optional"
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Meeting link (Zoom/Meet)</FormLabel>
              <Input
                value={form.meetingLink}
                onChange={(e) => setForm((f) => ({ ...f, meetingLink: e.target.value }))}
                placeholder="https://..."
              />
            </FormControl>
            <FormControl mb={3}>
              <FormLabel>Recorded session URL</FormLabel>
              <Input
                value={form.recordedSessionUrl}
                onChange={(e) => setForm((f) => ({ ...f, recordedSessionUrl: e.target.value }))}
                placeholder="https://..."
              />
            </FormControl>
            <Flex gap={3} mb={3}>
              <FormControl>
                <FormLabel>Batch type</FormLabel>
                <Select
                  value={form.batchType}
                  onChange={(e) => setForm((f) => ({ ...f, batchType: e.target.value }))}
                >
                  {BATCH_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select
                  value={form.status}
                  onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
                >
                  {STATUS_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </Select>
              </FormControl>
            </Flex>
            <FormControl mb={3}>
              <FormLabel>Scheduled date</FormLabel>
              <Input
                type="date"
                value={form.scheduledDate}
                onChange={(e) => setForm((f) => ({ ...f, scheduledDate: e.target.value }))}
              />
            </FormControl>
            <Flex gap={3}>
              <FormControl>
                <FormLabel>Start time</FormLabel>
                <Input
                  type="time"
                  value={form.startTime}
                  onChange={(e) => setForm((f) => ({ ...f, startTime: e.target.value }))}
                />
              </FormControl>
              <FormControl>
                <FormLabel>End time</FormLabel>
                <Input
                  type="time"
                  value={form.endTime}
                  onChange={(e) => setForm((f) => ({ ...f, endTime: e.target.value }))}
                />
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>Cancel</Button>
            <Button colorScheme="teal" onClick={handleSubmit} isLoading={saving}>
              {editingId ? "Update" : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
