import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import Button, { primaryButton, secondaryButton, grayButton } from "../components/Button";
import TitleCard, { buttonCount1, buttonCount2 } from "../components/TitleCard";
import ScheduleCard from "../components/ScheduleCard";

export default function Schedule() {
    return(
        <Sidebar children={
            <div className="flex flex-col min-h-screen">
                <TitleCard  Title={"Schedule a Repair"}
                    paragraph1={"Select a date and time for your technician appointment."}
                    buttonClass1={secondaryButton}
                    buttonName1={"Back"}
                    buttonClass2={primaryButton}
                    buttonName2={"Check Availability"}
                    buttonCount={buttonCount2}/>

                <div className="flex flex-row gap-4">
                    <div className="flex-1 px-20 py-10">
                        <div className="flex flex-col gap-4">
                            <ScheduleCard   cardTitle={"Technician Assigned"}
                                            cardDescription={"Available from 9 AM to 5 PM"}
                                            status1={"John Doe"}
                                            status2={"Plumber"}/>
                        </div>
                    </div>
                    <div className="flex-1 px-20 py-10 flex w-full justify-center items-center">
                        <div className="flex flex-col gap-4 w-2/5">
                            <Button buttonClass={secondaryButton}  buttonName={"View Profile"}/>
                            <Button buttonClass={primaryButton} buttonName={"Contact Technician"} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4 px-10 py-10">
                    {/* Left Side: Title Card */}
                    <div className="flex flex-1 justify-center items-center">
                        <TitleCard Title={"Job Summary"} />
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
                                                <label className="text-sm font-bold">Job Description</label>
                                                <input
                                                type="email"
                                                placeholder="Describe the issue..."
                                                className="w-full p-2 border rounded"
                                                />
                                                <p className="text-sm">Make sure to include important details.</p>
                                            </div>

                                            <div className="w-full flex flex-col gap-2">
                                                <label className="text-sm font-bold">Preferred Date & Time</label>
                                                <div className="flex gap-4 w-full">
                                                    <Button buttonClass={grayButton} buttonName={"Date Picker"} />
                                                    <Button buttonClass={grayButton} buttonName={"Calendar View"} />
                                                </div>
                                                <p className="text-sm">Select your preferred date and time for the appointment.</p>
                                            </div>

                                            <div className="flex flex-row gap-4 w-1/2 mt-4">
                                                <Button buttonClass={primaryButton} buttonName={"Save Job Details"} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="flex-1">
                        <TitleCard  Title={"Available Schedules"}
                            paragraph1={"Choose a convenient time for your appointment."}
                            buttonClass2={primaryButton}
                            buttonName2={"Confirm Schedule"}
                            buttonCount={buttonCount1}/>
                    </div>
                    <div className="flex-1 px-20 py-10">
                        <div className="flex flex-col gap-4">
                            <JobCard cardTitle={"Wednesday, March 15"} cardDescription={"Available slots: 10 AM, 1 PM, 3 PM"}/>
                            <JobCard cardTitle={"Thursday, March 16"} cardDescription={"Available slots: 11 AM, 2 PM, 4 PM"}/>
                        </div>
                    </div>
                </div>
            </div>
        }></Sidebar>
    );
}