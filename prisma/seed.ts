import { PrismaClient } from "../app/generated/prisma/index.js";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "john.doe@example.com",
      firstName: "John",
      passwordHash: "test1234",
      address: "123 Main Street, Springfield",
      awatarUrl: "brak",
    },
  });

  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Mouse",
        description: "Precision and comfort for everyday tasks and gaming.",
        exploreInfo: "Wired and wireless options for all users.",
        imageUrl: "brak",
      },
    }),
    prisma.category.create({
      data: {
        name: "Keyboard",
        description: "Mechanical and membrane keyboards for work and play.",
        exploreInfo: "RGB backlighting, macro keys, and ergonomic designs.",
        imageUrl: "brak",
      },
    }),
    prisma.category.create({
      data: {
        name: "Headphones",
        description: "Immersive sound for gaming, music, and communication.",
        exploreInfo: "Over-ear, in-ear, wired, and wireless models.",
        imageUrl: "brak",
      },
    }),
    prisma.category.create({
      data: {
        name: "Gamepad",
        description: "Take control with responsive, comfortable gamepads.",
        exploreInfo: "Compatible with PC and consoles, wired/wireless.",
        imageUrl: "brak",
      },
    }),
    prisma.category.create({
      data: {
        name: "Microphone",
        description: "Clear voice capture for streaming, meetings, and gaming.",
        exploreInfo: "USB and XLR mics with noise reduction and high fidelity.",
        imageUrl: "brak",
      },
    }),
  ]);

  const brands = await Promise.all([
    prisma.brand.create({ data: { name: "Razer" } }),
    prisma.brand.create({ data: { name: "SteelSeries" } }),
    prisma.brand.create({ data: { name: "Corsair" } }),
    prisma.brand.create({ data: { name: "Keychron" } }),
    prisma.brand.create({ data: { name: "Elgato" } }),
  ]);

  await Promise.all([
    // 🖱️ Mouse
    prisma.product.create({
      data: {
        name: "Razer DeathAdder V2",
        imageUrl: "brak",
        price: 69.99,
        stock: 35,
        categoryId: categories[0].id,
        brandId: brands[0].id,
        description: "Ergonomic wired gaming mouse with precise 20K DPI sensor.",
      },
    }),
    prisma.product.create({
      data: {
        name: "SteelSeries Rival 3",
        imageUrl: "brak",
        price: 39.99,
        stock: 50,
        categoryId: categories[0].id,
        brandId: brands[1].id,
        description: "Durable and lightweight mouse with brilliant RGB lighting.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Corsair Katar Pro",
        imageUrl: "brak",
        price: 29.99,
        stock: 60,
        categoryId: categories[0].id,
        brandId: brands[2].id,
        description: "Compact and responsive mouse for FPS players.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer Basilisk X HyperSpeed",
        imageUrl: "brak",
        price: 59.99,
        stock: 40,
        categoryId: categories[0].id,
        brandId: brands[0].id,
        description: "Wireless gaming mouse with long battery life and speed.",
      },
    }),
    prisma.product.create({
      data: {
        name: "SteelSeries Aerox 3",
        imageUrl: "brak",
        price: 69.99,
        stock: 25,
        categoryId: categories[0].id,
        brandId: brands[1].id,
        description: "Ultra-lightweight wireless mouse with water resistance.",
      },
    }),

    // ⌨️ Keyboard
    prisma.product.create({
      data: {
        name: "Corsair K95 RGB Platinum",
        imageUrl: "brak",
        price: 159.99,
        stock: 20,
        categoryId: categories[1].id,
        brandId: brands[2].id,
        description: "Premium mechanical keyboard with RGB and macro keys.",
      },
    }),
    prisma.product.create({
      data: {
        name: "SteelSeries Apex Pro",
        imageUrl: "brak",
        price: 199.99,
        stock: 15,
        categoryId: categories[1].id,
        brandId: brands[1].id,
        description: "Adjustable mechanical switches and OLED display.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Keychron K6 Wireless",
        imageUrl: "brak",
        price: 74.99,
        stock: 45,
        categoryId: categories[1].id,
        brandId: brands[3].id,
        description: "Compact wireless keyboard with hot-swappable keys.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer BlackWidow V3",
        imageUrl: "brak",
        price: 129.99,
        stock: 30,
        categoryId: categories[1].id,
        brandId: brands[0].id,
        description: "Clicky mechanical switches and vibrant green lighting.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Corsair K60 RGB Pro",
        imageUrl: "brak",
        price: 99.99,
        stock: 40,
        categoryId: categories[1].id,
        brandId: brands[2].id,
        description: "Linear mechanical keys and full RGB customization.",
      },
    }),

    // 🎧 Headphones
    prisma.product.create({
      data: {
        name: "Razer Kraken X",
        imageUrl: "brak",
        price: 49.99,
        stock: 40,
        categoryId: categories[2].id,
        brandId: brands[0].id,
        description: "Lightweight headset with surround sound for gamers.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Corsair HS60 PRO",
        imageUrl: "brak",
        price: 69.99,
        stock: 30,
        categoryId: categories[2].id,
        brandId: brands[2].id,
        description: "Wired gaming headset with 7.1 surround and comfort fit.",
      },
    }),
    prisma.product.create({
      data: {
        name: "SteelSeries Arctis 5",
        imageUrl: "brak",
        price: 99.99,
        stock: 25,
        categoryId: categories[2].id,
        brandId: brands[1].id,
        description: "ClearCast mic and rich sound with RGB lighting.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Keychron Earbuds K-E1",
        imageUrl: "brak",
        price: 29.99,
        stock: 50,
        categoryId: categories[2].id,
        brandId: brands[3].id,
        description: "Compact wireless earbuds for everyday listening.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer BlackShark V2",
        imageUrl: "brak",
        price: 109.99,
        stock: 20,
        categoryId: categories[2].id,
        brandId: brands[0].id,
        description: "Esports headset with THX spatial audio.",
      },
    }),

    // 🎮 Gamepad
    prisma.product.create({
      data: {
        name: "Razer Wolverine V2",
        imageUrl: "brak",
        price: 89.99,
        stock: 15,
        categoryId: categories[3].id,
        brandId: brands[0].id,
        description: "Responsive wired controller for Xbox and PC.",
      },
    }),
    prisma.product.create({
      data: {
        name: "SteelSeries Stratus Duo",
        imageUrl: "brak",
        price: 59.99,
        stock: 25,
        categoryId: categories[3].id,
        brandId: brands[1].id,
        description: "Wireless gamepad compatible with Android and PC.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Corsair Sabre Gamepad",
        imageUrl: "brak",
        price: 49.99,
        stock: 30,
        categoryId: categories[3].id,
        brandId: brands[2].id,
        description: "Comfortable grip with programmable buttons.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Keychron Controller K-G1",
        imageUrl: "brak",
        price: 44.99,
        stock: 35,
        categoryId: categories[3].id,
        brandId: brands[3].id,
        description: "Minimalist controller for casual and indie games.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer Raiju Tournament",
        imageUrl: "brak",
        price: 119.99,
        stock: 10,
        categoryId: categories[3].id,
        brandId: brands[0].id,
        description: "Pro-grade wireless controller with trigger locks.",
      },
    }),

    // 🎙️ Microphone
    prisma.product.create({
      data: {
        name: "Elgato Wave:3",
        imageUrl: "brak",
        price: 139.99,
        stock: 20,
        categoryId: categories[4].id,
        brandId: brands[4].id,
        description: "Streaming mic with digital mixing and great clarity.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer Seiren Mini",
        imageUrl: "brak",
        price: 49.99,
        stock: 40,
        categoryId: categories[4].id,
        brandId: brands[0].id,
        description: "Compact USB mic with cardioid pickup for clear voice.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Corsair Elgato Wave:1",
        imageUrl: "brak",
        price: 109.99,
        stock: 18,
        categoryId: categories[4].id,
        brandId: brands[4].id,
        description: "High-quality USB mic with analog controls.",
      },
    }),
    prisma.product.create({
      data: {
        name: "SteelSeries Alias",
        imageUrl: "brak",
        price: 129.99,
        stock: 12,
        categoryId: categories[4].id,
        brandId: brands[1].id,
        description: "Studio-grade sound capture for streamers and podcasters.",
      },
    }),
    prisma.product.create({
      data: {
        name: "Keychron Mic K-M1",
        imageUrl: "brak",
        price: 59.99,
        stock: 28,
        categoryId: categories[4].id,
        brandId: brands[3].id,
        description: "Minimal USB microphone for work and casual streaming.",
      },
    }),
  ]);

  console.log("Seed zakończony");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
