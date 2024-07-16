import { NextResponse } from "next/server";
import Topics from "../../../connection/models/topics";
import connectMongoDb from "../../../connection/mongodb";


export async function POST(request) {
    try {

    const { title, discription } = await request.json();

    await connectMongoDb();

    await Topics.create({ title, discription });

    return NextResponse.json({ message: 'Inserted Successfully' }, { status: 200 });

    } catch (error) {
    console.error('Error inserting user:', error);
    return NextResponse.json({ message: 'Failed to insert user' }, { status: 500 });
    }
}

export async function GET(request) {
    try {

    await connectMongoDb();
    let allTopics=await Topics.find({});
    return NextResponse.json({ message: 'Data obtained Successfully', data:{allTopics}}, { status: 200 });

    } catch (error) {
    console.error('Error inserting user:', error);
    return NextResponse.json({ message: 'Failed to insert user' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {

    const id= await request.nextUrl.searchParams.get("id");

    await connectMongoDb();

    await Topics.findByIdAndDelete(id);

    return NextResponse.json({ message: 'Deleted Successfully' }, { status: 200 });

    } catch (error) {
    console.error('Error inserting user:', error);
    return NextResponse.json({ message: 'Failed to insert user' }, { status: 500 });
    }
}