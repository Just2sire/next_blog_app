import { prisma } from "@/lib/prisma";

export async function GET(request: Request, { params }: { params: { id: number } }): Promise<Response> {
    try {
        const user = await prisma.user.findUnique({
            where: {  id: Number(params.id) },
            include: {
                posts: true,
            }
        });
        return Response.json({data: user, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: { id: number } }): Promise<Response> {
    const body = request.json();
    try {
        const user = await prisma.user.update({
            where: {  id: Number(params.id) },
            data: {...body}
        });
        return Response.json({data: user, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: number } }): Promise<Response> {
    try {
        const user = await prisma.user.delete({
            where: {  id: Number(params.id) },
            include: {
                posts: true,
            }
        });
        return Response.json({data: user, message: 'Success'}, {status: 200});
    } catch (error: any) {
        return Response.json({message: `Une erreur s'est produite: ${error.message}`}, { status: 500 });
    }
}