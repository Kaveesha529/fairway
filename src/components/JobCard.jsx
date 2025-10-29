export default function JobCard({cardTitle, cardDescription, cardRemark, status1, status2, status3}) {
    return(
        <div className="bg-white shadow rounded p-4 w-full flex">
            <div className="flex flex-row p-2 w-full gap-4">
                <div className="flex">
                    <div className="w-24 h-24 bg-gray-50"></div>
                </div>
                <div>
                    <h3 className="text-black text-2xl font-bold">{cardTitle}</h3>
                    <p className="text-lg mt-2">{cardDescription}</p>
                    <p className="text-xl font-semibold mt-2">{cardRemark}</p>
                    <div className="flex flex-row gap-4">
                        <p className="text-lg bg-gray-50 mt-2">{status1}</p>
                        <p className="text-lg bg-gray-50 mt-2">{status2}</p>
                        <p className="text-lg bg-gray-50 mt-2">{status3}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}