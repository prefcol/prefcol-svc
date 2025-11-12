

import { useState, useRef, useEffect } from "react"
import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useColorModeValue,
} from "@chakra-ui/react"
import { formatDuration } from  "../components/utils/formatters"

// Custom icons
const PlayIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
)

const PauseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path
      fillRule="evenodd"
      d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
      clipRule="evenodd"
    />
  </svg>
)

const VolumeUpIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
  </svg>
)

const VolumeOffIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
  </svg>
)

const ExpandIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path
      fillRule="evenodd"
      d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
      clipRule="evenodd"
    />
  </svg>
)

const ArrowPathIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path
      fillRule="evenodd"
      d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
      clipRule="evenodd"
    />
  </svg>
)

function VideoPlayer({ videoUrl }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isBuffering, setIsBuffering] = useState(false)

  const videoRef = useRef(null)
  const playerRef = useRef(null)
  const controlsTimeoutRef = useRef(null)

  const bgColor = useColorModeValue("black", "black")
  const controlsBg = "rgba(0, 0, 0, 0.7)"
  const textColor = "white"

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime)
    }

    const onLoadedMetadata = () => {
      setDuration(video.duration)
    }

    const onEnded = () => {
      setIsPlaying(false)
    }

    const onWaiting = () => {
      setIsBuffering(true)
    }

    const onPlaying = () => {
      setIsBuffering(false)
    }

    video.addEventListener("timeupdate", onTimeUpdate)
    video.addEventListener("loadedmetadata", onLoadedMetadata)
    video.addEventListener("ended", onEnded)
    video.addEventListener("waiting", onWaiting)
    video.addEventListener("playing", onPlaying)

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate)
      video.removeEventListener("loadedmetadata", onLoadedMetadata)
      video.removeEventListener("ended", onEnded)
      video.removeEventListener("waiting", onWaiting)
      video.removeEventListener("playing", onPlaying)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.play().catch(() => {
        setIsPlaying(false)
      })
    } else {
      video.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value) => {
    setVolume(value)
    if (value === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }

  const handleSeek = (value) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value
      setCurrentTime(value)
    }
  }

  const toggleFullscreen = () => {
    if (!playerRef.current) return

    if (!document.fullscreenElement) {
      playerRef.current
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true)
        })
        .catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`)
        })
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleMouseMove = () => {
    setShowControls(true)

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }

    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  return (
    <Box
      ref={playerRef}
      position="relative"
      width="100%"
      bg={bgColor}
      borderRadius="md"
      overflow="hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        width="100%"
        height="auto"
        onClick={togglePlay}
        style={{ display: "block" }}
      />

      {/* Play/Pause overlay button */}
      {(!isPlaying || showControls) && (
        <Flex
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          alignItems="center"
          justifyContent="center"
          width="80px"
          height="80px"
          borderRadius="full"
          bg="rgba(0, 0, 0, 0.5)"
          opacity={0.8}
          transition="opacity 0.2s"
          _hover={{ opacity: 1 }}
          cursor="pointer"
          onClick={togglePlay}
        >
          {isBuffering ? <ArrowPathIcon className="animate-spin" /> : isPlaying ? <PauseIcon /> : <PlayIcon />}
        </Flex>
      )}

      {/* Controls bar */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        bg={controlsBg}
        p={3}
        transition="opacity 0.3s"
        opacity={showControls ? 1 : 0}
      >
        <VStack spacing={2}>
          <Slider
            aria-label="video progress"
            value={currentTime}
            min={0}
            max={duration || 100}
            onChange={handleSeek}
            focusThumbOnChange={false}
          >
            <SliderTrack bg="gray.600">
              <SliderFilledTrack bg="teal.500" />
            </SliderTrack>
            <SliderThumb boxSize={3} />
          </Slider>

          <Flex width="100%" justifyContent="space-between" alignItems="center">
            <HStack spacing={2}>
              <IconButton
                aria-label={isPlaying ? "Pause" : "Play"}
                icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
                onClick={togglePlay}
                variant="ghost"
                color={textColor}
                size="sm"
              />

              <HStack width="120px">
                <IconButton
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  icon={isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                  onClick={toggleMute}
                  variant="ghost"
                  color={textColor}
                  size="sm"
                />
                <Slider
                  aria-label="volume"
                  value={isMuted ? 0 : volume}
                  min={0}
                  max={1}
                  step={0.01}
                  onChange={handleVolumeChange}
                  width="80px"
                  focusThumbOnChange={false}
                >
                  <SliderTrack bg="gray.600">
                    <SliderFilledTrack bg="teal.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={2} />
                </Slider>
              </HStack>

              <Text color={textColor} fontSize="sm">
                {formatDuration(currentTime)} / {formatDuration(duration)}
              </Text>
            </HStack>

            <IconButton
              aria-label="Fullscreen"
              icon={<ExpandIcon />}
              onClick={toggleFullscreen}
              variant="ghost"
              color={textColor}
              size="sm"
            />
          </Flex>
        </VStack>
      </Box>
    </Box>
  )
}

export default VideoPlayer

