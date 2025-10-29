export default function ReportCard({cardTitle, cardDescription, status1, status2}) {
    return(
        <div className="bg-white shadow rounded p-4 w-full flex">
            <div className="flex flex-row p-2 w-full gap-4">
                <div className="flex">
                    <div className="w-24 h-24 bg-gray-50"></div>
                </div>

                <div>
                    <h3 className="text-black text-2xl font-bold">{cardTitle}</h3>
                    <p className="text-lg mt-2">{cardDescription}</p>
                    <div className="flex flex-row gap-4">
                        <p className="text-sm bg-gray-50 mt-2">{status1}</p>
                    </div>

                    <div className="flex flex-row p-2 w-full gap-4 mt-2">
                        <div className="flex justify-center items-center">
                            <div class="w-6 h-6 bg-gray-50 rounded-full"></div>
                        </div>

                        <div className="flex flex-col justify-center items-end">
                            <p className="text-lg">{status2}</p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}