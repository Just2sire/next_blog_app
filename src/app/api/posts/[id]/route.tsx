import { prisma } from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: number } }): Promise<Response> {
    try {
        const post = await prisma.post.findUnique({
            where: {  id: Number(params.id) },
            include: {
                user: true,
            }
        });
        return Response.json({data: post, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: number } }): Promise<Response> {
    const body = await request.json();
    try {
        const post = await prisma.post.update({
            where: {  id: Number(params.id) },
            data: {...body}
        });
        return Response.json({data: post, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: number } }): Promise<Response> {
    try {
        const post = await prisma.post.delete({
            where: {  id: Number(params.id) },
        });
        return Response.json({data: post, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}