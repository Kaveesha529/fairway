import React from "react";
import MetricCard from "../components/MetricCard";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";
import { primaryButton, secondaryButton } from "../components/Button";
import TitleCard from "../components/TitleCard";
import JobCard from "../components/JobCard";

const Dashboard = () => {
  const metrics = [
    { title: "Total Active Jobs", value: 5, remark: "+1"},
    { title: "Pending Payments", value: "$2,000", remark: 0},
    { title: "Technicians Available", value: 10, remark: 0},
    { title: "Buildings Under Maintenance", value: "4(Fairway)", remark: "-1"},
  ];

  return (
      <Sidebar children={
        <div className=" bg-white min-h-screen">
          <TitleCard  Title={"Welcome, Admin"}
                      paragraph1={"Manage all aspects of your maintenance operations from this central"}
                      paragraph2={"control panel."}
                      buttonClass1={primaryButton}
                      buttonName1={"Logout"}/>
          
          <div>
            <TitleCard  Title={"Key Metrics Overview"}
                      paragraph1={"Monitor the status of your jobs and finances."}
                      buttonClass1={primaryButton}
                      buttonName1={"View Details"}/>
            <div className="px-20 w-full">
              <div className="grid grid-cols-3 gap-6 w-full">
                {metrics.map((metric, index) => {
                  const isLastSingle =
                    metrics.length % 3 === 1 && index === metrics.length - 1;

                  return (
                    <div
                      key={metric.title}
                      className={isLastSingle ? "col-span-3" : ""}
                    >
                      <MetricCard
                        title={metric.title}
                        value={metric.value}
                        remark={metric.remark}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <div>
              <TitleCard  Title={"Quick Actions"}
                        buttonClass1={secondaryButton}
                        buttonName1={"View Requests"}
                        buttonClass2={primaryButton}
                        buttonName2={"Add Technician"}/>
            </div>
            <div className="px-20 py-10 w-full">
              <div className="flex flex-row gap-8">
                <JobCard cardTitle={"Active jobs"} cardDescription={"Ongoing job requests"} cardRemark={"5 active jobs currently in progress."}/>
                <JobCard cardTitle={"Pending Payments"} cardDescription={"Outstanding Invoices"} cardRemark={"Review your pending payments"}/>
              </div>
            </div>
          </div>
          <div className="flex px-20 py-10 w-full h-[60vh]">
            <div className="flex w-full bg-gray-50 items-center justify-center">
              <p>Streamlining your operations with quick access to key metrics</p>
            </div>
          </div>
          {/* <div className="flex px-60 py-10 w-full">
            <div className="flex items-center justify-between w-full">
              <p className="text-black text-lg">© 2025 Fairway Holdings (Pvt) Ltd.</p>
              <p className="text-black text-lg">Privacy Policy</p>
              <p className="text-black text-lg">Terms of Service</p>
              <p className="text-black text-lg">Contact Support</p>
            </div>
          </div> */}
        </div>
      }/>
  );
};

export default Dashboard;
