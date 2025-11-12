// "use client"

// import { useState, useCallback } from "react"

// export const useSearch = ({ videos, playlists }) => {
//   const [globalSearchQuery, setGlobalSearchQuery] = useState("")
//   const [searchResults, setSearchResults] = useState({
//     videos: [],
//     playlists: [],
//   })
//   const [searchLoading, setSearchLoading] = useState(false)

//   // Perform search across videos and playlists
//   const performSearch = useCallback(
//     (query) => {
//       if (!query.trim()) {
//         setSearchResults({
//           videos: [],
//           playlists: [],
//         })
//         return
//       }

//       setSearchLoading(true)

//       // Simulate API delay
//       setTimeout(() => {
//         const lowerCaseQuery = query.toLowerCase()

//         // Search in videos
//         const matchedVideos = videos.filter(
//           (video) =>
//             video.title.toLowerCase().includes(lowerCaseQuery) ||
//             video.description.toLowerCase().includes(lowerCaseQuery) ||
//             (video.tags && video.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery))),
//         )

//         // Search in playlists
//         const matchedPlaylists = playlists.filter(
//           (playlist) =>
//             playlist.name.toLowerCase().includes(lowerCaseQuery) ||
//             playlist.description.toLowerCase().includes(lowerCaseQuery),
//         )

//         setSearchResults({
//           videos: matchedVideos,
//           playlists: matchedPlaylists,
//         })

//         setSearchLoading(false)
//       }, 500)
//     },
//     [videos, playlists],
//   )

//   return {
//     globalSearchQuery,
//     setGlobalSearchQuery,
//     searchResults,
//     performSearch,
//     searchLoading,
//   }
// }

"use client"

import { useState, useCallback, useEffect } from "react"

export const useSearch = ({ videos, playlists }) => {
  const [globalSearchQuery, setGlobalSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState({
    videos: [],
    playlists: [],
  })
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchHistory, setSearchHistory] = useState([])

  // Load search history from localStorage on mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem("searchHistory")
      if (savedHistory) {
        setSearchHistory(JSON.parse(savedHistory))
      }
    } catch (error) {
      console.error("Error loading search history:", error)
    }
  }, [])

  // Save search history to localStorage
  const saveSearchHistory = useCallback(
    (query) => {
      try {
        // Only save non-empty queries
        if (query && query.trim()) {
          const newHistory = [
            query,
            ...searchHistory.filter((item) => item !== query).slice(0, 9), // Keep last 10 unique searches
          ]
          setSearchHistory(newHistory)
          localStorage.setItem("searchHistory", JSON.stringify(newHistory))
        }
      } catch (error) {
        console.error("Error saving search history:", error)
      }
    },
    [searchHistory],
  )

  // Clear search history
  const clearSearchHistory = useCallback(() => {
    setSearchHistory([])
    localStorage.removeItem("searchHistory")
  }, [])

  // Perform search across videos and playlists
  const performSearch = useCallback(
    (query) => {
      if (!query.trim()) {
        setSearchResults({
          videos: [],
          playlists: [],
        })
        return
      }

      setSearchLoading(true)

      // Save to search history
      saveSearchHistory(query)

      // Simulate API delay
      setTimeout(() => {
        const lowerCaseQuery = query.toLowerCase()

        // Search in videos
        const matchedVideos = videos.filter(
          (video) =>
            video.title.toLowerCase().includes(lowerCaseQuery) ||
            video.description.toLowerCase().includes(lowerCaseQuery) ||
            (video.tags && video.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery))),
        )

        // Search in playlists
        const matchedPlaylists = playlists.filter(
          (playlist) =>
            playlist.name.toLowerCase().includes(lowerCaseQuery) ||
            playlist.description.toLowerCase().includes(lowerCaseQuery),
        )

        setSearchResults({
          videos: matchedVideos,
          playlists: matchedPlaylists,
        })

        setSearchLoading(false)
      }, 500)
    },
    [videos, playlists, saveSearchHistory],
  )

  return {
    globalSearchQuery,
    setGlobalSearchQuery,
    searchResults,
    performSearch,
    searchLoading,
    searchHistory,
    clearSearchHistory,
  }
}

