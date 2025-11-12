"use client"

import { useState, useCallback } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
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
  Progress,
  useColorModeValue,
} from "@chakra-ui/react"
import { AttachmentIcon, AddIcon } from "@chakra-ui/icons"

function VideoUploadModal({ isOpen, onClose, categories, onUploadComplete, onUploadError }) {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [videoFile, setVideoFile] = useState(null)
  const [thumbnailFile, setThumbnailFile] = useState(null)
  const [thumbnailPreview, setThumbnailPreview] = useState(null)
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    description: "",
    category: categories[0] || "Other",
    tags: [],
  })
  const [newTag, setNewTag] = useState("")
  const [errors, setErrors] = useState({})

  const dropzoneColor = useColorModeValue("gray.100", "gray.700")
  const dropzoneActiveColor = useColorModeValue("teal.50", "teal.900")
  const dropzoneBorderColor = useColorModeValue("gray.300", "gray.600")
  const dropzoneActiveBorderColor = useColorModeValue("teal.300", "teal.600")

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        if (file.type.startsWith("video/")) {
          setVideoFile(file)
          setVideoDetails((prev) => ({
            ...prev,
            title: file.name.split(".")[0].replace(/-|_/g, " "),
          }))

          // Generate thumbnail from video
          const video = document.createElement("video")
          video.preload = "metadata"
          video.src = URL.createObjectURL(file)
          video.onloadedmetadata = () => {
            video.currentTime = 1 // Seek to 1 second
          }
          video.onseeked = () => {
            const canvas = document.createElement("canvas")
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            const ctx = canvas.getContext("2d")
            ctx?.drawImage(video, 0, 0, canvas.width, canvas.height)
            const thumbnailDataUrl = canvas.toDataURL("image/jpeg")
            setThumbnailPreview(thumbnailDataUrl)

            // Convert data URL to File
            fetch(thumbnailDataUrl)
              .then((res) => res.blob())
              .then((blob) => {
                const thumbnailFile = new File([blob], `${file.name.split(".")[0]}-thumbnail.jpg`, {
                  type: "image/jpeg",
                })
                setThumbnailFile(thumbnailFile)
              })
          }
        } else {
          onUploadError("Please upload a video file")
        }
      }
    },
    [onUploadError],
  )

  const { getRootProps, getInputProps, isDragActive } = {
    getRootProps: () => ({
      onClick: () => document.getElementById("file-upload").click(),
      onDragOver: (e) => {
        e.preventDefault()
        e.stopPropagation()
      },
      onDrop: (e) => {
        e.preventDefault()
        e.stopPropagation()
        const files = e.dataTransfer.files
        if (files.length) onDrop([...files])
      },
    }),
    getInputProps: () => ({
      id: "file-upload",
      type: "file",
      accept: "video/*",
      style: { display: "none" },
      onChange: (e) => {
        if (e.target.files?.length) onDrop([...e.target.files])
      },
    }),
    isDragActive: false,
  }

  const handleThumbnailChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type.startsWith("image/")) {
        setThumbnailFile(file)
        setThumbnailPreview(URL.createObjectURL(file))
      } else {
        onUploadError("Please upload an image file for the thumbnail")
      }
    }
  }

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

    if (!videoFile) {
      newErrors.video = "Please upload a video file"
    }

    if (!videoDetails.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!videoDetails.category) {
      newErrors.category = "Please select a category"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    try {
      // Simulate upload with progress
      const totalSteps = 10
      for (let i = 1; i <= totalSteps; i++) {
        await new Promise((resolve) => setTimeout(resolve, 300))
        setUploadProgress(i * (100 / totalSteps))
      }

      // Create a mock video object
      const mockVideo = {
        id: Math.random().toString(36).substr(2, 9),
        name: videoFile?.name || "",
        title: videoDetails.title,
        description: videoDetails.description,
        category: videoDetails.category,
        tags: videoDetails.tags,
        status: "Pending",
        uploadDate: new Date().toISOString(),
        uploader: "Teacher",
        duration: 120, // Mock duration in seconds
        thumbnailUrl: thumbnailPreview || "https://via.placeholder.com/300x200?text=Video",
        videoUrl: videoFile ? URL.createObjectURL(videoFile) : "",
        size: videoFile?.size || 0,
        views: 0,
      }

      onUploadComplete(mockVideo)
    } catch (error) {
      onUploadError(error instanceof Error ? error.message : "Upload failed")
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Upload New Video</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} as="form" onSubmit={handleSubmit}>
            <FormControl isInvalid={!!errors.video}>
              <FormLabel>Upload Video</FormLabel>
              <Box
                {...getRootProps()}
                p={6}
                borderWidth={2}
                borderRadius="md"
                borderStyle="dashed"
                borderColor={isDragActive ? dropzoneActiveBorderColor : dropzoneBorderColor}
                bg={isDragActive ? dropzoneActiveColor : dropzoneColor}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  borderColor: "teal.300",
                }}
              >
                <input {...getInputProps()} />
                <VStack spacing={2}>
                  <AttachmentIcon w={8} h={8} color="teal.500" />
                  {videoFile ? (
                    <Text>{videoFile.name}</Text>
                  ) : (
                    <>
                      <Text textAlign="center">
                        {isDragActive ? "Drop the video here" : "Drag and drop your video here, or click to select"}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        Supports MP4, WebM, MOV (Max 500MB)
                      </Text>
                    </>
                  )}
                </VStack>
              </Box>
              {errors.video && <FormErrorMessage>{errors.video}</FormErrorMessage>}
            </FormControl>

            {videoFile && (
              <>
                <FormControl isInvalid={!!errors.title}>
                  <FormLabel>Video Title</FormLabel>
                  <Input
                    value={videoDetails.title}
                    onChange={(e) => setVideoDetails({ ...videoDetails, title: e.target.value })}
                    placeholder="Enter video title"
                  />
                  {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    value={videoDetails.description}
                    onChange={(e) => setVideoDetails({ ...videoDetails, description: e.target.value })}
                    placeholder="Enter video description"
                    rows={3}
                  />
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
                  <FormLabel>Custom Thumbnail (Optional)</FormLabel>
                  <HStack>
                    {thumbnailPreview && (
                      <Box width="100px" height="60px" overflow="hidden" borderRadius="md">
                        <img
                          src={thumbnailPreview || "https://via.placeholder.com/100x60"}
                          alt="Thumbnail preview"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </Box>
                    )}
                    <Button as="label" htmlFor="thumbnail-upload" cursor="pointer" leftIcon={<AddIcon />}>
                      {thumbnailPreview ? "Change Thumbnail" : "Add Thumbnail"}
                    </Button>
                    <Input
                      id="thumbnail-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                      display="none"
                    />
                  </HStack>
                  <Text fontSize="xs" color="gray.500" mt={1}>
                    If not provided, a thumbnail will be generated from the video
                  </Text>
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

                {isUploading && (
                  <Box w="100%">
                    <Text mb={1}>Uploading: {Math.round(uploadProgress)}%</Text>
                    <Progress value={uploadProgress} size="sm" colorScheme="teal" />
                  </Box>
                )}

                <Button
                  type="submit"
                  colorScheme="teal"
                  isLoading={isUploading}
                  loadingText="Uploading"
                  w="full"
                  mt={2}
                >
                  Upload Video
                </Button>
              </>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default VideoUploadModal

