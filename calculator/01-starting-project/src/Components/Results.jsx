import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ input }) {
  const resulstData = calculateInvestmentResults(input);
  const initialInvestment = resulstData[0].valueEndOfYear-resulstData[0].interest- resulstData[0].annualInvestment;
  console.log(input);
  console.log(resulstData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intersest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resulstData.map(yearData =>{
            const totalInterest = yearData.valueEndOfYear-yearData.annualInvestment*yearData.year - initialInvestment;
            return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInterest)}</td>
            </tr>
        })}
      </tbody>
    </table>
  );
}
