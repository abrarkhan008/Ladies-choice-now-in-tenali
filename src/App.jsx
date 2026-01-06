import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Home as HomeIcon,
  Info,
  FileText,
  ChevronDown,
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
  Mail,
  Instagram,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

// Service Data
const servicesData = {
  combo: [
    {
      id: "c1",
      name: "Super Combo (6 Services)",
      price: 1605,
      image: "/combo/super-combo.png",
      services: [
        "Eyebrows Threading",
        "De-Tan (Face & Neck)",
        "Shoulder Massage (10 mins)",
        "Diamond Facial",
        "Classic Manicure",
        "Classic Pedicure",
      ],
    },
    {
      id: "c2",
      name: "Freedom Combo (7 Services)",
      price: 1805,
      image: "/combo/freedom-combo.png",
      services: [
        "Diamond Facial",
        "De-Tan (Face & Neck)",
        "Rica Full Arms Waxing",
        "Rica Underarms Waxing",
        "Shoulder Massage (10 mins)",
        "Classic Pedicure",
      ],
    },
    {
      id: "c3",
      name: "Signature Combo (7 Services)",
      price: 2500,
      image: "/combo/signature-combo.png",
      services: [
        "Eyebrows Threading",
        "Korean Facial",
        "De-Tan (Neck)",
        "Head Massage (15 mins)",
        "Shoulder Massage (15 mins)",
        "Classic Manicure",
        "Classic Pedicure",
      ],
    },
  ],

  facial: [
    {
      id: "f1",
      name: "Brightening Facial (Astaberry)",
      price: 700,
      image: "/facial/brightening.png",
      services: [
        "Facial Steps",
        "Cleanse (5 minutes)",
        "Scrub (10 minutes)",
        "Steam (5 minutes)",
        "Black & White Heads (5 minutes)",
        "Face Massage (15 minutes)",
        "Pack (10 minutes)",
        "Pack Clean",
        "BENEFITS",
        "Gives glowing, refreshing and healthy skin",
        "Tightening effect on pores",
        "Helps in fading superficial pigmentation",
        "Reduces tanning",
        "Gives even tone complexion",
        "Minimum Service Time (55 minutes)",
      ],
    },
    {
      id: "f2",
      name: "Wine Facial (Astaberry)",
      price: 650,
      image: "/facial/wine.png",
      services: [
        "FACIAL STEPS",

        "Cleanse (5 minutes)",
        "Scrub (10 minutes)",
        "Steam (5 minutes)",
        "Black & White Heads (5 minutes)",
        "Face Massage (15 minutes)",
        "Pack (10 minutes)",
        "Pack Clean",

        "Benefits",
        "Gives glowing, refreshing and healthy skin",
        "Tightening effect on pores",
        "Helps in fading superficial pigmentation",
        "Reduces tanning",
        "Gives even tone complexion",
        "Minimum Service Time (55 minutes)",
      ],
    },
    {
      id: "f3",
      name: "Diamond Facial (Nature’s)",
      price: 900,
      image: "/facial/diamond.png",
      services: [
        "Facial Steps",
        "Cleanse (5 minutes)",
        "Scrub (10 minutes)",
        "Steam (5 minutes)",
        "Black & White Heads (5 minutes)",
        "Face Massage (15 minutes)",
        "Pack (10 minutes)",
        "Pack Clean",
        "BENEFITS",
        "Gives glowing, refreshing and healthy skin",
        "Tightening effect on pores",
        "Helps in fading superficial pigmentation",
        "Reduces tanning",
        "Gives even tone complexion",
        "Minimum Service Time (55 minutes)",
      ],
    },
    {
      id: "f4",
      name: "Shine & Glow Facial (O3+)",
      price: 1500,
      image: "/facial/shine-glow.png",
      services: [
        "6 Step Process",
        "Cleansing Foam",
        "Lactic",
        "Purifying Tonic",
        "Arbutin Serum",
        "Derma Melan Cream",
        "Arbutin Mask",
        "Advantages",
        "Leaves Soft and Smooth Skin",
        "Brightens, Whitens, & Tightens Skin",
        "Lovely skin",
        "Natural Glow",
        "Effective Nourishment",
      ],
    },
    {
      id: "f5",
      name: "Korean Facial (FYC)",
      price: 1500,
      image: "/facial/korean.png",
      services: [
        "Key Features",
        "9-Step Facial Ritual: Comprehensive skincare routine for ultimate rejuvenation.",
        "Suitable for All Skin Types: Hydrates, brightens, and nourishes your skin for a flawless finish.",
        "Glow-Boosting Ingredients: Features Ginseng, Fermented Rice Water, Retinol, and Collagen.",
        "Intense Hydration: Provides long-lasting moisture and nourishment.",
        "Minimizes Pores & Fine Lines: Helps tighten pores, smooth fine lines, and improve skin elasticity.",
        "Youthful Radiance: Leaves skin looking brighter, smoother, and more luminous with every use.",
        "No Parabens, Cruelty-Free: Made with safe, skin-loving ingredients.",
        "Facial Steps",
        "Rice Foaming Cleanser: Massage gently onto face for 5-7 minutes, then wipe off with a wet tissue.",
        "Hyaluron Detox: Apply a layer on the face & neck, leave for 10-15 minutes, then rinse off.",
        "Exfoliator Cream: Rub gently in circular motions for 5-7 minutes, then rinse with lukewarm water.",
        "Lippy Exfol: Apply to lips and rub for 5-7 minutes.",
        "Niacin-Rice Collagen Mask: Separate the blue cover from the mask, apply it to your face.",
        "Rice Cream: Gently massage into the skin for 15-20 minutes to nourish and tighten.",
        "Ginseng Alginate Powder Mask: Mix with the gel and apply to face and neck for 15-20 minutes.",
        "AHA BHA Serum: Spread evenly on face & neck, and massage until absorbed.",
        "Lippy Elixir: Apply a layer to hydrate and plump your lips.",
      ],
    },
    {
      id: "f6",
      name: "Bridal Facial (O3+)",
      price: 1800,
      image: "/facial/bridal.png",
      services: [
        "Process",
        "Cleansing Foam",
        "D-Tan",
        "Whitening Tonic",
        "Whitening Serum",
        "Whitening Cream",
        "Finishing Mask",
        "Arbutin Serum",
        "Arbutin Mask",
        "SPF",
        "Advantages",
        "Oxygenated Glowy Skin",
        "Brightens, Whitens, & Tightens Skin",
        "Rejuvenation and Healing",
        "Leaves Your Skin Soft and Smooth",
        "Natural Glow",
      ],
    },
    {
      id: "f7",
      name: "Fruit Facial (Astaberry)",
      price: 650,
      image: "/facial/fruit.png",
      services: [
        "Facial Steps",
        "Cleanse (5 minutes)",
        "Scrub (10 minutes)",
        "Steam (5 minutes)",
        "Black & White Heads (5 minutes)",
        "Face Massage (15 minutes)",
        "Pack (10 minutes)",
        "Pack Clean",
        "BENEFITS",
        "Gives glowing, refreshing and healthy skin",
        "Tightening effect on pores",
        "Helps in fading superficial pigmentation",
        "Reduces tanning",
        "Gives even tone complexion",
        "Minimum Service Time (55 minutes)",
      ],
    },
    {
      id: "f8",
      name: "Anti Ageing Facial (O3+)",
      price: 1250,
      image: "/facial/anti-ageing.png",
      services: [
        "5 Step Process",
        "Apply cleanser on the face in circular motion, massage gently and rinse off.",
        "Apply the scrub by diluting with water. Gently massage for 5 minutes. Do not rub too hard. Rinse off.",
        "Gently massage with cream for 15 minutes in upward strokes till it absorbs. Wash off.",
        "Mix Mould Mask with 60 ml water while stirring it to form a paste. Now apply this thick paste onto the skin and leave it undisturbed for 20 minutes.",
        "Peel off gently.",
        "Advantages",
        "Leaves Soft and Smooth Skin",
        "Brightens, Whitens, & Tightens Skin",
        "Lovely skin",
        "Natural Glow",
        "Effective Nourishment",
      ],
    },
    {
      id: "f9",
      name: "HydraBoost Facial (FYC)",
      price: 1250,
      image: "/facial/hydraboost.png",
      services: [
        "Key Features",
        "8-step complete facial regimen for a thorough at-home skincare treatment",
        "Suitable for All Skin Types",
        "Facial Steps",
        "Cleanser – Gently cleanse your face to remove dirt and impurities.",
        "Scrub – Exfoliate dead skin cells for a smoother texture.",
        "Gel – Apply to soothe and hydrate your skin.",
        "Cream – Massage to nourish and boost blood circulation.",
        "Face Pack – Apply evenly, leave it on, then rinse off for deep nourishment.",
        "Serum – Lightly tap into skin for deep hydration and glow.",
        "Moisturizer – Lock in all the benefits with a rich, hydrating layer.",
        "Sunscreen – Finish with SPF protection to guard against UV damage.",
      ],
    },
    {
      id: "f10",
      name: "Gold Facial (Nature’s)",
      price: 900,
      image: "/facial/gold.png",
      services: [
        "Facial Steps",
        "Cleanse (5 minutes)",
        "Scrub (10 minutes)",
        "Steam (5 minutes)",
        "Black & White Heads (5 minutes)",
        "Face Massage (15 minutes)",
        "Pack (10 minutes)",
        "Pack Clean",
        "BENEFITS",
        "Gives glowing, refreshing and healthy skin",
        "Tightening effect on pores",
        "Helps in fading superficial pigmentation",
        "Reduces tanning",
        "Gives even tone complexion",
        "Minimum Service Time (55 minutes)",
      ],
    },
  ],
  makeup: [
    {
      id: "m1",
      name: "Hair Styling",
      price: 1050,
      image: "/makeup/hair-styling.png",
      services: ["Price depends on hair length", "Starting from ₹1050"],
    },
    {
      id: "m2",
      name: "Bridal Makeup",

      image: "/makeup/bridal-makeup.png",
      services: [
        "3 Sarees",
        "Hair Style Included",
        "Price discussed after consultation",
      ],
    },
    {
      id: "m3",
      name: "Saree Draping",
      price: 700,
      image: "/makeup/saree-draping.png",
      services: ["Traditional & Modern styles"],
    },
    {
      id: "m4",
      name: "Light Makeup Only",
      price: 800,
      image: "/makeup/light-makeup.png",
      services: ["Natural look", "Suitable for parties & functions"],
    },
  ],
  dtan: [
    {
      id: "d1",
      name: "De-Tan (Face & Neck)",
      price: 250,
      image: "/dtan/face-neck.png",
      brand: "Raaga",
      services: [
        "Face & Neck",
        "Cleansing with cleansing milk",
        "Raaga De-tan",

        "Exfoliates your tanned skin",
        "Makes your skin soft, radiant & healthy",
        "Improves the overall texture of the skin",

        "You will need multiple sessions for reducing old and deep tan",
      ],
    },
    {
      id: "d2",
      name: "De-Tan (Full Hands)",
      price: 400,
      image: "/dtan/full-hands.png",
      services: [
        "De-tan Full Hands",

        "Exfoliates your tanned skin",
        "Makes your skin soft, radiant & healthy",
        "Improves the overall texture of the skin",

        "You will need multiple sessions for reducing old and deep tan",
        "If you have some kind of allergy to milk products then avoid going for this",
      ],
    },
    {
      id: "d3",
      name: "De-Tan (Half Legs)",
      price: 400,
      image: "/dtan/half-legs.png",
      services: [
        "De-tan Half Legs",

        "Exfoliates your tanned skin",
        "Makes your skin soft, radiant & healthy",
        "Improves the overall texture of the skin",

        "You will need multiple sessions for reducing old and deep tan",
        "If you have some kind of allergy to milk products then avoid going for this",
      ],
    },
    {
      id: "d4",
      name: "De-Tan (Neck)",
      price: 150,
      image: "/dtan/neck.png",
      brand: "Raaga",
      services: [
        "Neck",
        "Cleansing with cleansing milk",
        "Raaga De-tan",

        "Exfoliates your tanned skin",
        "Makes your skin soft, radiant & healthy",
        "Improves the overall texture of the skin",

        "You will need multiple sessions for reducing old and deep tan",
      ],
    },
  ],
  manipedi: [
    {
      id: "mp1",
      name: "Classic Pedicure",
      price: 450,
      image: "/manipedi/classic-pedicure.png",
      services: ["Original price: ₹950", "Current price: ₹450"],
    },
    {
      id: "mp2",
      name: "O3+ Luxury Crystal Pedicure",
      price: 700,
      image: "/manipedi/luxury-crystal-pedicure.png",
      services: ["Original price: ₹1500", "Current price: ₹700"],
    },
    {
      id: "mp3",
      name: "Classic Manicure",
      price: 350,
      image: "/manipedi/classic-manicure.png",
      services: ["Original price: ₹800", "Current price: ₹350"],
    },
    {
      id: "mp4",
      name: "O3+ Luxury Crystal Manicure",
      price: 600,
      image: "/manipedi/luxury-crystal-manicure.png",
      services: ["Original price: ₹1300", "Current price: ₹600"],
    },
    {
      id: "mp5",
      name: "Cut, File & Polish (Feet)",
      price: 100,
      image: "/manipedi/cut-file-polish-feet.png",
    },
    {
      id: "mp6",
      name: "Cut, File & Polish (Hands)",
      price: 100,
      image: "/manipedi/cut-file-polish-hands.png",
    },
  ],
  waxing: [
    {
      id: "w1",
      name: "Rica Full Arms Waxing",
      price: 400,
      image: "/waxing/rica-full-arms.png",
      services: ["Original price: ₹1000", "Current price: ₹400"],
    },
    {
      id: "w2",
      name: "Rica Half Legs Waxing",
      price: 500,
      image: "/waxing/rica-half-legs.png",
      services: ["Original price: ₹1200", "Current price: ₹500"],
    },
    {
      id: "w3",
      name: "Rica Full Arms + Underarms Waxing",
      price: 500,
      image: "/waxing/rica-full-arms-underarms.png",
      services: ["Original price: ₹1300", "Current price: ₹500"],
    },
    {
      id: "w4",
      name: "Rica Full Legs Waxing",
      price: 600,
      image: "/waxing/rica-full-legs.png",
      services: ["Original price: ₹1500", "Current price: ₹600"],
    },
  ],
  threading: [
    {
      id: "t1",
      name: "Eyebrows Threading",
      price: 5,
      image: "/threading/eyebrows.png",
      services: ["Original price: ₹40", "Current price: ₹5"],
    },
    {
      id: "t2",
      name: "Upper Lips Threading",
      price: 40,
      image: "/threading/upper-lips.png",
    },
    {
      id: "t3",
      name: "Forehead Threading",
      price: 40,
      image: "/threading/forehead.png",
    },
    {
      id: "t4",
      name: "Full Face Threading",
      price: 200,
      image: "/threading/full-face.png",
    },
  ],
  massage: [
    {
      id: "ms1",
      name: "Head Massage (15 minutes)",
      price: 250,
      image: "/massage/1.png",
      services: ["Original price: ₹500", "Current price: ₹250"],
    },
    {
      id: "ms2",
      name: "Shoulder Massage (15 minutes)",
      price: 250,
      image: "/massage/2.png",
      services: ["Original price: ₹500", "Current price: ₹250"],
    },
    {
      id: "ms3",
      name: "Foot Massage (15 minutes)",
      price: 250,
      image: "/massage/3.png",
      services: ["Original price: ₹500", "Current price: ₹250"],
    },
    {
      id: "ms4",
      name: "Arms Massage (15 minutes)",
      price: 250,
      image: "/massage/4.png",
      services: ["Original price: ₹500", "Current price: ₹250"],
    },
  ],
  hair: [
    {
      id: "h1",
      name: "Hair Colour (Customer Product)",
      price: 150,
      image: "/hair/1.png",
    },
    {
      id: "h2",
      name: "Straight / U / V Hair Cut",
      price: 150,
      image: "/hair/2.png",
    },
    {
      id: "h3",
      name: "Henna (Customer Product)",
      price: 150,
      image: "/hair/3.png",
    },
    {
      id: "h4",
      name: "Hair Spa Upto Shoulder",
      price: 1050,
      image: "/hair/4.png",
    },
    {
      id: "h5",
      name: "Hair Spa Below Shoulder",
      price: 1450,
      image: "/hair/5.png",
    },
  ],
};

const cities = [
  "Anantapur",
  "Guntur",
  "Kakinada",
  "Kadapa",
  "Mysuru",
  "Nellore",
  "Rajahmundry",
  "Tirupati",
  "Warangal",
  "Karimnagar",
  "Gajuwaka",
  "Vijayawada",
  "Vizag",
  "Vizianagaram",
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold">
                <span className="text-pink-600">LADIES</span>
                <span className="text-purple-600"> Choice Now In</span>
                <span className="text-gray-600 text-sm md:text-base ml-2">
                  Tenali
                </span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage("home")}
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <HomeIcon size={18} /> Home
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <Info size={18} /> About
              </button>
              <button
                onClick={() => setCurrentPage("terms")}
                className="text-gray-700 hover:text-blue-600 flex items-center gap-2"
              >
                <FileText size={18} /> Terms & Conditions
              </button>
            </div>

            {/* <div className="flex items-center gap-4">
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 text-gray-700 hover:text-blue-600"
              >
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden"
              >
                {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div> */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/eswari_makeupartist_tenali?igsh=bmZ2cWlvNGIyeDdn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white transition"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>

              {/* Call */}
              <a
                href="tel:7670956530"
                className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                title="Call Now"
              >
                <PhoneCall size={20} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917670956530"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>

              {/* Cart */}
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative p-2 text-gray-700 hover:text-blue-600"
              >
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Mobile Menu */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden"
              >
                {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setShowMobileMenu(false);
                }}
                className="block w-full text-left py-2 text-gray-700"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage("about");
                  setShowMobileMenu(false);
                }}
                className="block w-full text-left py-2 text-gray-700"
              >
                About
              </button>
              <button
                onClick={() => {
                  setCurrentPage("terms");
                  setShowMobileMenu(false);
                }}
                className="block w-full text-left py-2 text-gray-700"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Sidebar */}
      {showCart && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          style={{ top: "64px" }}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setShowCart(false)}
          ></div>
          <div className="relative bg-white w-full max-w-md h-full overflow-y-auto shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">My Cart ({cart.length})</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain"
                        />

                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{item.name}</h3>
                          <p className="text-blue-600 font-bold">
                            ₹ {item.price}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 border rounded flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 border rounded flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-2xl"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between text-lg font-bold mb-4">
                      <span>SUBTOTAL:</span>
                      <span className="text-blue-600">₹ {getTotal()}</span>
                    </div>
                    <button
                      onClick={() => {
                        setCurrentPage("checkout");
                        setShowCart(false);
                      }}
                      className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-16">
        {currentPage === "home" && (
          <HomePage
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "services" && (
          <ServicesPage
            category={selectedCategory}
            addToCart={addToCart}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "terms" && <TermsPage />}
        {currentPage === "checkout" && (
          <CheckoutPage cart={cart} total={getTotal()} />
        )}
      </div>
    </div>
  );
}

function HomePage({ setSelectedCategory, setCurrentPage }) {
  const categories = [
    { key: "combo", name: "Combo Deal's", image: "/categories/combo.png" },
    { key: "facial", name: "Facials", image: "/categories/facial.png" },
    { key: "makeup", name: "Makeup's", image: "/categories/makeup.png" },
    { key: "dtan", name: "D-tan", image: "/categories/dtan.png" },
    { key: "manipedi", name: "Mani-Pedi", image: "/categories/manipedi.png" },
    { key: "waxing", name: "Waxing", image: "/categories/waxing.png" },
    { key: "threading", name: "Threading", image: "/categories/threading.png" },
    { key: "massage", name: "Massage", image: "/categories/massage.png" },
    { key: "hair", name: "Hair", image: "/categories/hair.png" },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage("services");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            DoorStep Salon for Women
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            GlowCare Live In{" "}
            <span className="bg-white text-blue-600 px-3 py-1 rounded">14</span>{" "}
            Cities
          </p>
          <p className="text-lg mb-8">Book Now & Pay After Service</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {cities.map((city) => (
              <span
                key={city}
                className="bg-white bg-opacity-20 px-3 py-1 rounded"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryClick(cat.key)}
              className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fadeIn"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-28 h-28 mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-bold text-gray-800">{cat.name}</h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesPage({ category, addToCart, setCurrentPage }) {
  const services = servicesData[category] || [];
  const categoryNames = {
    combo: "Combo Deals",
    facial: "Facial Services",
    makeup: "Makeup Services",
    dtan: "De-Tan Services",
    manipedi: "Manicure & Pedicure",
    threading: "Threading Services",
    waxing: "Waxing Services",
    massage: "Massage Services",
    hair: "Hair Services",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button
        onClick={() => setCurrentPage("home")}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back to Home
      </button>
      <h1 className="text-4xl font-bold mb-8">{categoryNames[category]}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-35 flex items-center justify-center">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              {service.services && (
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {service.services.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              )}
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  ₹ {service.price}
                </span>
                <button
                  onClick={() => addToCart(service)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CheckoutPage({ cart, total }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const services = cart
      .map((item) => `${item.name} x ${item.quantity}`)
      .join(", ");

    const message = `
New Booking 🔔

Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
City: ${formData.city}
Address: ${formData.address}

Date: ${formData.date}
Time: ${formData.time}

Services:
${services}

Total: ₹${total}
Pay After Service
`;

    const whatsappNumber = "917670956530"; // YOUR NUMBER
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Complete Your Booking</h1>

      <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Your Order</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between py-2 border-b">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span className="font-bold">₹ {item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between py-4 text-xl font-bold">
          <span>Total:</span>
          <span className="text-blue-600">₹ {total}</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg p-6 space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Calendar size={18} /> Appointment Date
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Clock size={18} /> Beautician Arrival Time
            </label>
            <input
              type="time"
              required
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <User size={18} /> First Name
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <User size={18} /> Last Name
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 flex items-center gap-2">
            <Phone size={18} /> Phone Number
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 flex items-center gap-2">
            <MapPin size={18} /> Select Your City
          </label>
          <select
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="">Choose a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 flex items-center gap-2">
            <MapPin size={18} /> Full Address
          </label>
          <textarea
            required
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            rows="3"
            className="w-full border rounded-lg px-4 py-2"
          ></textarea>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <h3 className="font-bold mb-2">💰 Pay After Service</h3>
          <p className="text-sm text-gray-700">
            You will pay ₹{total} directly to the beautician after the service
            is completed.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <h3 className="font-bold mb-2">🛡️ Safety Tips for Customer:</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              1. Check the mentioned brand name and expiry date of the product
              before starting the service.
            </li>
            <li>
              2. Keep your valuable gold jewellery, other items in a safe place
              before service. (Glowcare is not responsible after losing your
              items.)
            </li>
            <li>3. AC Compulsory for Waxing.</li>
            <li>
              4. Don't take services directly from beauticians. Book only in
              Glowcare platform.
            </li>
          </ul>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About GlowCare</h1>

      <div className="bg-gradient-to-br from-pink-50 to-white hover:shadow-2xl rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Who we are?</h2>
        <p className="text-gray-700 mb-6">
          Glowcare is a tech platform that connects skilled local beauticians
          with customers to provide professional beauty services in the comfort
          of their homes. Founded in 2018.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to bridge the gap between individuals seeking quality
          beauty services and experienced beauticians in their city's.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Leadership Team</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg">Krishna</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg">Sowmya</h3>
            <p className="text-gray-600">Co-Founder</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-8 text-center">
          <div className="text-5xl font-bold mb-2">14</div>
          <div className="text-xl">Cities</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-8 text-center">
          <div className="text-5xl font-bold mb-2">200+</div>
          <div className="text-xl">Beauticians</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-8 text-center">
          <div className="text-5xl font-bold mb-2">45,000+</div>
          <div className="text-xl">Bookings Completed</div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-br from-pink-50 to-white hover:shadow-2xl rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">We Are Live In</h2>
        <div className="flex flex-wrap gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

      <div className="bg-white rounded-xl shadow-lg p-8 space-y-6 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold mb-3">1. Platform Purpose</h2>
          <p>
            GlowCare is an online platform that connects customers with
            independent local beauticians who offer salon services at home.
            GlowCare acts solely as a facilitator and does not provide any salon
            services itself.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            2. Independent Contractors
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All beauticians on GlowCare are independent contractors and not
              employees or agents of GlowCare.
            </li>
            <li>
              GlowCare does not control or supervise the beauticians beyond the
              initial selection and training process.
            </li>
            <li>
              Customers acknowledge that GlowCare is not responsible for any
              actions, misconduct, or negligence by the beauticians.
            </li>
          </ul>
          <h3 className="font-bold mt-4 mb-2">Beautician Selection Process:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Every beautician undergoes a two-step demonstration process to
              assess expertise, techniques, and service quality.
            </li>
            <li>
              Selected beauticians receive one month of additional industry
              training before being listed on the platform.
            </li>
            <li>
              GlowCare ensures beauticians are skilled in various services,
              including haircare, skincare, nails, and more.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            3. Account & Booking Process
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>No account creation is required to use GlowCare services.</li>
            <li>
              Customers can book services by selecting the desired service,
              date, and time on the platform.
            </li>
            <li>
              GlowCare facilitates communication between customers and
              beauticians but does not guarantee availability.
            </li>
            <li>
              All service prices include taxes, and the minimum booking amount
              is ₹800.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            4. Customer Responsibilities
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold">Product Verification:</h3>
              <p>
                Customers should carefully check the expiry date of products &
                tools before the service begins. GlowCare is not responsible for
                product-related issues.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Skin Sensitivity & Reactions:</h3>
              <p>
                Customers should inform the beautician of any known allergies or
                skin conditions before the service. If any skin reaction occurs
                after the service, the customer must consult a doctor
                immediately. GlowCare is not responsible for any allergic
                reactions.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Payment Terms:</h3>
              <p>
                No advance payment is collected by GlowCare. Customers must pay
                the beautician directly after the service is completed. GlowCare
                is not responsible for payment disputes between customers and
                beauticians.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Liability for Personal Belongings:</h3>
              <p>
                Customers should store valuable items (gold jewelry, cash,
                electronics, etc.) in a secure place before the service.
                GlowCare is not responsible for any theft, damage, or loss of
                personal belongings.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            5. Beautician Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Quality & Conduct:</strong> Beauticians must
              provide services professionally, maintaining hygiene and following
              industry best practices.
            </li>
            <li>
              <strong>Compliance with Laws:</strong> Beauticians must ensure
              their services comply with all local laws and regulations.
            </li>
            <li>
              <strong>Liability for Loss or Damage:</strong> Beauticians are
              fully responsible for any loss, theft, or damage caused during
              their service.
            </li>
            <li>
              <strong>Timeliness:</strong> Beauticians must arrive on time for
              scheduled appointments. Frequent delays or cancellations may
              result in removal from the platform.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">6. Prohibited Services</h2>
          <p>Beauticians must not provide services that:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Violate local health & safety laws.</li>
            <li>
              Include medical procedures such as Botox, laser treatments, or
              invasive treatments.
            </li>
            <li>Are explicitly banned by GlowCare policies.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            7. No Warranties & Limited Liability
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold">Platform Availability:</h3>
              <p>
                GlowCare provides services "as is" and "as available". We do not
                guarantee uninterrupted service or that the platform will always
                be error-free.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Service Quality Disclaimer:</h3>
              <p>
                GlowCare does not guarantee results from beauticians. Customers
                acknowledge that outcomes may vary depending on their hair,
                skin, and other factors.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Limitation of Liability:</h3>
              <p>
                GlowCare is not liable for any injury, property damage, allergic
                reactions, or financial losses resulting from the services.
                Under no circumstances will GlowCare be responsible for
                indirect, incidental, or consequential damages.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">
            8. Refund & Complaint Policy
          </h2>
          <p>
            <strong>No Refunds:</strong> GlowCare does not process refunds for
            services rendered by beauticians.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mt-8">
          <p className="font-bold">
            By using the GlowCare platform, you confirm that you have read,
            understood, and agree to these Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
