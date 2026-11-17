import { ChecklistItem, ServiceItem, InspectionReport } from '../types';

export const BUSINESS_INFO = {
  name: 'PPI Auto',
  phone: '951-267-8500',
  formattedPhone: '(951) 267-8500',
  email: 'info@prepurchaseauto.com',
  website: 'prepurchaseauto.com',
  tagline: 'Know What It Needs Before You Pay.',
  heroSubtitle: 'Independent pre-purchase vehicle inspections, wherever the car sits. Mobile across all 50 states.',
  flatPrice: '$225',
  inspectionPoints: 122,
  statesCovered: 50,
  duration: '~90 Mins',
  reportTime: 'Same-Day Digital',
  agencyCredit: 'Designed by KORE'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'engine-transmission',
    number: '01',
    title: 'Engine & Transmission',
    shortDesc: 'Complete mechanical powertrain check for oil leaks, valvetrain noise, coolant purity, and gear shift smoothness.',
    fullDesc: 'We inspect cylinder head gaskets, transmission fluid condition, cooler lines, drive belts, and listen for abnormal valvetrain noise.',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=700&q=80',
    specs: ['Oil & Coolant Analysis', 'Transmission Shift Quality', 'Drive Belts & Hoses', 'Exhaust & Catalytic Test'],
    keyChecks: ['Rear main seal check', 'Transmission flare & slip', 'Radiator pressure test']
  },
  {
    id: 'brakes-suspension',
    number: '02',
    title: 'Brakes & Suspension',
    shortDesc: 'Digital caliper measurements of pad and rotor thickness (mm), ball joints, tie rods, and strut assemblies.',
    fullDesc: 'Our technician records exact pad thickness in millimeters, checks rotor runout, brake fluid moisture, and dampener seals.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80',
    specs: ['Brake Pad Thickness (mm)', 'Rotor Runout & Grooves', 'Struts & Shock Dampeners', 'Ball Joints & Bushings'],
    keyChecks: ['Pad wear measurement', 'Strut hydraulic leaks', 'Sway bar link play']
  },
  {
    id: 'paint-body-frame',
    number: '03',
    title: 'Paint, Body & Frame',
    shortDesc: 'Digital paint depth gauge scan across every metal panel to detect bondo, hidden accident repairs, and welds.',
    fullDesc: 'Factory paint is 3.5 to 5.5 mils. We scan 22 exterior points with ultrasonic gauges to uncover repainted body panels.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80',
    specs: ['Digital Mil Depth Gauge', 'Unibody Seam Alignment', 'Panel Gap Tolerances', 'Undercarriage Rust Scale'],
    keyChecks: ['A/B/C pillar spot welds', 'Quarter panel bondo test', 'Subframe clamp marks']
  },
  {
    id: 'electrical-systems',
    number: '04',
    title: 'Electrical Systems',
    shortDesc: 'Battery conductance cranking test, alternator charging rate, climate control output, windows, and modules.',
    fullDesc: 'High-rate battery impedance test, digital thermal HVAC output probe, and complete switch verification.',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=700&q=80',
    specs: ['Battery Health (CCA)', 'Alternator Charge Voltage', 'AC & Heater Vent Temp', 'Power Windows & Locks'],
    keyChecks: ['AC thermal output', 'Battery load test', 'Hidden waterlines & silt']
  },
  {
    id: 'obd2-diagnostics',
    number: '05',
    title: 'OBD-II Diagnostic Scan',
    shortDesc: 'Full ECU computer scan capturing active trouble codes, pending flags, freeze-frame data, and emissions monitors.',
    fullDesc: 'Dealers often clear check engine lights before you arrive. Our scanner reads pending codes and readiness monitors.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80',
    specs: ['Active Fault Codes (DTC)', 'Pending / Cleared Codes', 'I/M Emissions Readiness', 'Airbag SRS & ABS Modules'],
    keyChecks: ['Recent code reset check', 'Transmission ECU errors', 'Misfire history counters']
  },
  {
    id: 'road-test-history',
    number: '06',
    title: 'Dynamic Road Test',
    shortDesc: 'Real-world 15-minute test drive evaluating acceleration, shift points, braking vibration, and steering tracking.',
    fullDesc: 'Our technician drives through street and highway cycles, testing cold starts, gear hunting, and vibration.',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=700&q=80',
    specs: ['15-Minute Road Test', 'Transmission Kickdown', 'Emergency ABS Deceleration', 'Straight-Line Tracking'],
    keyChecks: ['Braking pedal vibration', 'Steering wheel centering', 'Chassis clunk on bumps']
  }
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'eng-1', name: 'Engine Oil Level & Contamination', category: 'engine', status: 'Pass', method: 'Dipstick visual check', description: 'Checks for milky residue (coolant leak) or fuel odor.' },
  { id: 'eng-2', name: 'Valve Cover & Timing Gaskets', category: 'engine', status: 'Attention', method: 'High-intensity LED check', description: 'Minor oil weeping found at rear of valve cover gasket.' },
  { id: 'eng-3', name: 'Radiator, Hoses & Coolant Purity', category: 'engine', status: 'Pass', method: 'Visual & pressure check', description: 'Coolant clean, hoses pliable with zero ballooning.' },
  { id: 'eng-4', name: 'Serpentine Drive Belt & Tensioner', category: 'engine', status: 'Pass', method: 'Rib deflection check', description: 'No dry rot, micro-cracks or idler pulley bearing squeal.' },
  
  { id: 'bdy-1', name: 'Paint Depth (Mils) - Hood', category: 'body', status: 'Pass', method: 'Ultrasonic mil gauge', description: 'Factory 4.2 mils recorded. No evidence of repaint.' },
  { id: 'bdy-2', name: 'Paint Depth - Right Quarter Panel', category: 'body', status: 'Attention', method: 'Ultrasonic mil gauge', description: '10.4 mils recorded (indicates respray and localized body filler).' },
  { id: 'bdy-3', name: 'Unibody Frame Rail Alignment', category: 'body', status: 'Pass', method: 'Underbody inspection', description: 'Pinch welds intact. Zero structural clamp marks found.' },
  
  { id: 'elec-1', name: 'OBD-II ECU Fault Code Readout', category: 'electrical', status: 'Pass', method: 'CAN-Bus scanner', description: 'Zero active MIL check engine codes currently set.' },
  { id: 'elec-2', name: 'I/M Emissions Readiness Monitors', category: 'electrical', status: 'Attention', method: 'ECU readiness audit', description: 'EVAP monitor not ready (recently cleared or battery reset).' },
  { id: 'elec-3', name: '12V Battery Health & Alternator', category: 'electrical', status: 'Pass', method: 'Digital tester', description: '685 CCA tested (95% health). Alternator 14.2V charging.' },
  
  { id: 'brk-1', name: 'Front Brake Pads Remaining', category: 'brakes', status: 'Pass', method: 'Digital caliper', description: '8.5mm remaining (approx 80% life left).' },
  { id: 'brk-2', name: 'Rear Brake Pads Remaining', category: 'brakes', status: 'Attention', method: 'Digital caliper', description: '3.0mm remaining (replacement recommended within 5k miles).' },
  { id: 'brk-3', name: 'Struts & Shock Dampeners', category: 'brakes', status: 'Pass', method: 'Bounce & seal check', description: 'Hydraulic seals clean with no fluid weeping.' },
  
  { id: 'rd-1', name: 'Cold Engine Ignition & Idle', category: 'roadtest', status: 'Pass', method: 'Acoustic tachometer check', description: 'Immediate start, steady 680 RPM smooth idle.' },
  { id: 'rd-2', name: 'Transmission Shift Quality', category: 'roadtest', status: 'Pass', method: 'Dynamic drive cycle', description: 'Crisp 1-2, 2-3, 3-4 upshifts without gear hunting.' },
  { id: 'rd-3', name: 'High-Speed Braking Stability', category: 'roadtest', status: 'Pass', method: 'Firm deceleration check', description: 'Straight-line stop with zero steering shudder or pedal pulse.' },
  
  { id: 'int-1', name: 'Flood Waterlines & Under-Carpet Silt', category: 'interior', status: 'Pass', method: 'Carpet lift audit', description: 'Wire harnesses dry. Zero river silt or flood mildew smell.' },
  { id: 'int-2', name: 'Dual-Zone AC Output Temp', category: 'interior', status: 'Pass', method: 'Digital thermal probe', description: 'Vents blowing cold at 41°F within 3 minutes.' }
];

export const SAMPLE_REPORT: InspectionReport = {
  id: 'PPI-2026-8942',
  vehicle: '2022 Jeep Grand Cherokee L Limited 4x4',
  vin: '1C4RJKBG8N829104',
  mileage: '38,420 Miles',
  date: 'November 2026',
  location: 'Dallas, TX (Customer located in Chicago, IL)',
  inspector: 'Marcus Vance, ASE Master Certified Technician',
  overallScore: 89,
  verdict: 'Recommended with Minor Fixes',
  estimatedRepairSavings: '$1,850 in Negotiation Leverage',
  summary: 'Mechanically sound. Paint depth uncovered passenger door respray (10.4 mils), but inner unibody pillar is original. Rear brake pads worn to 3mm (due for replacement). Clear negotiation leverage of $1,500 - $1,800 off seller asking price.'
};

export const TESTIMONIALS = [
  {
    quote: "Bought a truck 900 miles away in Texas. PPI Auto inspected it within 24 hours and sent 60 photos showing tailgate respray and differential seepage. Saved me $2,400 off asking price!",
    author: "David R.",
    role: "Remote Truck Buyer",
    location: "Houston, TX to Denver, CO",
    rating: 5,
    vehicle: "2021 Ford F-150"
  },
  {
    quote: "Seller claimed 'flawless with clean title'. The inspector hooked up the OBD-II scan and found 2 cleared transmission slip codes. Best $225 I've ever spent.",
    author: "Elena M.",
    role: "Private Party Buyer",
    location: "Los Angeles, CA",
    rating: 5,
    vehicle: "2020 BMW X3"
  },
  {
    quote: "As a woman walking into a dealership alone, having an independent ASE technician inspect the car gave me 100% peace of mind. He even called to debrief me line by line.",
    author: "Sarah Jenkins",
    role: "Dealership Customer",
    location: "Atlanta, GA",
    rating: 5,
    vehicle: "2022 Honda CR-V"
  }
];
