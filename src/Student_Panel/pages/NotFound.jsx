import { Result, Button } from "antd"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
        padding: "24px",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/Student-portal/dashboard">
            <Button type="primary" size="large">
              Back to Dashboard
            </Button>
          </Link>
        }
      />
    </div>
  )
}

export default NotFound

