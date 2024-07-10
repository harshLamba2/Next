
"use client";

import Link from "next/link";

export default


 function TopicList(prop:any){

    console.log(prop, 'lol');

    return (
<div className="p-2 border-2 mt-2">
<div className="flex justify-between">
<span className="text-lg font-semibold">Topic </span>  
    <span>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm rounded-md px-2 py-1">Delete</button>
        <Link href={'/editTopic/123'}><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-md px-2 py-1 ml-2" >Edit</button></Link>
    </span>
</div>
<p>discriptionsjds Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque delectus corporis ab quod illo quam atque eaque pariatur mollitia, fuga natus, sunt, laudantium nihil aperiam. Iure dolore earum voluptatibus officia?</p>
</div>
)
}