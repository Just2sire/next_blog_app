import { prisma } from "@/lib/prisma";

export async function GET(request: Request): Promise<Response> {
    try {
        const users = await prisma.user.findMany();

        return Response.json({data: users, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}


export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    try {
        const user = await prisma.user.create({
            data: body,
        });

        return Response.json({ data: user, message: 'Success' }, { status: 200 });
    } catch (error: any) {
        return Response.json({ message: `Une erreur s'est produite: ${error.message}` }, { status: 500 });
    }
}