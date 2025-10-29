export default function TechnicianProfileCard({cardTitle, cardDescription, cardRemark}) {
    return(
        <div className="bg-white shadow rounded p-4 w-full flex">
            <div className="flex flex-col p-2 w-full gap-4 items-center justify-center">
                <div className="flex">
                    <div class="w-24 h-24 bg-gray-50 rounded-full"></div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-black text-xl font-semibold">{cardTitle}</h3>
                    <p className="text-sm mt-2">{cardDescription}</p>
                    <h1 className="text-black text-3xl font-semibold">{cardRemark}</h1> 
                </div>
            </div>
        </div>
    );
}