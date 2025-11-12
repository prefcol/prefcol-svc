

import { useState, useRef } from "react"
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon, SettingsIcon, RepeatIcon, InfoIcon } from "@chakra-ui/icons"
import VideoFilterBar from "./VideoFilterBar"
import StatsDisplay from "./StatsDisplay"
import VideoGrid from "./VideoGrid"
import VideoUploadModal from "./VideoUploadModal"
import VideoDetailsDrawer from "./VideoDetailsDrawer"
import VideoPreviewModal from "./VideoPreviewModal"
import DeleteAlertDialog from "./DeleteAlertDialog"
import CategoryManagement from "./CategoryManagement"
import { useVideos } from "../components/hooks/useVideos"
import { useToast } from "@chakra-ui/react"

function VideoManagement() {
  const {
    videos,
    loading,
    stats,
    filteredVideos,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    addVideo,
    updateVideo,
    deleteVideo,
    updateVideoStatus,
    fetchVideos,
  } = useVideos()

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [categories, setCategories] = useState(["Lectures", "Tutorials", "Workshops", "Presentations", "Other"])

  const toast = useToast()
  const { colorMode, toggleColorMode } = useColorMode()
  const cancelRef = useRef()

  // Modal and drawer states
  const { isOpen: isUploadModalOpen, onOpen: onUploadModalOpen, onClose: onUploadModalClose } = useDisclosure()

  const { isOpen: isDeleteAlertOpen, onOpen: onDeleteAlertOpen, onClose: onDeleteAlertClose } = useDisclosure()

  const { isOpen: isDetailsDrawerOpen, onOpen: onDetailsDrawerOpen, onClose: onDetailsDrawerClose } = useDisclosure()

  const { isOpen: isPreviewModalOpen, onOpen: onPreviewModalOpen, onClose: onPreviewModalClose } = useDisclosure()

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  const handleStatusChange = async (videoId, status) => {
    try {
      await updateVideoStatus(videoId, status)
      toast({
        title: `Video marked as ${status}`,
        status: status === "Approved" ? "success" : status === "Rejected" ? "error" : "info",
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: "Status Update Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleVideoDelete = async () => {
    if (!selectedVideo) return

    try {
      await deleteVideo(selectedVideo.id)
      toast({
        title: "Video Deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      onDeleteAlertClose()
    } catch (error) {
      toast({
        title: "Deletion Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleVideoDetailsUpdate = async (videoId, details) => {
    try {
      await updateVideo(videoId, details)
      toast({
        title: "Video Details Updated",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      onDetailsDrawerClose()
    } catch (error) {
      toast({
        title: "Update Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <Container maxW="container.xl" py={6}>
      <Box
        p={6}
        borderRadius="xl"
        boxShadow="lg"
        bg={colorMode === "dark" ? "gray.800" : "white"}
        borderWidth="1px"
        borderColor={colorMode === "dark" ? "gray.700" : "gray.200"}
      >
        {/* Header Section */}
        <Flex justifyContent="space-between" alignItems="center" mb={6}>
          <Heading size="lg">Teacher Video Management</Heading>
          <HStack>
            <IconButton
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle color mode"
            />
            <Menu>
              <MenuButton as={IconButton} icon={<SettingsIcon />} variant="ghost" aria-label="Settings" />
              <MenuList>
                <MenuItem icon={<RepeatIcon />} onClick={fetchVideos}>
                  Refresh Videos
                </MenuItem>
                <MenuItem icon={<InfoIcon />}>About</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>

        {/* Stats Section */}
        <StatsDisplay stats={stats} />

        {/* Tabs Section */}
        <Tabs variant="enclosed" colorScheme="teal" mb={6}>
          <TabList>
            <Tab>Videos Management</Tab>
            <Tab>Categories</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={0} pt={4}>
              {/* Search and Filter Section */}
              <VideoFilterBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                onUploadClick={onUploadModalOpen}
              />

              {/* Videos Display */}
              <VideoGrid
                videos={filteredVideos}
                loading={loading}
                onView={(video) => {
                  setSelectedVideo(video)
                  onPreviewModalOpen()
                }}
                onEdit={(video) => {
                  setSelectedVideo(video)
                  onDetailsDrawerOpen()
                }}
                onApprove={(videoId) => handleStatusChange(videoId, "Approved")}
                onReject={(videoId) => handleStatusChange(videoId, "Rejected")}
                onDelete={(video) => {
                  setSelectedVideo(video)
                  onDeleteAlertOpen()
                }}
                onUploadClick={onUploadModalOpen}
                searchQuery={searchQuery}
                filterStatus={filterStatus}
              />
            </TabPanel>

            <TabPanel>
              <CategoryManagement categories={categories} setCategories={setCategories} />
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Upload Video Modal */}
        <VideoUploadModal
          isOpen={isUploadModalOpen}
          onClose={onUploadModalClose}
          categories={categories}
          onUploadComplete={(video) => {
            addVideo(video)
            onUploadModalClose()
            toast({
              title: "Upload Successful",
              description: "Your video has been uploaded successfully.",
              status: "success",
              duration: 3000,
              isClosable: true,
            })
          }}
          onUploadError={(error) => {
            toast({
              title: "Upload Failed",
              description: error,
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          }}
        />

        {/* Delete Confirmation Alert */}
        <DeleteAlertDialog
          isOpen={isDeleteAlertOpen}
          onClose={onDeleteAlertClose}
          onDelete={handleVideoDelete}
          videoName={selectedVideo?.title || ""}
          cancelRef={cancelRef}
        />

        {/* Video Details Drawer */}
        <VideoDetailsDrawer
          isOpen={isDetailsDrawerOpen}
          onClose={onDetailsDrawerClose}
          video={selectedVideo}
          categories={categories}
          onSave={handleVideoDetailsUpdate}
        />

        {/* Video Preview Modal */}
        <VideoPreviewModal
          isOpen={isPreviewModalOpen}
          onClose={onPreviewModalClose}
          video={selectedVideo}
          onEdit={() => {
            onPreviewModalClose()
            onDetailsDrawerOpen()
          }}
        />
      </Box>
    </Container>
  )
}

export default VideoManagement

