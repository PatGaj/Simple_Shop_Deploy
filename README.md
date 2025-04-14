# Symulacja Sklepu Internetowego

Projekt symulacji funkcjonalnego sklepu internetowego stworzony w oparciu o **Next.js**, zgodnie z dostarczonym projektem graficznym w **Figmie** oraz szczegółowymi wymaganiami technicznymi. Aplikacja ma na celu zaprezentowanie umiejętności tworzenia nowoczesnej, responsywnej aplikacji fullstack z wykorzystaniem aktualnych dobrych praktyk programistycznych.

## Cel projektu

Celem projektu jest stworzenie kompletnej aplikacji e-commerce z następującymi kluczowymi funkcjonalnościami:

- System logowania i rejestracji użytkownika
- Strona główna
- Lista produktów
- Strona szczegółów produktu
- Koszyk zakupowy
- Proces finalizacji zamówienia
- Panel użytkownika / profil

## Zastosowane technologie

Projekt został zbudowany z wykorzystaniem następujących technologii:

- **Next.js** – framework Reacta z obsługą SSR oraz API Routes
- **React** – do budowy komponentowego interfejsu użytkownika
- **TypeScript** – statyczne typowanie kodu dla większego bezpieczeństwa
- **Tailwind CSS** – framework CSS oparty na klasach narzędziowych
- **Prisma ORM** – bezpieczny typowo ORM do komunikacji z bazą danych
- **PostgreSQL** – relacyjna baza danych
- **Docker** – środowisko deweloperskie w kontenerach

## Założenia techniczne i funkcjonalne

- Aplikacja musi być w pełni wykonana w **Next.js**
- Projekt graficzny z Figmy ma być odwzorowany **precyzyjnie**
- Projekt musi być **w pełni responsywny**, także na urządzeniach mobilnych
- Stylowanie interfejsu:
  - Wykorzystanie **Tailwind CSS**
  - Zdefiniowane **zmienne kolorystyczne**
  - Odpowiednio dobrana **typografia**
- Komponenty wielokrotnego użytku (np. `Button`, `Input`) zawierają **wszystkie stany i warianty** widoczne w zakładce "Component" w Figmie
- **Przejrzysta struktura projektu**, zgodna z dobrymi praktykami Next.js
- Dane pobierane w **komponentach serwerowych**
- Backend oparty o **API Routes** w Next.js
- Grafiki w bazie danych zapisane jako **adresy URL**
- Baza danych **PostgreSQL** skonteneryzowana za pomocą Dockera
- Dane początkowe inicjalizowane poprzez **skrypt seed**, uruchamiany z `package.json`
- Aplikacja wdrożona na **Vercel**, z odpowiednią konfiguracją bazy danych

## Wdrożenie

Aplikacja zostanie wdrożona na platformie **Vercel**, z pełną integracją backendu i bazy danych. Szczegóły dotyczące konfiguracji zostaną dodane w trakcie rozwoju projektu.
