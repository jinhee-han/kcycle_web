import React from "react";
import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./App.css";

const salesData = [
  { name: "1", avg: 3.5, gwangmyeong: 3.1, rate: 3 },
  { name: "2", avg: 3.6, gwangmyeong: 3.2, rate: 3.4 },
  { name: "3", avg: 3.7, gwangmyeong: 3.5, rate: 3.6 },
  { name: "4", avg: 3.7, gwangmyeong: 3.6, rate: 3.2 },
  { name: "5", avg: 3.1, gwangmyeong: 1.6, rate: 1.3 },
  { name: "6", avg: 3.2, gwangmyeong: null, rate: null },
  { name: "7", avg: 2.6, gwangmyeong: null, rate: null },
  { name: "8", avg: 3.2, gwangmyeong: null, rate: null },
  { name: "9", avg: 2.7, gwangmyeong: null, rate: null },
  { name: "10", avg: 4.1, gwangmyeong: null, rate: null },
  { name: "11", avg: 3.5, gwangmyeong: null, rate: null },
  { name: "12", avg: 3.2, gwangmyeong: null, rate: null },
  { name: "13", avg: 2.8, gwangmyeong: null, rate: null },
  { name: "14", avg: 2.8, gwangmyeong: null, rate: null },
  { name: "15", avg: 2.7, gwangmyeong: null, rate: null },
  { name: "16", avg: 2.5, gwangmyeong: null, rate: null },
];

const raceTable = [
  { round: "1R", now: 380, avg: 420, rate: "+3.2%", time: "18분", note: "" },
  { round: "2R", now: 313, avg: 345, rate: "+3.3%", time: "18분", note: "출전변경" },
  { round: "3R", now: 425, avg: 265, rate: "+3.6%", time: "17분", note: "" },
  { round: "4R", now: 422, avg: 378, rate: "+3.5%", time: "17분", note: "" },
  { round: "5R", now: 232, avg: 412, rate: "+1.6%", time: "", note: "" },
  { round: "6R", now: "--", avg: "--", rate: "--", time: "--", note: "--" },
  { round: "7R", now: "--", avg: "--", rate: "--", time: "--", note: "--" },
  { round: "8R", now: "--", avg: "--", rate: "--", time: "--", note: "--" },
  { round: "9R", now: "--", avg: "--", rate: "--", time: "--", note: "--" },
  { round: "10R", now: "--", avg: "--", rate: "--", time: "--", note: "--" },
];

const summaryTable = [
  { day: "금", sales: "7,533,938,200", diff: "-", last: "5,664,662,615", lastDiff: "-" },
  { day: "토", sales: "6,181,242,221", diff: "-", last: "-", lastDiff: "-" },
  { day: "일", sales: "9,823,433,412", diff: "-", last: "-", lastDiff: "-" },
];

const processSteps = [
  "경주 20분전 자전거 점검",
  "발매시작",
  "출주직전 선수점검",
  "경주 8분전 자전거 점검",
  "발매마감",
  "경주시행",
  "승자결정(1~3위) 및 등록",
  "순위 및 경주기록 등록",
  "경주 확정"
];

const sideMenu = [
  "이상매출 일괄조회",
  "경륜개최 결과보고",
  "마사회 매출액",
  "시행체 매출액",
  "경륜매출 누계",
  "경륜경정 회차별 매출액",
  "경주개최 결과",
  "경정개최 결과"
];

function App() {
  return (
    <div className="main-box">
      <div className="header">
        <h2>전년도 경주별 평균 매출 대비 금일 실시간 매출</h2>
      </div>
      <div className="content-row">
        <div className="chart-area">
          <ResponsiveContainer width="100%" height={340}>
            <ComposedChart data={salesData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Legend wrapperStyle={{ marginTop: 20 }} />
              <Bar dataKey="avg" fill="#6ed6ff" name="전년도경주별평균매출" />
              <Bar dataKey="gwangmyeong" fill="#003366" name="광명 매출" />
              <Line
                type="linear"
                dataKey="rate"
                stroke="#ff8000"
                name="금일매출대비증감률"
                strokeWidth={5}
                dot={true}
                activeDot={{ r: 7 }}
                isAnimationActive={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="summary-area">
            <table className="summary-table">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>전회차 매출액</th>
                  <th>전회대비 증감률</th>
                  <th>전년도회차 매출액</th>
                  <th>전년대비 증감률</th>
                </tr>
              </thead>
              <tbody>
                {summaryTable.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.day}</td>
                    <td>{row.sales}</td>
                    <td>{row.diff}</td>
                    <td>{row.last}</td>
                    <td>{row.lastDiff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="table-area">
          <table className="race-table">
            <thead>
              <tr>
                <th>경주</th>
                <th>실시간 매출</th>
                <th>전년도 평균매출</th>
                <th>평균매출 대비 증감률</th>
                <th>발매시간</th>
                <th>특이사항</th>
              </tr>
            </thead>
            <tbody>
              {raceTable.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.round}</td>
                  <td>{row.now}</td>
                  <td>{row.avg}</td>
                  <td>{row.rate}</td>
                  <td>{row.time}</td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="race-table-bottom-summary">
            <table className="race-bottom-table">
              <tbody>
                <tr>
                  <td className="bold-cell">금일 예상 매출 <span className="highlight">5,310</span>백만원</td>
                </tr>
                <tr>
                  <td className="bold-cell">금회차 예상 매출 <span className="highlight">18,330</span>백만원</td>
                </tr>
              </tbody>
            </table>
            <table className="race-bottom-table">
              <tbody>
                <tr>
                  <td className="bold-cell">지표</td>
                  <td>실시간</td>
                  <td>전회대비 증감률</td>
                  <td>전년대비 증감률</td>
                </tr>
                <tr>
                  <td className="bold-cell">입장객 수</td>
                  <td><span className="highlight">450</span></td>
                  <td><span className="highlight">+1.8%</span></td>
                  <td><span className="highlight">+4.5%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="side-menu">
          {sideMenu.map((item, idx) => (
            <button key={idx} className="side-menu-btn">{item}</button>
          ))}
        </div>
      </div>
      <div className="process-flow-area">
        {processSteps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className={`process-step-circle ${idx === 4 ? 'highlight' : ''}`}>{step}</div>
            {idx < processSteps.length - 1 && <span className="arrow">→</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App; 