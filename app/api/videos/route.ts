import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Video from './model';
 
dbConnect();

export async function GET() {
    try {
        const videos = await Video.find({}).populate('categories');
        return NextResponse.json({ success: true, data: videos });
    } catch (error) {
        console.error('Error fetching videos:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { title, link, categories, date } = body;

    if (!title || !link || !categories || !date) {
        return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    try {
        const video = await Video.create(body);
        return NextResponse.json({ success: true, data: video }, { status: 201 });
    } catch (error) {
        console.error('Error creating video:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
