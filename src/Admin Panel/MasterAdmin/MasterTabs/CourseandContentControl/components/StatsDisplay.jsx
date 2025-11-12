import { StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, useColorModeValue } from "@chakra-ui/react"

function StatsDisplay({ stats }) {
  const bgColor = useColorModeValue("gray.100", "gray.700")

  return (
    <StatGroup mb={6} p={4} bg={bgColor} borderRadius="md">
      <Stat>
        <StatLabel>Total Videos</StatLabel>
        <StatNumber>{stats.total}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Approved</StatLabel>
        <StatNumber>{stats.approved}</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          {stats.total > 0 ? Math.round((stats.approved / stats.total) * 100) : 0}%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Rejected</StatLabel>
        <StatNumber>{stats.rejected}</StatNumber>
        <StatHelpText>
          <StatArrow type="decrease" />
          {stats.total > 0 ? Math.round((stats.rejected / stats.total) * 100) : 0}%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Pending</StatLabel>
        <StatNumber>{stats.pending}</StatNumber>
      </Stat>
    </StatGroup>
  )
}

export default StatsDisplay

