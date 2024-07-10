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