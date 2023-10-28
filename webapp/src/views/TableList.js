import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">High Risk Areas</Card.Title>
                <p>
                  Mosquito breeding hub risk Level above 5
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Ranking</th>
                      <th className="border-0">Area</th>
                      <th className="border-0">Type of Risk</th>
                      <th className="border-0">Risk Index</th>
                      <th className="border-0">Detected Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: 'red' }}>
                      <td>1</td>
                      <td><a href="/admin/maps">Alto Ribeira Tourist State Park</a></td>
                      <td>Pond</td>
                      <td>9/10</td>
                      <td>100</td>
                    </tr>
                    <tr style={{ backgroundColor: 'coral' }}>
                      <td>2</td>
                      <td>Vale do Javari</td>
                      <td>Open cistern</td>
                      <td>8.5/10</td>
                      <td>70</td>
                    </tr>
                    <tr style={{ backgroundColor: 'coral' }}>
                      <td>3</td>
                      <td>Pico da Neblina National Park</td>
                      <td>Heavy Rain puddle</td>
                      <td>8/10</td>
                      <td>50</td>
                    </tr>
                    <tr style={{ backgroundColor: 'lightcoral' }}>
                      <td>4</td>
                      <td>Serra do Cipó</td>
                      <td>Lake</td>
                      <td>8/10</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr style={{ backgroundColor: 'lightcoral' }}>
                      <td>5</td>
                      <td>Lencóis Bahia</td>
                      <td>Open cistern</td>
                      <td>6.5/10</td>
                      <td>20</td>
                    </tr>
                    <tr style={{ backgroundColor: 'lightcoral' }}>
                      <td>6</td>
                      <td>São Gabriel</td>
                      <td>Pond</td>
                      <td>6/10</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Medium Risk Areas</Card.Title>
                <p className="card-category">
                Mosquito breeding hub risk Level below 5
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                  <tr>
                      <th className="border-0">Ranking</th>
                      <th className="border-0">County</th>
                      <th className="border-0">Type of Risk</th>
                      <th className="border-0">Risk Index</th>
                      <th className="border-0">Detected Cases</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: 'orange' }}>
                      <td>1</td>
                      <td>Alto Ribeira Tourist State Park</td>
                      <td>Pond</td>
                      <td>9/10</td>
                      <td>100</td>
                    </tr>
                    <tr style={{ backgroundColor: 'yellow' }}>
                      <td>2</td>
                      <td>Vale do Javari</td>
                      <td>Open cistern</td>
                      <td>8.5/10</td>
                      <td>70</td>
                    </tr>
                    <tr style={{ backgroundColor: 'yellow' }}>
                      <td>3</td>
                      <td>Pico da Neblina National Park</td>
                      <td>Heavy Rain puddle</td>
                      <td>8/10</td>
                      <td>50</td>
                    </tr>
                    <tr style={{ backgroundColor: 'lightyellow' }}>
                      <td>4</td>
                      <td>Serra do Cipó</td>
                      <td>Lake</td>
                      <td>8/10</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr style={{ backgroundColor: 'lightyellow' }}>
                      <td>5</td>
                      <td>Lencóis Bahia</td>
                      <td>Open cistern</td>
                      <td>6.5/10</td>
                      <td>20</td>
                    </tr>
                    <tr style={{ backgroundColor: 'lightyellow' }}>
                      <td>6</td>
                      <td>São Gabriel</td>
                      <td>Pond</td>
                      <td>6/10</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
