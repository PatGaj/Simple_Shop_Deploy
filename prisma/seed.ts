import { PrismaClient } from "../app/generated/prisma/client/index.js";
const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      {
        id: 1,
        name: "Mouse",
        iconUrl: "https://i.ibb.co/cKn86xG7/mouse-Category.png",
        imageUrl: "https://i.ibb.co/GvHcRwjp/Basilisk-V3.png",
        description: `Discover our wide selection of computer mice designed for all types of users—from gamers to office professionals. Here you'll find both high-precision gaming models and ergonomic mice for everyday use. Each device combines comfort, functionality, and modern design to deliver top-level performance.`,
        exploreInfo: `Browse products by brand, connection type, or intended use to easily find the perfect mouse for your needs. Use advanced filters to narrow down your options and make faster, more informed decisions. Whether you're gaming, working, or simply browsing, you'll find the right mouse in this category.`,
      },
      {
        id: 2,
        name: "Monitor",
        iconUrl: "https://i.ibb.co/vvvv3G9M/monitor-Category.png",
        imageUrl: "https://i.ibb.co/LXLDy3gn/Raptor-27.png",
        description: `Explore our extensive range of monitors tailored to every need — from professional workspaces to immersive gaming setups. We offer high-resolution displays, ultra-wide screens, and models with advanced color accuracy for creative professionals. With the right monitor, you can enhance productivity, reduce eye strain, and enjoy exceptional visual quality.`,
        exploreInfo: `Browse by screen size, resolution, refresh rate, or intended use to find the ideal monitor for your setup. Our filters make it easy to compare models and features, so you can make the right choice quickly. Whether you're editing, gaming, or working from home, we’ve got the perfect display for you.`,
      },
      {
        id: 3,
        name: "Headphones",
        iconUrl: "https://i.ibb.co/hFTNb7j8/headphones-Category.png",
        imageUrl: "https://i.ibb.co/LdVT5fZq/GH401.png",
        description: `Discover our collection of headphones designed to deliver immersive sound, whether you're listening to music, gaming, or taking calls. From wireless earbuds to over-ear studio models, we offer options to match every lifestyle and preference. Enjoy superior audio quality, comfort, and modern features like noise cancellation and voice control.`,
        exploreInfo: `Browse by type, connectivity, brand, or usage to easily find the headphones that fit your needs. Use filters to compare sound quality, battery life, and extra features tailored to your daily routine. Whether you're on the go, at home, or in the studio — the perfect pair is waiting for you.`,
      },
      {
        id: 4,
        name: "Keyboard",
        iconUrl: "https://i.ibb.co/ZzkFDvg8/keyboard-Category.png",
        imageUrl: "https://i.ibb.co/nNZrKYvd/Legionare-MX-5-2.png",
        description: `Explore our wide selection of keyboards designed for productivity, gaming, and everyday use. From mechanical models with tactile feedback to slim wireless options for minimalistic setups, we have something for every preference. Enhance your typing experience with reliable performance, ergonomic designs, and customizable features.`,
        exploreInfo: `Browse by switch type, layout, connectivity, or intended use to find the perfect keyboard for your setup. Our filters help you quickly compare features like backlighting, programmability, and form factor. Whether you're a gamer, a professional, or a casual user — the right keyboard is here for you.`,
      },
      {
        id: 5,
        name: "Webcam",
        iconUrl: "https://i.ibb.co/spkrTLxp/webcam-Category.png",
        imageUrl: "https://i.ibb.co/35T8fVQ8/SW-RX01.png",
        description: `Find the ideal webcam for video calls, streaming, online classes, or content creation in our carefully curated selection. We offer models with Full HD and 4K resolution, built-in microphones, and low-light correction for clear, professional-looking video. Whether for work or personal use, our webcams deliver quality and reliability you can count on.`,
        exploreInfo: `Browse by resolution, frame rate, features, or brand to easily find a webcam that fits your needs. Use filters to compare image quality, autofocus, and mounting options for your setup. From remote meetings to live streaming — the right webcam makes all the difference.`,
      },
    ],
  });

  await prisma.brand.createMany({
    data: [
      {
        id: 1,
        name: "AOC",
        imageUrl: "https://i.ibb.co/XrsTRYGk/aoc-Brand-Logo.png",
      },
      {
        id: 2,
        name: "JBL",
        imageUrl: "https://i.ibb.co/8Dj5fZ1x/jbl-Brand-Logo.png",
      },
      {
        id: 3,
        name: "Logitech",
        imageUrl: "https://i.ibb.co/0R2PnCM4/logitech-Brand-Logo.png",
      },
      {
        id: 4,
        name: "Razer",
        imageUrl: "https://i.ibb.co/ymm6YdDf/razer-Brand-Logo.png",
      },
      {
        id: 5,
        name: "Rexus",
        imageUrl: "https://i.ibb.co/1tfCK9YN/rexus-Brand-Logo.png",
      },
      {
        id: 6,
        name: "ROG",
        imageUrl: "https://i.ibb.co/Tq8hZJLM/rog-Brand-Logo.png",
      },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        id: 1,
        brandId: 1,
        categoryId: 1,
        name: "AGON AGM700",
        description:
          "AOC AGON AGM700 to przewodowa mysz gamingowa wyposażona w sensor PixArt PMW3389 o maksymalnej rozdzielczości 16 000 DPI. Posiada 8 programowalnych przycisków, w tym przycisk snajperski, oraz system regulacji wagi do 25 g. Dzięki przełącznikom Omron o żywotności 50 milionów kliknięć, zapewnia trwałość i precyzję działania.",
        exploreInfo:
          "Mysz oferuje podświetlenie RGB z 16,8 milionami kolorów oraz pamięć wewnętrzną na 3 profile użytkownika. Ergonomiczny kształt i teksturowane boki zapewniają komfort podczas długich sesji gamingowych.",
        price: 21.25,
        discount: 0,
        stock: 5,
        imageUrl: "https://i.ibb.co/rTC7hn1/AGM700.png",
      },
      {
        id: 2,
        brandId: 3,
        categoryId: 1,
        name: "G502 X Plus",
        description:
          "Logitech G502 X Plus to bezprzewodowa mysz gamingowa z sensorem HERO 25K, oferująca rozdzielczość do 25 600 DPI. Wyposażona jest w 13 programowalnych przycisków oraz podświetlenie LIGHTSYNC RGB z 8 strefami. Dzięki technologii LIGHTSPEED zapewnia szybkie i stabilne połączenie bezprzewodowe.",
        exploreInfo:
          "Mysz posiada hybrydowe przełączniki optyczno-mechaniczne LIGHTFORCE, które łączą szybkość działania z wyraźnym kliknięciem. Ergonomiczny kształt i gumowe uchwyty boczne zapewniają komfort nawet podczas intensywnych rozgrywek.",
        price: 28.99,
        discount: 10,
        stock: 15,
        imageUrl: "https://i.ibb.co/h1tTJm3y/G502-X-Plus.png",
      },
      {
        id: 3,
        brandId: 4,
        categoryId: 1,
        name: "Basilisk V3",
        description:
          "Razer Basilisk V3 to przewodowa mysz gamingowa z sensorem Focus+ o rozdzielczości do 26 000 DPI. Posiada 11 programowalnych przycisków oraz unikalne kółko przewijania HyperScroll z funkcją automatycznego przełączania trybów. Ergonomiczny design z podpórką pod kciuk zapewnia wygodę podczas długich sesji.",
        exploreInfo:
          "Mysz oferuje podświetlenie Razer Chroma RGB z 16,8 milionami kolorów oraz możliwość synchronizacji z innymi urządzeniami Razer. Dzięki oprogramowaniu Razer Synapse użytkownik może dostosować ustawienia DPI, przypisać makra i personalizować efekty świetlne.",
        price: 53.33,
        discount: 0,
        stock: 25,
        imageUrl: "https://i.ibb.co/GvHcRwjp/Basilisk-V3.png",
      },
      {
        id: 4,
        brandId: 5,
        categoryId: 1,
        name: "Daxa Air V",
        description:
          "Rexus Daxa Air V to ultralekka mysz gamingowa ważąca zaledwie 57 gramów, wyposażona w sensor PixArt PAW3950 o rozdzielczości do 16 000 DPI. Posiada przełączniki Huano oraz funkcję hot-swappable, umożliwiającą łatwą wymianę przełączników. Dzięki trzem trybom łączności (przewodowy, 2.4 GHz i Bluetooth), oferuje wszechstronność w użytkowaniu.",
        exploreInfo:
          "Mysz została zaprojektowana z myślą o graczach ceniących sobie lekkość i szybkość reakcji. Jej konstrukcja i funkcje sprawiają, że jest to idealny wybór dla graczy FPS i innych dynamicznych gier.",
        price: 31.11,
        discount: 0,
        stock: 26,
        imageUrl: "https://i.ibb.co/1tmZ216H/Daxa-Air-V.png",
      },
      {
        id: 5,
        brandId: 6,
        categoryId: 1,
        name: "Gladius III",
        description:
          "ROG Gladius III to mysz gamingowa z sensorem optycznym o rozdzielczości do 26 000 DPI, oferująca precyzyjne śledzenie ruchu. Wyposażona jest w unikalny mechanizm przełączników Push-Fit Switch Socket II, umożliwiający łatwą wymianę przełączników. Dzięki trzem trybom łączności (przewodowy, 2.4 GHz i Bluetooth), zapewnia elastyczność w użytkowaniu.",
        exploreInfo:
          "Mysz posiada podświetlenie Aura Sync RGB oraz ergonomiczny kształt dostosowany do prawej dłoni. Jej konstrukcja i funkcje sprawiają, że jest to doskonały wybór dla wymagających graczy.",
        price: 12.25,
        discount: 4,
        stock: 9,
        imageUrl: "https://i.ibb.co/gFy62Zp5/Gladius-III.png",
      },
      {
        id: 6,
        brandId: 1,
        categoryId: 2,
        name: "Q27G4ZD",
        description:
          "AOC Q27G4ZD to 27-calowy monitor z panelem QD-OLED, oferujący rozdzielczość 2560x1440 i częstotliwość odświeżania 240 Hz. Dzięki technologii OLED zapewnia głębokie czernie i żywe kolory, idealne dla graczy i entuzjastów multimediów. Monitor wspiera technologię NVIDIA G-Sync, zapewniając płynność obrazu podczas dynamicznych scen.",
        exploreInfo:
          "AOC Q27G4ZD oferuje szerokie kąty widzenia i niski czas reakcji, co czyni go doskonałym wyborem dla wymagających użytkowników. Jego nowoczesny design i smukłe ramki sprawiają, że świetnie prezentuje się na każdym biurku.",
        price: 250.33,
        discount: 0,
        stock: 21,
        imageUrl: "https://i.ibb.co/Q3w7wkSD/Q27G4ZD.png",
      },
      {
        id: 7,
        brandId: 4,
        categoryId: 2,
        name: "Raptor 27",
        description:
          "Razer Raptor 27 to 27-calowy monitor gamingowy z rozdzielczością WQHD (2560x1440) i częstotliwością odświeżania 165 Hz. Wyposażony w technologię FreeSync i G-Sync Compatible, zapewnia płynność obrazu bez rozrywania klatek. Dodatkowo, oferuje podświetlenie Razer Chroma RGB, synchronizujące się z innymi urządzeniami Razer.",
        exploreInfo:
          "Monitor posiada ergonomiczny stojak z regulacją wysokości i kąta nachylenia, co zwiększa komfort użytkowania. Jego nowoczesny design i cienkie ramki sprawiają, że doskonale komponuje się z innymi elementami stanowiska gamingowego.",
        price: 1405.63,
        discount: 100,
        stock: 11,
        imageUrl: "https://i.ibb.co/LXLDy3gn/Raptor-27.png",
      },
      {
        id: 8,
        brandId: 6,
        categoryId: 2,
        name: "Swift PG279QE",
        description:
          "ROG Swift PG279QE to 27-calowy monitor z rozdzielczością WQHD (2560x1440) i częstotliwością odświeżania 165 Hz. Dzięki technologii NVIDIA G-Sync eliminuje zacięcia i rozrywanie obrazu, zapewniając płynność w grach. Monitor oferuje również szerokie kąty widzenia i wysoką jakość obrazu, idealną dla graczy i entuzjastów multimediów.",
        exploreInfo:
          "ROG Swift PG279QE posiada ergonomiczny stojak z możliwością regulacji wysokości, obrotu i nachylenia, co pozwala na dostosowanie ustawień do indywidualnych preferencji. Jego stylowy design z podświetleniem ROG sprawia, że wyróżnia się na tle innych monitorów.",
        price: 820.11,
        discount: 210,
        stock: 13,
        imageUrl: "https://i.ibb.co/JFtQccqF/Swift-PG279-QE.png",
      },
      {
        id: 9,
        brandId: 6,
        categoryId: 2,
        name: "Strix XG27AQ",
        description:
          "ROG Strix XG27AQ to 27-calowy monitor z matrycą Fast IPS, oferujący rozdzielczość WQHD (2560x1440) i częstotliwość odświeżania 170 Hz. Dzięki technologii ASUS FastIPS zapewnia szybki czas reakcji 1 ms, co jest kluczowe w dynamicznych grach. Monitor wspiera technologię G-Sync Compatible, eliminując zacięcia i rozrywanie obrazu.",
        exploreInfo:
          "ROG Strix XG27AQ oferuje szerokie kąty widzenia i wysoką jakość obrazu, co czyni go idealnym wyborem dla graczy i profesjonalistów. Jego nowoczesny design z podświetleniem Aura Sync pozwala na synchronizację efektów świetlnych z innymi urządzeniami ASUS.",
        price: 452.12,
        discount: 0,
        stock: 16,
        imageUrl: "https://i.ibb.co/tMMwdhkf/Strix-XG27-AQ.png",
      },
      {
        id: 10,
        brandId: 1,
        categoryId: 2,
        name: "24G2U",
        description:
          "AOC 24G2U to 23,8-calowy monitor z matrycą IPS, oferujący rozdzielczość Full HD (1920x1080) i częstotliwość odświeżania 144 Hz. Dzięki technologii FreeSync Premium eliminuje zacięcia i rozrywanie obrazu, zapewniając płynność w grach. Monitor posiada również czas reakcji 1 ms MPRT, co przekłada się na szybkie i precyzyjne wyświetlanie dynamicznych scen.",
        exploreInfo:
          "AOC 24G2U oferuje ergonomiczny stojak z regulacją wysokości oraz zintegrowany hub USB 3.2 Gen1, co zwiększa wygodę użytkowania. Jego kompaktowe wymiary i atrakcyjna cena czynią go doskonałym wyborem dla graczy poszukujących wydajnego monitora w przystępnej cenie.",
        price: 120.85,
        discount: 0,
        stock: 8,
        imageUrl: "https://i.ibb.co/V0K6Q92p/24G2U.png",
      },
      {
        id: 11,
        brandId: 1,
        categoryId: 3,
        name: "GH401",
        description:
          "AOC GH401 to bezprzewodowe słuchawki gamingowe z 50 mm przetwornikami, oferujące dźwięk stereo i odłączany mikrofon z redukcją szumów. Dzięki łączności 2.4 GHz zapewniają stabilne połączenie bez opóźnień, a bateria pozwala na 17 godzin pracy.",
        exploreInfo:
          "Słuchawki są kompatybilne z PC, PS5, Xbox i Nintendo Switch, oferując wszechstronność użytkowania. Ich ergonomiczny design i miękkie nauszniki zapewniają komfort podczas długich sesji gamingowych.",
        price: 257.95,
        discount: 0,
        stock: 25,
        imageUrl: "https://i.ibb.co/LdVT5fZq/GH401.png",
      },
      {
        id: 12,
        brandId: 2,
        categoryId: 3,
        name: "Quantum 910",
        description:
          "JBL Quantum 910 Wireless to zaawansowane słuchawki gamingowe z technologią JBL QuantumSPHERE 360 i śledzeniem ruchów głowy, zapewniające precyzyjny dźwięk przestrzenny. Posiadają aktywną redukcję szumów (ANC) i 50 mm przetworniki, oferując immersyjne wrażenia audio.",
        exploreInfo:
          "Słuchawki oferują łączność bezprzewodową 2.4 GHz oraz Bluetooth, a także możliwość jednoczesnego połączenia z dwoma urządzeniami. Ich konstrukcja zapewnia komfort noszenia nawet podczas wielogodzinnych sesji.",
        price: 362.33,
        discount: 0,
        stock: 34,
        imageUrl: "https://i.ibb.co/3mkqBysC/Quantum-910.png",
      },
      {
        id: 13,
        brandId: 3,
        categoryId: 3,
        name: "G PRO X 2 LIGHTSPEED",
        description:
          "Logitech G PRO X 2 LIGHTSPEED to profesjonalne słuchawki bezprzewodowe z technologią LIGHTSPEED, zapewniające niskie opóźnienia i wysoką jakość dźwięku. Wyposażone w przetworniki PRO-G Graphene 50 mm oraz odłączany mikrofon z technologią Blue VO!CE.",
        exploreInfo:
          "Słuchawki są kompatybilne z PC, PS5, PS4 i Nintendo Switch, oferując wszechstronność użytkowania. Ich lekka konstrukcja i miękkie nauszniki zapewniają komfort podczas długich sesji gamingowych.",
        price: 120.22,
        discount: 0,
        stock: 22,
        imageUrl: "https://i.ibb.co/S40XT5M7/G-PRO-X2-LIGHTSPEED.png",
      },
      {
        id: 14,
        brandId: 4,
        categoryId: 3,
        name: "Kraken V4 Pro",
        description:
          "Razer Kraken V4 Pro to słuchawki gamingowe z technologią Razer Sensa HD Haptics, oferujące realistyczne wibracje zsynchronizowane z dźwiękiem w grze. Wyposażone w przetworniki Razer TriForce Bio-Cellulose 40 mm i technologię THX Spatial Audio.",
        exploreInfo:
          "Słuchawki oferują cztery tryby łączności: HyperSpeed Wireless, Bluetooth, USB i 3.5 mm, zapewniając kompatybilność z różnymi platformami. Ich ergonomiczna konstrukcja i miękkie nauszniki gwarantują komfort noszenia.",
        price: 555.55,
        discount: 55.55,
        stock: 36,
        imageUrl: "https://i.ibb.co/dw2pNbYm/Kraken-V4-Pro.png",
      },
      {
        id: 15,
        brandId: 6,
        categoryId: 3,
        name: "Cetra True Wireless",
        description:
          "ASUS ROG Cetra True Wireless to bezprzewodowe słuchawki douszne z niskim opóźnieniem i aktywną redukcją szumów (ANC), idealne dla mobilnych graczy. Wyposażone w 10 mm przetworniki ASUS Essence i oferujące do 27 godzin pracy z etui ładującym.",
        exploreInfo:
          "Słuchawki są odporne na zachlapania (IPX4) i oferują tryb niskiego opóźnienia, zapewniając synchronizację dźwięku z obrazem. Ich kompaktowy design i ergonomiczne wkładki zapewniają komfort noszenia.",
        price: 201.35,
        discount: 0,
        stock: 24,
        imageUrl: "https://i.ibb.co/v68vRcxX/Cetra-True-Wireless.png",
      },
      {
        id: 16,
        brandId: 1,
        categoryId: 4,
        name: "GK500",
        description:
          "AOC GK500 to pełnowymiarowa klawiatura mechaniczna wyposażona w przełączniki Outemu Blue, zapewniające wyraźne kliknięcia i wysoką responsywność. Posiada pełne podświetlenie RGB z możliwością personalizacji oraz odłączaną podpórkę pod nadgarstki dla większego komfortu. Dzięki funkcji N-Key Rollover i anti-ghosting, każda naciśnięta kombinacja klawiszy jest dokładnie rejestrowana.",
        exploreInfo:
          "Klawiatura oferuje programowalne makra i profile użytkownika, co pozwala na dostosowanie jej do indywidualnych potrzeb gracza. Solidna konstrukcja i ergonomiczny design sprawiają, że GK500 jest idealnym wyborem dla entuzjastów gier.",
        price: 236.45,
        discount: 0,
        stock: 15,
        imageUrl: "https://i.ibb.co/2BcnkLf/GK500.png",
      },
      {
        id: 17,
        brandId: 3,
        categoryId: 4,
        name: "G PRO Mechanical",
        description:
          "Logitech G PRO to kompaktowa klawiatura mechaniczna bez bloku numerycznego, zaprojektowana z myślą o profesjonalnych graczach. Wyposażona w przełączniki GX Clicky, oferuje wyraźne i szybkie reakcje na naciśnięcia klawiszy. Dzięki odłączanemu kablowi Micro USB i kompaktowej konstrukcji, jest łatwa w transporcie i idealna na turnieje.",
        exploreInfo:
          "Klawiatura posiada podświetlenie LIGHTSYNC RGB, które można dostosować za pomocą oprogramowania Logitech G HUB. Jej trwała konstrukcja i precyzyjne przełączniki sprawiają, że jest to niezawodne narzędzie dla każdego gracza.",
        price: 125.3,
        discount: 0,
        stock: 18,
        imageUrl: "https://i.ibb.co/7tZJJ5J5/G-PRO-Mechanical.png",
      },
      {
        id: 18,
        brandId: 4,
        categoryId: 4,
        name: "BlackWidow V4 Pro",
        description:
          "Razer BlackWidow V4 Pro to zaawansowana klawiatura mechaniczna z przełącznikami Razer Orange Gen 3, oferującymi ciche i wyczuwalne kliknięcia. Wyposażona w ekran OLED i pokrętło sterujące, umożliwia szybki dostęp do różnych funkcji i informacji systemowych. Dzięki technologii Razer Chroma RGB, użytkownik może dostosować podświetlenie klawiszy do własnych preferencji.",
        exploreInfo:
          "Klawiatura oferuje trzy tryby łączności: przewodowy, bezprzewodowy HyperSpeed i Bluetooth, zapewniając wszechstronność użytkowania. Jej ergonomiczna konstrukcja i miękka podpórka pod nadgarstki gwarantują komfort nawet podczas długich sesji gamingowych.",
        price: 423.78,
        discount: 0,
        stock: 37,
        imageUrl: "https://i.ibb.co/3YC3bspB/Black-Widow-V4-Pro.png",
      },
      {
        id: 19,
        brandId: 5,
        categoryId: 4,
        name: "Legionare MX5.2",
        description:
          "Rexus Legionare MX5.2 to kompaktowa klawiatura mechaniczna z 87 klawiszami, idealna dla graczy ceniących sobie mobilność i oszczędność miejsca. Dostępna w różnych wariantach kolorystycznych, oferuje estetyczny wygląd i wysoką funkcjonalność. Dzięki przełącznikom mechanicznym, zapewnia szybkie i precyzyjne reakcje na naciśnięcia klawiszy.",
        exploreInfo:
          "Klawiatura charakteryzuje się solidną konstrukcją i trwałością, co czyni ją niezawodnym narzędziem dla każdego gracza. Jej kompaktowy design sprawia, że łatwo ją zabrać na turnieje czy sesje LAN.",
        price: 331.1,
        discount: 0,
        stock: 39,
        imageUrl: "https://i.ibb.co/nNZrKYvd/Legionare-MX-5-2.png",
      },
      {
        id: 20,
        brandId: 6,
        categoryId: 4,
        name: "Azoth Extreme",
        description:
          "ASUS ROG Azoth Extreme to 75% klawiatura mechaniczna klasy premium, wyposażona w aluminiową obudowę i metalową ramę. Posiada ekran OLED oraz pokrętło sterujące, umożliwiające szybki dostęp do różnych funkcji i informacji systemowych. Dzięki technologii ROG SpeedNova, oferuje bezprzewodowe połączenie o częstotliwości 8000 Hz, zapewniając płynność działania.",
        exploreInfo:
          "Klawiatura oferuje trzy tryby łączności: przewodowy, bezprzewodowy 2.4 GHz i Bluetooth, zapewniając wszechstronność użytkowania. Jej ergonomiczna konstrukcja i wysokiej jakości materiały gwarantują komfort i trwałość nawet podczas intensywnego użytkowania.",
        price: 114.58,
        discount: 0,
        stock: 28,
        imageUrl: "https://i.ibb.co/s0CFWWt/Azoth-Extreme.png",
      },
      {
        id: 21,
        brandId: 1,
        categoryId: 5,
        name: "M10030",
        description:
          "AOC M10030 to kamera internetowa oferująca rozdzielczość Full HD 1080p, idealna do wideokonferencji i streamingu. Wyposażona jest w wbudowany mikrofon oraz osłonę prywatności, zapewniającą bezpieczeństwo użytkownika. Dzięki technologii Plug & Play, urządzenie jest gotowe do użycia zaraz po podłączeniu do portu USB.",
        exploreInfo:
          "Kamera posiada szeroki kąt widzenia oraz automatyczną korekcję obrazu, co zapewnia wysoką jakość transmisji w różnych warunkach oświetleniowych. Jej kompaktowy design sprawia, że doskonale sprawdzi się zarówno w domowym biurze, jak i podczas podróży.",
        price: 56.36,
        discount: 0,
        stock: 24,
        imageUrl: "https://i.ibb.co/zT6YbFKn/M10030.png",
      },
      {
        id: 22,
        brandId: 3,
        categoryId: 5,
        name: "BRIO",
        description:
          "Logitech BRIO to zaawansowana kamera internetowa oferująca rozdzielczość 4K Ultra HD, idealna dla profesjonalistów i streamerów. Wyposażona jest w technologię HDR oraz automatyczną korekcję światła, zapewniającą doskonałą jakość obrazu w różnych warunkach oświetleniowych. Dzięki funkcji Windows Hello, umożliwia szybkie i bezpieczne logowanie do systemu.",
        exploreInfo:
          "Kamera posiada trzy regulowane kąty widzenia (65°, 78°, 90°) oraz dwukierunkowe mikrofony z redukcją szumów, co zapewnia klarowny dźwięk podczas rozmów. Jej elegancki design i wszechstronność sprawiają, że jest to jedno z najlepszych rozwiązań na rynku.",
        price: 89.22,
        discount: 0,
        stock: 10,
        imageUrl: "https://i.ibb.co/wh1CQ7jw/BRIO.png",
      },
      {
        id: 23,
        brandId: 4,
        categoryId: 5,
        name: "Kiyo Pro",
        description:
          "Razer Kiyo Pro to kamera internetowa zaprojektowana z myślą o streamerach i graczach, oferująca rozdzielczość Full HD 1080p przy 60 klatkach na sekundę. Wyposażona jest w adaptacyjny czujnik światła oraz technologię HDR, zapewniającą doskonałą jakość obrazu w różnych warunkach oświetleniowych. Dzięki szerokiemu kątowi widzenia i regulowanemu polu widzenia, użytkownik ma pełną kontrolę nad kadrem.",
        exploreInfo:
          "Kamera posiada wbudowany mikrofon z redukcją szumów oraz kompatybilność z popularnymi platformami streamingowymi. Jej solidna konstrukcja i łatwość montażu sprawiają, że jest to idealne narzędzie dla profesjonalnych twórców treści.",
        price: 125.22,
        discount: 12,
        stock: 8,
        imageUrl: "https://i.ibb.co/JW6vJXS0/Kiyo-Pro.png",
      },
      {
        id: 24,
        brandId: 5,
        categoryId: 5,
        name: "SW-RX01",
        description:
          "Rexus SW-RX01 to kompaktowa kamera internetowa oferująca wysoką jakość obrazu w rozdzielczości HD, idealna do codziennego użytku. Dzięki technologii Plug & Play, nie wymaga instalacji dodatkowego oprogramowania, co umożliwia szybkie rozpoczęcie pracy. Wyposażona jest w czuły obiektyw z autofokusem, zapewniający wyraźny obraz podczas wideorozmów.",
        exploreInfo:
          "Kamera jest kompatybilna z różnymi systemami operacyjnymi i platformami komunikacyjnymi. Jej prosty design i łatwość obsługi czynią ją doskonałym wyborem dla użytkowników domowych i biurowych.",
        price: 36.12,
        discount: 0,
        stock: 23,
        imageUrl: "https://i.ibb.co/35T8fVQ8/SW-RX01.png",
      },
      {
        id: 25,
        brandId: 6,
        categoryId: 5,
        name: "Eye S",
        description:
          "ASUS ROG Eye S to kompaktowa kamera internetowa zaprojektowana z myślą o graczach i streamerach, oferująca rozdzielczość Full HD 1080p przy 60 klatkach na sekundę. Wyposażona jest w technologię Face AE oraz mikrofon z redukcją szumów, zapewniającą wysoką jakość obrazu i dźwięku. Dzięki składanej konstrukcji o grubości zaledwie 17 mm, kamera jest łatwa do przenoszenia i przechowywania.",
        exploreInfo:
          "Kamera jest kompatybilna z popularnymi platformami streamingowymi i komunikacyjnymi. Jej elegancki design i zaawansowane funkcje sprawiają, że jest to doskonały wybór dla profesjonalnych użytkowników.",
        price: 47.33,
        discount: 0,
        stock: 10,
        imageUrl: "https://i.ibb.co/zjsxjhB/Eye-S.png",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
