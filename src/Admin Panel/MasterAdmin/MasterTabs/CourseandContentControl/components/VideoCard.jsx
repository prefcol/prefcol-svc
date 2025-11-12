

import { useState } from "react"
import {
  Box,
  Image,
  Heading,
  Text,
  Badge,
  HStack,
  IconButton,
  Divider,
  Tooltip,
  useColorModeValue,
  Card,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react"
import { ViewIcon, EditIcon, CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons"
import { formatDuration, formatDate } from "../components/utils/formatters"

function VideoCard({ video, onView, onEdit, onApprove, onReject, onDelete }) {
  const [isHovered, setIsHovered] = useState(false)

  const borderColor = useColorModeValue("gray.200", "gray.700")
  const bgColor = useColorModeValue("white", "gray.800")

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
    <Card maxW="sm" borderWidth="1px" borderColor={borderColor} bg={bgColor} overflow="hidden">
      <Box position="relative">
        <Image
          src={video.thumbnailUrl || "https://via.placeholder.com/300x200?text=Video"}
          alt={video.title}
          objectFit="cover"
          height="180px"
          width="100%"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <Badge
          position="absolute"
          top={2}
          right={2}
          colorScheme={getStatusColor(video.status)}
          px={2}
          py={1}
          borderRadius="md"
        >
          {video.status}
        </Badge>
        <Badge
          position="absolute"
          bottom={2}
          right={2}
          colorScheme="blackAlpha"
          px={2}
          py={1}
          borderRadius="md"
          bg="rgba(0, 0, 0, 0.7)"
        >
          {formatDuration(video.duration)}
        </Badge>
        {isHovered && (
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0, 0, 0, 0.3)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="opacity 0.2s"
            opacity={isHovered ? 1 : 0}
          >
            <IconButton
              aria-label="Play video"
              icon={<ViewIcon />}
              size="lg"
              colorScheme="teal"
              onClick={onView}
              borderRadius="full"
            />
          </Box>
        )}
      </Box>

      <CardBody>
        <Stack spacing={2}>
          <Heading size="md" noOfLines={2}>
            {video.title}
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Uploaded on {formatDate(video.uploadDate)}
          </Text>
          <HStack>
            <Badge colorScheme="blue">{video.category}</Badge>
            {video.tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} colorScheme="purple">
                {tag}
              </Badge>
            ))}
            {video.tags.length > 2 && <Badge colorScheme="gray">+{video.tags.length - 2}</Badge>}
          </HStack>
          <Text noOfLines={2} fontSize="sm">
            {video.description || "No description provided"}
          </Text>
        </Stack>
      </CardBody>

      <Divider />

      <CardFooter>
        <HStack spacing={2} width="100%" justifyContent="space-between">
          <Tooltip label="View">
            <IconButton icon={<ViewIcon />} size="sm" colorScheme="blue" onClick={onView} aria-label="View video" />
          </Tooltip>
          <Tooltip label="Edit">
            <IconButton icon={<EditIcon />} size="sm" colorScheme="gray" onClick={onEdit} aria-label="Edit video" />
          </Tooltip>
          <Tooltip label="Approve">
            <IconButton
              icon={<CheckIcon />}
              size="sm"
              colorScheme="green"
              isDisabled={video.status === "Approved"}
              onClick={onApprove}
              aria-label="Approve video"
            />
          </Tooltip>
          <Tooltip label="Reject">
            <IconButton
              icon={<CloseIcon />}
              size="sm"
              colorScheme="red"
              isDisabled={video.status === "Rejected"}
              onClick={onReject}
              aria-label="Reject video"
            />
          </Tooltip>
          <Tooltip label="Delete">
            <IconButton
              icon={<DeleteIcon />}
              size="sm"
              colorScheme="red"
              variant="outline"
              onClick={onDelete}
              aria-label="Delete video"
            />
          </Tooltip>
        </HStack>
      </CardFooter>
    </Card>
  )
}

export default VideoCard

