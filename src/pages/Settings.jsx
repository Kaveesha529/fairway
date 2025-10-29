import Sidebar from "../components/Sidebar";
import TitleCard, { buttonCount1, buttonCount2 } from "../components/TitleCard";
import { primaryButton, secondaryButton } from "../components/Button";
import JobCard from "../components/JobCard";
import RequestCard from "../components/RequestCard";

export default function Settings() {
    return(
        <Sidebar children={
            <div className="flex flex-col min-h-screen">
                <TitleCard  Title={"Manage Your Notifications"}
                    paragraph1={"Stay updated with the latest alerts and reviews."}
                    buttonClass1={secondaryButton}
                    buttonName1={"Mark All as Read"}
                    buttonClass2={primaryButton}
                    buttonName2={"Clear All"}
                    buttonCount={buttonCount2}/>

                <div className="flex flex-row gap-4">
                    <div className="flex flex-1 justify-center items-center">
                        <TitleCard  Title={"Recent Notifications"} paragraph1={"Here are your latest notifications."}/>
                    </div>
                    <div className="flex-2 flex pr-20 py-10">
                        <div className="flex flex-col gap-4">
                            <RequestCard    cardTitle={"New Request Submitted"}
                                            cardRemark1={"You have a new"}
                                            cardRemark2={"request pending."}/>

                            <RequestCard    cardTitle={"Payment Approved"}
                                            cardRemark1={"Your recent payment"}
                                            cardRemark2={"has been approved."}/>

                            <RequestCard    cardTitle={"Job Completed"}
                                            cardRemark1={"A technician has"}
                                            cardRemark2={"completed the job."}/>

                            <RequestCard    cardTitle={"Technician Updated"}
                                            cardTitle2={"Report"}
                                            cardRemark1={"The technician has"}
                                            cardRemark2={"submitted an updated"}
                                            cardRemark3={"report."}/>
                        </div>
                    </div>
                </div>
            </div>
        }/>
    );
}