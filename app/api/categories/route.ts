import { validate } from "@/utils/validate";
import ICategory from "./interface";
import Category from "./model";
import { z } from "zod";
import dbConnect from "@/utils/dbConnect";
import { NextRequest } from "next/server";

const categorySchema = z.object({
    name: z.string(),
});

dbConnect();

export async function GET() {
    try {
        const categories: ICategory[] = await Category.find({});
        return Response.json({ success: true, data: categories }, { status: 200 });
    } catch (error) {
        return Response.json({ success: false }, { status: 400 });
    }
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log("body: ", body)
    const validation = validate(categorySchema, body);

    if (!validation.success) {
        return Response.json({ error: validation.errors }, { status: 400 });
    }

    try {
        const category: ICategory = await Category.create(body);
        return Response.json({ success: true, data: category }, { status: 201 });
    } catch (error) {
        return Response.json({ success: false }, { status: 400 });
    }
}

export function PUT(req: any) {
    return Response.json({ msg: 'its working' })
}

export function DELETE(req: any) {
    return Response.json({ msg: 'its working' })
}
