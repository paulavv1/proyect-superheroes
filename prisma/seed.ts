import { assignMetadata } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient();
async function superheroe () {
    const push = await prisma.superheroe.create({
        data:{
            name: "Mr Increible",
            power: "Force",
            marital_status:"merried",
            ranking: 3
        }
    })
    console.log({
        push
    })
}
superheroe()
.catch((e)=> {console.error(e) 
    process.exit(1)
})
.finally(async()=>{
    await prisma.$disconnect
})


