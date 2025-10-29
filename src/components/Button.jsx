export const primaryButton = "flex-1 bg-black text-white p-2 rounded hover:bg-gray-800";
export const secondaryButton = "flex-1 text-black border border-black p-2 rounded hover:bg-gray-100";
export const grayButton = "flex-1 bg-gray-50 text-black p-2 rounded hover:bg-gray-200";

export default function Button({buttonName , buttonClass}) {
    return (
        <button className={buttonClass}>
            {buttonName}
        </button>
    );
}