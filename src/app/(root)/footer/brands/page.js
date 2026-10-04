
"use client";

import { useMemo, useState } from "react";

const brandsByLetter = {
  "0-9": [
    "1STPLAYER",
    "70mai",
    "7Artisans",
    "8BitDo",
  ],

  A: [
    "A4Tech",
    "Abit",
    "ACEFAST",
    "Acer",
    "ADAM Audio",
    "ADATA",
    "Addlink",
    "Adobe",
    "Aecooly",
    "AFOX",
    "Ahuja",
    "Aigo",
    "AirRobo",
    "AITC",
    "AIWA",
    "AJAZZ",
    "AKASH",
    "AKASO",
    "AKG",
    "Alimoto",
    "Amalink",
    "Amazfit",
    "Amazon",
    "AMD",
    "Anker",
    "Antec",
    "AnyDesk",
    "AOC",
    "Aolion",
    "Apacer",
    "APC",
    "Apogee",
    "APOLLO",
    "Apple",
    "Aptech",
    "ARCTIC",
    "Arctic Hunter",
    "Ariston",
    "ARKTEK",
    "ARMOR",
    "ARS",
    "Arzopa",
    "ASRock",
    "Asus",
    "Asustor",
    "Atomberg",
    "Audio Technica",
    "AUKEY",
    "AULA",
    "AUN",
    "Aurora",
    "AUSEK",
    "Autodesk",
    "Avaya",
    "AVer",
    "AVerMedia",
    "Avision",
    "Awei",
  ],

  B: [
    "Baseus",
    "BDCOM",
    "beko",
    "Belden",
    "Belkin",
    "BenQ",
    "Beurer",
    "Beyerdynamic",
    "Bijoy",
    "Bionime",
    "BIOSTAR",
    "Bixolon",
    "Black Cat",
    "Black Shark",
    "Blackmagic Design",
    "Blisbond",
    "Blisspads",
    "BLON",
    "Bluetti",
    "boAt",
    "Bory",
    "BOSCH",
    "Bose",
    "Boss",
    "BoxLight",
    "Boya",
    "Brother",
    "BWOO",
    "BYZ",
  ],

  C: [
    "C-Data",
    "Cambium",
    "Campro",
    "Canon",
    "Carbono",
    "CASIO",
    "Charg",
    "Cheerlux",
    "Chihua",
    "Choetech",
    "Chuwi",
    "Ciontek",
    "Cisco",
    "Citizen",
    "cmf by Nothing",
    "CMX",
    "COLMI",
    "Colorful",
    "CommScope",
    "Cooler Master",
    "Corsair",
    "Cote",
    "Cougar",
    "Crucial",
    "Cudy",
  ],

  D: [
    "D-Link",
    "Daewoo",
    "Dahua",
    "Daikin",
    "Dareu",
    "DateUP",
    "Deepcool",
    "Deli",
    "Dell",
    "DeLonghi",
    "Digipod",
    "Digital X",
    "DINSTAR",
    "Dintek",
    "DIZO",
    "Dji",
    "Dmooster",
    "Domens",
    "Dopah",
    "DTECH",
    "Durgod",
    "Dyson",
  ],

  E: [
    "Eaget",
    "EarFun",
    "EcoFlow",
    "EcoSONIC",
    "Ecovacs",
    "Edgecore",
    "Edifier",
    "EKSA",
    "EKWB",
    "Elgato",
    "Elite",
    "EMEET",
    "ENCHEN",
    "Energizer",
    "EnSmart",
    "EPSON",
    "Eset",
    "Eurovision",
    "EVOLIS",
    "Exide",
    "EZVIZ",
  ],

  F: [
    "F&D",
    "Fantech",
    "Fanvil",
    "Fastrack",
    "Feiyu",
    "FeuVision",
    "FiberFox",
    "Ficer",
    "FIFINE",
    "Fire Boltt",
    "FJGEAR",
    "Flyingvoice",
    "Focal",
    "Focusrite",
    "FONENG",
    "Fopo",
    "Fujifilm",
    "Fujitsu",
    "Furycube",
  ],

  G: [
    "G&G",
    "G-Printer",
    "G.SKILL",
    "GAMDIAS",
    "GameMax",
    "Games",
    "GameSir",
    "Garmin",
    "GEEMY",
    "GEESUU",
    "Genata",
    "Genelec",
    "General",
    "GIGABYTE",
    "Gigalink",
    "Gigasonic",
    "GoDEX",
    "Godox",
    "Golden Field",
    "Google",
    "GoPro",
    "Gospower",
    "Grandstream",
    "Gree",
    "GTCODESTAR",
    "GUNNIR",
  ],

  H: [
    "Haier",
    "Haiko",
    "Harman Kardon",
    "Havells",
    "Havit",
    "Haylou",
    "HDFocus",
    "Helio",
    "Henry",
    "HID",
    "HiFuture",
    "Hiksemi",
    "Hikvision",
    "Hisense",
    "Hitachi",
    "Hithium",
    "HMD",
    "Hoco",
    "Hohem",
    "Hollyland",
    "Honeywell",
    "HONOR",
    "Horion",
    "HP",
    "HPE",
    "HTC",
    "HTDZ",
    "HUAWEI",
    "Huion",
    "Huntkey",
    "HyperX",
    "Hyundai",
  ],

  I: [
    "iBoard",
    "Ideal",
    "IEGA",
    "Ikarao",
    "iMICE",
    "IMILAB",
    "Imou",
    "Inbertec",
    "Infinix",
    "InFocus",
    "INGCO",
    "INNO3D",
    "Innovtech",
    "Inphic",
    "Insta360",
    "INTEL",
    "IP-COM",
  ],

  J: [
    "Jabra",
    "JACK",
    "JBL",
    "Jedel",
    "Jeyi",
    "Jiayou",
    "Jinbei",
    "Jisulife",
    "Jmary",
    "JONR",
    "Jovision",
    "JOYROOM",
    "JTS",
    "Julong",
    "JVC",
  ],

  K: [
    "K&F Concept",
    "Kaloc",
    "Kehua",
    "Kelvinator",
    "Kemei",
    "Kemey",
    "KENSON",
    "KENWOOD",
    "Keychron",
    "KFI",
    "Kieslect",
    "Kimtigo",
    "KingBank",
    "KINGJOY",
    "Kingston",
    "Kington",
    "Kodak",
    "Koorui",
    "KOSPET",
    "KSTAR",
    "KZ",
  ],

  L: [
    "LaCie",
    "LDNIO",
    "Lenovo",
    "LevelOne",
    "Lexar",
    "LG",
    "Libec",
    "Lingbao",
    "Linksys",
    "LITE-ON",
    "Logitech",
    "LONG",
    "LongPrint",
    "Loupedeck",
    "Lowepro",
    "Lumevax",
    "Luminous",
  ],

  M: [
    "M-Audio",
    "Magcubic",
    "Magegee",
    "Magpie",
    "Maken",
    "Manbily",
    "Manfrotto",
    "Manli",
    "Maono",
    "Marshall",
    "MARSRIVA",
    "Matias",
    "MaxGreen",
    "MAXHUB",
    "Maxline",
    "Maxsell",
    "MAXSUN",
    "Maxtor",
    "MCHOSE",
    "Meari",
    "MeeTion",
    "MEGASTAR",
    "Memo",
    "Memory Ghost",
    "Mercusys",
    "Meta",
    "METZ",
    "Mibro",
    "Microlab",
    "Micronet",
    "Micropack",
    "Microsoft",
    "Midea",
    "Mikrotik",
    "Milestone",
    "MiPhi",
    "MIRFAK",
    "Mitel",
    "MKB",
    "Mofii",
    "Monarch",
    "MONKA",
    "Monster",
    "Mosalogic",
    "Motorola",
    "MOVR",
    "MSI",
    "Must",
  ],

  N: [
    "Namibind",
    "Nano",
    "NEEWER",
    "Netac",
    "NETGEAR",
    "Netis",
    "Neumann",
    "Newland",
    "Newline",
    "NexaKey",
    "NGTeco",
    "Nikon",
    "Nintendo",
    "Noctua",
    "Nokia",
    "Noyafa",
    "Nuova Simonelli",
    "NVIDIA",
    "NZXT",
  ],

  O: [
    "OCPC",
    "Ocypus",
    "Ofitech",
    "OLAX",
    "Omron",
    "OneOdio",
    "OnePlus",
    "Onikuma",
    "Onspot",
    "Onten",
    "OPPO",
    "Optoma",
    "Oraimo",
    "Orasix",
    "ORDRO",
    "ORICO",
    "Orient",
    "Orvibo",
    "OSCOO",
    "Others",
    "Ovalin",
  ],

  P: [
    "Pakhtun",
    "Palit",
    "Panasonic",
    "Panduit",
    "Pantum",
    "Patriot",
    "PC Power",
    "PCcooler",
    "PELADN",
    "Perfect",
    "Phanteks",
    "Phantom Edge",
    "PHILIPS",
    "Phottix",
    "Phyhome",
    "PICO",
    "Pigeon",
    "PLANET",
    "Plextone",
    "Plustek",
    "PNY",
    "POCO",
    "Poly",
    "Polycab",
    "Power Guard",
    "Power Pac",
    "Power Print",
    "Power Train",
    "PowerColor",
    "PreSonus",
    "Print-Rite",
    "Pro Tech",
    "PROLINK",
    "PXN",
  ],

  Q: [
    "QCY",
    "QGeeM",
    "QNAP",
    "Qulik",
  ],

  R: [
    "R&M",
    "Rangs",
    "Rapoo",
    "RAZER",
    "Realme",
    "Realview",
    "Recci",
    "Red Hat",
    "Redner",
    "Redragon",
    "reMarkable",
    "Remax",
    "Revenger",
    "RicherLink",
    "RICOH",
    "RIRO",
    "RIVERSONG",
    "Robi",
    "RODE",
    "RONGTA",
    "Rosenberger",
    "ROWA",
    "ROYAL KLUDGE",
    "Rozia",
    "Ruijie",
  ],

  S: [
    "Saachi",
    "Safenet",
    "Safescan",
    "SafeWay",
    "Samsung",
    "Samyang",
    "Sandisk",
    "Sannai",
    "SANTAK",
    "Sapphire",
    "Saramonic",
    "Schneider Electric",
    "ScreenBeam",
    "Seagate",
    "Seemo",
    "Sennheiser",
    "Sewoo",
    "SHARP",
    "Shinho",
    "Shure",
    "Sigma",
    "Silicon Power",
    "SINGER",
    "Sirui",
    "SJCAM",
    "SJGAM",
    "Skullcandy",
    "Smart",
    "SmartLife",
    "SmartX",
    "Smiling Shark",
    "Snom",
    "Soarnex",
    "Solid State Logic",
    "Solitine",
    "Sony",
    "SoundPEATS",
    "SpaceX",
    "SPRT",
    "SriHome",
    "Star",
    "Starink",
    "STATA",
    "SteelSeries",
    "Steinberg",
    "Sunlux",
    "Sunmi",
    "SUNTECH",
    "Super General",
    "Symphony",
    "Symphony Limited",
    "SYNCO",
    "Synology",
    "Synway",
  ],

  T: [
    "T-WOLF",
    "TAGG",
    "Takstar",
    "Tamron",
    "Targus",
    "Tay-Chian",
    "TCL",
    "Team",
    "Teclast",
    "TECNO",
    "Tecnoware",
    "Tefal",
    "TELESIN",
    "Tenda",
    "TESY",
    "Teutons",
    "TEV",
    "Texas Instruments",
    "Thermal Grizzly",
    "Thermalright",
    "Thermaltake",
    "Thonet & Vander",
    "Thrustmaster",
    "Thunderobot",
    "Tiandy",
    "Tigo",
    "Tipsoi",
    "Titan",
    "Titan Army",
    "Tolsen",
    "Toshiba",
    "TOTAL",
    "Toten",
    "TOTOLINK",
    "TOZO",
    "TP-Link",
    "Transcend",
    "Transtec",
    "TRENDnet",
    "TrendSonic",
    "Tribit",
    "TRN",
    "Tropica",
    "True Trust",
    "Tucano",
    "Tumtec",
    "TVT",
    "Twinmos",
  ],

  U: [
    "Ubiquiti",
    "UGREEN",
    "Ulanzi",
    "UMIDIGI",
    "Unika",
    "Unikyy",
    "Universal",
    "Universal Audio",
    "Uniview",
    "upHere",
    "Usha",
  ],

  V: [
    "V-Color",
    "Value-Top",
    "VALVE",
    "VEIKK",
    "VEMO",
    "Vention",
    "Verbatim",
    "Vertiv",
    "VGR",
    "Viewsonic",
    "Viltrox",
    "Vimtag",
    "Vision",
    "VIVItek",
    "Vivo",
    "Vmware",
    "Voltan",
    "VOLTME",
    "VSOL",
    "Vyvylabs",
  ],

  W: [
    "Wacom",
    "Walton",
    "Wavefun",
    "Wavlink",
    "Weofly",
    "WESTERN DIGITAL",
    "WGP",
    "Whirlpool",
    "Whoop",
    "Winson",
    "WiWU",
    "Wonderful",
  ],

  X: [
    "X-LEO",
    "X-raypad",
    "XCORT",
    "XENTHRA",
    "XIAOMI",
    "Xigmatek",
    "Ximax",
    "XINJI",
    "XO",
    "XOC",
    "XP-PEN",
    "Xpert",
    "Xprinter",
    "XTRA",
    "Xtreme",
    "Xtrfy",
    "Xtrike Me",
  ],

  Y: [
    "Yamada",
    "Yamaha",
    "Yanmai",
    "Yealink",
    "Yeston",
    "Yison",
    "Yongnuo",
    "Yuanxin",
    "Yumite",
    "Yunteng",
  ],

  Z: [
    "Zebex",
    "Zeblaze",
    "Zebra",
    "Zhiyun",
    "Zifriend",
    "ZIGOR",
    "ZKTeco",
    "ZOJE",
    "Zoom",
    "ZOOOK",
    "ZOTAC",
    "ZTE",
    "Zycoo",
    "Zymak",
    "Zyxel",
  ],
};

const alphabet = ["0-9", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

export default function BrandIndex() {
  const [search, setSearch] = useState("");

  const filteredBrands = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return brandsByLetter;
    }

    const result = {};

    Object.entries(brandsByLetter).forEach(([letter, brands]) => {
      const matchedBrands = brands.filter((brand) =>
        brand.toLowerCase().includes(query)
      );

      if (matchedBrands.length > 0) {
        result[letter] = matchedBrands;
      }
    });

    return result;
  }, [search]);

  const scrollToLetter = (letter) => {
    document.getElementById(`brand-${letter}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Find Your Favorite Brand
          </h1>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            Explore all available brands
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-[600px]">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your favorite brand..."
              className="h-12 w-full rounded-lg border border-gray-300 px-4 pr-12 text-sm text-gray-700 outline-none transition focus:border-[#e21b23] focus:ring-1 focus:ring-[#e21b23]"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>

        {/* Brand Index */}
        <section className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Brand Index:
          </h2>

          <div className="flex flex-wrap gap-2 rounded-xl bg-gray-50 p-4">
            {alphabet.map((letter) => {
              const hasBrands = Boolean(filteredBrands[letter]);

              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => scrollToLetter(letter)}
                  disabled={!hasBrands}
                  className={`flex h-9 min-w-[38px] items-center justify-center rounded-md border px-3 text-sm font-medium transition ${
                    hasBrands
                      ? "border-gray-200 bg-white text-gray-700 hover:border-[#e21b23] hover:bg-[#e21b23] hover:text-white"
                      : "cursor-not-allowed border-gray-100 bg-gray-100 text-gray-300"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </section>

        {/* Brands */}
        <section className="mt-10">
          {Object.keys(filteredBrands).length === 0 ? (
            <div className="rounded-xl border border-gray-200 py-16 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                No brand found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try searching with a different brand name.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {Object.entries(filteredBrands).map(([letter, brands]) => (
                <div
                  key={letter}
                  id={`brand-${letter}`}
                  className="scroll-mt-24"
                >
                  {/* Letter Heading */}
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e21b23] text-lg font-bold text-white">
                      {letter}
                    </div>

                    <div className="h-px flex-1 bg-gray-200"></div>
                  </div>

                  {/* Brand Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        type="button"
                        className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-700 transition hover:border-[#e21b23] hover:text-[#e21b23] hover:shadow-sm"
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

