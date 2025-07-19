import APIResponse from '@/interfaces/api-response';
import apiResponseTemplates from '@/templates/api-responses';
import { NextResponse, NextRequest } from 'next/server';
import { compare } from "bcrypt";
import database from '@/config/database';
import { sign } from "jsonwebtoken";
import { cookies } from 'next/headers';

export async function POST(_request: NextRequest): Promise<NextResponse<APIResponse<unknown>> | undefined> {

    const formData = await _request.formData();
    const tokenSigningSecret = process.env.JWT_SECRET as string;
    const cookieStore = await cookies();

    const name = formData.get("name") as string;
    const password = formData.get("password") as string;

    //validate form data
    const invalidName = !name || name.length > 24 || name.length < 4;
    const invalidPassword = !password || password.length > 24 || password.length < 4;
    if (invalidName || invalidPassword) return NextResponse.json(apiResponseTemplates.badRequest({}));

    try {

        //attempt requested user retrieval via unique user.name
        const requestTarget = await database.user.findUnique({ where: { name } });
        if (!requestTarget) return NextResponse.json(apiResponseTemplates.notFound("user not found"));

        //extract hash from user to make it compatible with jwt concept
        const { hash, ...safeUser } = requestTarget;

        //compare hash and plain password
        const passwordHashMatch = await compare(password, hash);
        if (!passwordHashMatch) return NextResponse.json(apiResponseTemplates.badRequest({}, "invalid credentials"));


        //generate the token
        const authToken = sign(safeUser, tokenSigningSecret, {
            algorithm: "HS256",
            expiresIn: "24h",
            issuer: "School-Planner-Lite",
        });

        cookieStore.set({
            name: "school-organizer-lite-token",
            value: authToken,
            maxAge: 60 * 60 * 24,
        });

        return NextResponse.json(apiResponseTemplates.created("logged in successfully"));

    } catch (error) {
        if (error instanceof Error) return NextResponse.json(apiResponseTemplates.internalServerError(error, error.message));
    }
}