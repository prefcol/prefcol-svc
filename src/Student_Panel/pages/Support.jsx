"use client"

import { useState, useEffect } from "react"
import {
  Card,
  Typography,
  Tabs,
  Form,
  Input,
  Button,
  Upload,
  Avatar,
  Row,
  Col,
  Divider,
  List,
  Space,
  message,
  Skeleton,
  Statistic,
} from "antd"
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EditOutlined,
  UploadOutlined,
  LockOutlined,
  TrophyOutlined,
  BookOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons"
import { useAuth } from "../../Contexts/AuthContext"

const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs

const Support = ({ windowWidth }) => {
  const { user, updateProfile } = useAuth()
  const [loading, setLoading] = useState(true)
  const [profileData, setProfileData] = useState(null)
  const [activeTab, setActiveTab] = useState("1")
  const [editMode, setEditMode] = useState(false)
  const [expanded, setExpanded] = useState(false);

  const [form] = Form.useForm()
  const isMobile = windowWidth < 768

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true)
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock profile data
        const mockData = {
          personalInfo: {
            name: user?.name || "Student Name",
            email: user?.email || "student@gmail.com",
            phone: "+91 1234567890",
            location: "Tamil Nadu, India",
            bio: "Passionate learner with interests in web development, data science, and artificial intelligence. Always looking to expand my knowledge and skills.",
            website: "https://StudentName.portfolio.com",
            socialLinks: {
              linkedin: "https://linkedin.com/in/studentName",
              github: "https://github.com/studentName",
              twitter: "https://twitter.com/studentName",
            },
          },
          learningStats: {
            enrolledCourses: 5,
            completedCourses: 2,
            certificatesEarned: 2,
            totalHoursLearned: 28,
            quizzesTaken: 12,
            quizAvgScore: 85,
            streak: 5,
          },
          achievements: [
            {
              id: 1,
              title: "Fast Learner",
              description: "Completed 5 lessons in a single day",
              date: "2023-10-15",
              icon: "🚀",
            },
            {
              id: 2,
              title: "Quiz Master",
              description: "Scored 100% on 3 consecutive quizzes",
              date: "2023-09-28",
              icon: "🏆",
            },
            {
              id: 3,
              title: "Consistent Learner",
              description: "Maintained a 5-day learning streak",
              date: "2023-10-20",
              icon: "🔥",
            },
          ],
          certificates: [
            {
              id: 1,
              title: "Advanced Web Development with React",
              issueDate: "2023-10-15",
              instructor: "Dr. Jane Smith",
            },
            {
              id: 2,
              title: "UI/UX Design Principles",
              issueDate: "2023-09-28",
              instructor: "Alex Chen",
            },
          ],
        }

        setProfileData(mockData)
        form.setFieldsValue({
          name: mockData.personalInfo.name,
          email: mockData.personalInfo.email,
          phone: mockData.personalInfo.phone,
          location: mockData.personalInfo.location,
          bio: mockData.personalInfo.bio,
          website: mockData.personalInfo.website,
          linkedin: mockData.personalInfo.socialLinks.linkedin,
          github: mockData.personalInfo.socialLinks.github,
          twitter: mockData.personalInfo.socialLinks.twitter,
        })

        setLoading(false)
      } catch (error) {
        console.error("Error fetching profile data:", error)
        message.error("Failed to load profile data")
        setLoading(false)
      }
    }

    fetchProfileData()
  }, [user, form])

  const handleUpdateProfile = async (values) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update profile data
      const updatedProfileData = {
        ...profileData,
        personalInfo: {
          ...profileData.personalInfo,
          name: values.name,
          email: values.email,
          phone: values.phone,
          location: values.location,
          bio: values.bio,
          website: values.website,
          socialLinks: {
            linkedin: values.linkedin,
            github: values.github,
            twitter: values.twitter,
          },
        },
      }

      setProfileData(updatedProfileData)

      // Update user context
      await updateProfile({
        name: values.name,
        email: values.email,
      })

      message.success("Profile updated successfully!")
      setEditMode(false)
    } catch (error) {
      console.error("Error updating profile:", error)
      message.error("Failed to update profile")
    } finally {
      setLoading(false)
    }
  }

  const handleChangePassword = async (values) => {
    setLoading(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      message.success("Password changed successfully!")
      form.resetFields(["currentPassword", "newPassword", "confirmPassword"])
    } catch (error) {
      console.error("Error changing password:", error)
      message.error("Failed to change password")
    } finally {
      setLoading(false)
    }
  }

  if (loading && !profileData) {
    return (
      <Card style={{ margin: "24px 0" }}>
        <Skeleton avatar paragraph={{ rows: 4 }} active />
      </Card>
    )
  }

  return (
    <div className="profile-container" style={{ padding: "24px" }}>
      <Row gutter={[24, 24]}>
        

        <Col xs={24} lg={16}>
          <Card bordered={false}>
            <Tabs activeKey={activeTab} onChange={setActiveTab} className="custom-tabs" defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
             
                    Shipping and Delivery Policy
                  </span>
                }
                key="1"
              >
                <Title level={4} style={{ color: "#006666" }}>
    Shipping and Delivery Policy
  </Title>

  <Paragraph>
    <Text strong>Delivery Method:</Text><br />
    All our content is delivered digitally. No physical shipping is required.
  </Paragraph>

  <Paragraph>
    <Text strong>Delivery Time:</Text><br />
    Once your payment has been successfully completed, access to the pre-recorded video content will be granted immediately or within a few minutes. You will receive an email confirmation with access details.
  </Paragraph>

  <Paragraph>
    <Text strong>Access Instructions:</Text><br />
    You will be able to access the content via our Student Portal Dashboard. Please ensure your email address is entered correctly at the time of purchase.
  </Paragraph>

  <Paragraph>
    <Text strong>Support:</Text><br />
    If you do not receive your access email or experience any issues, please contact us at 
    <a href="mailto:info@prefcol.com"> info@prefcol.com</a> and we will assist you promptly.
  </Paragraph>
                </TabPane>
<TabPane
                tab={
                  <span>
             
                    Privacy Policy
                  </span>
                }
                key="2"
              >
               {/* <Title level={4} style={{ color: "#006666" }}>
    Privacy Policy
  </Title>
  <Paragraph>
    Last updated: May 27, 2025
  </Paragraph>
  <Paragraph>
   This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
  </Paragraph>
   <Paragraph>
   We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Free Privacy Policy Generator.
  </Paragraph>
  <Text strong>Interpretation and Definitions</Text><br />
  
  <Paragraph>
    <Text strong>Interpretation:</Text><br />
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
  </Paragraph>
  <Paragraph>
    <Text strong>Definitions:</Text><br />
    For the purposes of this Privacy Policy:
    <ul style={{ paddingLeft: "20px" }}>
      <li>
        <Text strong>"Account"</Text> means a unique account created for You to access our Service or parts of our Service.
      </li>
      <li>
        <Text strong>"Affiliate"</Text> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.
      </li>
      <li>
        <Text strong>"Company"</Text> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Chamber of Learning.
      </li>
      <li>
        <Text strong>"Cookies"</Text> are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.
      </li>
      <li>
        <Text strong>"Country"</Text> refers to: Tamil Nadu, India
      </li>
      <li>
        <Text strong>"Device"</Text> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
      </li>
      <li>
        <Text strong>"Personal Data"</Text> is any information that relates to an identified or identifiable individual.
      </li>
      <li>
        <Text strong>"Service"</Text> refers to the Website.
      </li>
      <li>
        <Text strong>"Service Provider"</Text> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.
      </li>
      <li>
        <Text strong>"Usage Data"</Text> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
      </li>
      <li>
        <Text strong>"Website"</Text> refers to Chamber of Learning, accessible from <a href="https://chamberoflearning.com/">https://chamberoflearning.com/</a>
      </li>
      <li>
        <Text strong>"You"</Text> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
      </li>
    </ul>
  </Paragraph>
  <Text strong>Collecting and Using Your Personal Data</Text><br />
  <Paragraph>
    
    <Text strong></Text>
  </Paragraph> */}
  <Title level={4} style={{ color: "#006666" }}>Privacy Policy</Title>
          <Text type="secondary">Last updated: May 27, 2025</Text>

          <Paragraph>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </Paragraph>

          <Paragraph>
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Free Privacy Policy Generator.
          </Paragraph>

          <Title level={3}>Interpretation and Definitions</Title>
          <Title level={4}>Interpretation</Title>
          <Paragraph>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </Paragraph>

          <Title level={4}>Definitions</Title>
          <Paragraph>For the purposes of this Privacy Policy:</Paragraph>
          <ul>
            <li><Text strong>Account</Text>:  means a unique account created for You to access our Service or parts of our Service.</li>
            <li><Text strong>Affiliate</Text>: means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
            <li><Text strong>Company</Text>: (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Prefcol Edutech Solutions.</li>
            <li><Text strong>Cookies</Text>: are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
            <li><Text strong>Country</Text>: refers to: Tamil Nadu, India</li>
            <li><Text strong>Device</Text>: means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><Text strong>Personal Data</Text>: is any information that relates to an identified or identifiable individual.</li>
            <li><Text strong>Service</Text>: refers to the Website.</li>
            <li><Text strong>Service Provider</Text>: means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
            <li><Text strong>Usage Data</Text>: refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
            <li><Text strong>Website</Text>: refers to Prefcol Edutech Solutions, accessible from https://prefcol.com/</li>
            <li><Text strong>You</Text>: means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>

          <Title level={3}>Collecting and Using Your Personal Data</Title>
          <Title level={4}>Types of Data Collected</Title>
          <Paragraph>
            <Text strong>Personal Data:</Text> While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
            </ul>
          </Paragraph>

          <Paragraph>
            <Text strong>Usage Data:</Text> 
            <Paragraph>
              Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </Paragraph>
            <Paragraph>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</Paragraph>
            <Paragraph>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</Paragraph>
          </Paragraph>

          <Title level={4}>Tracking Technologies and Cookies</Title>
          <Paragraph>
            We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
          </Paragraph>
          <Paragraph><Text strong>Cookies or Browser Cookies.</Text> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</Paragraph>
          <Paragraph><Text strong>Web Beacons.</Text>Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</Paragraph>
          <Paragraph>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the Free Privacy Policy website article.</Paragraph>
          <Paragraph>We use both Session and Persistent Cookies for the purposes set out below:</Paragraph>
          <ul>
            <li><Text strong>Necessary / Essential Cookies</Text>Type: Session Cookies <br/> Administered by: Us <br/>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services. </li>
            <li><Text strong>Cookies Policy / Notice Acceptance Cookies</Text> Type: Persistent Cookies <br/>Administered by: Us<br/> Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</li>
            <li><Text strong>Functionality Cookies</Text> Type: Persistent Cookies <br/>Administered by: Us<br/> Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
          </ul>
<Paragraph>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</Paragraph>
          <Title level={3}>Use of Your Personal Data</Title>
          <Paragraph>The Company may use Personal Data for the following purposes:</Paragraph>
          <ul>
            <li><Text strong> To provide and maintain our Service, </Text>including to monitor the usage of our Service.</li>
            <li><Text strong> To manage Your Account:</Text>to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
            <li><Text strong> For the performance of a contract:</Text>the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.

</li>
             <li><Text strong>To contact You: </Text>To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
              <li><Text strong>To provide You  </Text> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
               <li><Text strong>To manage Your requests: </Text>To attend and manage Your requests to Us.</li>
                <li><Text strong>For business transfers: </Text>We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
               <li><Text strong>For other purposes:  </Text>We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.
</li>
          </ul>
          <paragraph>We may share Your personal information in the following situations:</paragraph>
          <ul>
            <li>
              <Text strong>With Service Providers:</Text> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
            </li>
            <li>
              <Text strong>For business transfers:</Text> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
            </li>
            <li>
              <Text strong>With Affiliates:</Text> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
            </li>
            <li>
              <Text strong>With business partners:</Text> We may share Your information with Our business partners to offer You certain products, services or promotions.
            </li>
            <li>
              <Text strong>With other users:</Text> When You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
            </li>
            <li>
              <Text strong>With Your consent:</Text> We may disclose Your personal information for any other purpose with Your consent.
            </li>
          </ul>
        
        <Title level={3}>Retention of Your Personal Data</Title>
        <Paragraph>
          The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
        </Paragraph>
        <Paragraph>
          The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
        </Paragraph>

<Title level={3}>Transfer of Your Personal Data</Title>
<Paragraph>
  Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
</Paragraph>
<Paragraph>
  Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
</Paragraph>
<Paragraph>
  The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
</Paragraph>

<Title level={3}>Delete Your Personal Data</Title>
<Paragraph>
  You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
</Paragraph>
<Paragraph>
  Our Service may give You the ability to delete certain information about You from within the Service.
</Paragraph>
<Paragraph>
  You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
</Paragraph>
<Paragraph>
  Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
</Paragraph>

          <Title level={3}>Disclosure of Your Personal Data</Title>
          <Paragraph>
            <Text strong>Business Transactions:</Text> If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
          </Paragraph>

          <Paragraph>
          <Text strong>Law enforcement:</Text> Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
        </Paragraph>

        <Paragraph>
          <Text strong>Other legal requirements:</Text>
          <ul>
            The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>Protect the personal safety of Users of the Service or the public</li>
            <li>Protect against legal liability</li>
          </ul>
        </Paragraph>

        <Title level={3}>Security of Your Personal Data</Title>
        <Paragraph>
          The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
        </Paragraph>

        <Title level={3}>Children's Privacy</Title>
        <Paragraph>
          Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
        </Paragraph>
        <Paragraph>
          If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
        </Paragraph>

      <Title level={3}>Links to Other Websites</Title>
      <Paragraph>
        Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
      </Paragraph>
      <Paragraph>
        We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
        </Paragraph>

        <Title level={3}>Changes to this Privacy Policy</Title>
        <Paragraph>
          We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
        </Paragraph>
        <Paragraph>
          We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
        </Paragraph>
        <Paragraph>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </Paragraph>

        <Title level={3}>Contact Us</Title>
        <Paragraph>
          If you have any questions about this Privacy Policy, You can contact us:
        </Paragraph>
        <ul>
          <li>By email: <a href="mailto:info@prefcol.com">info@prefcol.com</a></li>
          <li>By phone number: 944-591-8818</li>
        </ul>
              </TabPane>
<TabPane
  tab={
    <span>
      
      Cancellation and Refund Policy
    </span>
  }
  key="3"
>
  <Title level={4} style={{ color: "#006666" }}>
    Cancellation and Refund Policy
  </Title>

  <Paragraph>
    <Text>
      We understand that plans can change. That’s why we offer a flexible cancellation policy:
    </Text>
  </Paragraph>

  <Paragraph>
    <Text strong>Free Cancellation:</Text><br />
    You may cancel your booking up to 1 day (24 hours) before the scheduled start time and receive a full refund.
  </Paragraph>

  <Paragraph>
    <Text strong>No Refunds for Late Cancellations:</Text><br />
    Cancellations made less than 24 hours before the scheduled start time are not eligible for a refund.
  </Paragraph>

  <Paragraph>
    <Text strong>How to Cancel:</Text><br />
    To cancel your booking, please contact us via <Text italic>[insert contact method, e.g., email, phone, or website]</Text> and provide your booking details.
  </Paragraph>

  <Paragraph>
    <Text>
      Thank you for choosing us. We look forward to serving you!
    </Text>
  </Paragraph>
</TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Support

