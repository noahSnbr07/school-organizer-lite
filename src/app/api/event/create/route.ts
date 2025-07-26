import getAuth from '@/app/server/get-auth';
import database from '@/config/database';
import APIResponse from '@/interfaces/api-response';
import apiResponseTemplates from '@/templates/api-responses';
import { GradeType } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(_request: NextRequest): Promise<NextResponse<APIResponse<unknown>>> {

    //check auth and retrieve form fields
    const formData = await _request.formData();
    const auth = await getAuth();
    if (!auth)
        return NextResponse.json(apiResponseTemplates.forbidden("Authentication failed"));

    //extract fields
    const subject = formData.get("subject") as string;
    const name = formData.get("name") as string;
    const type = formData.get("type") as string; const dateString = formData.get("date") as string;
    const date = dateString ? new Date(dateString) : null;

    //check data validity
    if (!date || isNaN(date.getTime()))
        return NextResponse.json(apiResponseTemplates.badRequest({}, "Invalid date format"));


    //validate form body
    if (!subject || !type)
        return NextResponse.json(apiResponseTemplates.badRequest({}, "Malformed or missing form fields"));

    try {

        //insert grade
        await database.event.create({
            data: {
                name,
                subject: { connect: { name: subject } },
                date,
                type: type as GradeType,
                User: { connect: { id: auth.id } }
            }
        });

        return NextResponse.json(apiResponseTemplates.created("Grade added"));

    } catch (error) {
        console.log(error)
        return NextResponse.json(apiResponseTemplates.internalServerError(error as Error));
    }
}