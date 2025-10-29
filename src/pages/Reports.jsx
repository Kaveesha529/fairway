import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import Button, { primaryButton, secondaryButton, grayButton } from "../components/Button";
import TitleCard, { buttonCount1, buttonCount2 } from "../components/TitleCard";
import ReportCard from "../components/ReportCard";
import MetricCard from "../components/MetricCard";

export default function Reports() {
    const metrics = [
        { title: "Jobs per Month", value: 150, remark: "+5%"},
        { title: "Total Revenue from External Buildings", value: "LKR 5,000,000", remark: 0},
        { title: "Avg. Repair Time per Technician", value: "2.5 hours", remark: 0},
    ];

    return(
        <Sidebar children={
            <div className="flex flex-col min-h-screen">
                <TitleCard  Title={"Management Reports"}
                    paragraph1={"Generate detailed reports for analysis and decision-making."}
                    buttonClass1={secondaryButton}
                    buttonName1={"Refresh"}
                    buttonClass2={primaryButton}
                    buttonName2={"Generate Report"}
                    buttonCount={buttonCount2}/>

                <div className="flex flex-row gap-4 px-10 py-10">
                    {/* Left Side: Title Card */}
                    <div className="flex flex-1 justify-center items-center">
                        <TitleCard Title={"Filter Reports"} />
                    </div>

                    {/* Right Side: Form */}
                    <div className="flex flex-1 flex-col gap-4">
                        <div className="flex flex-col w-full items-center justify-center mt-16">
                            <div className="flex bg-white w-full max-w-3xl p-8 rounded shadow">

                                {/* Form section */}
                                <div className="flex flex-1 justify-center">
                                    <div className="w-full">
                                        <form className="flex flex-col gap-6">
                                            <div className="w-full flex flex-col gap-2">
                                                <label className="text-sm font-bold">Date Range</label>
                                                <input
                                                type="email"
                                                placeholder="Select Date Range"
                                                className="w-full p-2 border rounded"
                                                />
                                                <p className="text-sm">Choose the period for the report</p>
                                            </div>

                                            <div className="w-full flex flex-col gap-2">
                                                <label className="text-sm font-bold">Technician</label>
                                                <div className="flex gap-4 w-full">
                                                    <Button buttonClass={grayButton} buttonName={"Technician A"} />
                                                    <Button buttonClass={grayButton} buttonName={"Technician B"} />
                                                    <Button buttonClass={grayButton} buttonName={"Technician C"} />
                                                </div>
                                                <p className="text-sm">Select a technician</p>
                                            </div>

                                            <div className="w-full flex flex-col gap-2">
                                                <label className="text-sm font-bold">Building Type</label>
                                                <div className="flex gap-4 w-full">
                                                    <Button buttonClass={grayButton} buttonName={"Residential"} />
                                                    <Button buttonClass={grayButton} buttonName={"Commercial"} />
                                                    <Button buttonClass={grayButton} buttonName={"Industrial"} />
                                                </div>
                                                <p className="text-sm">Select type of building</p>
                                            </div>

                                            <div className="flex flex-row gap-4 w-1/2 mt-4">
                                                <Button buttonClass={secondaryButton} buttonName={"Clear Filters"} />
                                                <Button buttonClass={primaryButton} buttonName={"Apply Filters"} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 mb-4">
                    <div className="flex-1">
                        <TitleCard  Title={"Overview Metrics"}
                            paragraph1={"Key performance indicators for better understanding."}/>
                    </div>
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

                <div className="flex flex-row gap-4">
                    <div className="flex-1">
                        <TitleCard  Title={"Report Actions"}
                            paragraph1={"Export and share your reports easily."}/>
                    </div>
                    <div className="flex-1 px-20 py-10">
                        <div className="flex flex-col gap-4">
                            <ReportCard cardTitle={"Download Report"}
                                        cardDescription={"Generate and download the report as a PDF."}
                                        status1={"Action"}
                                        status2={"Management"}/>

                            <ReportCard cardTitle={"Email Report"}
                                        cardDescription={"Send the generated report directly via email."}
                                        status1={"Action"}
                                        status2={"Management"}/>
                        </div>
                    </div>
                </div>
            </div>
        }></Sidebar>
    );
}