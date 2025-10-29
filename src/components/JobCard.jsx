export default function JobCard({cardTitle, cardDescription, cardRemark}) {
    return(
        <div className="bg-white shadow rounded p-4 w-full flex">
            <div className="flex flex-row p-2 w-full gap-4">
                <div className="flex">
                    <div className="w-28 h-auto bg-gray-50"></div>
                </div>
                <div>
                    <h3 className="text-black text-2xl font-bold">{cardTitle}</h3>
                    <p className="text-lg mt-2">{cardDescription}</p>
                    <p className="text-xl font-semibold mt-2">{cardRemark}</p>
                </div>
            </div>
        </div>
    );
}