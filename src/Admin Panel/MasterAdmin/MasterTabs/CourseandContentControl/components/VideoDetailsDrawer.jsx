

import { useState, useEffect } from "react"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Select,
  HStack,
  Box,
  Text,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
  Badge,
  Divider,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react"
import { formatDuration, formatDate, formatFileSize } from  "../components/utils/formatters"

function VideoDetailsDrawer({ isOpen, onClose, video, categories, onSave }) {
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    category: "",
    tags: [],
  })
  const [newTag, setNewTag] = useState("")
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (video) {
      setVideoDetails({
        title: video.title,
        description: video.description || "",
        category: video.category,
        tags: [...video.tags],
      })
    }
  }, [video])

  const handleAddTag = () => {
    if (newTag && !videoDetails.tags.includes(newTag)) {
      setVideoDetails({
        ...videoDetails,
        tags: [...videoDetails.tags, newTag],
      })
      setNewTag("")
    }
  }

  const handleRemoveTag = (tag) => {
    setVideoDetails({
      ...videoDetails,
      tags: videoDetails.tags.filter((t) => t !== tag),
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!videoDetails.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!videoDetails.category) {
      newErrors.category = "Please select a category"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = () => {
    if (!video || !validateForm()) return

    onSave(video.id, videoDetails)
  }

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
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Video Details</DrawerHeader>

        <DrawerBody>
          {video && (
            <VStack spacing={4} align="stretch">
              <Box>
                <img
                  src={video.thumbnailUrl || "https://via.placeholder.com/300x200?text=Video"}
                  alt={video.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <FormControl isInvalid={!!errors.title}>
                <FormLabel>Video Title</FormLabel>
                <Input
                  value={videoDetails.title}
                  onChange={(e) => setVideoDetails({ ...videoDetails, title: e.target.value })}
                />
                {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
              </FormControl>

              <FormControl isInvalid={!!errors.category}>
                <FormLabel>Category</FormLabel>
                <Select
                  value={videoDetails.category}
                  onChange={(e) => setVideoDetails({ ...videoDetails, category: e.target.value })}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </Select>
                {errors.category && <FormErrorMessage>{errors.category}</FormErrorMessage>}
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Enter video description"
                  value={videoDetails.description}
                  onChange={(e) => setVideoDetails({ ...videoDetails, description: e.target.value })}
                  rows={4}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Tags</FormLabel>
                <HStack>
                  <Input
                    placeholder="Add a tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handleAddTag()
                      }
                    }}
                  />
                  <Button onClick={handleAddTag} isDisabled={!newTag}>
                    Add
                  </Button>
                </HStack>

                <Flex wrap="wrap" gap={2} mt={2}>
                  {videoDetails.tags.map((tag, index) => (
                    <Tag key={index} size="md" borderRadius="full" variant="solid" colorScheme="blue">
                      <TagLabel>{tag}</TagLabel>
                      <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                    </Tag>
                  ))}
                </Flex>
              </FormControl>

              <Divider my={2} />

              <Box>
                <Text fontWeight="bold">Status:</Text>
                <Badge colorScheme={getStatusColor(video.status)} p={1} borderRadius="md" mt={1}>
                  {video.status}
                </Badge>
              </Box>

              <HStack spacing={6}>
                <Box>
                  <Text fontWeight="bold">Duration:</Text>
                  <Text>{formatDuration(video.duration)}</Text>
                </Box>

                <Box>
                  <Text fontWeight="bold">Size:</Text>
                  <Text>{formatFileSize(video.size)}</Text>
                </Box>

                <Box>
                  <Text fontWeight="bold">Views:</Text>
                  <Text>{video.views}</Text>
                </Box>
              </HStack>

              <Box>
                <Text fontWeight="bold">Upload Date:</Text>
                <Text>{formatDate(video.uploadDate)}</Text>
              </Box>

              <Box>
                <Text fontWeight="bold">Uploader:</Text>
                <Flex align="center" mt={1}>
                  <Avatar size="sm" name={video.uploader} mr={2}>
                    <AvatarBadge boxSize="1em" bg="green.500" />
                  </Avatar>
                  <Text>{video.uploader}</Text>
                </Flex>
              </Box>
            </VStack>
          )}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSave}>
            Save Changes
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default VideoDetailsDrawer

