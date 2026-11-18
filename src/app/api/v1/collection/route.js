import prisma from "@/libs/prisma";

export async function POST(request) {
  try {
    const { anime_mal_id, anime_image, anime_title } = await request.json();
    if (!anime_mal_id || !anime_title) {
      return Response.json({ isCreated: false, error: "anime_mal_id & anime_title required" }, { status: 400 });
    }
    const exists = await prisma.collection.findUnique({ where: { anime_mal_id: String(anime_mal_id) } });
    if (exists) return Response.json({ isCreated: false, error: "Already in collection" }, { status: 409 });
    const collection = await prisma.collection.create({
      data: { anime_mal_id: String(anime_mal_id), anime_image: anime_image || "", anime_title: String(anime_title) },
    });
    return Response.json({ isCreated: true, collection }, { status: 201 });
  } catch (error) {
    return Response.json({ isCreated: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return Response.json({ isDeleted: false, error: "id required" }, { status: 400 });
    await prisma.collection.deleteMany({ where: { anime_mal_id: String(id) } });
    return Response.json({ isDeleted: true });
  } catch (error) {
    return Response.json({ isDeleted: false, error: error.message }, { status: 500 });
  }
}
