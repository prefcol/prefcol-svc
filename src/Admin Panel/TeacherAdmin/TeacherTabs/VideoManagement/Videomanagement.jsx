// import React, { useState } from "react";

// const TeacherVideoManagement = () => {
//     const [videos, setVideos] = useState([]);
//     const [videoTitle, setVideoTitle] = useState("");
//     const [videoUrl, setVideoUrl] = useState("");
//     const [editIndex, setEditIndex] = useState(null);

//     const handleAddVideo = () => {
//         if (editIndex !== null) {
//             const updatedVideos = [...videos];
//             updatedVideos[editIndex] = { title: videoTitle, url: videoUrl };
//             setVideos(updatedVideos);
//             setEditIndex(null);
//         } else {
//             setVideos([...videos, { title: videoTitle, url: videoUrl }]);
//         }
//         setVideoTitle("");
//         setVideoUrl("");
//     };

//     const handleEditVideo = (index) => {
//         setVideoTitle(videos[index].title);
//         setVideoUrl(videos[index].url);
//         setEditIndex(index);
//     };

//     const handleDeleteVideo = (index) => {
//         const updatedVideos = videos.filter((_, i) => i !== index);
//         setVideos(updatedVideos);
//     };

//     return (
//         <div>
//             <h1>Video Management</h1>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Video Title"
//                     value={videoTitle}
//                     onChange={(e) => setVideoTitle(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Video URL"
//                     value={videoUrl}
//                     onChange={(e) => setVideoUrl(e.target.value)}
//                 />
//                 <button onClick={handleAddVideo}>
//                     {editIndex !== null ? "Update Video" : "Add Video"}
//                 </button>
//             </div>
//             <div>
//                 <h2>Uploaded Videos</h2>
//                 <ul>
//                     {videos.map((video, index) => (
//                         <li key={index}>
//                             <h3>{video.title}</h3>
//                             <p>{video.url}</p>
//                             <button onClick={() => handleEditVideo(index)}>Edit</button>
//                             <button onClick={() => handleDeleteVideo(index)}>Delete</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default TeacherVideoManagement;





// import React, { useState, useEffect, useRef } from "react";
// import { 
//   Layout, 
//   Typography, 
//   Form, 
//   Input, 
//   Button, 
//   List, 
//   Card, 
//   Modal, 
//   message, 
//   Upload, 
//   Space, 
//   Spin, 
//   Tooltip, 
//   Divider,
//   Tag,
//   Select,
//   Row,
//   Col,
//   Statistic,
//   Progress,
//   Tabs,
//   Table,
//   Dropdown,
//   Menu,
//   Switch,
//   DatePicker,
//   InputNumber,
//   Popconfirm,
//   Badge,
//   Avatar,
//   Empty,
//   Drawer,
//   Alert,
//   Radio
// } from "antd";
// import { 
//   PlusOutlined, 
//   EditOutlined, 
//   DeleteOutlined, 
//   UploadOutlined, 
//   PlayCircleOutlined,
//   VideoCameraOutlined,
//   SearchOutlined,
//   FilterOutlined,
//   EyeOutlined,
//   DownloadOutlined,
//   ShareAltOutlined,
//   TagOutlined,
//   FolderOutlined,
//   BarChartOutlined,
//   ClockCircleOutlined,
//   StarOutlined,
//   StarFilled,
//   SettingOutlined,
//   UserOutlined,
//   LockOutlined,
//   GlobalOutlined,
//   InfoCircleOutlined,
//   CheckCircleOutlined,
//   CloseCircleOutlined,
//   PieChartOutlined,
//   LineChartOutlined,
//   FileTextOutlined,
//   CopyOutlined,
//   CalendarOutlined,
//   TeamOutlined,
//   BulbOutlined,
//   SortAscendingOutlined,
//   SortDescendingOutlined,
//   MenuOutlined,
//   AppstoreOutlined
// } from "@ant-design/icons";

// const { Title, Text, Paragraph } = Typography;
// const { Content, Sider } = Layout;
// const { TabPane } = Tabs;
// const { RangePicker } = DatePicker;
// const { TextArea } = Input;
// const { Option } = Select;

// // Mock categories for demonstration
// const CATEGORIES = [
//   { id: '1', name: 'Mathematics' },
//   { id: '2', name: 'Science' },
//   { id: '3', name: 'Language Arts' },
//   { id: '4', name: 'History' },
//   { id: '5', name: 'Computer Science' },
//   { id: '6', name: 'Art & Music' },
//   { id: '7', name: 'Physical Education' },
//   { id: '8', name: 'Foreign Languages' }
// ];

// // Mock tags for demonstration
// const TAGS = [
//   'Beginner', 'Intermediate', 'Advanced', 
//   'Homework', 'Lecture', 'Tutorial', 
//   'Quiz', 'Exam Prep', 'Project', 
//   'Lab', 'Discussion', 'Review'
// ];

// // Privacy options
// const PRIVACY_OPTIONS = [
//   { value: 'public', label: 'Public', icon: <GlobalOutlined /> },
//   { value: 'unlisted', label: 'Unlisted', icon: <LockOutlined /> },
//   { value: 'private', label: 'Private', icon: <UserOutlined /> }
// ];

// const TeacherVideoManagement = () => {
//   // State variables
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(null);
//   const [form] = Form.useForm();
//   const [fileList, setFileList] = useState([]);
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewVideo, setPreviewVideo] = useState(null);
//   const [uploadLoading, setUploadLoading] = useState(false);
//   const [searchText, setSearchText] = useState('');
//   const [filterCategory, setFilterCategory] = useState('all');
//   const [sortOrder, setSortOrder] = useState('newest');
//   const [viewMode, setViewMode] = useState('grid');
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);
//   const [statsDrawerOpen, setStatsDrawerOpen] = useState(false);
//   const [currentStats, setCurrentStats] = useState(null);
//   const [batchActionDrawer, setBatchActionDrawer] = useState(false);
//   const [playlistDrawer, setPlaylistDrawer] = useState(false);
//   const [playlists, setPlaylists] = useState([
//     { id: '1', name: 'Course Introduction', videos: ['1'] },
//     { id: '2', name: 'Weekly Lectures', videos: ['2'] },
//     { id: '3', name: 'Review Materials', videos: [] }
//   ]);
//   const [analyticsData, setAnalyticsData] = useState({
//     totalViews: 1245,
//     totalVideos: 0,
//     averageWatchTime: '4:32',
//     topCategories: [
//       { name: 'Mathematics', count: 12 },
//       { name: 'Science', count: 8 },
//       { name: 'Language Arts', count: 5 }
//     ],
//     viewsOverTime: [
//       { date: '2023-01-01', views: 45 },
//       { date: '2023-01-02', views: 52 },
//       { date: '2023-01-03', views: 38 },
//       { date: '2023-01-04', views: 65 },
//       { date: '2023-01-05', views: 48 }
//     ]
//   });

//   const videoInputRef = useRef(null);

//   // Fetch videos on component mount
//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   // Update analytics when videos change
//   useEffect(() => {
//     setAnalyticsData(prev => ({
//       ...prev,
//       totalVideos: videos.length
//     }));
//   }, [videos]);

//   const fetchVideos = async () => {
//     setLoading(true);
//     try {
//       // In a real app, this would be an API call
//       // For demo purposes, we'll use mock data
//       setTimeout(() => {
//         const mockVideos = [
//           {
//             id: '1',
//             title: 'Introduction to Algebra',
//             description: 'Learn the basics of algebraic expressions and equations.',
//             url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
//             thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
//             createdAt: '2023-01-15T12:00:00Z',
//             updatedAt: '2023-01-15T12:00:00Z',
//             duration: '15:30',
//             views: 245,
//             category: '1',
//             tags: ['Beginner', 'Lecture'],
//             privacy: 'public',
//             featured: true,
//             transcriptAvailable: true,
//             downloadable: true,
//             size: '45MB',
//             format: 'MP4',
//             resolution: '1080p',
//             comments: [
//               { id: '1', user: 'Student1', text: 'Great explanation!', date: '2023-01-16T10:30:00Z' },
//               { id: '2', user: 'Student2', text: 'Could you clarify the second example?', date: '2023-01-17T14:15:00Z' }
//             ],
//             analytics: {
//               viewsOverTime: [
//                 { date: '2023-01-15', views: 45 },
//                 { date: '2023-01-16', views: 78 },
//                 { date: '2023-01-17', views: 62 },
//                 { date: '2023-01-18', views: 35 },
//                 { date: '2023-01-19', views: 25 }
//               ],
//               averageWatchTime: '12:45',
//               completionRate: 78,
//               engagementRate: 85,
//               peakViewingTimes: [
//                 { hour: 9, count: 45 },
//                 { hour: 14, count: 67 },
//                 { hour: 19, count: 52 }
//               ]
//             }
//           },
//           {
//             id: '2',
//             title: 'Cell Biology Fundamentals',
//             description: 'Explore the structure and function of cells, the building blocks of life.',
//             url: 'https://www.youtube.com/watch?v=URUJD5NEXC8',
//             thumbnail: 'https://img.youtube.com/vi/URUJD5NEXC8/hqdefault.jpg',
//             createdAt: '2023-01-20T14:30:00Z',
//             updatedAt: '2023-01-21T09:15:00Z',
//             duration: '22:15',
//             views: 189,
//             category: '2',
//             tags: ['Intermediate', 'Lecture', 'Lab'],
//             privacy: 'public',
//             featured: false,
//             transcriptAvailable: true,
//             downloadable: true,
//             size: '78MB',
//             format: 'MP4',
//             resolution: '720p',
//             comments: [
//               { id: '3', user: 'Student3', text: 'The diagrams were very helpful!', date: '2023-01-22T11:20:00Z' }
//             ],
//             analytics: {
//               viewsOverTime: [
//                 { date: '2023-01-20', views: 35 },
//                 { date: '2023-01-21', views: 42 },
//                 { date: '2023-01-22', views: 58 },
//                 { date: '2023-01-23', views: 32 },
//                 { date: '2023-01-24', views: 22 }
//               ],
//               averageWatchTime: '18:30',
//               completionRate: 82,
//               engagementRate: 79,
//               peakViewingTimes: [
//                 { hour: 10, count: 38 },
//                 { hour: 15, count: 55 },
//                 { hour: 20, count: 46 }
//               ]
//             }
//           },
//           {
//             id: '3',
//             title: 'Essay Writing Techniques',
//             description: 'Master the art of writing compelling essays with these proven techniques.',
//             url: 'https://www.youtube.com/watch?v=1lTcgSzf0AQ',
//             thumbnail: 'https://img.youtube.com/vi/1lTcgSzf0AQ/hqdefault.jpg',
//             createdAt: '2023-01-25T10:45:00Z',
//             updatedAt: '2023-01-25T10:45:00Z',
//             duration: '18:45',
//             views: 156,
//             category: '3',
//             tags: ['Advanced', 'Tutorial', 'Homework'],
//             privacy: 'unlisted',
//             featured: false,
//             transcriptAvailable: false,
//             downloadable: false,
//             size: '65MB',
//             format: 'MP4',
//             resolution: '1080p',
//             comments: [],
//             analytics: {
//               viewsOverTime: [
//                 { date: '2023-01-25', views: 28 },
//                 { date: '2023-01-26', views: 45 },
//                 { date: '2023-01-27', views: 38 },
//                 { date: '2023-01-28', views: 25 },
//                 { date: '2023-01-29', views: 20 }
//               ],
//               averageWatchTime: '15:20',
//               completionRate: 75,
//               engagementRate: 72,
//               peakViewingTimes: [
//                 { hour: 11, count: 32 },
//                 { hour: 16, count: 48 },
//                 { hour: 21, count: 39 }
//               ]
//             }
//           }
//         ];
//         setVideos(mockVideos);
//         setLoading(false);
//       }, 1000);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//       message.error('An error occurred while fetching videos');
//       setLoading(false);
//     }
//   };

//   // CRUD Operations
//   const handleAddVideo = () => {
//     setCurrentVideo(null);
//     setFileList([]);
//     form.resetFields();
//     setIsModalOpen(true);
//   };

//   const handleEditVideo = (video) => {
//     setCurrentVideo(video);
//     form.setFieldsValue({
//       title: video.title,
//       description: video.description,
//       url: video.url,
//       category: video.category,
//       tags: video.tags,
//       privacy: video.privacy,
//       featured: video.featured,
//       downloadable: video.downloadable,
//       transcriptAvailable: video.transcriptAvailable
//     });
//     setFileList([]);
//     setIsModalOpen(true);
//   };

//   const handleDeleteVideo = (id) => {
//     Modal.confirm({
//       title: 'Are you sure you want to delete this video?',
//       content: 'This action cannot be undone.',
//       okText: 'Yes, Delete',
//       okType: 'danger',
//       cancelText: 'Cancel',
//       onOk: async () => {
//         try {
//           // In a real app, this would be an API call
//           setVideos(videos.filter(video => video.id !== id));
//           message.success('Video deleted successfully');
//         } catch (error) {
//           console.error('Error deleting video:', error);
//           message.error('An error occurred while deleting the video');
//         }
//       },
//     });
//   };

//   const handleBatchDelete = () => {
//     if (selectedRowKeys.length === 0) {
//       message.warning('Please select videos to delete');
//       return;
//     }

//     Modal.confirm({
//       title: `Are you sure you want to delete ${selectedRowKeys.length} videos?`,
//       content: 'This action cannot be undone.',
//       okText: 'Yes, Delete All',
//       okType: 'danger',
//       cancelText: 'Cancel',
//       onOk: async () => {
//         try {
//           // In a real app, this would be an API call
//           setVideos(videos.filter(video => !selectedRowKeys.includes(video.id)));
//           setSelectedRowKeys([]);
//           message.success(`${selectedRowKeys.length} videos deleted successfully`);
//           setBatchActionDrawer(false);
//         } catch (error) {
//           console.error('Error deleting videos:', error);
//           message.error('An error occurred while deleting the videos');
//         }
//       },
//     });
//   };

//   const handleBatchCategorize = (categoryId) => {
//     if (selectedRowKeys.length === 0) {
//       message.warning('Please select videos to categorize');
//       return;
//     }

//     try {
//       // In a real app, this would be an API call
//       const updatedVideos = videos.map(video => {
//         if (selectedRowKeys.includes(video.id)) {
//           return { ...video, category: categoryId };
//         }
//         return video;
//       });
      
//       setVideos(updatedVideos);
//       message.success(`${selectedRowKeys.length} videos categorized successfully`);
//       setBatchActionDrawer(false);
//     } catch (error) {
//       console.error('Error categorizing videos:', error);
//       message.error('An error occurred while categorizing the videos');
//     }
//   };

//   const handleBatchPrivacy = (privacy) => {
//     if (selectedRowKeys.length === 0) {
//       message.warning('Please select videos to update');
//       return;
//     }

//     try {
//       // In a real app, this would be an API call
//       const updatedVideos = videos.map(video => {
//         if (selectedRowKeys.includes(video.id)) {
//           return { ...video, privacy };
//         }
//         return video;
//       });
      
//       setVideos(updatedVideos);
//       message.success(`Privacy updated for ${selectedRowKeys.length} videos`);
//       setBatchActionDrawer(false);
//     } catch (error) {
//       console.error('Error updating video privacy:', error);
//       message.error('An error occurred while updating video privacy');
//     }
//   };

//   const handleAddToPlaylist = (playlistId) => {
//     if (selectedRowKeys.length === 0) {
//       message.warning('Please select videos to add to playlist');
//       return;
//     }

//     try {
//       // In a real app, this would be an API call
//       const updatedPlaylists = playlists.map(playlist => {
//         if (playlist.id === playlistId) {
//           const updatedVideos = [...new Set([...playlist.videos, ...selectedRowKeys])];
//           return { ...playlist, videos: updatedVideos };
//         }
//         return playlist;
//       });
      
//       setPlaylists(updatedPlaylists);
//       message.success(`${selectedRowKeys.length} videos added to playlist`);
//       setPlaylistDrawer(false);
//     } catch (error) {
//       console.error('Error adding videos to playlist:', error);
//       message.error('An error occurred while adding videos to playlist');
//     }
//   };

//   const handleCreatePlaylist = (values) => {
//     try {
//       const newPlaylist = {
//         id: `playlist-${Date.now()}`,
//         name: values.name,
//         description: values.description || '',
//         videos: selectedRowKeys
//       };
      
//       setPlaylists([...playlists, newPlaylist]);
//       message.success('Playlist created successfully');
//       setPlaylistDrawer(false);
//     } catch (error) {
//       console.error('Error creating playlist:', error);
//       message.error('An error occurred while creating playlist');
//     }
//   };

//   const handlePreview = (video) => {
//     setPreviewVideo(video);
//     setPreviewOpen(true);
//   };

//   const handleViewStats = (video) => {
//     setCurrentStats(video);
//     setStatsDrawerOpen(true);
//   };

//   const handleToggleFeatured = (video) => {
//     try {
//       // In a real app, this would be an API call
//       const updatedVideos = videos.map(v => {
//         if (v.id === video.id) {
//           return { ...v, featured: !v.featured };
//         }
//         return v;
//       });
      
//       setVideos(updatedVideos);
//       message.success(`Video ${!video.featured ? 'featured' : 'unfeatured'} successfully`);
//     } catch (error) {
//       console.error('Error updating video featured status:', error);
//       message.error('An error occurred while updating video featured status');
//     }
//   };

//   const handleModalCancel = () => {
//     setIsModalOpen(false);
//     form.resetFields();
//     setFileList([]);
//   };

//   const handleFormSubmit = async (values) => {
//     setUploadLoading(true);
//     try {
//       // In a real app, this would be an API call with FormData
//       setTimeout(() => {
//         if (currentVideo) {
//           // Update existing video
//           const updatedVideos = videos.map(video => {
//             if (video.id === currentVideo.id) {
//               return {
//                 ...video,
//                 title: values.title,
//                 description: values.description || '',
//                 url: values.url || video.url,
//                 category: values.category,
//                 tags: values.tags || [],
//                 privacy: values.privacy,
//                 featured: values.featured,
//                 downloadable: values.downloadable,
//                 transcriptAvailable: values.transcriptAvailable,
//                 updatedAt: new Date().toISOString()
//               };
//             }
//             return video;
//           });
          
//           setVideos(updatedVideos);
//           message.success('Video updated successfully');
//         } else {
//           // Create new video
//           const newVideo = {
//             id: `video-${Date.now()}`,
//             title: values.title,
//             description: values.description || '',
//             url: values.url || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Default for demo
//             thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Default for demo
//             createdAt: new Date().toISOString(),
//             updatedAt: new Date().toISOString(),
//             duration: '10:00', // Default for demo
//             views: 0,
//             category: values.category,
//             tags: values.tags || [],
//             privacy: values.privacy,
//             featured: values.featured,
//             downloadable: values.downloadable,
//             transcriptAvailable: values.transcriptAvailable,
//             size: '50MB', // Default for demo
//             format: 'MP4', // Default for demo
//             resolution: '1080p', // Default for demo
//             comments: [],
//             analytics: {
//               viewsOverTime: [{ date: new Date().toISOString().split('T')[0], views: 0 }],
//               averageWatchTime: '0:00',
//               completionRate: 0,
//               engagementRate: 0,
//               peakViewingTimes: []
//             }
//           };
          
//           setVideos([...videos, newVideo]);
//           message.success('Video added successfully');
//         }
        
//         setIsModalOpen(false);
//         form.resetFields();
//         setFileList([]);
//         setUploadLoading(false);
//       }, 1500);
//     } catch (error) {
//       console.error(`Error ${currentVideo ? 'updating' : 'adding'} video:`, error);
//       message.error(`An error occurred while ${currentVideo ? 'updating' : 'adding'} the video`);
//       setUploadLoading(false);
//     }
//   };

//   // Utility functions
//   const getCategoryName = (categoryId) => {
//     const category = CATEGORIES.find(cat => cat.id === categoryId);
//     return category ? category.name : 'Uncategorized';
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//     });
//   };

//   const formatTime = (timeString) => {
//     return timeString || '00:00';
//   };

//   const getPrivacyIcon = (privacy) => {
//     switch (privacy) {
//       case 'public':
//         return <GlobalOutlined />;
//       case 'unlisted':
//         return <LockOutlined />;
//       case 'private':
//         return <UserOutlined />;
//       default:
//         return <GlobalOutlined />;
//     }
//   };

//   const getPrivacyColor = (privacy) => {
//     switch (privacy) {
//       case 'public':
//         return 'green';
//       case 'unlisted':
//         return 'blue';
//       case 'private':
//         return 'red';
//       default:
//         return 'default';
//     }
//   };

//   // Filter and sort functions
//   const filteredVideos = videos
//     .filter(video => {
//       // Search filter
//       const searchMatch = searchText === '' || 
//         video.title.toLowerCase().includes(searchText.toLowerCase()) ||
//         video.description.toLowerCase().includes(searchText.toLowerCase());
      
//       // Category filter
//       const categoryMatch = filterCategory === 'all' || video.category === filterCategory;
      
//       return searchMatch && categoryMatch;
//     })
//     .sort((a, b) => {
//       // Sort order
//       switch (sortOrder) {
//         case 'newest':
//           return new Date(b.createdAt) - new Date(a.createdAt);
//         case 'oldest':
//           return new Date(a.createdAt) - new Date(b.createdAt);
//         case 'title-asc':
//           return a.title.localeCompare(b.title);
//         case 'title-desc':
//           return b.title.localeCompare(a.title);
//         case 'most-viewed':
//           return b.views - a.views;
//         case 'least-viewed':
//           return a.views - b.views;
//         default:
//           return new Date(b.createdAt) - new Date(a.createdAt);
//       }
//     });

//   // Upload props
//   const uploadProps = {
//     onRemove: () => {
//       setFileList([]);
//     },
//     beforeUpload: (file) => {
//       // Check file type
//       const isVideo = file.type.startsWith('video/');
//       if (!isVideo) {
//         message.error('You can only upload video files!');
//         return false;
//       }
      
//       // Check file size (100MB limit)
//       const isLt100M = file.size / 1024 / 1024 < 100;
//       if (!isLt100M) {
//         message.error('Video must be smaller than 100MB!');
//         return false;
//       }
      
//       setFileList([file]);
//       return false;
//     },
//     fileList,
//   };

//   // Table columns for list view
//   const columns = [
//     {
//       title: 'Title',
//       dataIndex: 'title',
//       key: 'title',
//       render: (text, record) => (
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <div 
//             style={{ 
//               width: 80, 
//               height: 45, 
//               marginRight: 12, 
//               background: '#f0f0f0', 
//               borderRadius: 4,
//               overflow: 'hidden'
//             }}
//           >
//             <img 
//               src={record.thumbnail || "/placeholder.svg"} 
//               alt={text}
//               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//             />
//           </div>
//           <div>
//             <div style={{ fontWeight: 500 }}>{text}</div>
//             <div style={{ fontSize: 12, color: '#888' }}>
//               {formatTime(record.duration)} • {record.views} views
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: 'Category',
//       dataIndex: 'category',
//       key: 'category',
//       render: categoryId => (
//         <Tag color="blue">{getCategoryName(categoryId)}</Tag>
//       ),
//     },
//     {
//       title: 'Privacy',
//       dataIndex: 'privacy',
//       key: 'privacy',
//       render: privacy => (
//         <Tag color={getPrivacyColor(privacy)} icon={getPrivacyIcon(privacy)}>
//           {privacy.charAt(0).toUpperCase() + privacy.slice(1)}
//         </Tag>
//       ),
//     },
//     {
//       title: 'Date',
//       dataIndex: 'createdAt',
//       key: 'createdAt',
//       render: date => formatDate(date),
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_, record) => (
//         <Space size="small">
//           <Button 
//             type="text" 
//             icon={<EyeOutlined />} 
//             onClick={() => handlePreview(record)}
//           />
//           <Button 
//             type="text" 
//             icon={<BarChartOutlined />} 
//             onClick={() => handleViewStats(record)}
//           />
//           <Button 
//             type="text" 
//             icon={<EditOutlined />} 
//             onClick={() => handleEditVideo(record)}
//           />
//           <Button 
//             type="text" 
//             danger 
//             icon={<DeleteOutlined />} 
//             onClick={() => handleDeleteVideo(record.id)}
//           />
//         </Space>
//       ),
//     },
//   ];

//   // Row selection configuration
//   const rowSelection = {
//     selectedRowKeys,
//     onChange: (keys) => setSelectedRowKeys(keys),
//   };

//   return (
//     <Layout style={{ minHeight: '100vh', background: '#fff' }}>
//       <Content style={{ padding: '20px' }}>
//         <div style={{ marginBottom: 24 }}>
//           <Row gutter={[16, 16]} align="middle">
//             <Col xs={24} md={12}>
//               <Title level={2} style={{ margin: 0 }}>
//                 <VideoCameraOutlined style={{ marginRight: 8 }} />
//                 Teacher Video Management
//               </Title>
//             </Col>
//             <Col xs={24} md={12} style={{ textAlign: 'right' }}>
//               <Space>
//                 <Button 
//                   type="primary" 
//                   icon={<PlusOutlined />} 
//                   onClick={handleAddVideo}
//                   size="large"
//                 >
//                   Add New Video
//                 </Button>
//                 {selectedRowKeys.length > 0 && (
//                   <Button 
//                     type="default" 
//                     onClick={() => setBatchActionDrawer(true)}
//                     size="large"
//                   >
//                     Batch Actions ({selectedRowKeys.length})
//                   </Button>
//                 )}
//               </Space>
//             </Col>
//           </Row>
//         </div>

//         <Tabs defaultActiveKey="videos" style={{ marginBottom: 16 }}>
//           <TabPane 
//             tab={
//               <span>
//                 <VideoCameraOutlined />
//                 Videos
//               </span>
//             } 
//             key="videos"
//           >
//             <div style={{ marginBottom: 16 }}>
//               <Row gutter={[16, 16]}>
//                 <Col xs={24} md={8}>
//                   <Input
//                     placeholder="Search videos..."
//                     prefix={<SearchOutlined />}
//                     value={searchText}
//                     onChange={e => setSearchText(e.target.value)}
//                     allowClear
//                   />
//                 </Col>
//                 <Col xs={24} md={6}>
//                   <Select
//                     placeholder="Filter by category"
//                     style={{ width: '100%' }}
//                     value={filterCategory}
//                     onChange={setFilterCategory}
//                   >
//                     <Option value="all">All Categories</Option>
//                     {CATEGORIES.map(category => (
//                       <Option key={category.id} value={category.id}>
//                         {category.name}
//                       </Option>
//                     ))}
//                   </Select>
//                 </Col>
//                 <Col xs={24} md={6}>
//                   <Select
//                     placeholder="Sort by"
//                     style={{ width: '100%' }}
//                     value={sortOrder}
//                     onChange={setSortOrder}
//                   >
//                     <Option value="newest">Newest First</Option>
//                     <Option value="oldest">Oldest First</Option>
//                     <Option value="title-asc">Title (A-Z)</Option>
//                     <Option value="title-desc">Title (Z-A)</Option>
//                     <Option value="most-viewed">Most Viewed</Option>
//                     <Option value="least-viewed">Least Viewed</Option>
//                   </Select>
//                 </Col>
//                 <Col xs={24} md={4} style={{ textAlign: 'right' }}>
//                   <Radio.Group 
//                     value={viewMode} 
//                     onChange={e => setViewMode(e.target.value)}
//                     buttonStyle="solid"
                   
//                   >
//                     <Radio.Button value="grid">
//                       <AppstoreOutlined />
//                     </Radio.Button>
//                     <Radio.Button value="list">
//                       <MenuOutlined />
//                     </Radio.Button>
//                   </Radio.Group>
//                 </Col>
//               </Row>
//             </div>

//             {loading ? (
//               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
//                 <Spin size="large" tip="Loading videos..." />
//               </div>
//             ) : filteredVideos.length === 0 ? (
//               <Empty 
//                 description="No videos found" 
//                 image={Empty.PRESENTED_IMAGE_SIMPLE} 
//               />
//             ) : viewMode === 'grid' ? (
//               <List
//                 grid={{ 
//                   gutter: 16, 
//                   xs: 1, 
//                   sm: 2, 
//                   md: 2, 
//                   lg: 3, 
//                   xl: 4, 
//                   xxl: 4 
//                 }}
//                 dataSource={filteredVideos}
//                 renderItem={(video) => (
//                   <List.Item>
//                     <Card
//                       hoverable
//                       cover={
//                         <div 
//                           style={{ 
//                             height: 180, 
//                             background: '#f0f0f0', 
//                             display: 'flex', 
//                             alignItems: 'center', 
//                             justifyContent: 'center',
//                             cursor: 'pointer',
//                             position: 'relative',
//                             overflow: 'hidden'
//                           }}
//                           onClick={() => handlePreview(video)}
//                         >
//                           <img 
//                             alt={video.title} 
//                             src={video.thumbnail || "/placeholder.svg"} 
//                             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                           />
//                           <div style={{ 
//                             position: 'absolute', 
//                             bottom: 8, 
//                             right: 8, 
//                             background: 'rgba(0,0,0,0.75)', 
//                             color: 'white',
//                             padding: '2px 6px',
//                             borderRadius: 4,
//                             fontSize: 12
//                           }}>
//                             {formatTime(video.duration)}
//                           </div>
//                           {video.featured && (
//                             <div style={{ 
//                               position: 'absolute', 
//                               top: 8, 
//                               left: 8, 
//                               background: '#ff4d4f', 
//                               color: 'white',
//                               padding: '2px 6px',
//                               borderRadius: 4,
//                               fontSize: 12
//                             }}>
//                               Featured
//                             </div>
//                           )}
//                         </div>
//                       }
//                       actions={[
//                         <Tooltip title="Preview" key="preview">
//                           <Button 
//                             type="text" 
//                             icon={<PlayCircleOutlined />} 
//                             onClick={() => handlePreview(video)}
//                           />
//                         </Tooltip>,
//                         <Tooltip title={video.featured ? "Unfeature" : "Feature"} key="feature">
//                           <Button 
//                             type="text" 
//                             icon={video.featured ? <StarFilled style={{ color: '#faad14' }} /> : <StarOutlined />} 
//                             onClick={() => handleToggleFeatured(video)}
//                           />
//                         </Tooltip>,
//                         <Tooltip title="Analytics" key="analytics">
//                           <Button 
//                             type="text" 
//                             icon={<BarChartOutlined />} 
//                             onClick={() => handleViewStats(video)}
//                           />
//                         </Tooltip>,
//                         <Dropdown
//                           key="more"
//                           menu={{
//                             items: [
//                               {
//                                 key: 'edit',
//                                 label: 'Edit',
//                                 icon: <EditOutlined />,
//                                 onClick: () => handleEditVideo(video)
//                               },
//                               {
//                                 key: 'delete',
//                                 label: 'Delete',
//                                 icon: <DeleteOutlined />,
//                                 danger: true,
//                                 onClick: () => handleDeleteVideo(video.id)
//                               },
//                               {
//                                 key: 'share',
//                                 label: 'Share',
//                                 icon: <ShareAltOutlined />
//                               },
//                               {
//                                 key: 'download',
//                                 label: 'Download',
//                                 icon: <DownloadOutlined />,
//                                 disabled: !video.downloadable
//                               }
//                             ]
//                           }}
//                           placement="bottomRight"
//                           trigger={['click']}
//                         >
//                           <Button type="text" icon={<SettingOutlined />} />
//                         </Dropdown>
//                       ]}
//                     >
//                       <Card.Meta
//                         title={
//                           <Tooltip title={video.title}>
//                             <div style={{ 
//                               whiteSpace: 'nowrap', 
//                               overflow: 'hidden', 
//                               textOverflow: 'ellipsis' 
//                             }}>
//                               {video.title}
//                             </div>
//                           </Tooltip>
//                         }
//                         description={
//                           <div>
//                             <div style={{ marginBottom: 8 }}>
//                               <Text type="secondary" style={{ fontSize: 12 }}>
//                                 {video.views} views • {formatDate(video.createdAt)}
//                               </Text>
//                             </div>
//                             <div style={{ marginBottom: 8 }}>
//                               <Tag color="blue">{getCategoryName(video.category)}</Tag>
//                               <Tag color={getPrivacyColor(video.privacy)} icon={getPrivacyIcon(video.privacy)}>
//                                 {video.privacy.charAt(0).toUpperCase() + video.privacy.slice(1)}
//                               </Tag>
//                             </div>
//                           </div>
//                         }
//                       />
//                     </Card>
//                   </List.Item>
//                 )}
//               />
//             ) : (
//               <Table
//                 rowSelection={rowSelection}
//                 columns={columns}
//                 dataSource={filteredVideos}
//                 rowKey="id"
//                 pagination={{ pageSize: 10 }}
//               />
//             )}
//           </TabPane>
//           <TabPane 
//             tab={
//               <span>
//                 <BarChartOutlined />
//                 Analytics
//               </span>
//             } 
//             key="analytics"
//           >
//             <Row gutter={[16, 16]}>
//               <Col xs={24} md={6}>
//                 <Card>
//                   <Statistic
//                     title="Total Videos"
//                     value={videos.length}
//                     prefix={<VideoCameraOutlined />}
//                   />
//                 </Card>
//               </Col>
//               <Col xs={24} md={6}>
//                 <Card>
//                   <Statistic
//                     title="Total Views"
//                     value={analyticsData.totalViews}
//                     prefix={<EyeOutlined />}
//                   />
//                 </Card>
//               </Col>
//               <Col xs={24} md={6}>
//                 <Card>
//                   <Statistic
//                     title="Average Watch Time"
//                     value={analyticsData.averageWatchTime}
//                     prefix={<ClockCircleOutlined />}
//                   />
//                 </Card>
//               </Col>
//               <Col xs={24} md={6}>
//                 <Card>
//                   <Statistic
//                     title="Featured Videos"
//                     value={videos.filter(v => v.featured).length}
//                     prefix={<StarFilled />}
//                   />
//                 </Card>
//               </Col>
//             </Row>
            
//             <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
//               <Col xs={24} md={12}>
//                 <Card title="Top Categories">
//                   {analyticsData.topCategories.map((category, index) => (
//                     <div key={index} style={{ marginBottom: 12 }}>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
//                         <Text>{category.name}</Text>
//                         <Text>{category.count} videos</Text>
//                       </div>
//                       <Progress 
//                         percent={Math.round((category.count / videos.length) * 100)} 
//                         showInfo={false} 
//                         strokeColor={index === 0 ? '#1890ff' : index === 1 ? '#52c41a' : '#faad14'} 
//                       />
//                     </div>
//                   ))}
//                 </Card>
//               </Col>
//               <Col xs={24} md={12}>
//                 <Card title="Recent Activity">
//                   <List
//                     size="small"
//                     dataSource={videos.slice(0, 5)}
//                     renderItem={item => (
//                       <List.Item>
//                         <List.Item.Meta
//                           avatar={<Avatar src={item.thumbnail} />}
//                           title={item.title}
//                           description={`${item.views} views • ${formatDate(item.createdAt)}`}
//                         />
//                       </List.Item>
//                     )}
//                   />
//                 </Card>
//               </Col>
//             </Row>
//           </TabPane>
//           <TabPane 
//             tab={
//               <span>
//                 <FolderOutlined />
//                 Playlists
//               </span>
//             } 
//             key="playlists"
//           >
//             <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
//               <Col xs={24}>
//                 <Button 
//                   type="primary" 
//                   icon={<PlusOutlined />} 
//                   onClick={() => {
//                     setSelectedRowKeys([]);
//                     setPlaylistDrawer(true);
//                   }}
//                 >
//                   Create New Playlist
//                 </Button>
//               </Col>
//             </Row>
            
//             <List
//               grid={{ 
//                 gutter: 16, 
//                 xs: 1, 
//                 sm: 2, 
//                 md: 3, 
//                 lg: 4
//               }}
//               dataSource={playlists}
//               renderItem={playlist => (
//                 <List.Item>
//                   <Card
//                     hoverable
//                     cover={
//                       <div style={{ 
//                         height: 140, 
//                         background: '#f0f0f0', 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         justifyContent: 'center',
//                         padding: 16
//                       }}>
//                         <FolderOutlined style={{ fontSize: 64, color: '#1890ff' }} />
//                       </div>
//                     }
//                     actions={[
//                       <Button key="edit" type="text" icon={<EditOutlined />} />,
//                       <Button key="delete" type="text" danger icon={<DeleteOutlined />} />
//                     ]}
//                   >
//                     <Card.Meta
//                       title={playlist.name}
//                       description={`${playlist.videos.length} videos`}
//                     />
//                   </Card>
//                 </List.Item>
//               )}
//             />
//           </TabPane>
//         </Tabs>

//         {/* Add/Edit Video Modal */}
//         <Modal
//           title={currentVideo ? 'Edit Video' : 'Add New Video'}
//           open={isModalOpen}
//           onCancel={handleModalCancel}
//           footer={null}
//           width={800}
//         >
//           <Form
//             form={form}
//             layout="vertical"
//             onFinish={handleFormSubmit}
//             disabled={uploadLoading}
//             initialValues={{
//               privacy: 'public',
//               featured: false,
//               downloadable: true,
//               transcriptAvailable: false
//             }}
//           >
//             <Tabs defaultActiveKey="basic">
//               <TabPane 
//                 tab={
//                   <span>
//                     <InfoCircleOutlined />
//                     Basic Information
//                   </span>
//                 } 
//                 key="basic"
//               >
//                 <Form.Item
//                   name="title"
//                   label="Video Title"
//                   rules={[{ required: true, message: 'Please enter a title for the video' }]}
//                 >
//                   <Input placeholder="Enter video title" />
//                 </Form.Item>
                
//                 <Form.Item
//                   name="description"
//                   label="Description"
//                 >
//                   <TextArea 
//                     placeholder="Enter video description" 
//                     rows={4}
//                   />
//                 </Form.Item>
                
//                 <Form.Item
//                   name="category"
//                   label="Category"
//                   rules={[{ required: true, message: 'Please select a category' }]}
//                 >
//                   <Select placeholder="Select a category">
//                     {CATEGORIES.map(category => (
//                       <Option key={category.id} value={category.id}>
//                         {category.name}
//                       </Option>
//                     ))}
//                   </Select>
//                 </Form.Item>
                
//                 <Form.Item
//                   name="tags"
//                   label="Tags"
//                 >
//                   <Select
//                     mode="multiple"
//                     placeholder="Select tags"
//                     style={{ width: '100%' }}
//                   >
//                     {TAGS.map(tag => (
//                       <Option key={tag} value={tag}>
//                         {tag}
//                       </Option>
//                     ))}
//                   </Select>
//                 </Form.Item>
//               </TabPane>
              
//               <TabPane 
//                 tab={
//                   <span>
//                     <UploadOutlined />
//                     Video Upload
//                   </span>
//                 } 
//                 key="upload"
//               >
//                 <div style={{ marginBottom: 16 }}>
//                   <Upload {...uploadProps} maxCount={1}>
//                     <Button icon={<UploadOutlined />} ref={videoInputRef}>
//                       Select Video File
//                     </Button>
//                   </Upload>
//                 </div>
                
//                 <Divider plain>Or</Divider>
                
//                 <Form.Item 
//                   name="url" 
//                   label="Video URL"
//                   rules={[
//                     { 
//                       validator: (_, value) => {
//                         if (!value && fileList.length === 0 && !currentVideo) {
//                           return Promise.reject('Please either upload a video or provide a URL');
//                         }
//                         return Promise.resolve();
//                       }
//                     }
//                   ]}
//                 >
//                   <Input 
//                     placeholder="Enter video URL (YouTube, Vimeo, etc.)" 
//                     disabled={fileList.length > 0}
//                   />
//                 </Form.Item>
//               </TabPane>
              
//               <TabPane 
//                 tab={
//                   <span>
//                     <SettingOutlined />
//                     Settings
//                   </span>
//                 } 
//                 key="settings"
//               >
//                 <Form.Item
//                   name="privacy"
//                   label="Privacy"
//                 >
//                   <Radio.Group>
//                     {PRIVACY_OPTIONS.map(option => (
//                       <Radio key={option.value} value={option.value}>
//                         {option.icon} {option.label}
//                       </Radio>
//                     ))}
//                   </Radio.Group>
//                 </Form.Item>
                
//                 <Form.Item
//                   name="featured"
//                   valuePropName="checked"
//                   label="Featured Video"
//                 >
//                   <Switch />
//                 </Form.Item>
                
//                 <Form.Item
//                   name="downloadable"
//                   valuePropName="checked"
//                   label="Allow Downloads"
//                 >
//                   <Switch />
//                 </Form.Item>
                
//                 <Form.Item
//                   name="transcriptAvailable"
//                   valuePropName="checked"
//                   label="Transcript Available"
//                 >
//                   <Switch />
//                 </Form.Item>
//               </TabPane>
//             </Tabs>
            
//             <Form.Item style={{ marginBottom: 0, marginTop: 16, textAlign: 'right' }}>
//               <Space>
//                 <Button onClick={handleModalCancel}>
//                   Cancel
//                 </Button>
//                 <Button 
//                   type="primary" 
//                   htmlType="submit"
//                   loading={uploadLoading}
//                 >
//                   {currentVideo ? 'Update' : 'Upload'} Video
//                 </Button>
//               </Space>
//             </Form.Item>
//           </Form>
//         </Modal>

//         {/* Video Preview Modal */}
//         <Modal
//           title={previewVideo?.title}
//           open={previewOpen}
//           onCancel={() => setPreviewOpen(false)}
//           footer={null}
//           width={800}
//         >
//           {previewVideo && (
//             <div>
//               <div style={{ aspectRatio: '16/9', background: '#000', marginBottom: 16 }}>
//                 {previewVideo.url.includes('youtube.com') || previewVideo.url.includes('youtu.be') ? (
//                   <iframe
//                     width="100%"
//                     height="100%"
//                     src={previewVideo.url.replace('watch?v=', 'embed/')}
//                     title={previewVideo.title}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 ) : (
//                   <video
//                     controls
//                     width="100%"
//                     height="100%"
//                     src={previewVideo.url}
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 )}
//               </div>
              
//               <Title level={4}>{previewVideo.title}</Title>
              
//               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
//                 <Text type="secondary">
//                   {previewVideo.views} views • {formatDate(previewVideo.createdAt)}
//                 </Text>
//                 <Space>
//                   <Button icon={<ShareAltOutlined />}>Share</Button>
//                   {previewVideo.downloadable && (
//                     <Button icon={<DownloadOutlined />}>Download</Button>
//                   )}
//                 </Space>
//               </div>
              
//               <div style={{ marginBottom: 16 }}>
//                 <Tag color="blue">{getCategoryName(previewVideo.category)}</Tag>
//                 {previewVideo.tags.map(tag => (
//                   <Tag key={tag}>{tag}</Tag>
//                 ))}
//               </div>
              
//               <Divider />
              
//               <Paragraph>{previewVideo.description || 'No description provided.'}</Paragraph>
              
//               {previewVideo.transcriptAvailable && (
//                 <>
//                   <Divider />
//                   <Title level={5}><FileTextOutlined /> Transcript</Title>
//                   <Paragraph>
//                     Transcript content would appear here. This is a placeholder for demonstration purposes.
//                   </Paragraph>
//                 </>
//               )}
              
//               {previewVideo.comments.length > 0 && (
//                 <>
//                   <Divider />
//                   <Title level={5}>Comments ({previewVideo.comments.length})</Title>
//                   <List
//                     itemLayout="horizontal"
//                     dataSource={previewVideo.comments}
//                     renderItem={comment => (
//                       <List.Item>
//                         <List.Item.Meta
//                           avatar={<Avatar icon={<UserOutlined />} />}
//                           title={comment.user}
//                           description={
//                             <>
//                               <div>{comment.text}</div>
//                               <div style={{ fontSize: 12, color: '#888' }}>
//                                 {formatDate(comment.date)}
//                               </div>
//                             </>
//                           }
//                         />
//                       </List.Item>
//                     )}
//                   />
//                 </>
//               )}
//             </div>
//           )}
//         </Modal>

//         {/* Analytics Drawer */}
//         <Drawer
//           title={`Analytics: ${currentStats?.title || ''}`}
//           placement="right"
//           onClose={() => setStatsDrawerOpen(false)}
//           open={statsDrawerOpen}
//           width={600}
//         >
//           {currentStats && (
//             <div>
//               <Row gutter={[16, 16]}>
//                 <Col span={8}>
//                   <Statistic
//                     title="Total Views"
//                     value={currentStats.views}
//                     prefix={<EyeOutlined />}
//                   />
//                 </Col>
//                 <Col span={8}>
//                   <Statistic
//                     title="Average Watch Time"
//                     value={currentStats.analytics.averageWatchTime}
//                     prefix={<ClockCircleOutlined />}
//                   />
//                 </Col>
//                 <Col span={8}>
//                   <Statistic
//                     title="Completion Rate"
//                     value={currentStats.analytics.completionRate}
//                     suffix="%"
//                     prefix={<CheckCircleOutlined />}
//                   />
//                 </Col>
//               </Row>
              
//               <Divider />
              
//               <Title level={5}><LineChartOutlined /> Views Over Time</Title>
//               <div style={{ height: 200, background: '#f0f0f0', marginBottom: 24, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <Text type="secondary">Chart visualization would appear here</Text>
//               </div>
              
//               <Title level={5}><PieChartOutlined /> Engagement Metrics</Title>
//               <Row gutter={[16, 16]}>
//                 <Col span={12}>
//                   <Card title="Engagement Rate" size="small">
//                     <Progress 
//                       type="circle" 
//                       percent={currentStats.analytics.engagementRate} 
//                       width={80}
//                     />
//                   </Card>
//                 </Col>
//                 <Col span={12}>
//                   <Card title="Peak Viewing Times" size="small">
//                     <div style={{ height: 80, background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                       <Text type="secondary">Time chart would appear here</Text>
//                     </div>
//                   </Card>
//                 </Col>
//               </Row>
//             </div>
//           )}
//         </Drawer>

//         {/* Batch Actions Drawer */}
//         <Drawer
//           title={`Batch Actions (${selectedRowKeys.length} videos selected)`}
//           placement="right"
//           onClose={() => setBatchActionDrawer(false)}
//           open={batchActionDrawer}
//           width={400}
//         >
//           <div style={{ marginBottom: 24 }}>
//             <Alert
//               message="Warning"
//               description="Batch actions will be applied to all selected videos."
//               type="warning"
//               showIcon
//               style={{ marginBottom: 16 }}
//             />
            
//             <Button 
//               danger 
//               icon={<DeleteOutlined />} 
//               onClick={handleBatchDelete}
//               style={{ width: '100%', marginBottom: 16 }}
//               size="large"
//             >
//               Delete Selected Videos
//             </Button>
            
//             <Divider>Categorize</Divider>
            
//             <Select
//               placeholder="Select category"
//               style={{ width: '100%', marginBottom: 16 }}
//               onChange={handleBatchCategorize}
//             >
//               {CATEGORIES.map(category => (
//                 <Option key={category.id} value={category.id}>
//                   {category.name}
//                 </Option>
//               ))}
//             </Select>
            
//             <Divider>Privacy Settings</Divider>
            
//             <Space direction="vertical" style={{ width: '100%' }}>
//               {PRIVACY_OPTIONS.map(option => (
//                 <Button 
//                   key={option.value}
//                   icon={option.icon}
//                   onClick={() => handleBatchPrivacy(option.value)}
//                   style={{ width: '100%' }}
//                 >
//                   Set as {option.label}
//                 </Button>
//               ))}
//             </Space>
            
//             <Divider>Playlists</Divider>
            
//             <Button 
//               icon={<FolderOutlined />} 
//               onClick={() => setPlaylistDrawer(true)}
//               style={{ width: '100%' }}
//             >
//               Add to Playlist
//             </Button>
//           </div>
//         </Drawer>

//         {/* Playlist Drawer */}
//         <Drawer
//           title="Playlists"
//           placement="right"
//           onClose={() => setPlaylistDrawer(false)}
//           open={playlistDrawer}
//           width={400}
//         >
//           <Tabs defaultActiveKey="existing">
//             <TabPane 
//               tab="Existing Playlists" 
//               key="existing"
//             >
//               <List
//                 dataSource={playlists}
//                 renderItem={playlist => (
//                   <List.Item
//                     actions={[
//                       <Button 
//                         key="add" 
//                         type="primary" 
//                         size="small"
//                         onClick={() => handleAddToPlaylist(playlist.id)}
//                       >
//                         Add
//                       </Button>
//                     ]}
//                   >
//                     <List.Item.Meta
//                       avatar={<Avatar icon={<FolderOutlined />} />}
//                       title={playlist.name}
//                       description={`${playlist.videos.length} videos`}
//                     />
//                   </List.Item>
//                 )}
//               />
//             </TabPane>
//             <TabPane 
//               tab="Create New Playlist" 
//               key="create"
//             >
//               <Form
//                 layout="vertical"
//                 onFinish={handleCreatePlaylist}
//               >
//                 <Form.Item
//                   name="name"
//                   label="Playlist Name"
//                   rules={[{ required: true, message: 'Please enter a playlist name' }]}
//                 >
//                   <Input placeholder="Enter playlist name" />
//                 </Form.Item>
                
//                 <Form.Item
//                   name="description"
//                   label="Description"
//                 >
//                   <TextArea 
//                     placeholder="Enter playlist description" 
//                     rows={4}
//                   />
//                 </Form.Item>
                
//                 <Form.Item>
//                   <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
//                     Create Playlist
//                   </Button>
//                 </Form.Item>
//               </Form>
//             </TabPane>
//           </Tabs>
//         </Drawer>
//       </Content>
//     </Layout>
//   );
// };

// export default TeacherVideoManagement;








import React, { useState, useEffect, useRef } from "react";
import { 
  Layout, 
  Typography, 
  Form, 
  Input, 
  Button, 
  List, 
  Card, 
  Modal, 
  message, 
  Upload, 
  Space, 
  Spin, 
  Tooltip, 
  Divider,
  Tag,
  Select,
  Row,
  Col,
  Statistic,
  Progress,
  Tabs,
  Table,
  Dropdown,
  Menu,
  Switch,
  DatePicker,
  InputNumber,
  Popconfirm,
  Badge,
  Avatar,
  Empty,
  Drawer,
  Alert,
  Radio
} from "antd";
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  UploadOutlined, 
  PlayCircleOutlined,
  VideoCameraOutlined,
  SearchOutlined,
  FilterOutlined,
  EyeOutlined,
  DownloadOutlined,
  ShareAltOutlined,
  TagOutlined,
  FolderOutlined,
  BarChartOutlined,
  ClockCircleOutlined,
  StarOutlined,
  StarFilled,
  SettingOutlined,
  UserOutlined,
  LockOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  PieChartOutlined,
  LineChartOutlined,
  FileTextOutlined,
  CopyOutlined,
  CalendarOutlined,
  TeamOutlined,
  BulbOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  MenuOutlined,
  AppstoreOutlined
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Content, Sider } = Layout;
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Option } = Select;

// Mock categories for demonstration
const CATEGORIES = [
  { id: '1', name: 'Mathematics' },
  { id: '2', name: 'Science' },
  { id: '3', name: 'Language Arts' },
  { id: '4', name: 'History' },
  { id: '5', name: 'Computer Science' },
  { id: '6', name: 'Art & Music' },
  { id: '7', name: 'Physical Education' },
  { id: '8', name: 'Foreign Languages' }
];

// Mock tags for demonstration
const TAGS = [
  'Beginner', 'Intermediate', 'Advanced', 
  'Homework', 'Lecture', 'Tutorial', 
  'Quiz', 'Exam Prep', 'Project', 
  'Lab', 'Discussion', 'Review'
];

// Privacy options
const PRIVACY_OPTIONS = [
  { value: 'public', label: 'Public', icon: <GlobalOutlined /> },
  { value: 'unlisted', label: 'Unlisted', icon: <LockOutlined /> },
  { value: 'private', label: 'Private', icon: <UserOutlined /> }
];

const TeacherVideoManagement = () => {
  // State variables
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewVideo, setPreviewVideo] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [statsDrawerOpen, setStatsDrawerOpen] = useState(false);
  const [currentStats, setCurrentStats] = useState(null);
  const [batchActionDrawer, setBatchActionDrawer] = useState(false);
  const [playlistDrawer, setPlaylistDrawer] = useState(false);
  const [playlists, setPlaylists] = useState([
    { id: '1', name: 'Course Introduction', videos: ['1'] },
    { id: '2', name: 'Weekly Lectures', videos: ['2'] },
    { id: '3', name: 'Review Materials', videos: [] }
  ]);
  const [analyticsData, setAnalyticsData] = useState({
    totalViews: 1245,
    totalVideos: 0,
    averageWatchTime: '4:32',
    topCategories: [
      { name: 'Mathematics', count: 12 },
      { name: 'Science', count: 8 },
      { name: 'Language Arts', count: 5 }
    ],
    viewsOverTime: [
      { date: '2023-01-01', views: 45 },
      { date: '2023-01-02', views: 52 },
      { date: '2023-01-03', views: 38 },
      { date: '2023-01-04', views: 65 },
      { date: '2023-01-05', views: 48 }
    ]
  });

  const videoInputRef = useRef(null);

  // Fetch videos on component mount
  useEffect(() => {
    fetchVideos();
  }, []);

  // Update analytics when videos change
  useEffect(() => {
    setAnalyticsData(prev => ({
      ...prev,
      totalVideos: videos.length
    }));
  }, [videos]);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll use mock data
      setTimeout(() => {
        const mockVideos = [
          {
            id: '1',
            title: 'Introduction to Algebra',
            description: 'Learn the basics of algebraic expressions and equations.',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
            createdAt: '2023-01-15T12:00:00Z',
            updatedAt: '2023-01-15T12:00:00Z',
            duration: '15:30',
            views: 245,
            category: '1',
            tags: ['Beginner', 'Lecture'],
            privacy: 'public',
            featured: true,
            transcriptAvailable: true,
            downloadable: true,
            size: '45MB',
            format: 'MP4',
            resolution: '1080p',
            comments: [
              { id: '1', user: 'Student1', text: 'Great explanation!', date: '2023-01-16T10:30:00Z' },
              { id: '2', user: 'Student2', text: 'Could you clarify the second example?', date: '2023-01-17T14:15:00Z' }
            ],
            analytics: {
              viewsOverTime: [
                { date: '2023-01-15', views: 45 },
                { date: '2023-01-16', views: 78 },
                { date: '2023-01-17', views: 62 },
                { date: '2023-01-18', views: 35 },
                { date: '2023-01-19', views: 25 }
              ],
              averageWatchTime: '12:45',
              completionRate: 78,
              engagementRate: 85,
              peakViewingTimes: [
                { hour: 9, count: 45 },
                { hour: 14, count: 67 },
                { hour: 19, count: 52 }
              ]
            }
          },
          {
            id: '2',
            title: 'Cell Biology Fundamentals',
            description: 'Explore the structure and function of cells, the building blocks of life.',
            url: 'https://www.youtube.com/watch?v=URUJD5NEXC8',
            thumbnail: 'https://img.youtube.com/vi/URUJD5NEXC8/hqdefault.jpg',
            createdAt: '2023-01-20T14:30:00Z',
            updatedAt: '2023-01-21T09:15:00Z',
            duration: '22:15',
            views: 189,
            category: '2',
            tags: ['Intermediate', 'Lecture', 'Lab'],
            privacy: 'public',
            featured: false,
            transcriptAvailable: true,
            downloadable: true,
            size: '78MB',
            format: 'MP4',
            resolution: '720p',
            comments: [
              { id: '3', user: 'Student3', text: 'The diagrams were very helpful!', date: '2023-01-22T11:20:00Z' }
            ],
            analytics: {
              viewsOverTime: [
                { date: '2023-01-20', views: 35 },
                { date: '2023-01-21', views: 42 },
                { date: '2023-01-22', views: 58 },
                { date: '2023-01-23', views: 32 },
                { date: '2023-01-24', views: 22 }
              ],
              averageWatchTime: '18:30',
              completionRate: 82,
              engagementRate: 79,
              peakViewingTimes: [
                { hour: 10, count: 38 },
                { hour: 15, count: 55 },
                { hour: 20, count: 46 }
              ]
            }
          },
          {
            id: '3',
            title: 'Essay Writing Techniques',
            description: 'Master the art of writing compelling essays with these proven techniques.',
            url: 'https://www.youtube.com/watch?v=1lTcgSzf0AQ',
            thumbnail: 'https://img.youtube.com/vi/1lTcgSzf0AQ/hqdefault.jpg',
            createdAt: '2023-01-25T10:45:00Z',
            updatedAt: '2023-01-25T10:45:00Z',
            duration: '18:45',
            views: 156,
            category: '3',
            tags: ['Advanced', 'Tutorial', 'Homework'],
            privacy: 'unlisted',
            featured: false,
            transcriptAvailable: false,
            downloadable: false,
            size: '65MB',
            format: 'MP4',
            resolution: '1080p',
            comments: [],
            analytics: {
              viewsOverTime: [
                { date: '2023-01-25', views: 28 },
                { date: '2023-01-26', views: 45 },
                { date: '2023-01-27', views: 38 },
                { date: '2023-01-28', views: 25 },
                { date: '2023-01-29', views: 20 }
              ],
              averageWatchTime: '15:20',
              completionRate: 75,
              engagementRate: 72,
              peakViewingTimes: [
                { hour: 11, count: 32 },
                { hour: 16, count: 48 },
                { hour: 21, count: 39 }
              ]
            }
          }
        ];
        setVideos(mockVideos);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching videos:', error);
      message.error('An error occurred while fetching videos');
      setLoading(false);
    }
  };

  // CRUD Operations
  const handleAddVideo = () => {
    setCurrentVideo(null);
    setFileList([]);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEditVideo = (video) => {
    setCurrentVideo(video);
    form.setFieldsValue({
      title: video.title,
      description: video.description,
      url: video.url,
      category: video.category,
      tags: video.tags,
      privacy: video.privacy,
      featured: video.featured,
      downloadable: video.downloadable,
      transcriptAvailable: video.transcriptAvailable
    });
    setFileList([]);
    setIsModalOpen(true);
  };

  const handleDeleteVideo = (id) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this video?',
      content: 'This action cannot be undone.',
      okText: 'Yes, Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: async () => {
        try {
          // In a real app, this would be an API call
          setVideos(videos.filter(video => video.id !== id));
          message.success('Video deleted successfully');
        } catch (error) {
          console.error('Error deleting video:', error);
          message.error('An error occurred while deleting the video');
        }
      },
    });
  };

  const handleBatchDelete = () => {
    if (selectedRowKeys.length === 0) {
      message.warning('Please select videos to delete');
      return;
    }

    Modal.confirm({
      title: `Are you sure you want to delete ${selectedRowKeys.length} videos?`,
      content: 'This action cannot be undone.',
      okText: 'Yes, Delete All',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: async () => {
        try {
          // In a real app, this would be an API call
          setVideos(videos.filter(video => !selectedRowKeys.includes(video.id)));
          setSelectedRowKeys([]);
          message.success(`${selectedRowKeys.length} videos deleted successfully`);
          setBatchActionDrawer(false);
        } catch (error) {
          console.error('Error deleting videos:', error);
          message.error('An error occurred while deleting the videos');
        }
      },
    });
  };

  const handleBatchCategorize = (categoryId) => {
    if (selectedRowKeys.length === 0) {
      message.warning('Please select videos to categorize');
      return;
    }

    try {
      // In a real app, this would be an API call
      const updatedVideos = videos.map(video => {
        if (selectedRowKeys.includes(video.id)) {
          return { ...video, category: categoryId };
        }
        return video;
      });
      
      setVideos(updatedVideos);
      message.success(`${selectedRowKeys.length} videos categorized successfully`);
      setBatchActionDrawer(false);
    } catch (error) {
      console.error('Error categorizing videos:', error);
      message.error('An error occurred while categorizing the videos');
    }
  };

  const handleBatchPrivacy = (privacy) => {
    if (selectedRowKeys.length === 0) {
      message.warning('Please select videos to update');
      return;
    }

    try {
      // In a real app, this would be an API call
      const updatedVideos = videos.map(video => {
        if (selectedRowKeys.includes(video.id)) {
          return { ...video, privacy };
        }
        return video;
      });
      
      setVideos(updatedVideos);
      message.success(`Privacy updated for ${selectedRowKeys.length} videos`);
      setBatchActionDrawer(false);
    } catch (error) {
      console.error('Error updating video privacy:', error);
      message.error('An error occurred while updating video privacy');
    }
  };

  const handleAddToPlaylist = (playlistId) => {
    if (selectedRowKeys.length === 0) {
      message.warning('Please select videos to add to playlist');
      return;
    }

    try {
      // In a real app, this would be an API call
      const updatedPlaylists = playlists.map(playlist => {
        if (playlist.id === playlistId) {
          const updatedVideos = [...new Set([...playlist.videos, ...selectedRowKeys])];
          return { ...playlist, videos: updatedVideos };
        }
        return playlist;
      });
      
      setPlaylists(updatedPlaylists);
      message.success(`${selectedRowKeys.length} videos added to playlist`);
      setPlaylistDrawer(false);
    } catch (error) {
      console.error('Error adding videos to playlist:', error);
      message.error('An error occurred while adding videos to playlist');
    }
  };

  const handleCreatePlaylist = (values) => {
    try {
      const newPlaylist = {
        id: `playlist-${Date.now()}`,
        name: values.name,
        description: values.description || '',
        videos: selectedRowKeys
      };
      
      setPlaylists([...playlists, newPlaylist]);
      message.success('Playlist created successfully');
      setPlaylistDrawer(false);
    } catch (error) {
      console.error('Error creating playlist:', error);
      message.error('An error occurred while creating playlist');
    }
  };

  const handlePreview = (video) => {
    setPreviewVideo(video);
    setPreviewOpen(true);
  };

  const handleViewStats = (video) => {
    setCurrentStats(video);
    setStatsDrawerOpen(true);
  };

  const handleToggleFeatured = (video) => {
    try {
      // In a real app, this would be an API call
      const updatedVideos = videos.map(v => {
        if (v.id === video.id) {
          return { ...v, featured: !v.featured };
        }
        return v;
      });
      
      setVideos(updatedVideos);
      message.success(`Video ${!video.featured ? 'featured' : 'unfeatured'} successfully`);
    } catch (error) {
      console.error('Error updating video featured status:', error);
      message.error('An error occurred while updating video featured status');
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setFileList([]);
  };

  const handleFormSubmit = async (values) => {
    setUploadLoading(true);
    try {
      // In a real app, this would be an API call with FormData
      setTimeout(() => {
        if (currentVideo) {
          // Update existing video
          const updatedVideos = videos.map(video => {
            if (video.id === currentVideo.id) {
              return {
                ...video,
                title: values.title,
                description: values.description || '',
                url: values.url || video.url,
                category: values.category,
                tags: values.tags || [],
                privacy: values.privacy,
                featured: values.featured,
                downloadable: values.downloadable,
                transcriptAvailable: values.transcriptAvailable,
                updatedAt: new Date().toISOString()
              };
            }
            return video;
          });
          
          setVideos(updatedVideos);
          message.success('Video updated successfully');
        } else {
          // Create new video
          const newVideo = {
            id: `video-${Date.now()}`,
            title: values.title,
            description: values.description || '',
            url: values.url || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Default for demo
            thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Default for demo
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            duration: '10:00', // Default for demo
            views: 0,
            category: values.category,
            tags: values.tags || [],
            privacy: values.privacy,
            featured: values.featured,
            downloadable: values.downloadable,
            transcriptAvailable: values.transcriptAvailable,
            size: '50MB', // Default for demo
            format: 'MP4', // Default for demo
            resolution: '1080p', // Default for demo
            comments: [],
            analytics: {
              viewsOverTime: [{ date: new Date().toISOString().split('T')[0], views: 0 }],
              averageWatchTime: '0:00',
              completionRate: 0,
              engagementRate: 0,
              peakViewingTimes: []
            }
          };
          
          setVideos([...videos, newVideo]);
          message.success('Video added successfully');
        }
        
        setIsModalOpen(false);
        form.resetFields();
        setFileList([]);
        setUploadLoading(false);
      }, 1500);
    } catch (error) {
      console.error(`Error ${currentVideo ? 'updating' : 'adding'} video:`, error);
      message.error(`An error occurred while ${currentVideo ? 'updating' : 'adding'} the video`);
      setUploadLoading(false);
    }
  };

  // Utility functions
  const getCategoryName = (categoryId) => {
    const category = CATEGORIES.find(cat => cat.id === categoryId);
    return category ? category.name : 'Uncategorized';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (timeString) => {
    return timeString || '00:00';
  };

  const getPrivacyIcon = (privacy) => {
    switch (privacy) {
      case 'public':
        return <GlobalOutlined />;
      case 'unlisted':
        return <LockOutlined />;
      case 'private':
        return <UserOutlined />;
      default:
        return <GlobalOutlined />;
    }
  };

  const getPrivacyColor = (privacy) => {
    switch (privacy) {
      case 'public':
        return 'green';
      case 'unlisted':
        return 'blue';
      case 'private':
        return 'red';
      default:
        return 'default';
    }
  };

  // Filter and sort functions
  const filteredVideos = videos
    .filter(video => {
      // Search filter
      const searchMatch = searchText === '' || 
        video.title.toLowerCase().includes(searchText.toLowerCase()) ||
        video.description.toLowerCase().includes(searchText.toLowerCase());
      
      // Category filter
      const categoryMatch = filterCategory === 'all' || video.category === filterCategory;
      
      return searchMatch && categoryMatch;
    })
    .sort((a, b) => {
      // Sort order
      switch (sortOrder) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'most-viewed':
          return b.views - a.views;
        case 'least-viewed':
          return a.views - b.views;
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  // Upload props
  const uploadProps = {
    onRemove: () => {
      setFileList([]);
    },
    beforeUpload: (file) => {
      // Check file type
      const isVideo = file.type.startsWith('video/');
      if (!isVideo) {
        message.error('You can only upload video files!');
        return false;
      }
      
      // Check file size (100MB limit)
      const isLt100M = file.size / 1024 / 1024 < 100;
      if (!isLt100M) {
        message.error('Video must be smaller than 100MB!');
        return false;
      }
      
      setFileList([file]);
      return false;
    },
    fileList,
  };

  // Table columns for list view
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div 
            style={{ 
              width: 80, 
              height: 45, 
              marginRight: 12, 
              background: '#f0f0f0', 
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            <img 
              src={record.thumbnail || "/placeholder.svg"} 
              alt={text}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div style={{ fontWeight: 500 }}>{text}</div>
            <div style={{ fontSize: 12, color: '#888' }}>
              {formatTime(record.duration)} • {record.views} views
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: categoryId => (
        <Tag color="blue">{getCategoryName(categoryId)}</Tag>
      ),
    },
    {
      title: 'Privacy',
      dataIndex: 'privacy',
      key: 'privacy',
      render: privacy => (
        <Tag color={getPrivacyColor(privacy)} icon={getPrivacyIcon(privacy)}>
          {privacy.charAt(0).toUpperCase() + privacy.slice(1)}
        </Tag>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: date => formatDate(date),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="small">
          <Button 
            type="text" 
            icon={<EyeOutlined />} 
            onClick={() => handlePreview(record)}
          />
          <Button 
            type="text" 
            icon={<BarChartOutlined />} 
            onClick={() => handleViewStats(record)}
          />
          <Button 
            type="text" 
            icon={<EditOutlined />} 
            onClick={() => handleEditVideo(record)}
          />
          <Button 
            type="text" 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => handleDeleteVideo(record.id)}
          />
        </Space>
      ),
    },
  ];

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      <Content style={{ padding: '20px' }}>
        <div style={{ marginBottom: 24 }}>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <Title level={2} style={{ margin: 0 }}>
                <VideoCameraOutlined style={{ marginRight: 8 }} />
                Teacher Video Management
              </Title>
            </Col>
            <Col xs={24} md={12} style={{ textAlign: 'right' }}>
              <Space>
                <Button 
                  type="primary" 
                  icon={<PlusOutlined />} 
                  onClick={handleAddVideo}
                  size="large"
                >
                  Add New Video
                </Button>
                {selectedRowKeys.length > 0 && (
                  <Button 
                    type="default" 
                    onClick={() => setBatchActionDrawer(true)}
                    size="large"
                  >
                    Batch Actions ({selectedRowKeys.length})
                  </Button>
                )}
              </Space>
            </Col>
          </Row>
        </div>

        <Tabs defaultActiveKey="videos" style={{ marginBottom: 16 }}>
          <TabPane 
            tab={
              <span>
                <VideoCameraOutlined />
                Videos
              </span>
            } 
            key="videos"
          >
            <div style={{ marginBottom: 16 }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}>
                  <Input
                    placeholder="Search videos..."
                    prefix={<SearchOutlined />}
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    allowClear
                  />
                </Col>
                <Col xs={24} md={6}>
                  <Select
                    placeholder="Filter by category"
                    style={{ width: '100%' }}
                    value={filterCategory}
                    onChange={setFilterCategory}
                  >
                    <Option value="all">All Categories</Option>
                    {CATEGORIES.map(category => (
                      <Option key={category.id} value={category.id}>
                        {category.name}
                      </Option>
                    ))}
                  </Select>
                </Col>
                <Col xs={24} md={6}>
                  <Select
                    placeholder="Sort by"
                    style={{ width: '100%' }}
                    value={sortOrder}
                    onChange={setSortOrder}
                  >
                    <Option value="newest">Newest First</Option>
                    <Option value="oldest">Oldest First</Option>
                    <Option value="title-asc">Title (A-Z)</Option>
                    <Option value="title-desc">Title (Z-A)</Option>
                    <Option value="most-viewed">Most Viewed</Option>
                    <Option value="least-viewed">Least Viewed</Option>
                  </Select>
                </Col>
                <Col xs={24} md={4} style={{ textAlign: 'right' }}>
                  <Radio.Group 
                    value={viewMode} 
                    onChange={e => setViewMode(e.target.value)}
                    buttonStyle="solid"
                   
                  >
                    <Radio.Button value="grid">
                      <AppstoreOutlined />
                    </Radio.Button>
                    <Radio.Button value="list">
                      <MenuOutlined />
                    </Radio.Button>
                  </Radio.Group>
                </Col>
              </Row>
            </div>

            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
                <Spin size="large" tip="Loading videos..." />
              </div>
            ) : filteredVideos.length === 0 ? (
              <Empty 
                description="No videos found" 
                image={Empty.PRESENTED_IMAGE_SIMPLE} 
              />
            ) : viewMode === 'grid' ? (
              <List
                grid={{ 
                  gutter: 16, 
                  xs: 1, 
                  sm: 2, 
                  md: 2, 
                  lg: 3, 
                  xl: 4, 
                  xxl: 4 
                }}
                dataSource={filteredVideos}
                renderItem={(video) => (
                  <List.Item>
                    <Card
                      hoverable
                      cover={
                        <div 
                          style={{ 
                            height: 180, 
                            background: '#f0f0f0', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                          }}
                          onClick={() => handlePreview(video)}
                        >
                          <img 
                            alt={video.title} 
                            src={video.thumbnail || "/placeholder.svg"} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div style={{ 
                            position: 'absolute', 
                            bottom: 8, 
                            right: 8, 
                            background: 'rgba(0,0,0,0.75)', 
                            color: 'white',
                            padding: '2px 6px',
                            borderRadius: 4,
                            fontSize: 12
                          }}>
                            {formatTime(video.duration)}
                          </div>
                          {video.featured && (
                            <div style={{ 
                              position: 'absolute', 
                              top: 8, 
                              left: 8, 
                              background: '#ff4d4f', 
                              color: 'white',
                              padding: '2px 6px',
                              borderRadius: 4,
                              fontSize: 12
                            }}>
                              Featured
                            </div>
                          )}
                        </div>
                      }
                      actions={[
                        <Tooltip title="Preview" key="preview">
                          <Button 
                            type="text" 
                            icon={<PlayCircleOutlined />} 
                            onClick={() => handlePreview(video)}
                          />
                        </Tooltip>,
                        <Tooltip title={video.featured ? "Unfeature" : "Feature"} key="feature">
                          <Button 
                            type="text" 
                            icon={video.featured ? <StarFilled style={{ color: '#faad14' }} /> : <StarOutlined />} 
                            onClick={() => handleToggleFeatured(video)}
                          />
                        </Tooltip>,
                        <Tooltip title="Analytics" key="analytics">
                          <Button 
                            type="text" 
                            icon={<BarChartOutlined />} 
                            onClick={() => handleViewStats(video)}
                          />
                        </Tooltip>,
                        <Dropdown
                          key="more"
                          menu={{
                            items: [
                              {
                                key: 'edit',
                                label: 'Edit',
                                icon: <EditOutlined />,
                                onClick: () => handleEditVideo(video)
                              },
                              {
                                key: 'delete',
                                label: 'Delete',
                                icon: <DeleteOutlined />,
                                danger: true,
                                onClick: () => handleDeleteVideo(video.id)
                              },
                              {
                                key: 'share',
                                label: 'Share',
                                icon: <ShareAltOutlined />
                              },
                              {
                                key: 'download',
                                label: 'Download',
                                icon: <DownloadOutlined />,
                                disabled: !video.downloadable
                              }
                            ]
                          }}
                          placement="bottomRight"
                          trigger={['click']}
                        >
                          <Button type="text" icon={<SettingOutlined />} />
                        </Dropdown>
                      ]}
                    >
                      <Card.Meta
                        title={
                          <Tooltip title={video.title}>
                            <div style={{ 
                              whiteSpace: 'nowrap', 
                              overflow: 'hidden', 
                              textOverflow: 'ellipsis' 
                            }}>
                              {video.title}
                            </div>
                          </Tooltip>
                        }
                        description={
                          <div>
                            <div style={{ marginBottom: 8 }}>
                              <Text type="secondary" style={{ fontSize: 12 }}>
                                {video.views} views • {formatDate(video.createdAt)}
                              </Text>
                            </div>
                            <div style={{ marginBottom: 8 }}>
                              <Tag color="blue">{getCategoryName(video.category)}</Tag>
                              <Tag color={getPrivacyColor(video.privacy)} icon={getPrivacyIcon(video.privacy)}>
                                {video.privacy.charAt(0).toUpperCase() + video.privacy.slice(1)}
                              </Tag>
                            </div>
                          </div>
                        }
                      />
                    </Card>
                  </List.Item>
                )}
              />
            ) : (
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={filteredVideos}
                rowKey="id"
                pagination={{ pageSize: 10 }}
              />
            )}
          </TabPane>
          <TabPane 
            tab={
              <span>
                <BarChartOutlined />
                Analytics
              </span>
            } 
            key="analytics"
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} md={6}>
                <Card>
                  <Statistic
                    title="Total Videos"
                    value={videos.length}
                    prefix={<VideoCameraOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} md={6}>
                <Card>
                  <Statistic
                    title="Total Views"
                    value={analyticsData.totalViews}
                    prefix={<EyeOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} md={6}>
                <Card>
                  <Statistic
                    title="Average Watch Time"
                    value={analyticsData.averageWatchTime}
                    prefix={<ClockCircleOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} md={6}>
                <Card>
                  <Statistic
                    title="Featured Videos"
                    value={videos.filter(v => v.featured).length}
                    prefix={<StarFilled />}
                  />
                </Card>
              </Col>
            </Row>
            
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              <Col xs={24} md={12}>
                <Card title="Top Categories">
                  {analyticsData.topCategories.map((category, index) => (
                    <div key={index} style={{ marginBottom: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <Text>{category.name}</Text>
                        <Text>{category.count} videos</Text>
                      </div>
                      <Progress 
                        percent={Math.round((category.count / videos.length) * 100)} 
                        showInfo={false} 
                        strokeColor={index === 0 ? '#1890ff' : index === 1 ? '#52c41a' : '#faad14'} 
                      />
                    </div>
                  ))}
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title="Recent Activity">
                  <List
                    size="small"
                    dataSource={videos.slice(0, 5)}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src={item.thumbnail} />}
                          title={item.title}
                          description={`${item.views} views • ${formatDate(item.createdAt)}`}
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane 
            tab={
              <span>
                <FolderOutlined />
                Playlists
              </span>
            } 
            key="playlists"
          >
            <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
              <Col xs={24}>
                <Button 
                  type="primary" 
                  icon={<PlusOutlined />} 
                  onClick={() => {
                    setSelectedRowKeys([]);
                    setPlaylistDrawer(true);
                  }}
                >
                  Create New Playlist
                </Button>
              </Col>
            </Row>
            
            <List
              grid={{ 
                gutter: 16, 
                xs: 1, 
                sm: 2, 
                md: 3, 
                lg: 4
              }}
              dataSource={playlists}
              renderItem={playlist => (
                <List.Item>
                  <Card
                    hoverable
                    cover={
                      <div style={{ 
                        height: 140, 
                        background: '#f0f0f0', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        padding: 16
                      }}>
                        <FolderOutlined style={{ fontSize: 64, color: '#1890ff' }} />
                      </div>
                    }
                    actions={[
                      <Button key="edit" type="text" icon={<EditOutlined />} />,
                      <Button key="delete" type="text" danger icon={<DeleteOutlined />} />
                    ]}
                  >
                    <Card.Meta
                      title={playlist.name}
                      description={`${playlist.videos.length} videos`}
                    />
                  </Card>
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>

        {/* Add/Edit Video Modal */}
        <Modal
          title={currentVideo ? 'Edit Video' : 'Add New Video'}
          open={isModalOpen}
          onCancel={handleModalCancel}
          footer={null}
          width={800}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFormSubmit}
            disabled={uploadLoading}
            initialValues={{
              privacy: 'public',
              featured: false,
              downloadable: true,
              transcriptAvailable: false
            }}
          >
            <Tabs defaultActiveKey="basic">
              <TabPane 
                tab={
                  <span>
                    <InfoCircleOutlined />
                    Basic Information
                  </span>
                } 
                key="basic"
              >
                <Form.Item
                  name="title"
                  label="Video Title"
                  rules={[{ required: true, message: 'Please enter a title for the video' }]}
                >
                  <Input placeholder="Enter video title" />
                </Form.Item>
                
                <Form.Item
                  name="description"
                  label="Description"
                >
                  <TextArea 
                    placeholder="Enter video description" 
                    rows={4}
                  />
                </Form.Item>
                
                <Form.Item
                  name="category"
                  label="Category"
                  rules={[{ required: true, message: 'Please select a category' }]}
                >
                  <Select placeholder="Select a category">
                    {CATEGORIES.map(category => (
                      <Option key={category.id} value={category.id}>
                        {category.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                
                <Form.Item
                  name="tags"
                  label="Tags"
                >
                  <Select
                    mode="multiple"
                    placeholder="Select tags"
                    style={{ width: '100%' }}
                  >
                    {TAGS.map(tag => (
                      <Option key={tag} value={tag}>
                        {tag}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </TabPane>
              
              <TabPane 
                tab={
                  <span>
                    <UploadOutlined />
                    Video Upload
                  </span>
                } 
                key="upload"
              >
                <div style={{ marginBottom: 16 }}>
                  <Upload {...uploadProps} maxCount={1}>
                    <Button icon={<UploadOutlined />} ref={videoInputRef}>
                      Select Video File
                    </Button>
                  </Upload>
                </div>
                
                <Divider plain>Or</Divider>
                
                <Form.Item 
                  name="url" 
                  label="Video URL"
                  rules={[
                    { 
                      validator: (_, value) => {
                        if (!value && fileList.length === 0 && !currentVideo) {
                          return Promise.reject('Please either upload a video or provide a URL');
                        }
                        return Promise.resolve();
                      }
                    }
                  ]}
                >
                  <Input 
                    placeholder="Enter video URL (YouTube, Vimeo, etc.)" 
                    disabled={fileList.length > 0}
                  />
                </Form.Item>
              </TabPane>
              
              <TabPane 
                tab={
                  <span>
                    <SettingOutlined />
                    Settings
                  </span>
                } 
                key="settings"
              >
                <Form.Item
                  name="privacy"
                  label="Privacy"
                >
                  <Radio.Group>
                    {PRIVACY_OPTIONS.map(option => (
                      <Radio key={option.value} value={option.value}>
                        {option.icon} {option.label}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>
                
                <Form.Item
                  name="featured"
                  valuePropName="checked"
                  label="Featured Video"
                >
                  <Switch />
                </Form.Item>
                
                <Form.Item
                  name="downloadable"
                  valuePropName="checked"
                  label="Allow Downloads"
                >
                  <Switch />
                </Form.Item>
                
                <Form.Item
                  name="transcriptAvailable"
                  valuePropName="checked"
                  label="Transcript Available"
                >
                  <Switch />
                </Form.Item>
              </TabPane>
            </Tabs>
            
            <Form.Item style={{ marginBottom: 0, marginTop: 16, textAlign: 'right' }}>
              <Space>
                <Button onClick={handleModalCancel}>
                  Cancel
                </Button>
                <Button 
                  type="primary" 
                  htmlType="submit"
                  loading={uploadLoading}
                >
                  {currentVideo ? 'Update' : 'Upload'} Video
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>

        {/* Video Preview Modal */}
        <Modal
          title={previewVideo?.title}
          open={previewOpen}
          onCancel={() => setPreviewOpen(false)}
          footer={null}
          width={800}
        >
          {previewVideo && (
            <div>
              <div style={{ aspectRatio: '16/9', background: '#000', marginBottom: 16 }}>
                {previewVideo.url.includes('youtube.com') || previewVideo.url.includes('youtu.be') ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={previewVideo.url.replace('watch?v=', 'embed/')}
                    title={previewVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    controls
                    width="100%"
                    height="100%"
                    src={previewVideo.url}
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              
              <Title level={4}>{previewVideo.title}</Title>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <Text type="secondary">
                  {previewVideo.views} views • {formatDate(previewVideo.createdAt)}
                </Text>
                <Space>
                  <Button icon={<ShareAltOutlined />}>Share</Button>
                  {previewVideo.downloadable && (
                    <Button icon={<DownloadOutlined />}>Download</Button>
                  )}
                </Space>
              </div>
              
              <div style={{ marginBottom: 16 }}>
                <Tag color="blue">{getCategoryName(previewVideo.category)}</Tag>
                {previewVideo.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              
              <Divider />
              
              <Paragraph>{previewVideo.description || 'No description provided.'}</Paragraph>
              
              {previewVideo.transcriptAvailable && (
                <>
                  <Divider />
                  <Title level={5}><FileTextOutlined /> Transcript</Title>
                  <Paragraph>
                    Transcript content would appear here. This is a placeholder for demonstration purposes.
                  </Paragraph>
                </>
              )}
              
              {previewVideo.comments.length > 0 && (
                <>
                  <Divider />
                  <Title level={5}>Comments ({previewVideo.comments.length})</Title>
                  <List
                    itemLayout="horizontal"
                    dataSource={previewVideo.comments}
                    renderItem={comment => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar icon={<UserOutlined />} />}
                          title={comment.user}
                          description={
                            <>
                              <div>{comment.text}</div>
                              <div style={{ fontSize: 12, color: '#888' }}>
                                {formatDate(comment.date)}
                              </div>
                            </>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </>
              )}
            </div>
          )}
        </Modal>

        {/* Analytics Drawer */}
        <Drawer
          title={`Analytics: ${currentStats?.title || ''}`}
          placement="right"
          onClose={() => setStatsDrawerOpen(false)}
          open={statsDrawerOpen}
          width={600}
        >
          {currentStats && (
            <div>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Statistic
                    title="Total Views"
                    value={currentStats.views}
                    prefix={<EyeOutlined />}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="Average Watch Time"
                    value={currentStats.analytics.averageWatchTime}
                    prefix={<ClockCircleOutlined />}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="Completion Rate"
                    value={currentStats.analytics.completionRate}
                    suffix="%"
                    prefix={<CheckCircleOutlined />}
                  />
                </Col>
              </Row>
              
              <Divider />
              
              <Title level={5}><LineChartOutlined /> Views Over Time</Title>
              <div style={{ height: 200, background: '#f0f0f0', marginBottom: 24, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text type="secondary">Chart visualization would appear here</Text>
              </div>
              
              <Title level={5}><PieChartOutlined /> Engagement Metrics</Title>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Card title="Engagement Rate" size="small">
                    <Progress 
                      type="circle" 
                      percent={currentStats.analytics.engagementRate} 
                      width={80}
                    />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Peak Viewing Times" size="small">
                    <div style={{ height: 80, background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Text type="secondary">Time chart would appear here</Text>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          )}
        </Drawer>

        {/* Batch Actions Drawer */}
        <Drawer
          title={`Batch Actions (${selectedRowKeys.length} videos selected)`}
          placement="right"
          onClose={() => setBatchActionDrawer(false)}
          open={batchActionDrawer}
          width={400}
        >
          <div style={{ marginBottom: 24 }}>
            <Alert
              message="Warning"
              description="Batch actions will be applied to all selected videos."
              type="warning"
              showIcon
              style={{ marginBottom: 16 }}
            />
            
            <Button 
              danger 
              icon={<DeleteOutlined />} 
              onClick={handleBatchDelete}
              style={{ width: '100%', marginBottom: 16 }}
              size="large"
            >
              Delete Selected Videos
            </Button>
            
            <Divider>Categorize</Divider>
            
            <Select
              placeholder="Select category"
              style={{ width: '100%', marginBottom: 16 }}
              onChange={handleBatchCategorize}
            >
              {CATEGORIES.map(category => (
                <Option key={category.id} value={category.id}>
                  {category.name}
                </Option>
              ))}
            </Select>
            
            <Divider>Privacy Settings</Divider>
            
            <Space direction="vertical" style={{ width: '100%' }}>
              {PRIVACY_OPTIONS.map(option => (
                <Button 
                  key={option.value}
                  icon={option.icon}
                  onClick={() => handleBatchPrivacy(option.value)}
                  style={{ width: '100%' }}
                >
                  Set as {option.label}
                </Button>
              ))}
            </Space>
            
            <Divider>Playlists</Divider>
            
            <Button 
              icon={<FolderOutlined />} 
              onClick={() => setPlaylistDrawer(true)}
              style={{ width: '100%' }}
            >
              Add to Playlist
            </Button>
          </div>
        </Drawer>

        {/* Playlist Drawer */}
        <Drawer
          title="Playlists"
          placement="right"
          onClose={() => setPlaylistDrawer(false)}
          open={playlistDrawer}
          width={400}
        >
          <Tabs defaultActiveKey="existing">
            <TabPane 
              tab="Existing Playlists" 
              key="existing"
            >
              <List
                dataSource={playlists}
                renderItem={playlist => (
                  <List.Item
                    actions={[
                      <Button 
                        key="add" 
                        type="primary" 
                        size="small"
                        onClick={() => handleAddToPlaylist(playlist.id)}
                      >
                        Add
                      </Button>
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar icon={<FolderOutlined />} />}
                      title={playlist.name}
                      description={`${playlist.videos.length} videos`}
                    />
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane 
              tab="Create New Playlist" 
              key="create"
            >
              <Form
                layout="vertical"
                onFinish={handleCreatePlaylist}
              >
                <Form.Item
                  name="name"
                  label="Playlist Name"
                  rules={[{ required: true, message: 'Please enter a playlist name' }]}
                >
                  <Input placeholder="Enter playlist name" />
                </Form.Item>
                
                <Form.Item
                  name="description"
                  label="Description"
                >
                  <TextArea 
                    placeholder="Enter playlist description" 
                    rows={4}
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    Create Playlist
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </Drawer>
      </Content>
    </Layout>
  );
};

export default TeacherVideoManagement;
