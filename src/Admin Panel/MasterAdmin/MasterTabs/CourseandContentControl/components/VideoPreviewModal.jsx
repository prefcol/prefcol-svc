
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Heading,
  Text,
  Badge,
  Flex,
} from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import VideoPlayer from "./VideoPlayer"
import { formatDuration, formatFileSize } from  "../components/utils/formatters"

function VideoPreviewModal({ isOpen, onClose, video, onEdit }) {
  if (!video) return null

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "green"
      case "Rejected":
        return "red"
      case "Pending":
        return "yellow"
      default:
        return "gray"
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{video.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="stretch">
            <VideoPlayer videoUrl={video.videoUrl} />

            <VStack align="start" spacing={2}>
              <Heading size="md">{video.title}</Heading>
              <Flex gap={2} mb={2} flexWrap="wrap">
                <Badge colorScheme={getStatusColor(video.status)}>{video.status}</Badge>
                <Badge colorScheme="blue">{video.category}</Badge>
                <Badge colorScheme="purple">{formatDuration(video.duration)}</Badge>
                <Badge colorScheme="gray">{formatFileSize(video.size)}</Badge>
              </Flex>
              <Text>{video.description}</Text>

              <Flex mt={3} wrap="wrap" gap={2}>
                {video.tags.map((tag, index) => (
                  <Badge key={index} size="sm" colorScheme="teal">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </VStack>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="teal" leftIcon={<EditIcon />} onClick={onEdit}>
            Edit Details
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default VideoPreviewModal

