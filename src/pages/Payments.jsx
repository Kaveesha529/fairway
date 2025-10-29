import Sidebar from "../components/Sidebar";
import JobCard from "../components/JobCard";
import Button, { primaryButton, secondaryButton, grayButton } from "../components/Button";
import TitleCard, { buttonCount1, buttonCount2 } from "../components/TitleCard";
import RequestCard from "../components/RequestCard";

export default function Payments() {
    return(
        <Sidebar children={
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-1 justify-center items-center">
                        <TitleCard  Title={"Pending Payments"}
                            paragraph1={"Review the list of payments that require verification."}
                            buttonClass1={primaryButton}
                            buttonName1={"View Payment"}
                            buttonCount={buttonCount1}/>
                    </div>
                    <div className="flex-2 pr-20 py-10">
                        <div className="flex flex-col gap-4">
                            <RequestCard    cardTitle={"Payment ID: 001"}
                                            cardDescription={"Customer: John Doe"}
                                            cardRemark1={"Invoice: #1234,"}
                                            cardRemark2={"Amount: LKR 20000,"}
                                            cardRemark3={"Method: Online,"}
                                            cardRemark4={"Status: Pending"}/>

                            <RequestCard    cardTitle={"Payment ID: 002"}
                                            cardDescription={"Customer: Jane Smith"}
                                            cardRemark1={"Invoice: #5678,"}
                                            cardRemark2={"Amount: LKR 15000,"}
                                            cardRemark3={"Method: Receipt,"}
                                            cardRemark4={"Status: Pending"}/>

                            <RequestCard    cardTitle={"Payment ID: 003"}
                                            cardDescription={"Customer: Bob Johnson"}
                                            cardRemark1={"Invoice: #9101,"}
                                            cardRemark2={"Amount: LKR 4000,"}
                                            cardRemark3={"Method: Online,"}
                                            cardRemark4={"Status: Pending"}/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4 px-10 py-10">
                    {/* Left Side: Title Card */}
                    <div className="flex flex-1 justify-center items-center">
                        <TitleCard Title={"Access Payment Details"} paragraph1={"View receipt image or online transaction ID."} />
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
                                                <label className="text-sm font-bold">Receipt Image</label>
                                                <input
                                                type="email"
                                                placeholder="Click to view"
                                                className="w-full p-2 border rounded"
                                                />
                                            </div>

                                            <div className="w-full">
                                                <label className="text-sm font-bold">Transaction ID</label>
                                                <input
                                                type="email"
                                                placeholder="Enter ID here"
                                                className="w-full p-2 border rounded"
                                                />
                                            </div>

                                            <div className="flex flex-row gap-4 w-full mt-4">
                                                <Button buttonClass={secondaryButton}  buttonName={"Reject"}/>
                                                <Button buttonClass={primaryButton} buttonName={"Approve"} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex px-20 py-10 w-full h-[60vh]">
                    <div className="flex w-full bg-gray-50 items-center justify-center">
                        <p>Configure settings and notifications for payment confirmations.</p>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="flex-1">
                        <TitleCard  Title={"Payment Actions"}
                            paragraph1={"Choose to approve, reject, or send for recheck."}
                            buttonClass1={secondaryButton}
                            buttonName1={"Reject"}
                            buttonClass2={primaryButton}
                            buttonName2={"Approve"}
                            buttonCount={buttonCount2}/>
                    </div>
                    <div className="flex-1 px-20 py-10">
                        <div className="flex flex-col gap-4">
                            <JobCard cardTitle={"Approve Payment"} cardDescription={"This will finalize the payment. Ensure all details are correct."}/>
                            <JobCard cardTitle={"Reject Payment"} cardDescription={"You can provide a reason for rejection in the comments."}/>
                            <JobCard cardTitle={"Send for Recheck"} cardDescription={"This will send the payment for further review."}/>
                        </div>
                    </div>
                </div>
            </div>
        }></Sidebar>
    );
}