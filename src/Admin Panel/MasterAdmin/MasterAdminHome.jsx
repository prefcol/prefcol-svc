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

// src/pages/DashboardPage.jsx – PREFCOL dark enchanted forest theme
import React from 'react';
import { Card, Tag, ConfigProvider } from 'antd';
import { theme as antdTheme } from 'antd';
import { 
  UserOutlined, 
  TeamOutlined, 
  BookOutlined, 
  RiseOutlined 
} from '@ant-design/icons';
import { adminTheme, antdThemeConfig } from './adminTheme';

const cardStyle = {
  background: adminTheme.bgCard,
  border: `1px solid ${adminTheme.border}`,
  borderRadius: 8,
  boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
};

const DashboardPage = () => {
  const stats = [
    { title: 'Total Students', value: '1,248', change: '+12%', icon: <UserOutlined />, iconBg: adminTheme.tealDark },
    { title: 'Active Teachers', value: '42', change: '+3%', icon: <TeamOutlined />, iconBg: adminTheme.greenMid },
    { title: 'Courses', value: '86', change: '+5%', icon: <BookOutlined />, iconBg: adminTheme.greenDark },
    { title: 'Avg. Attendance', value: '87%', change: '+2%', icon: <RiseOutlined />, iconBg: adminTheme.greenMid },
  ];

  const dashboardTheme = {
    ...antdThemeConfig,
    algorithm: antdTheme.darkAlgorithm,
    token: {
      ...antdThemeConfig.token,
      colorPrimary: adminTheme.accent,
      colorBgContainer: adminTheme.bgCard,
      colorBorder: adminTheme.border,
      colorText: adminTheme.textPrimary,
      colorTextSecondary: adminTheme.textSecondary,
    },
  };

  return (
    <ConfigProvider theme={dashboardTheme}>
      <div style={{ padding: 24 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: adminTheme.brand, marginBottom: 24 }}>
          Dashboard Overview
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24, marginBottom: 32 }}>
          {stats.map((stat, index) => (
            <Card key={index} style={cardStyle} styles={{ body: { padding: 20 } }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: adminTheme.textSecondary, fontSize: 13, margin: 0 }}>{stat.title}</p>
                  <p style={{ color: adminTheme.textPrimary, fontSize: '1.5rem', fontWeight: 700, margin: '8px 0 0' }}>{stat.value}</p>
                </div>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 8,
                  background: stat.iconBg,
                  border: `1px solid ${adminTheme.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: adminTheme.accent,
                  fontSize: 20,
                }}>
                  {stat.icon}
                </div>
              </div>
              <p style={{ color: adminTheme.accent, fontSize: 13, margin: '12px 0 0', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: 4 }}>▲</span> {stat.change} from last month
              </p>
            </Card>
          ))}
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          <Card 
            title={<span style={{ color: adminTheme.textPrimary }}>Recent Activity</span>} 
            style={cardStyle}
            styles={{ header: { borderBottom: `1px solid ${adminTheme.border}`, color: adminTheme.textPrimary } }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[1, 2, 3].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    background: adminTheme.accentDim,
                    padding: 10,
                    borderRadius: '50%',
                    marginRight: 12,
                    color: adminTheme.accent,
                  }}>
                    <UserOutlined />
                  </div>
                  <div>
                    <p style={{ fontWeight: 500, color: adminTheme.textPrimary, margin: 0 }}>New student enrollment</p>
                    <p style={{ color: adminTheme.textSecondary, fontSize: 13, margin: '4px 0 0' }}>Alex Johnson enrolled in Computer Science</p>
                    <p style={{ color: adminTheme.textMuted, fontSize: 12, margin: '4px 0 0' }}>2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          <Card 
            title={<span style={{ color: adminTheme.textPrimary }}>System Status</span>} 
            style={cardStyle}
            styles={{ header: { borderBottom: `1px solid ${adminTheme.border}`, color: adminTheme.textPrimary } }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Database', status: 'Operational', color: 'success' },
                { label: 'Authentication', status: 'Operational', color: 'success' },
                { label: 'File Storage', status: 'Degraded', color: 'warning' },
                { label: 'API Services', status: 'Operational', color: 'success' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: adminTheme.textSecondary }}>{row.label}</span>
                  <Tag color={row.color === 'success' ? 'green' : 'gold'} style={{
                    borderColor: row.color === 'success' ? adminTheme.accent : adminTheme.brand,
                    color: row.color === 'success' ? adminTheme.accent : adminTheme.brand,
                  }}>
                    {row.status}
                  </Tag>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default DashboardPage;