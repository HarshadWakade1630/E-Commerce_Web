import { NextResponse } from "next/server";
import { db } from "@/db";
import { popularFoodCard } from "@/db/schema";
import { success } from "zod";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { name, desc, price, img, section } = body;

//     await db.insert(popularFoodCard).values({
//       name,
//       desc,
//       price,
//       img,
//       section,
//     });

//     return NextResponse.json({
//       message: "Food added successfully",
//     });
//   } catch (err) {
//     return NextResponse.json(
//       { message: "Error adding food" },
//       { status: 500 }
//     );
//   }
// }



// export async function POST(req:Request) {
//   try{
//     const body =await req.json();

//     const result =   await db.insert(popularFoodCard).values({
//     name: "Gaddari land",
//     desc: "kaccha baadamm",
//     price: 200,
//     img: "/img/bbqchikenpizza.jpeg",
//   })
//   return Response.json(result)
//   }catch(err){
// console.log(err);
// return Response.json(
//   {
//     error:"Insert Failed"
//   },
//   {
//     status:500
//   }
// )
//   }

//   return Response.json({success:true})
// }

export async function GET() {

  try {
    const data = await db.select().from(popularFoodCard);
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch popularfoodcards"
      },
      {
        status: 500
      }
    )
  }
}