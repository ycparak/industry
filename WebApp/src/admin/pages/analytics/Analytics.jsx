import React, { Component } from 'react';
import { Line, Doughnut, Bar } from 'react-chartjs-2'; 
import { Row, Col, Card, CardBody } from 'reactstrap';

import CardHeaderMedium from '../../../companies/components/ui/CardHeaderMedium';

class Analytics extends Component {
  render() {
    return (
      <Row>
        <Col sm="12" md="9" lg="7" className="card-activate-col--right">
          <Card className="dash-card dash-card--link dash-card--normal dash-card--primary">
            <span className="dash-card-link--header-text margin-bottom--8">Number of users</span>
            <div className="dash-chart padding-top--16">
              <Line
                height = {75}
                data={{
                  label: '',
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                  datasets: [{
                    data: [0, 0, 0, 0, 15, 2, 6, 12, 33, 0, 0, 0],
                    backgroundColor: '#b5e5ff',
                    hoverBackgroundColor: "rgba(232,105,90,0.8)",
                    hoverBorderColor: "orange",
                  }],
                }}
                options={{
                  scales: {
                    yAxes: [{
                      ticks: {
                        fontColor: "#b5e5ff",
                      },
                      gridLines: {
                        fontColor: "#b5e5ff",
                        borderColor: "#b5e5ff",
                        display: false,
                      }
                    }],
                    xAxes: [{
                      ticks: {
                        fontColor: "#b5e5ff",
                      },
                      gridLines: {
                        fontColor: "#b5e5ff",
                        borderColor: "#b5e5ff",
                      }
                    }],
                  },
                  legend: {
                    display: false,
                    labels: {
                      fontColor: "white",
                      fontSize: 18
                    }
                  },
                }}
              />
            </div>
          </Card>
        </Col>

        <Col sm="12" md="3" lg="5" className="card-activate-col--left">
          <Card className="dash-card dash-card--link dash-card--normal dash-card--warning">
            <span className="dash-card-link--header-text margin-bottom--8">User breakdown</span>
            <div className="dash-chart padding-top--16">
              <Doughnut
                height = {110}
                data={{
                  label: '',
                  labels: ['Companies', 'Candidates', 'Administrators'],
                  datasets: [{
                    data: [20, 40, 8],
                    backgroundColor: ['#5B56FB', '#29CE8C', '#66B7FF'],
                    hoverBackgroundColor: "rgba(232,105,90,0.8)",
                    hoverBorderColor: "orange",
                  }],
                }}
                options={{
                  scales: {
                    yAxes: [{
                      display: false,
                      ticks: {
                        fontColor: "b5e5ff",
                        display: false,
                      },
                      gridLines: {
                        fontColor: "b5e5ff",
                        borderColor: "b5e5ff",
                        display: false,
                      }
                    }],
                    xAxes: [{
                      display: false,
                      ticks: {
                        fontColor: "b5e5ff",
                        display: false,
                      },
                      gridLines: {
                        fontColor: "b5e5ff",
                        borderColor: "b5e5ff",
                        display: false,
                      }
                    }],
                  },
                  legend: {
                    position: 'left',
                    labels: {
                      fontColor: "white",
                    }
                  },
                }}
              />
            </div>
          </Card>
        </Col>

        <Col sm="12" md="12" lg="12" className="card-activate-col--left">
          <Card className="dash-card dash-card--normal">
            <CardHeaderMedium>Page views</CardHeaderMedium> 
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-horizontal--20 padding-top--12 padding-bottom--20">
                <div className="dash-chart padding-top--16">
                  <Bar
                    height = {75}
                    data={{
                      label: '',
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                      datasets: [{
                        data: [2, 25, 32, 106, 1043, 2731, 3211, 2735, 3532, 0, 0, 0],
                        backgroundColor: '#7066FF',
                        hoverBackgroundColor: "rgba(232,105,90,0.8)",
                        hoverBorderColor: "orange",
                      }],
                    }}
                    options={{
                      scales: {
                        yAxes: [{
                          ticks: {
                          },
                          gridLines: {
                            display: false,
                          }
                        }],
                        xAxes: [{
                          ticks: {
                          },
                          gridLines: {
                          }
                        }],
                      },
                      legend: {
                        display: false,
                        labels: {
                          fontColor: "white",
                          fontSize: 18
                        }
                      },
                    }}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="12" lg="12" className="card-activate-col--left">
          <Card className="dash-card dash-card--normal">
            <CardHeaderMedium>Time on site</CardHeaderMedium> 
            <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
              <div className="padding-horizontal--20 padding-top--12 padding-bottom--20">
                <div className="dash-chart padding-top--16">
                  <Line
                    height = {75}
                    data={{
                      label: '',
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                      datasets: [{
                        data: [0, 12, 21, 14, 12, 23, 35, 34, 39, 0, 0, 0],
                        backgroundColor: '#7066FF',
                        hoverBackgroundColor: "rgba(232,105,90,0.8)",
                        hoverBorderColor: "orange",
                      }],
                    }}
                    options={{
                      scales: {
                        yAxes: [{
                          ticks: {
                          },
                          gridLines: {
                            display: false,
                          }
                        }],
                        xAxes: [{
                          ticks: {
                          },
                          gridLines: {
                          }
                        }],
                      },
                      legend: {
                        display: false,
                        labels: {
                        }
                      },
                    }}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        
        <Col sm="12" md="9" lg="7" className="card-activate-col--left">
          <Card className="dash-card dash-card--link dash-card--normal">
            <span className="dash-card-link--header-text dash-comp-card-text margin-bottom--8">Monthly active users</span>
            <div className="dash-chart padding-top--16">
              <Line
                height = {75}
                data={{
                  label: '',
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                  datasets: [{
                    data: [0, 0, 0, 0, 5, 0, 5, 7, 15, 0, 0, 0],
                    backgroundColor: '#7066FF',
                    hoverBackgroundColor: "rgba(232,105,90,0.8)",
                    hoverBorderColor: "orange",
                  }],
                }}
                options={{
                  scales: {
                    yAxes: [{
                      ticks: {
                      },
                      gridLines: {
                        display: false,
                      }
                    }],
                    xAxes: [{
                      ticks: {
                      },
                      gridLines: {
                      }
                    }],
                  },
                  legend: {
                    display: false,
                    labels: {
                      fontColor: "white",
                      fontSize: 18
                    }
                  },
                }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Analytics;