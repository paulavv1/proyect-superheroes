import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function superheroe() {
    // Crear cada superhéroe usando prisma.superheroe.create
    const push1 = await prisma.superheroe.create({
        data: {
            name: "Mr. Incredible",
            power: "Strength",
            marital_status: "married",
            ranking: 1,
        },
    });

    const push2 = await prisma.superheroe.create({
        data: {
            name: "Elastigirl",
            power: "Elasticity",
            marital_status: "married",
            ranking: 2,
        },
    });

    const push3 = await prisma.superheroe.create({
        data: {
            name: "Violet",
            power: "Invisibility and force fields",
            marital_status: "single",
            ranking: 3,
        },
    });

    const push4 = await prisma.superheroe.create({
        data: {
            name: "Dash",
            power: "Super speed",
            marital_status: "single",
            ranking: 4,
        },
    });

    const push5 = await prisma.superheroe.create({
        data: {
            name: "Jack-Jack",
            power: "Multiple powers",
            marital_status: "single",
            ranking: 5,
        },
    });

    const push6 = await prisma.superheroe.create({
        data: {
            name: "Frozone",
            power: "Ice control",
            marital_status: "married",
            ranking: 6,
        },
    });

    // Mostrar en consola cada superhéroe creado
    console.log("Created Superheroes:", { push1, push2, push3, push4, push5, push6 });
}

// Ejecutar la función
superheroe()
    .catch((e) => {
        console.error("Error:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
