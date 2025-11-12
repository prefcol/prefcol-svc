"use client"

import { useState, useEffect, useCallback } from "react"

// Mock data for analytics
const generateMockAnalyticsData = (timeRange) => {
  // Generate different data based on time range
  const daysCount = timeRange === "7d" ? 7 : timeRange === "30d" ? 30 : timeRange === "90d" ? 90 : 365

  // Generate views over time
  const viewsOverTime = Array.from({ length: daysCount }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (daysCount - i - 1))
    const dateStr = date.toISOString().split("T")[0]

    // Generate random data with an upward trend
    const baseViews = 50 + Math.floor(i * (100 / daysCount))
    const randomFactor = 0.5 + Math.random()
    const views = Math.floor(baseViews * randomFactor)
    const uniqueViewers = Math.floor(views * 0.7)

    return {
      date: dateStr,
      views,
      uniqueViewers,
    }
  })

  // Generate engagement data
  const engagement = Array.from({ length: daysCount }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (daysCount - i - 1))
    const dateStr = date.toISOString().split("T")[0]

    // Generate random data
    const likes = Math.floor(Math.random() * 30)
    const comments = Math.floor(Math.random() * 15)
    const shares = Math.floor(Math.random() * 5)

    return {
      date: dateStr,
      likes,
      comments,
      shares,
    }
  })

  // Calculate summary statistics
  const totalViews = viewsOverTime.reduce((sum, day) => sum + day.views, 0)
  const uniqueViewers = Math.floor(totalViews * 0.6)
  const totalWatchTime = Math.floor(totalViews * 4.5)
  const engagementRate = 5.2 + Math.random() * 3

  return {
    summary: {
      totalViews,
      uniqueViewers,
      totalWatchTime,
      engagementRate,
    },
    viewsOverTime,
    engagement,
    deviceBreakdown: [
      { name: "Desktop", value: 45 + Math.floor(Math.random() * 10) },
      { name: "Mobile", value: 35 + Math.floor(Math.random() * 10) },
      { name: "Tablet", value: 10 + Math.floor(Math.random() * 5) },
      { name: "Smart TV", value: 5 + Math.floor(Math.random() * 3) },
    ],
    demographics: {
      ageDistribution: [
        { age: "13-17", percentage: 5 + Math.floor(Math.random() * 5) },
        { age: "18-24", percentage: 25 + Math.floor(Math.random() * 10) },
        { age: "25-34", percentage: 30 + Math.floor(Math.random() * 10) },
        { age: "35-44", percentage: 20 + Math.floor(Math.random() * 10) },
        { age: "45-54", percentage: 10 + Math.floor(Math.random() * 5) },
        { age: "55+", percentage: 5 + Math.floor(Math.random() * 5) },
      ],
      geoDistribution: [
        { name: "United States", value: 40 + Math.floor(Math.random() * 10) },
        { name: "United Kingdom", value: 15 + Math.floor(Math.random() * 5) },
        { name: "Canada", value: 10 + Math.floor(Math.random() * 5) },
        { name: "Australia", value: 8 + Math.floor(Math.random() * 4) },
        { name: "Germany", value: 7 + Math.floor(Math.random() * 3) },
        { name: "Other", value: 15 + Math.floor(Math.random() * 5) },
      ],
    },
  }
}

export const useAnalytics = () => {
  const [timeRange, setTimeRange] = useState("30d")
  const [analyticsData, setAnalyticsData] = useState(generateMockAnalyticsData("30d"))
  const [loading, setLoading] = useState(false)

  // Fetch analytics data
  const fetchAnalytics = useCallback(async () => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      // const response = await fetch(`/api/analytics?timeRange=${timeRange}`)
      // const data = await response.json()
      // setAnalyticsData(data)

      // Simulate API delay and generate mock data
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setAnalyticsData(generateMockAnalyticsData(timeRange))
      setLoading(false)
    } catch (error) {
      console.error("Error fetching analytics:", error)
      setLoading(false)
    }
  }, [timeRange])

  // Update analytics when time range changes
  useEffect(() => {
    fetchAnalytics()
  }, [timeRange, fetchAnalytics])

  return {
    analyticsData,
    loading,
    timeRange,
    setTimeRange,
    fetchAnalytics,
  }
}

