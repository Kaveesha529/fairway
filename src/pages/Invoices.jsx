import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import Button, { primaryButton, secondaryButton, grayButton } from "../components/Button";
import TitleCard, { buttonCount1, buttonCount2 } from "../components/TitleCard";

export default function Invoices() {
    return(
        <Sidebar children={
            <div className="flex flex-col min-h-screen">
                <TitleCard  Title={"Generate Invoice"}
                    paragraph1={"Create and manage invoices for external building jobs."}
                    buttonClass1={primaryButton}
                    buttonName1={"Generate Invoice"}
                    buttonCount={buttonCount1}/>

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
                                            <div className="w-full">
                                                <label className="text-sm font-bold">Parts Cost</label>
                                                <input
                                                type="email"
                                                placeholder="Enter parts cost"
                                                className="w-full p-2 border rounded"
                                                />
                                            </div>

                                            <div className="w-full">
                                                <label className="text-sm font-bold">Labor Cost</label>
                                                <input
                                                type="email"
                                                placeholder="Enter labor cost"
                                                className="w-full p-2 border rounded"
                                                />
                                            </div>

                                            <div className="w-full">
                                                <label className="text-sm font-bold">Tax %</label>
                                                <input
                                                type="email"
                                                placeholder="Enter tax percentage"
                                                className="w-full p-2 border rounded"
                                                />
                                            </div>

                                            <div className="w-full flex flex-col gap-2">
                                                <label className="text-sm font-bold">Total</label>
                                                <div className="flex gap-4 w-full">
                                                    <Button buttonClass={grayButton} buttonName={"Include Tax"} />
                                                    <Button buttonClass={grayButton} buttonName={"Exclude Tax"} />
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <label className="text-sm font-bold">Grand Total</label>
                                                <input
                                                type="email"
                                                placeholder="Automatically calculated"
                                                className="w-full p-2 border rounded"
                                                />
                                            </div>

                                            <div className="flex flex-row gap-4 w-full mt-4">
                                                <Button buttonClass={secondaryButton}  buttonName={"Clear"}/>
                                                <Button buttonClass={primaryButton} buttonName={"Generate Invoice"} />
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
                        <TitleCard  Title={"Invoice Options"}
                            paragraph1={"After generating your invoice you can send it out."}
                            buttonClass1={secondaryButton}
                            buttonName1={"Send to Customer"}
                            buttonClass2={primaryButton}
                            buttonName2={"Send to Finance"}
                            buttonCount={buttonCount2}/>
                    </div>
                    <div className="flex-1 px-20 py-10">
                        <div className="flex flex-col gap-4">
                            <JobCard cardTitle={"Send Options"} cardDescription={"Once the invoice is generated, choose an option below to send it out."}/>
                        </div>
                    </div>
                </div>
            </div>
        }></Sidebar>
    );
}