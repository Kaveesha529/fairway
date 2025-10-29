import Button from "../components/Button";

export default function TitleCard({Title, paragraph1, paragraph2, buttonClass1, buttonClass2, buttonName1, buttonName2}) {
    return(
        <div className="py-16">
            <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-5xl font-bold">{Title}</h1>
                <div className="flex flex-col items-center justify-center font-semibold">
                    <p>{paragraph1}</p>
                    <p>{paragraph2}</p>
                </div>
                <div className="flex w-1/5 gap-2">
                    <Button buttonClass={buttonClass1}  buttonName={buttonName1}/>
                    <Button buttonClass={buttonClass2}  buttonName={buttonName2}/>
                </div>
            </div>
        </div>
    );
}