import { Col, Row } from "antd";
import DashboardColumn from "./components/column";
import DashboardLine from "./components/line";

function Dashboard() {
  return (
    <div className="page-content">
      <Row gutter={8} className="mb-lg">
        <Col span={12}>
          <DashboardLine />
        </Col>
        <Col span={12}>
          <DashboardColumn />
        </Col>
      </Row>
    </div>
  );
}
export default Dashboard;
