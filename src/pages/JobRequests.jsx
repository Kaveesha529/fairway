import Sidebar from "../components/Sidebar";
import TitleCard from "../components/TitleCard";
import { primaryButton } from "../components/Button";
import JobCard from "../components/JobCard";
import RequestCard from "../components/RequestCard";

export default function JobRequests() {
    return(
        <Sidebar children={
            <div className="flex flex-col min-h-screen">
                <TitleCard  Title={"Job Requests"}
                    paragraph1={"View and manage all maintenance requests submitted by customers."}
                    buttonClass1={primaryButton}
                    buttonName1={"+ New Request"}/>

                <div className="flex flex-row gap-4">
                    <div className="flex-1">
                        <TitleCard  Title={"Filter Requests"}
                            paragraph1={"Select filters to narrow down your request view"}
                            buttonClass1={primaryButton}
                            buttonName1={"Apply Filters"}/>
                    </div>
                    <div className="flex-1 px-20 py-10">
                        <div className="flex flex-col gap-4">
                            <JobCard cardTitle={"Status"} status1={"Pending"} status2={"Assigned"} status3={"Completed"}/>
                            <JobCard cardTitle={"Building Type"} status1={"Fairway"} status2={"External"}/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="flex flex-1 justify-center items-center">
                        <TitleCard  Title={"Current Requests"}/>
                    </div>
                    <div className="flex-2 pr-20 py-10">
                        <div className="flex flex-col gap-4">
                            <RequestCard    cardTitle={"Request ID: 12345"}
                                            cardDescription={"Customer: John Doe"}
                                            cardRemark1={"Building Type: Fairway"}
                                            cardRemark2={"| Status: Pending |"}
                                            cardRemark3={"Date Submitted:"}
                                            cardRemark4={"10/15/2023"}/>

                            <RequestCard    cardTitle={"Request ID: 12346"}
                                            cardDescription={"Customer: Jane Smith"}
                                            cardRemark1={"Building Type: External"}
                                            cardRemark2={"| Status: Assigned |"}
                                            cardRemark3={"Date Submitted:"}
                                            cardRemark4={"10/16/2023"}/>

                            <RequestCard    cardTitle={"Request ID: 12347"}
                                            cardDescription={"Customer: Mark Johnson"}
                                            cardRemark1={"Building Type: Fairway"}
                                            cardRemark2={"| Status: Completed |"}
                                            cardRemark3={"Date Submitted:"}
                                            cardRemark4={"10/14/2023"}/>
                        </div>
                    </div>
                </div>
            </div>
        }/>
    );
}