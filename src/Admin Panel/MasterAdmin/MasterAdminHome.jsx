// // import React from 'react';
// // import { Box, Heading, Text, Button, VStack, HStack, Flex, Stack } from '@chakra-ui/react';
// // import { FaUsers, FaChartBar, FaCog } from 'react-icons/fa';


// // const MasterAdminHome = () => {
// //     return (
// //         <Flex minH="100vh" flexDirection={{ base: 'column', md: 'row' }}>
     

// //             {/* Main Content Section */}
// //             <Box
// //                 p={{ base: 4, md: 8 }}
// //                 bg="gray.50"
// //                 color="black"
// //                 flex="1"
// //                 display="flex"
// //                 flexDirection="column"
// //                 alignItems="center"
// //                 justifyContent="center"
// //             >
// //                 <Heading size={{ base: 'xl', md: '2xl' }} mb={4} textAlign="center">
// //                     Welcome to the Master Admin Panel
// //                 </Heading>
// //                 <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} textAlign="center">
// //                     Manage all administrative tasks efficiently from this dashboard.
// //                 </Text>

// //                 <Stack spacing={6} direction={{ base: 'column', md: 'row' }} align="center">
// //                     <Button
// //                         leftIcon={<FaUsers />}
// //                         colorScheme="green"
// //                         size={{ base: 'md', md: 'lg' }}
// //                         _hover={{ transform: 'scale(1.05)' }}
// //                     >
// //                         Manage Users
// //                     </Button>

// //                     <Button
// //                         leftIcon={<FaChartBar />}
// //                         colorScheme="blue"
// //                         size={{ base: 'md', md: 'lg' }}
// //                         _hover={{ transform: 'scale(1.05)' }}
// //                     >
// //                         View Reports
// //                     </Button>

// //                     <Button
// //                         leftIcon={<FaCog />}
// //                         colorScheme="teal"
// //                         size={{ base: 'md', md: 'lg' }}
// //                         _hover={{ transform: 'scale(1.05)' }}
// //                     >
// //                         Settings
// //                     </Button>
// //                 </Stack>
// //             </Box>
// //         </Flex>
// //     );
// // };

// // export default MasterAdminHome;
// // src/pages/MasterAdminHome.js
// import React from 'react';
// import { Box, Heading, Text, Button, Stack, Flex } from '@chakra-ui/react';
// import { FaUsers, FaChartBar, FaCog } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const MasterAdminHome = () => {
//   return (
//     <Flex
//       minH="100vh"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       textAlign="center"
//     >
//       <Heading size={{ base: 'xl', md: '2xl' }} mb={4}>
//         Welcome to the Master Admin Panel
//       </Heading>
//       <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} maxW="600px">
//         Manage users, courses, payments, and system settings from this centralized dashboard.
//       </Text>

//       <Stack spacing={6} direction={{ base: 'column', md: 'row' }} align="center">
//         <Button
//           leftIcon={<FaUsers />}
//           colorScheme="green"
//           size={{ base: 'md', md: 'lg' }}
//           _hover={{ transform: 'scale(1.05)' }}
//           as={Link}
//           to="/admin/users"
//         >
//           Manage Users
//         </Button>

//         <Button
//           leftIcon={<FaChartBar />}
//           colorScheme="blue"
//           size={{ base: 'md', md: 'lg' }}
//           _hover={{ transform: 'scale(1.05)' }}
//         >
//           View Reports
//         </Button>

//         <Button
//           leftIcon={<FaCog />}
//           colorScheme="teal"
//           size={{ base: 'md', md: 'lg' }}
//           _hover={{ transform: 'scale(1.05)' }}
//         >
//           System Settings
//         </Button>
//       </Stack>
//     </Flex>
//   );
// };

// // If you're using React Router, wrap buttons with <Link> or use `useNavigate`
// // For simplicity, we assume routing is handled elsewhere

// export default MasterAdminHome;

// src/pages/DashboardPage.jsx
import React from 'react';
import { Card, Tag, Avatar, Space } from 'antd';
import { 
  UserOutlined, 
  TeamOutlined, 
  BookOutlined, 
  RiseOutlined 
} from '@ant-design/icons';

const DashboardPage = () => {
  const stats = [
    { 
      title: 'Total Students', 
      value: '1,248', 
      change: '+12%', 
      icon: <UserOutlined className="text-blue-500 text-xl" />,
      color: 'bg-blue-50'
    },
    { 
      title: 'Active Teachers', 
      value: '42', 
      change: '+3%', 
      icon: <TeamOutlined className="text-green-500 text-xl" />,
      color: 'bg-green-50'
    },
    { 
      title: 'Courses', 
      value: '86', 
      change: '+5%', 
      icon: <BookOutlined className="text-purple-500 text-xl" />,
      color: 'bg-purple-50'
    },
    { 
      title: 'Avg. Attendance', 
      value: '87%', 
      change: '+2%', 
      icon: <RiseOutlined className="text-yellow-500 text-xl" />,
      color: 'bg-yellow-50'
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-sm border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
            <p className="text-green-500 text-sm mt-2 flex items-center">
              <span className="mr-1">▲</span> {stat.change} from last month
            </p>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity" className="shadow-sm border border-gray-200">
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <UserOutlined className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">New student enrollment</p>
                  <p className="text-gray-500 text-sm">Alex Johnson enrolled in Computer Science</p>
                  <p className="text-gray-400 text-xs mt-1">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card title="System Status" className="shadow-sm border border-gray-200">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Database</span>
              <Tag color="success">Operational</Tag>
            </div>
            <div className="flex justify-between items-center">
              <span>Authentication</span>
              <Tag color="success">Operational</Tag>
            </div>
            <div className="flex justify-between items-center">
              <span>File Storage</span>
              <Tag color="warning">Degraded</Tag>
            </div>
            <div className="flex justify-between items-center">
              <span>API Services</span>
              <Tag color="success">Operational</Tag>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;