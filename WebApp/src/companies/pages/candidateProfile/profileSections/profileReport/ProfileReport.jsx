import React from 'react'
import { Radar, Bar } from 'react-chartjs-2'; 
import { Row, Col } from 'reactstrap';

const getRandomizedDigits = (min, max, skills) => {
  let arry = [];
  for (var i = 0; i < skills; i++) {
    arry.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arry;
}

const ProfileReport = ({candidate}) => {
  return (
    <Col xs="12">
      <Row className="margin-vertical--16">
        <Col lg="6" className="analytics-col-left margin-bottom--16">
          <span className="margin-bottom--8 dash-analytics--text">Skill breakdown</span>
          <div className="dash-chart padding-vertical--16">
            <Radar
              height={150}
              data={{
                labels: candidate.skills,
                datasets: [
                  {
                    label: candidate.name && candidate.surname,
                    data: getRandomizedDigits(3, 10, candidate.skills.length),
                    fill: true,
                    backgroundColor: 'rgba(112, 102, 255, 0.5)',
                    borderColor: '#7066FF',
                    pointHitRadius: 50,
                  },
                  {
                    label: "Average",
                    data: getRandomizedDigits(1, 10, candidate.skills.length),
                    fill: true,
                    backgroundColor: 'rgba(102, 183, 255, 0.5)',
                    borderColor: '#66B7FF',
                    pointHitRadius: 50,
                    hoverBackgroundColor: "rgba(232,105,90,0.8)",
                    hoverBorderColor: "orange",
                  }
                ],
              }}
              options={{
                legend: {
                  display: false,
                },
                gridLines: {
                  display: false
                },
                scale: {
                   ticks: {
                       maxTicksLimit: 1,
                      display: false,
                   }
                }
              }}
            />
          </div>
        </Col>
        <Col lg="6" className="analytics-col-left margin-bottom--16">
          <span className="margin-bottom--8 dash-analytics--text">Concept breakdown</span>
          <div className="dash-chart padding-vertical--16">
            <Radar
              height={150}
              data={{
                labels: ['Algorithms', 'Data structures', 'Design patterns', 'Object orientation', 'Network programming', 'Functional programming', 'Databases'],
                datasets: [
                  {
                    label: candidate.name && candidate.surname,
                    data: getRandomizedDigits(3, 10, candidate.skills.length),
                    fill: true,
                    backgroundColor: 'rgba(112, 102, 255, 0.5)',
                    borderColor: '#7066FF',
                    pointHitRadius: 50,
                  },
                  {
                    label: "Average",
                    data: getRandomizedDigits(1, 10, candidate.skills.length),
                    fill: true,
                    backgroundColor: 'rgba(102, 183, 255, 0.5)',
                    borderColor: '#66B7FF',
                    pointHitRadius: 50,
                    hoverBackgroundColor: "rgba(232,105,90,0.8)",
                    hoverBorderColor: "orange",
                  }
                ],
              }}
              options={{
                legend: {
                  display: false,
                },
                gridLines: {
                  display: false
                },
                scale: {
                   ticks: {
                       maxTicksLimit: 1,
                      display: false,
                   }
                }
              }}
            />
          </div>
        </Col>
      </Row>

      <Row className="margin-top--16">
        <Col lg="4" className="analytics-col-left margin-bottom--16 padding-horizontal--16">
          <span className="margin-bottom--8 dash-analytics--text">Candidate age vs average age</span>
          <div className="dash-chart padding-vertical--8 margin-vertical--8">
            <Bar
              height={125}
              data={{
                labels: ['Age'],
                datasets: [
                  {
                    label: candidate.name && candidate.surname,
                    data: [candidate.age],
                    backgroundColor: '#7066FF',
                  },
                  {
                    label: "Average",
                    data: [30],
                    fill: true,
                    backgroundColor: '#66B7FF',
                  },
                  {
                    label: '',
                    data: [0],
                    fill: false,
                    backgroundColor: '#66B7FF',
                  }
                ],
              }}
              options={{
                legend: {
                  display: false,
                },
              }}
            />
          </div>
        </Col>
        <Col lg="4" className="analytics-col-left margin-bottom--16 padding-horizontal--16">
          <span className="margin-bottom--8 dash-analytics--text">Candidate experience vs average experience</span>
          <div className="dash-chart padding-vertical--8 margin-vertical--8">
            <Bar
              height={125}
              data={{
                labels: ['Experience'],
                datasets: [
                  {
                    label: candidate.name && candidate.surname,
                    data: [candidate.experience],
                    backgroundColor: '#7066FF',
                  },
                  {
                    label: "Average",
                    data: [6],
                    fill: true,
                    backgroundColor: '#66B7FF',
                  },
                  {
                    label: '',
                    data: [0],
                    fill: false,
                    backgroundColor: '#66B7FF',
                  }
                ],
              }}
              options={{
                legend: {
                  display: false,
                },
              }}
            />
          </div>
        </Col>

        <Col lg="4" className="analytics-col-left margin-bottom--16 padding-horizontal--16">
          <span className="margin-bottom--8 dash-analytics--text">Requested salary range vs average salary range</span>
          <div className="dash-chart padding-vertical--8 margin-vertical--8">
            <Bar
              height={125}
              data={{
                labels: ['Min salary', 'Max salary'],
                datasets: [
                  {
                    label: candidate.name && candidate.surname,
                    data: [candidate.minSalary, candidate.maxSalary],
                    fill: true,
                    backgroundColor: '#7066FF',
                  },
                  {
                    label: "Average",
                    data: [28000, 36000],
                    fill: true,
                    backgroundColor: '#66B7FF',
                  },
                  {
                    label: '',
                    data: [0, 0],
                    fill: false,
                    backgroundColor: '#66B7FF',
                  }
                ],
              }}
              options={{
                legend: {
                  display: false,
                },
              }}
            />
          </div>
        </Col>
      </Row>

      <Row className="margin-top--16">
        
      </Row>
    </Col>
  )
}

export default ProfileReport;

/*
*/