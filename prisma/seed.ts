import { assignMetadata } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient();
async function superheroe () {
    const push = await prisma.superheroe.create({
        data:{
            name: "Mr Increible",
            description: "Mr. Incredible, also known as Bob Parr, is a superhero with immense strength and is also a family man who struggles to balance his heroic life with his responsibilities as a husband and father. In The Incredibles, he balances saving the world with protecting his loved ones.",
            power: "Force",
            marital_status:"merried",
            ranking: 3,
        }
        
    });
    console.log({
        push
    });
}
superheroe()
.catch((e)=> {console.error(e) 
    process.exit(1)
})
.finally(async()=>{
    await prisma.$disconnect()
})


