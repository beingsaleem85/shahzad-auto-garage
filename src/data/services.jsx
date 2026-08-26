import React from 'react';

export const garageInfo = {
  name: "Shahzad Auto Garage",
  tagline: "Precision Automotive Care. Built on Trust.",
  phone: "+92 342 4797953",
  phoneRaw: "+92342479753",
  phoneLink: "tel:+92342479753",
  whatsapp: "+92 342 4793753",
  whatsappRaw: "923424793753",
  whatsappLink: "https://wa.me/923424793753",
  address: "Opposite Lucky Star Cricket Stadium, G11/4, Golra Service Road, Islamabad",
  locationLink: "https://share.google/w6jiCzr4mbjRdOAXS",
  hours: {
    weekdays: "Monday – Sunday: 08:00 AM – 10:00 PM",
    emergency: "24/7 available in case of emergency"
  },
  logo: "/logo/shahzad auto garage logo.webp"
};

export const servicesData = [
  {
    id: "mechanical-services",
    slug: "mechanical-services",
    title: "Mechanical Services",
    shortDescription: "Comprehensive automotive mechanical inspection, diagnostic repair, and component maintenance executed to manufacturer standards.",
    iconName: "Wrench",
    image: "/services/mechanical-services.webp",
    heroImage: "/services/mechanical-services.webp",
    heroSubtitle: "Engineered Precision & Rigorous Mechanical Care for Optimal Vehicle Integrity.",
    overview: "Our Mechanical Services encompass complete vehicle health assessments, structural and mechanical troubleshooting, and component restorations. Modern vehicles are complex mechanical systems that demand precise diagnosis rather than trial-and-error replacements. At Shahzad Auto Garage, our seasoned mechanical specialists utilize advanced physical diagnostic techniques and calibrated tools to solve complex drivability and mechanical issues.",
    whatWeCoverTitle: "Comprehensive Mechanical Capabilities",
    whatWeCover: [
      { title: "Complete Mechanical Inspection", desc: "Comprehensive physical and operational audit of engine bays, drivelines, cooling systems, and mechanical fasteners." },
      { title: "Engine-Related Mechanical Work", desc: "Inspection and repair of timing belts, tensioners, water pumps, drive belts, mounts, and intake systems." },
      { title: "General Mechanical Repairs", desc: "Fixing fluid leaks, radiator replacements, hose failures, vacuum leaks, and exhaust mounting issues." },
      { title: "Drivability Diagnostics", desc: "Addressing engine misfires, rough idling, hesitation under acceleration, and abnormal engine harmonics." },
      { title: "Preventive Component Maintenance", desc: "Scheduled mechanical overhauls to prevent premature wear and high-cost catastrophic failures." }
    ],
    benefits: [
      "Restores vehicle smoothness and original drivability characteristics",
      "Prevents minor mechanical wear from expanding into major repair costs",
      "Extends component longevity with OEM-grade structural fasteners and fittings",
      "Provides transparent condition reports before any repair work commences"
    ],
    gallery: [
      "/services/mechanical-services.webp",
      "/services/engine-overhauling.webp",
      "/services/electrical-diagnostics.webp"
    ]
  },
  {
    id: "engine-overhauling",
    slug: "engine-overhauling",
    title: "Engine Overhauling",
    shortDescription: "Complete engine dismantling, block inspection, precision component replacement, and calibration to restore engine power and reliability.",
    iconName: "Cpu",
    image: "/services/engine-overhauling.webp",
    heroImage: "/services/engine-overhauling.webp",
    heroSubtitle: "Restoring Compression, Performance & Thermal Efficiency with Master Workmanship.",
    overview: "When an engine suffers severe wear, low compression, oil consumption, or internal damage, a complete overhaul provides a reliable path to renewed performance. Our Engine Overhauling service follows a methodical, engineering-grade process: complete engine removal, deep cleaning, cylinder and head inspection, valve grinding, piston ring setting, and precision torque reassembly. We restore your engine's compression and thermal stability.",
    whatWeCoverTitle: "The Engine Overhaul Process",
    whatWeCover: [
      { title: "Engine Condition Assessment", desc: "Compression testing, leak-down tests, and borescope inspection to determine internal wear." },
      { title: "Systematic Dismantling", desc: "Safe removal and complete disassembly of engine block, cylinder head, pistons, and crankshaft." },
      { title: "Cleaning & Micro-Inspection", desc: "Chemical cleaning and micrometer measurement of cylinder bores, crank journals, and valve seats." },
      { title: "Precision Component Replacement", desc: "Replacing pistons, rings, bearings, main seals, gaskets, timing chains, and oil pumps as required." },
      { title: "Reassembly & Torque Specs", desc: "Rebuilding the engine adhering strictly to manufacturer torque values and clearance tolerances." },
      { title: "Bench & Dyno Thermal Testing", desc: "Initial break-in testing, oil pressure verification, thermal monitoring, and final road testing." }
    ],
    benefits: [
      "Eliminates excessive oil burning, blue exhaust smoke, and engine knocking",
      "Restores factory horsepower, torque, and throttle responsiveness",
      "Significantly cheaper alternative to purchasing a brand-new engine assembly",
      "Backed by rigorous post-assembly compression and pressure testing"
    ],
    gallery: [
      "/services/engine-overhauling.webp",
      "/services/oil-change.webp",
      "/services/mechanical-services.webp"
    ]
  },
  {
    id: "brake-service",
    slug: "brake-service",
    title: "Brake Service",
    shortDescription: "Precision brake inspections, rotor resurfacing, ceramic pad replacement, and hydraulic system flushing for maximum stopping power.",
    iconName: "ShieldAlert",
    image: "/services/brake-service.webp",
    heroImage: "/services/brake-service.webp",
    heroSubtitle: "Uncompromising Brake Safety, Tactile Pedal Response & Maximum Braking Efficiency.",
    overview: "Braking integrity is the single most critical safety aspect of any vehicle. At Shahzad Auto Garage, our Brake Service covers comprehensive physical audits of rotors, pads, calipers, lines, master cylinders, and ABS modules. Whether your vehicle is experiencing brake squeal, steering wheel vibration under braking, or a spongy brake pedal, we diagnose and rectify the exact root cause.",
    whatWeCoverTitle: "Comprehensive Braking Care",
    whatWeCover: [
      { title: "Brake System Health Audit", desc: "Thorough inspection of pad thickness, rotor runout, brake lines, and caliper piston movement." },
      { title: "Premium Pad Replacement", desc: "Installing low-dust ceramic or heavy-duty semi-metallic brake pads for quiet, high-friction stopping." },
      { title: "Rotor Resurfacing & Replacement", desc: "Precision lathe resurfacing of brake discs or installation of high-ventilation replacement rotors." },
      { title: "Hydraulic Bleed & Flush", desc: "Replacing old brake fluid with high-boiling-point synthetic fluid to restore firm pedal feel." },
      { title: "Caliper & Guide Pin Service", desc: "Cleaning, lubricating slider pins, and replacing worn rubber dust boots to prevent brake drag." },
      { title: "ABS & Electronic Handbrake Checks", desc: "Diagnosing ABS sensor faults, traction control flags, and electronic parking brake actuators." }
    ],
    benefits: [
      "Eliminates high-pitched squealing, grinding noises, and brake shudder",
      "Significantly reduces stopping distances under emergency conditions",
      "Restores immediate, predictable brake pedal firmness and feedback",
      "Extends rotor and caliper lifespans by eliminating uneven friction wear"
    ],
    gallery: [
      "/services/brake-service.webp",
      "/services/suspension-transmission.webp",
      "/services/mechanical-services.webp"
    ]
  },
  {
    id: "suspension-transmission",
    slug: "suspension-transmission",
    title: "Suspension & Transmission",
    shortDescription: "Advanced suspension overhaul, strut replacement, wheel alignment checks, and smooth automatic/manual transmission repair.",
    iconName: "Sliders",
    image: "/services/suspension-transmission.webp",
    heroImage: "/services/suspension-transmission.webp",
    heroSubtitle: "Engineered Ride Comfort, Cornering Stability & Seamless Driveline Gear Changes.",
    overview: "Your suspension system ensures ride comfort and tire traction, while the transmission transfers engine torque seamlessly to the road. Wear in bushings, struts, ball joints, or gearbox synchronizers degrades safety, increases tire wear, and causes harsh shifting. Shahzad Auto Garage delivers complete suspension and transmission diagnostics, component replacements, and fluid maintenance.",
    whatWeCoverTitle: "Suspension & Transmission Services",
    whatWeCover: [
      { title: "Shock Absorber & Strut Replacement", desc: "Installing heavy-duty dampers and gas struts to eliminate body roll, excessive bouncing, and bottoming out." },
      { title: "Suspension Linkage & Bushing Renewal", desc: "Replacing worn control arms, ball joints, tie rod ends, and stabilizer link bars." },
      { title: "Steering Rack Inspection & Alignment", desc: "Addressing loose steering wheel play, power steering fluid leaks, and steering rack recalibration." },
      { title: "Transmission Diagnostic & Inspection", desc: "Diagnosing delayed engagement, harsh gear hunting, slippage, or abnormal transmission whining." },
      { title: "Transmission Fluid & Filter Replacement", desc: "Flushing burnt transmission fluid and installing fresh OEM-specified fluid with new sump pan filters." },
      { title: "Clutch & Driveshaft Service", desc: "Manual clutch plate replacement, flywheel resurfacing, CV joint, and axle shaft repairs." }
    ],
    benefits: [
      "Restores smooth, quiet, vibration-free ride quality on bumpy roads",
      "Prevents rapid uneven tire tread wear caused by loose suspension joints",
      "Eliminates gear slipping, delayed transmission shifts, and clunking sounds",
      "Enhances vehicle stability and cornering confidence at highway speeds"
    ],
    gallery: [
      "/services/suspension-transmission.webp",
      "/services/mechanical-services.webp",
      "/services/engine-overhauling.webp"
    ]
  },
  {
    id: "electrical-diagnostics",
    slug: "electrical-diagnostics",
    title: "Electrical Diagnostics",
    shortDescription: "Computerized OBD-II diagnostic scanning, sensor testing, ECU code pinpointing, and complex wiring fault repairs.",
    iconName: "Zap",
    image: "/services/electrical-diagnostics.webp",
    heroImage: "/services/electrical-diagnostics.webp",
    heroSubtitle: "Pinpoint Diagnostic Scans & Advanced Electronic Fault Resolution.",
    overview: "Modern automobiles are sophisticated electronic networks containing dozens of microcontrollers, sensors, and actuators. When warning lights appear on your dashboard or electrical anomalies occur, guesswork can lead to expensive misdiagnoses. At Shahzad Auto Garage, we employ high-grade diagnostic scan tools, oscilloscopes, and multimeter testing to pinpoint electronic, sensor, and wiring issues quickly and accurately.",
    whatWeCoverTitle: "Electronic Diagnostic Services",
    whatWeCover: [
      { title: "Computerized Scan & Live Data Analysis", desc: "Interrogating ECU, TCU, ABS, and BCM modules to extract fault codes and monitor real-time sensor parameters." },
      { title: "Check Engine Light Diagnosis", desc: "Identifying the precise root cause behind illumination of engine, oil pressure, or battery warning icons." },
      { title: "Battery, Starter & Alternator Testing", desc: "Measuring cold cranking amps (CCA), charging voltage, and parasitic battery drain tests." },
      { title: "Sensor Diagnostics & Calibration", desc: "Testing O2 sensors, MAF sensors, crankshaft position sensors, throttle bodies, and knock sensors." },
      { title: "Wiring Harness & Relay Troubleshooting", desc: "Tracing short circuits, broken grounds, corroded connectors, and faulty electrical relays." },
      { title: "Lighting & Auxiliary Electrical Repair", desc: "Headlight wiring overhauls, power window switches, central locking systems, and instrument cluster fixes." }
    ],
    benefits: [
      "Fast, accurate diagnosis eliminating expensive guess-and-check part swaps",
      "Resolves persistent Check Engine lights and clears stored diagnostic trouble codes",
      "Ensures stable battery charging and reliable engine starting in all weather conditions",
      "Protects delicate onboard computer modules from voltage spikes and short circuits"
    ],
    gallery: [
      "/services/electrical-diagnostics.webp",
      "/services/mechanical-services.webp",
      "/services/engine-overhauling.webp"
    ]
  },
  {
    id: "oil-change",
    slug: "oil-change",
    title: "Oil Change",
    shortDescription: "Premium synthetic engine oil replacement, OEM filter change, multi-point fluid level top-ups, and complete visual safety check.",
    iconName: "Droplet",
    image: "/services/oil-change.webp",
    heroImage: "/services/oil-change.webp",
    heroSubtitle: "Essential Lubrication Care for Maximum Thermal Defense & Engine Longevity.",
    overview: "Regular oil changes are the single most effective preventive maintenance task to keep your engine running smoothly. Clean oil lubricates moving components, dissipates extreme internal heat, and traps microscopic contaminants. Shahzad Auto Garage provides rapid, premium oil changes utilizing top-spec synthetic, semi-synthetic, or high-mileage lubricants tailored specifically to your vehicle's engine design.",
    whatWeCoverTitle: "Oil Change & Preventive Inspection",
    whatWeCover: [
      { title: "Old Oil Drain & Sump Inspection", desc: "Complete drainage of degraded engine oil while checking for metallic shavings or thermal degradation." },
      { title: "Premium Engine Oil Refill", desc: "Filling with correct viscosity synthetic or semi-synthetic oil meeting manufacturer specifications." },
      { title: "OEM Quality Oil Filter Change", desc: "Replacing the oil filter with a high-efficiency filter element to ensure optimal oil flow and dirt capture." },
      { title: "Multi-Fluid Level Top-Up", desc: "Checking and topping up coolant/antifreeze, brake fluid, power steering fluid, and windshield washer reservoir." },
      { title: "Comprehensive Visual Under-Hood Check", desc: "Inspecting air filter, cabin filter, drive belts, radiator hoses, and battery terminals." },
      { title: "Service Interval Counter Reset", desc: "Resetting your vehicle's digital oil maintenance indicator light and attaching a clear service sticker." }
    ],
    benefits: [
      "Protects internal engine bearings, camshafts, and pistons from excessive friction",
      "Maintains optimal fuel economy by reducing internal mechanical drag",
      "Keeps engine interior clean from sludge and varnish deposits",
      "Includes a complimentary multi-point safety check during every oil service"
    ],
    gallery: [
      "/services/oil-change.webp",
      "/services/mechanical-services.webp",
      "/services/engine-overhauling.webp"
    ]
  }
];

export const faqsData = [
  {
    question: "What core automotive services does Shahzad Auto Garage provide?",
    answer: "We provide six core specialized service categories: Mechanical Services, Engine Overhauling, Brake Service, Suspension & Transmission, Electrical Diagnostics, and Oil Change. Each service is performed by experienced technicians using precision tools and diagnostic equipment."
  },
  {
    question: "How can I book a service or consultation at Shahzad Auto Garage?",
    answer: (
      <>
        You can easily reach us by calling{' '}
        <a href="tel:+92342479753" className="text-[#E0C15A] hover:underline font-semibold">
          +92 342 4797953
        </a>{' '}
        or sending us a direct message on{' '}
        <a href="https://wa.me/923424793753" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-semibold">
          WhatsApp at +92 342 4793753
        </a>. You can also visit our workshop directly in G11/4 Islamabad during operating hours.
      </>
    )
  },
  {
    question: "Can I call the garage before bringing my vehicle in?",
    answer: (
      <>
        Yes, absolutely! We encourage customers to call us at{' '}
        <a href="tel:+92342479753" className="text-[#E0C15A] hover:underline font-semibold">
          +92 342 4797953
        </a>{' '}
        to discuss symptoms, get preliminary advice, or check workshop availability before coming.
      </>
    )
  },
  {
    question: "Where is Shahzad Auto Garage located in Islamabad?",
    answer: (
      <>
        Our garage is conveniently located Opposite Lucky Star Cricket Stadium, G11/4, Golra Service Road, Islamabad. You can click our{' '}
        <a href="https://share.google/w6jiCzr4mbjRdOAXS" target="_blank" rel="noopener noreferrer" className="text-[#E0C15A] hover:underline font-semibold">
          Google Maps Link
        </a>{' '}
        to open exact GPS navigation.
      </>
    )
  },
  {
    question: "Do you perform complete engine overhauls?",
    answer: "Yes. Our Engine Overhauling service covers complete diagnostic assessments, engine dismantling, thorough cleaning, cylinder and head inspection, precision valve/ring/bearing replacement, reassembly to factory torque specs, and rigorous pressure testing."
  },
  {
    question: "Do you offer brake inspection and servicing?",
    answer: "Yes, our Brake Service includes checking pad thickness, rotor condition, brake lines, calipers, hydraulic fluid flushing, and diagnosing ABS or handbrake issues to ensure safety and stopping performance."
  },
  {
    question: "Can you diagnose complex check engine lights and electrical problems?",
    answer: "Yes. We use advanced computerized OBD-II scan equipment, live data stream monitoring, and electrical testing to diagnose electronic faults, sensor failures, starter/alternator issues, and wiring problems accurately."
  },
  {
    question: "Do you perform regular oil changes and preventive maintenance?",
    answer: "Yes, we provide synthetic and semi-synthetic oil changes paired with OEM filter replacements and a complimentary multi-point visual inspection of fluids, belts, and hoses."
  },
  {
    question: "What should I do if a warning light suddenly appears on my dashboard?",
    answer: (
      <>
        If a red or amber warning light turns on, avoid heavy driving and call our specialists immediately at{' '}
        <a href="tel:+92342479753" className="text-[#E0C15A] hover:underline font-semibold">
          +92 342 4797953
        </a>{' '}
        or message us on{' '}
        <a href="https://wa.me/923424793753" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-semibold">
          WhatsApp
        </a>. We will guide you on whether it is safe to drive or requires immediate inspection.
      </>
    )
  },
  {
    question: "How can I get direct directions to the garage?",
    answer: (
      <>
        Click on any 'Get Directions' button on our website, or use our direct{' '}
        <a href="https://share.google/w6jiCzr4mbjRdOAXS" target="_blank" rel="noopener noreferrer" className="text-[#E0C15A] hover:underline font-semibold">
          Google Maps Link
        </a>{' '}
        to navigate straight to our workshop.
      </>
    )
  }
];

export const trustPillars = [
  {
    title: "Precision Diagnostics",
    desc: "State-of-the-art diagnostic equipment to pinpoint exact issues before touching a bolt.",
    icon: "Activity"
  },
  {
    title: "Master Workmanship",
    desc: "Experienced, passionate automotive specialists who adhere strictly to engineering standards.",
    icon: "ShieldCheck"
  },
  {
    title: "Transparent Service",
    desc: "Clear communication regarding required repairs, replaced parts, and realistic timelines.",
    icon: "Eye"
  },
  {
    title: "Customer First Focus",
    desc: "Building long-term relationships through reliability, integrity, and direct client care.",
    icon: "HeartHandshake"
  }
];
