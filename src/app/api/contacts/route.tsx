import { prisma } from "@/lib/prisma";

export async function GET(request: Request): Promise<Response> {
    try {
        const contacts = await prisma.contact.findMany({});

        return Response.json({data: contacts, message: 'Success'}, { status: 200 });
    } catch (error: any) {
        return Response.json({ message: `Une erreur s'est produite: ${error.message}` }, { status: 500 });
    }
}

export async function POST(request: Request): Promise<Response> {
    const body = await request.json();
    try {
        const result = await prisma.contact.create({
            data: body,
        });

        return Response.json({ data: result, message: 'Success' }, { status: 200 });
    } catch (error: any) {
        return Response.json({ message: `Une erreur s'est produite: ${error.message}` }, { status: 500 });
    }
}