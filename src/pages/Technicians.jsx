import Sidebar from "../components/Sidebar";
import TitleCard, { buttonCount1, buttonCount2 } from "../components/TitleCard";
import TechnicianProfileCard from "../components/TechnicianProfileCard";
import Button, { primaryButton, grayButton } from "../components/Button";

export default function Technicians() {
    return(
        <Sidebar children={
            <div className="flex flex-col min-h-screen">
                <TitleCard  Title={"Manage Your Technicians"}
                    paragraph1={"View and manage technician details, availability and skills."}
                    buttonClass1={primaryButton}
                    buttonName1={"+ Add New Technician"}
                    buttonCount={buttonCount1}/>

                <div className="flex flex-row gap-4">
                    <div className="flex flex-1 justify-center items-center">
                        <TitleCard  Title={"Technician Overview"}
                            paragraph1={"Details of all technicians"}/>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 px-20 py-10">
                        <div className="flex flex-row gap-4">
                            <TechnicianProfileCard cardTitle={"Technician ID"} cardDescription={"001"} cardRemark={"Name: Abdul alwis"}/>
                            <TechnicianProfileCard cardTitle={"Skills"} cardDescription={"Electrical, Plumbing"} cardRemark={"Available: Mon-Fri"}/>
                        </div>
                        <div className="flex flex-row gap-4">
                            <TechnicianProfileCard cardTitle={"Contact"} cardRemark={"abdula@gmail.com"}/>
                            <TechnicianProfileCard cardTitle={"Availability"} cardRemark={"Full-time"}/>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex w-1/2">
                                <TechnicianProfileCard cardTitle={"Status"} cardRemark={"Available"}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4 px-10 py-10">
                    {/* Left Side: Title Card */}
                    <div className="flex flex-1 justify-center items-center">
                        <TitleCard Title={"Search and Filter Technicians"} />
                    </div>

                    {/* Right Side: Form */}
                    <div className="flex flex-1 flex-col gap-4">
                        <div className="flex flex-col w-full items-center justify-center mt-16">
                            <div className="flex bg-white w-full max-w-3xl p-8 rounded shadow">

                                {/* Form section */}
                                <div className="flex flex-1 justify-center">
                                    <div className="w-full">
                                        <form className="flex flex-col gap-6">
                                            <div className="w-full">
                                                <label className="text-sm font-bold">Search by Name or Skill</label>
                                                <input
                                                type="email"
                                                placeholder="Enter name or skill here"
                                                className="w-full p-2 border rounded"
                                                />
                                            </div>

                                            <div className="w-full flex flex-col gap-2">
                                                <label className="text-sm font-bold">Filter Status</label>
                                                <div className="flex gap-4 w-1/2">
                                                    <Button buttonClass={grayButton} buttonName={"Available"} />
                                                    <Button buttonClass={grayButton} buttonName={"Busy"} />
                                                    <Button buttonClass={grayButton} buttonName={"On Leave"} />
                                                </div>
                                                <p className="text-sm">Select technician status</p>
                                            </div>

                                            <div className="flex flex-row gap-4 w-1/3 mt-4">
                                                <Button buttonClass={primaryButton} buttonName={"Search"} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }></Sidebar>
    );
}