
import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Select,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"
import { SearchIcon, ChevronUpIcon, ChevronDownIcon, AddIcon } from "@chakra-ui/icons"

function VideoFilterBar({
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  onUploadClick,
}) {
  const inputBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Flex mb={4} gap={4} flexWrap="wrap" alignItems="center">
      <InputGroup maxW="300px">
        <Input
          placeholder="Search videos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          bg={inputBg}
          borderColor={borderColor}
        />
        <InputRightElement>
          <SearchIcon color="gray.500" />
        </InputRightElement>
      </InputGroup>

      <Select
        maxW="200px"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        bg={inputBg}
        borderColor={borderColor}
      >
        <option value="All">All Status</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
        <option value="Pending">Pending</option>
      </Select>

      <Select
        maxW="200px"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        bg={inputBg}
        borderColor={borderColor}
      >
        <option value="uploadDate">Sort by Date</option>
        <option value="title">Sort by Title</option>
        <option value="status">Sort by Status</option>
        <option value="category">Sort by Category</option>
        <option value="duration">Sort by Duration</option>
        <option value="views">Sort by Views</option>
      </Select>

      <IconButton
        icon={sortOrder === "asc" ? <ChevronUpIcon /> : <ChevronDownIcon />}
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        aria-label="Toggle sort order"
        variant="outline"
        borderColor={borderColor}
      />

      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onUploadClick} ml="auto">
        Upload New Video
      </Button>
    </Flex>
  )
}

export default VideoFilterBar

