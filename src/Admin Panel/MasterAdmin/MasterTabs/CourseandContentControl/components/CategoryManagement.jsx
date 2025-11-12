

import { useState } from "react"
import {
  VStack,
  Heading,
  HStack,
  Input,
  Button,
  Box,
  Text,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

function CategoryManagement({ categories, setCategories }) {
  const [newCategory, setNewCategory] = useState("")

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()])
      setNewCategory("")
    }
  }

  const handleRemoveCategory = (category) => {
    setCategories(categories.filter((c) => c !== category))
  }

  return (
    <VStack align="stretch" spacing={4}>
      <Heading size="md" mb={2}>
        Manage Categories
      </Heading>

      <HStack>
        <Input
          placeholder="New category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              handleAddCategory()
            }
          }}
        />
        <Button colorScheme="teal" onClick={handleAddCategory} isDisabled={!newCategory.trim()} leftIcon={<AddIcon />}>
          Add Category
        </Button>
      </HStack>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Current Categories:
        </Text>
        <Flex wrap="wrap" gap={2}>
          {categories.map((category, index) => (
            <Tag key={index} size="lg" borderRadius="full" variant="solid" colorScheme="teal">
              <TagLabel>{category}</TagLabel>
              <TagCloseButton onClick={() => handleRemoveCategory(category)} />
            </Tag>
          ))}
        </Flex>
      </Box>
    </VStack>
  )
}

export default CategoryManagement

