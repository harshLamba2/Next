export default function addTopic(){
    return(
        <div className="mt-2">
        
        <input placeholder="Add Topic Title" className="w-full border p-2"/>
        <input placeholder="Add Topic Discription" className="w-full border p-2 mt-4"/>

        <div className="flex justify-center mt-4">
            <button className="btn bg-slate-900 p-2 rounded-md font-bold text-white">Add Topic</button>
        </div>

        </div>
    )
}