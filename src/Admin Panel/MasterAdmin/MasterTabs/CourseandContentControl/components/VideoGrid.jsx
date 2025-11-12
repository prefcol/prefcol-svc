
import { Grid, Box, Text, Button, Skeleton } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import VideoCard from "./VideoCard"

function VideoGrid({
  videos,
  loading,
  onView,
  onEdit,
  onApprove,
  onReject,
  onDelete,
  onUploadClick,
  searchQuery,
  filterStatus,
}) {
  if (loading) {
    return (
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} mt={6}>
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} height="300px" borderRadius="lg" />
        ))}
      </Grid>
    )
  }

  if (videos.length === 0) {
    return (
      <Box textAlign="center" py={10}>
        <Text color="gray.500">
          {searchQuery || filterStatus !== "All" ? "No videos match your search criteria." : "No videos uploaded yet."}
        </Text>
        <Button mt={4} leftIcon={<AddIcon />} colorScheme="teal" onClick={onUploadClick}>
          Upload New Video
        </Button>
      </Box>
    )
  }

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6} mt={6}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onView={() => onView(video)}
          onEdit={() => onEdit(video)}
          onApprove={() => onApprove(video.id)}
          onReject={() => onReject(video.id)}
          onDelete={() => onDelete(video)}
        />
      ))}
    </Grid>
  )
}

export default VideoGrid

