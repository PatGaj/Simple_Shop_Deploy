import { PrismaClient } from "../app/generated/prisma/client/index.js";
const prisma = new PrismaClient();

async function main() {
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "mouse",
        description: "Precision and comfort for everyday tasks and gaming.",
        exploreInfo: "Wired and wireless options for all users.",
        imageUrl: "https://i.ibb.co/cKn86xG7/mouse-Category.png",
      },
    }),
    prisma.category.create({
      data: {
        name: "keyboard",
        description: "Mechanical and membrane keyboards for work and play.",
        exploreInfo: "RGB backlighting, macro keys, and ergonomic designs.",
        imageUrl: "https://i.ibb.co/ZzkFDvg8/keyboard-Category.png",
      },
    }),
    prisma.category.create({
      data: {
        name: "headphones",
        description: "Immersive sound for gaming, music, and communication.",
        exploreInfo: "Over-ear, in-ear, wired, and wireless models.",
        imageUrl: "https://i.ibb.co/hFTNb7j8/headphones-Category.png",
      },
    }),
    prisma.category.create({
      data: {
        name: "monitor",
        description: "Crystal-clear displays for productivity, gaming, and entertainment.",
        exploreInfo: "4K, curved, ultrawide, and high refresh rate options.",
        imageUrl: "https://i.ibb.co/vvvv3G9M/monitor-Category.png",
      },
    }),
    prisma.category.create({
      data: {
        name: "webcam",
        description: "High-definition video for meetings, streaming, and content creation.",
        exploreInfo: "Built-in microphones, autofocus, and low-light correction.",
        imageUrl: "https://i.ibb.co/spkrTLxp/webcam-Category.png",
      },
    }),
  ]);

  const brands = await Promise.all([
    prisma.brand.create({ data: { name: "aoc", imageUrl: "https://i.ibb.co/XrsTRYGk/aoc-Brand-Logo.png" } }),
    prisma.brand.create({ data: { name: "jbl", imageUrl: "https://i.ibb.co/8Dj5fZ1x/jbl-Brand-Logo.png" } }),
    prisma.brand.create({ data: { name: "logitech", imageUrl: "https://i.ibb.co/0R2PnCM4/logitech-Brand-Logo.png" } }),
    prisma.brand.create({ data: { name: "razer", imageUrl: "https://i.ibb.co/ymm6YdDf/razer-Brand-Logo.png" } }),
    prisma.brand.create({ data: { name: "rexus", imageUrl: "https://i.ibb.co/1tfCK9YN/rexus-Brand-Logo.png" } }),
    prisma.brand.create({ data: { name: "rog", imageUrl: "https://i.ibb.co/Tq8hZJLM/rog-Brand-Logo.png" } }),
  ]);

  await Promise.all([
    // Mouse
    prisma.product.create({
      data: {
        name: "Logitech MX Master 3S",
        imageUrl: "https://i.ibb.co/nMRMMRSd/logitech-mx-master-3s.webp",
        price: 103.7,
        stock: 25,
        categoryId: categories[0].id,
        brandId: brands[2].id,
        description:
          "An advanced ergonomic mouse designed for professionals. Features ultra-quiet clicks, a high-precision 8000 DPI sensor, MagSpeed scroll wheel, and multi-device control via Bluetooth or USB receiver.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer DeathAdder V2",
        imageUrl: "https://i.ibb.co/TMV07CNT/razer-deathadder-v2.png",
        price: 77.71,
        stock: 40,
        categoryId: categories[0].id,
        brandId: brands[3].id,
        description:
          "A high-performance gaming mouse with a 20,000 DPI optical sensor, ultra-low latency, and ergonomic design for long gaming sessions. Equipped with Razer’s Speedflex cable for smoother swipes.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "Rexus Xierra X15",
        imageUrl: "https://i.ibb.co/JjpvQ3W8/rexus-xierra-x15.png",
        price: 23.13,
        discount: 19.99,
        stock: 50,
        categoryId: categories[0].id,
        brandId: brands[4].id,
        description:
          "A budget-friendly gaming mouse offering customizable RGB lighting, 6 programmable buttons, and a precise 7200 DPI sensor. Ideal for beginner gamers or casual users.  ",
      },
    }),

    // Monitor
    prisma.product.create({
      data: {
        name: "AOC 24G2SP",
        imageUrl: "https://i.ibb.co/HLT5y222/aoc-24g2sp.webp",
        price: 207.66,
        stock: 30,
        categoryId: categories[3].id,
        brandId: brands[0].id,
        description:
          "A 24-inch IPS gaming monitor with Full HD resolution, 165Hz refresh rate, and 1ms response time. Delivers vibrant colors and smooth gameplay with FreeSync Premium support.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "ROG Swift PG27AQN",
        imageUrl: "https://i.ibb.co/MyhW2S1X/rog-swift-pg27aqn.png",
        price: 779.44,
        stock: 15,
        categoryId: categories[3].id,
        brandId: brands[5].id,
        description:
          "A 27-inch QHD esports-grade display with a blistering 360Hz refresh rate and NVIDIA G-Sync compatibility. Designed for ultra-competitive gaming with unmatched smoothness.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer Raptor 27",
        imageUrl: "https://i.ibb.co/5gz4NpQ5/razer-raptor-27.png",
        price: 1455.44,
        discount: 1300.99,
        stock: 20,
        categoryId: categories[3].id,
        brandId: brands[3].id,
        description:
          "A 27-inch curved gaming monitor with Full HD resolution, 165Hz refresh rate, and immersive visuals. Built with a gamer-friendly design and great for fast-paced action games.  ",
      },
    }),

    // Headphones
    prisma.product.create({
      data: {
        name: "JBL Quantum 610",
        imageUrl: "https://i.ibb.co/FkWDvXQb/jbl-quantum-610.webp",
        price: 155.68,
        stock: 35,
        categoryId: categories[2].id,
        brandId: brands[1].id,
        description:
          "Wireless gaming headset with JBL QuantumSURROUND and 50mm drivers for immersive audio. Offers up to 40 hours of battery life and a detachable directional boom mic.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "ROG Delta S",
        imageUrl: "https://i.ibb.co/CpjpRDdv/rog-delta-s.png",
        price: 194.67,
        discount: 184.99,
        stock: 18,
        categoryId: categories[2].id,
        brandId: brands[5].id,
        description:
          "Premium Hi-Fi gaming headset with ESS 9281 Quad DAC and MQA support. Features customizable RGB lighting and a USB-C connector for compatibility with PC, consoles, and mobile.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer BlackShark V2",
        imageUrl: "https://i.ibb.co/TqKhhLVP/razer-blackshark-v2.png",
        price: 119.29,
        stock: 28,
        categoryId: categories[2].id,
        brandId: brands[3].id,
        description:
          "A lightweight esports headset with THX Spatial Audio, 50mm TriForce drivers, and a detachable noise-cancelling microphone. Tuned for clarity and competitive performance.  ",
      },
    }),

    // Keyboard
    prisma.product.create({
      data: {
        name: "Logitech G Pro X Keyboard",
        imageUrl: "https://i.ibb.co/VWkn6pS2/logitech-g-pro-x-keyboard.png",
        price: 155.68,
        stock: 22,
        categoryId: categories[1].id,
        brandId: brands[2].id,
        description:
          "A compact, tournament-grade mechanical keyboard with swappable GX switches. Built for eSports pros, it features RGB backlighting and onboard memory for custom profiles.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "Rexus Legionare MX5.2",
        imageUrl: "https://i.ibb.co/GfhJggyR/rexus-legionare-mx5-2.webp",
        price: 49.12,
        stock: 40,
        categoryId: categories[1].id,
        brandId: brands[4].id,
        description:
          "A mechanical gaming keyboard with Outemu Blue switches, durable construction, and vivid RGB lighting. Offers anti-ghosting and N-key rollover for fast-paced gaming.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer Huntsman Elite",
        imageUrl: "https://i.ibb.co/DgG0R1wZ/razer-huntsman-elite.png",
        price: 194.67,
        stock: 17,
        categoryId: categories[1].id,
        brandId: brands[3].id,
        description:
          "A full-sized mechanical keyboard with Razer’s proprietary optical switches, magnetic wrist rest, and Chroma RGB backlighting. Perfect for both gaming and productivity.  ",
      },
    }),

    // Webcam
    prisma.product.create({
      data: {
        name: "Logitech C920 HD Pro",
        imageUrl: "https://i.ibb.co/CKhVp5DS/logitech-c920-hd-pro.png",
        price: 90.71,
        stock: 32,
        categoryId: categories[4].id,
        brandId: brands[2].id,
        description:
          "A popular webcam offering crisp 1080p video, stereo microphones, and autofocus. Ideal for video conferencing, content creation, and streaming.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "ROG Eye S",
        imageUrl: "https://i.ibb.co/20kBs9XR/rog-eye-s.png",
        price: 155.68,
        stock: 15,
        categoryId: categories[4].id,
        brandId: brands[5].id,
        description:
          "Compact 1080p 60fps streaming webcam with HDR support and AI noise-cancelling mics. Engineered for streamers and gamers who need high performance in low-light environments.  ",
      },
    }),
    prisma.product.create({
      data: {
        name: "Razer Kiyo Pro",
        imageUrl: "https://i.ibb.co/svTvPzWh/razer-kiyo-pro.png",
        price: 64.72,
        stock: 26,
        categoryId: categories[4].id,
        brandId: brands[3].id,
        description:
          "A plug-and-play Full HD webcam with a built-in microphone and privacy shutter. Great for remote work, video calls, and online learning.  ",
      },
    }),
  ]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
