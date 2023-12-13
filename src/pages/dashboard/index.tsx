import * as React from "react";
import PageFormat from "@/components/page-format/PageFormat";

const MiniStat = React.lazy(() => import("@/components/mini-stat/MiniStat"));
const C3DnoutChart = React.lazy(() => import("@/components/charts/C3Dnout"));
const C3BarChart = React.lazy(() => import("@/components/charts/C3Bar"));
const C3AreaChart = React.lazy(() => import("@/components/charts/c3Area"));

export default function DashboardPage() {
  return (
    <PageFormat title="Dashboard | Sarbs" description="Dashboard Page">
      <div className="row">
        <div className="col-md-4 col-xl-9">
          <div className="row">
            <div className="col-md-4 col-xl-3">
              <MiniStat title="Total RMS" count={4320}>
                <span className="mini-stat-icon bg-success me-0 float-end">
                  <i className="fas fa-broadcast-tower"></i>
                </span>
              </MiniStat>
            </div>

            <div className="col-md-6 col-xl-3">
              <MiniStat title="Offline RMS" count={65241}>
                <span className="mini-stat-icon bg-danger me-0 float-end">
                  <i className="mdi mdi-wifi-remove"></i>
                </span>
              </MiniStat>
            </div>

            <div className="col-md-6 col-xl-3">
              <MiniStat title="Open Locks" count={4539}>
                <span className="mini-stat-icon bg-purple me-0 float-end">
                  <i className="fas fa-lock-open"></i>
                </span>
              </MiniStat>
            </div>

            <div className="col-md-6 col-xl-3">
              <MiniStat title="Active Alerms" count={546}>
                <span className="mini-stat-icon bg-warning me-0 float-end">
                  <i className="ion ion-md-alert"></i>
                </span>
              </MiniStat>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-body">
                  <span className="fs-5 text">Power Sensors</span>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="table-responsive">
                        <table className="table table-striped table-centered table-vertical table-nowrap mb-0">
                          <caption></caption>
                          <thead>
                            <th colSpan={2}></th>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-danger"></i>
                                Main Fail
                              </td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-purple"></i>
                                Module Fault
                              </td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-orange "></i>
                                DC Low Voltage
                              </td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-warning "></i>
                                LLVD Fail
                              </td>
                              <td>10</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <C3DnoutChart
                        id="donut-chart-power-alerms"
                        title="Power sensors"
                        columns={[
                          ["Main Fail", 20],
                          ["Module Fault", 40],
                          ["DC Low Voltage", 25],
                          ["LLVD Fail", 35],
                        ]}
                        className="mt-4 mt-sm-0 c3"
                        color={[
                          "#ea553d",
                          "#ffbb44",
                          "#5468da",
                          "#4ac18e",
                          "#6d60b0",
                        ]}
                        width={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="card">
                <div className="card-body">
                  <span className="fs-5 text">Environment Sensors</span>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="table-responsive">
                        <table className="table table-striped table-centered table-vertical table-nowrap mb-0">
                          <caption></caption>
                          <thead>
                            <th colSpan={2}></th>
                          </thead>

                          <tbody>
                            <tr>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-danger"></i>
                                Smoke
                              </td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-purple"></i>
                                Fan Fault
                              </td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-orange "></i>
                                High Temp
                              </td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-warning "></i>
                                Door Open
                              </td>
                              <td>10</td>
                            </tr>
                            <tr>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-warning "></i>
                                Battery Miss
                              </td>
                              <td>10</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <C3BarChart
                        id="combine-chart-environment-alerms"
                        data={{
                          columns: [
                            ["Smoke", 30],
                            ["Fan", 200],
                            ["High Temp", 300],
                            ["Door Alerm", 200],
                            ["Battery Missing", 130],
                          ],
                          types: {
                            Smoke: "bar",
                            Fan: "bar",
                            "High Temp": "bar",
                            "Door Alerm": "bar",
                            "Battery Missing": "bar",
                          },
                          colors: {
                            "Smoke Alerm": "#5468da",
                            Fan: "#4ac18e",
                            "High Temp": "#ffbb44",
                            "Door Alerm": "#ea553d",
                            "Battery Missing": "#6d60b0",
                          },
                        }}
                        axis={{
                          x: {
                            type: "categorized",
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-3">
          <div className="card">
            <div className="card-body">
              <span className="fs-5 text">Notifications</span>
              <div
                style={{
                  height: "445px",
                  paddingTop: "5px",
                  overflow: "hidden scroll",
                }}
              >
                <div
                  className="card card-body bg-soft-light"
                  style={{ marginBottom: "10px" }}
                >
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <i className="mdi mdi-fan-off"></i>
                    Fan Alam in Zone 5, DHK 789
                  </p>
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div
                  className="card card-body bg-soft-light"
                  style={{ marginBottom: "10px" }}
                >
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <i className="fas fa-temperature-high"></i>
                    Heat Alam in Zone 5, DHK 789
                  </p>
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div
                  className="card card-body bg-soft-light"
                  style={{ marginBottom: "10px" }}
                >
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <i className="fas fa-battery-quarter"></i>
                    DC Volate Low in Zone 5, DHK 789
                  </p>
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div
                  className="card card-body bg-soft-light"
                  style={{ marginBottom: "10px" }}
                >
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <i className="mdi mdi-fan-off"></i>
                    Fan Alam in Zone 5, DHK 789
                  </p>
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div
                  className="card card-body bg-soft-light"
                  style={{ marginBottom: "10px" }}
                >
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <i className="fas fa-temperature-high"></i>
                    Heat Alam in Zone 5, DHK 789
                  </p>
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <div
                  className="card card-body bg-soft-light"
                  style={{ marginBottom: "10px" }}
                >
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <i className="fas fa-battery-quarter"></i>
                    DC Volate Low in Zone 5, DHK 789
                  </p>
                  <p className="card-text" style={{ marginBottom: "0px" }}>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-xl-4">
          <div className="card" style={{ height: "400px" }}>
            <div className="card-body">
              <span className="fs-5 text">AC/ DC Availability</span>
              <C3BarChart
                id="combine-chart-ac-dc-availability"
                data={{
                  x: "x",
                  columns: [
                    [
                      "x",
                      "DHK 789",
                      "DHK 992",
                      "DHK 220",
                      "DHK 123",
                      "DHK 005",
                      "DHK 608",
                      "DHK 994",
                      "DHK 304",
                      "DHK 305",
                      "DHK 229",
                    ],
                    ["AC", 6, 8, 14, 15, 17, 18, 18, 19, 19, 22, 22, 22],
                    ["DC", 6, 8, 6, 5, 4, 4, 4, 4, 4, 2, 2, 2],
                    ["Outage", 12, 8, 4, 4, 3, 2, 2, 1, 1, 0, 0, 0],
                  ],
                  types: {
                    AC: "bar",
                    DC: "bar",
                    Outage: "bar",
                  },
                  colors: {
                    AC: "#4ac18e",
                    DC: "#ffbb44",
                    Outage: "#ea553d",
                  },
                  groups: [["AC", "DC", "Outage"]],
                }}
                axis={{
                  x: {
                    type: "categorized",
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-4 col-xl-4">
          <div className="card" style={{ height: "400px" }}>
            <div className="card-body">
              <span className="fs-5 text">Power Slab Chart</span>
              <C3AreaChart
                id="morris-area-power-slab"
                data={{
                  x: "x",
                  columns: [
                    ["x", "1 KW", "2 KW", "3 KW", "4 KW", "5 KW", "6 KW"],
                    ["Tower", 300, 350, 300, 100, 100, 120],
                  ],
                  types: {
                    Tower: "area-spline",
                  },
                  colors: {
                    Tower: "#009688",
                  },
                }}
                axis={{
                  x: {
                    type: "categorized",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xl-4">
          <div className="card" style={{ height: "400px" }}>
            <div className="card-body">
              <span className="fs-5 text">Load Allocation/ Usage Chart</span>

              <C3AreaChart
                id="morris-area-load-usage"
                data={{
                  x: "x",
                  columns: [
                    ["x", "1 KW", "2 KW", "3 KW", "4 KW", "5 KW", "6 KW"],
                    ["Allocation", 300, 350, 300, 100, 100, 120],
                    ["Usage", 130, 100, 140, 200, 150, 50],
                  ],
                  types: {
                    Allocation: "area-spline",
                    Usage: "area-spline",
                  },
                  colors: {
                    Allocation: "#009688",
                    Usage: "#ea553d",
                  },
                  groups: [["Allocation", "Usage"]],
                }}
                axis={{
                  x: {
                    type: "categorized",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <span className="fs-5 text">Power Distribution</span>
                <div className="col-md-4 col-xl-4">
                  <C3DnoutChart
                    id="site-supply-distribution"
                    title="Site Supply"
                    columns={[
                      ["Grid", 1200],
                      ["Battery", 300],
                      ["DG", 200],
                      ["Others", 50],
                    ]}
                    color={[
                      "#ea553d",
                      "#ffbb44",
                      "#5468da",
                      "#4ac18e",
                      "#6d60b0",
                    ]}
                    width={30}
                  />
                  <p className="text-center">
                    Site Supply Distribution (sites)
                  </p>
                </div>
                <div className="col-md-4 col-xl-4">
                  <C3DnoutChart
                    id="site-runhour-distribution"
                    title="Site Runhour"
                    columns={[
                      ["Grid", 8341],
                      ["Battery", 6750],
                      ["DG", 2354],
                      ["Others", 1245],
                    ]}
                    color={[
                      "#ea553d",
                      "#ffbb44",
                      "#5468da",
                      "#4ac18e",
                      "#6d60b0",
                    ]}
                    width={30}
                  />
                  <p className="text-center">
                    Site Runhour Distribution (hours)
                  </p>
                </div>
                <div className="col-md-4 col-xl-4">
                  <C3DnoutChart
                    id="energy-usage-distribution"
                    title="Energy Usage (khr)"
                    columns={[
                      ["Grid", 18939],
                      ["Battery", 12987],
                      ["DG", 11990],
                      ["Others", 4000],
                    ]}
                    color={[
                      "#ea553d",
                      "#ffbb44",
                      "#5468da",
                      "#4ac18e",
                      "#6d60b0",
                    ]}
                    width={30}
                  />
                  <p className="text-center">Energy Usage Distribution (khr)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xl-4">
          <div className="card" style={{ height: "420px" }}>
            <div className="card-body">
              <span className="fs-5 text">State of Charge</span>

              <C3BarChart
                id="roated-chart-soc"
                data={{
                  columns: [
                    ["Bellow 50%", 400],
                    ["50% - 80%", 1200],
                    ["Above 80%", 700],
                  ],
                  types: {
                    "Bellow 50%": "bar",
                    "50% - 80%": "bar",
                    "Above 80%": "bar",
                  },
                  colors: {
                    "Bellow 50%": "#ea553d",
                    "50% - 80%": "#90a4ae",
                    "Above 80%": "#4ac18e",
                  },
                }}
                axis={{
                  rotated: true,
                  x: {
                    type: "categorized",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </PageFormat>
  );
}
