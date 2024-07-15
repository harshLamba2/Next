import { NextResponse } from "next/server";
import Topics from "@/connection/models/topics";
import connectMongoDb from "@/connection/mongodb";


export async function PUT(request, {params}) {
    try {
    const {_id}= params;
    const {title, discription } = await request.json();

    await connectMongoDb();

    await Topics.updateOne({_id}, {$set: {title, discription}});

    return NextResponse.json({ message: 'Updated Successfully' }, { status: 200 });

    } catch (error) {
    console.error('Error inserting user:', error);
    return NextResponse.json({ message: 'Failed to insert user' }, { status: 500 });
    }
}



export async function GET(request,{params}) {
    try {
    await connectMongoDb();

    const {_id}= params;
    
    let topicsDetail=await Topics.findById(_id, {title:1, discription:1});
    console.log(topicsDetail)
    return NextResponse.json({ message: 'Data obtained Successfully', data:topicsDetail}, { status: 200 });

    } catch (error) {
    console.error('Error inserting user:', error);
    return NextResponse.json({ message: 'Failed to insert user' }, { status: 500 });
    }
}
