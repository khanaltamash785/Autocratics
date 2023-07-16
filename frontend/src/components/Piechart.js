import React from "react";
import Chart from "react-apexcharts";

function Piechart() {
  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <h3 className="mt-3">Welcome to Piechart </h3>
        <Chart
          type="donut"
          series={[23, 43, 50, 65]}
          options={{
            labels: [
              "Client Details",
              "Case Details",
              "Case Awards",
              "All Cases",
            ],
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}
export default Piechart;
