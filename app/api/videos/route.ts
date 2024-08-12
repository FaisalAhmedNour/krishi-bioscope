import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Video from './model';
import Category from '../categories/model';

dbConnect();

export async function GET(req: NextRequest) {
    await dbConnect(); //todo for development

    try {
        const videos = (await Video.find()).reverse();
        return NextResponse.json({ success: true, data: videos });
    } catch (error) {
        console.error('Error fetching videos:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    await dbConnect();//todo for development

    const body = await req.json();
    const { title, link, categories, date } = body;

    if (!title || !link || !categories || !date) {
        return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }
    // console.log("body",body)
    try {
        const fullDataCategories = await Category.find({_id: { $in: categories }})
        // console.log("fullDataCategories", fullDataCategories)

        const video = await Video.create({
            title, link, categories: fullDataCategories, date
        });
        return NextResponse.json({ success: true, data: video }, { status: 201 });
    } catch (error) {
        console.error('Error creating video:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
