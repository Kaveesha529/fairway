export default function RequestCard({cardTitle, cardTitle2, cardDescription, cardRemark1, cardRemark2, cardRemark3, cardRemark4}) {
    return(
        <div className="bg-white shadow rounded p-4 w-full flex">
            <div className="flex flex-row p-2 w-full gap-4">
                <div className="flex">
                    <div class="w-24 h-24 bg-gray-50 rounded-full"></div>
                </div>

                <div className="flex flex-col justify-center">
                    <h3 className="text-black text-2xl font-semibold">{cardTitle}</h3>
                    <h3 className="text-black text-2xl font-semibold">{cardTitle2}</h3>
                    <p className="text-lg mt-2">{cardDescription}</p>
                </div>

                <div className="flex flex-col justify-center items-end">
                    <h3 className="text-black text-2xl font-semibold">{cardRemark1}</h3>
                    <h3 className="text-black text-2xl font-semibold">{cardRemark2}</h3>
                    <h3 className="text-black text-2xl font-semibold">{cardRemark3}</h3>
                    <h3 className="text-black text-2xl font-semibold">{cardRemark4}</h3>   
                </div>
            </div>
        </div>
    );
}