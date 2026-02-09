import { prisma } from "./lib/prisma.js";

// try {
//   const materials = await prisma.material.createMany({
//     data: [
//       { name: "Tecido Algodão Heavyweight (m)", stock: 45.5 },
//       { name: "Tecido Dry-Fit (m)", stock: 30.0 },
//       { name: "Zíper Metálico YKK (un)", stock: 15.0 },
//       { name: "Linha de Poliéster 40 (m)", stock: 1000.0 },
//       { name: "Botão de Pressão (un)", stock: 80.0 },
//       { name: "Elástico de Punho (m)", stock: 12.5 },
//     ],
//   });

//   console.log(`Sucesso! ${materials.count} materiais criados.`);
// } catch (error) {
//   console.log(error);
// }

const MAT_IDS = {
  ELASTICO: "1a912a20-0f62-4675-977c-129c150af81c", // Stock: 12.5
  BOTAO: "2e8c117f-6c42-47a9-a2c9-a0bef470dbee", // Stock: 80
  DRY_FIT: "58189e23-6aeb-41ea-960f-438a08384801", // Stock: 30
  LINHA: "ce6969a2-3be2-4623-9afe-0bc9ae269c27", // Stock: 1000
  ZIPER: "cf54d810-7d56-40d3-828f-b3121eb35e0e", // Stock: 15
  ALGODAO: "ea5ac480-834c-4073-9aea-3b8112dcf28d", // Stock: 45.5
};

try {
  const productsToCreate = [
    {
      name: "Techwear Parka X-2000",
      price: 899.9,
      materials: [
        { id: MAT_IDS.DRY_FIT, quantity: 3.5 },
        { id: MAT_IDS.ZIPER, quantity: 2.0 }, // Gasta 2 zíperes!
        { id: MAT_IDS.BOTAO, quantity: 4.0 },
        { id: MAT_IDS.LINHA, quantity: 40.0 },
      ],
    },
    {
      name: "Jaqueta Bomber de Algodão Premium",
      price: 450.0,
      materials: [
        { id: MAT_IDS.ALGODAO, quantity: 2.0 },
        { id: MAT_IDS.ZIPER, quantity: 1.0 },
        { id: MAT_IDS.ELASTICO, quantity: 1.0 },
        { id: MAT_IDS.LINHA, quantity: 25.0 },
      ],
    },
    {
      name: "Calça Cargo Utilitária (Muitos Bolsos)",
      price: 320.0,
      materials: [
        { id: MAT_IDS.ALGODAO, quantity: 1.8 },
        { id: MAT_IDS.ZIPER, quantity: 2.0 },
        { id: MAT_IDS.BOTAO, quantity: 2.0 },
        { id: MAT_IDS.LINHA, quantity: 15.0 },
      ],
    },

    {
      name: "Blazer Casual de Linho/Algodão",
      price: 289.9,
      materials: [
        { id: MAT_IDS.ALGODAO, quantity: 1.5 },
        { id: MAT_IDS.BOTAO, quantity: 3.0 },
        { id: MAT_IDS.LINHA, quantity: 20.0 },
      ],
    },
    {
      name: "Shorts de Corrida Performance",
      price: 129.9,
      materials: [
        { id: MAT_IDS.DRY_FIT, quantity: 0.8 },
        { id: MAT_IDS.ELASTICO, quantity: 0.6 },
        { id: MAT_IDS.LINHA, quantity: 8.0 },
      ],
    },
    {
      name: "Camisa Polo Clássica",
      price: 119.0,
      materials: [
        { id: MAT_IDS.ALGODAO, quantity: 0.9 },
        { id: MAT_IDS.BOTAO, quantity: 3.0 },
        { id: MAT_IDS.LINHA, quantity: 10.0 },
      ],
    },
    {
      name: "Legging de Compressão",
      price: 99.9,
      materials: [
        { id: MAT_IDS.DRY_FIT, quantity: 1.2 },
        { id: MAT_IDS.ELASTICO, quantity: 0.5 },
        { id: MAT_IDS.LINHA, quantity: 12.0 },
      ],
    },

    {
      name: "T-Shirt Básica (Branca)",
      price: 59.9,
      materials: [
        { id: MAT_IDS.ALGODAO, quantity: 0.7 },
        { id: MAT_IDS.LINHA, quantity: 5.0 },
      ],
    },
    {
      name: "Boné Snapback",
      price: 49.9,
      materials: [
        { id: MAT_IDS.DRY_FIT, quantity: 0.3 },
        { id: MAT_IDS.BOTAO, quantity: 1.0 },
        { id: MAT_IDS.LINHA, quantity: 3.0 },
      ],
    },
    {
      name: "Manguito Esportivo (Par)",
      price: 29.9,
      materials: [
        { id: MAT_IDS.DRY_FIT, quantity: 0.2 },
        { id: MAT_IDS.ELASTICO, quantity: 0.2 },
        { id: MAT_IDS.LINHA, quantity: 2.0 },
      ],
    },
  ];

  for (const product of productsToCreate) {
    await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        materials: {
          create: product.materials.map((m) => ({
            quantity: m.quantity,
            material: { connect: { id: m.id } },
          })),
        },
      },
    });
  }

  console.log(`Sucesso! ${productsToCreate.length} produtos criados.`);
} catch (error) {
  console.log(error);
}
