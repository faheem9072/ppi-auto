import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone, Play, Pause, ChevronDown, Radio, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface CinematicHeroProps {
  onOpenBooking: () => void;
  onOpenReport: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onOpenBooking, onOpenReport }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentScene, setCurrentScene] = useState(1);
  const animFrameId = useRef<number | null>(null);

  // Scroll tracking and video scrubbing
  useEffect(() => {
    let targetTime = 0;

    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      setScrollProgress(progress);

      // Determine active scene (1 to 7)
      if (progress < 0.14) setCurrentScene(1);
      else if (progress < 0.28) setCurrentScene(2);
      else if (progress < 0.44) setCurrentScene(3);
      else if (progress < 0.60) setCurrentScene(4);
      else if (progress < 0.75) setCurrentScene(5);
      else if (progress < 0.88) setCurrentScene(6);
      else setCurrentScene(7);

      // Scrub video to target time if video duration is available
      if (videoRef.current && videoRef.current.duration) {
        targetTime = progress * videoRef.current.duration;
      }
    };

    // Smooth Lerp loop for video currentTime
    const updateVideoTime = () => {
      const video = videoRef.current;
      if (video && video.duration && !video.paused) {
        const diff = targetTime - video.currentTime;
        if (Math.abs(diff) > 0.05) {
          video.currentTime += diff * 0.2;
        }
      }
      animFrameId.current = requestAnimationFrame(updateVideoTime);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animFrameId.current = requestAnimationFrame(updateVideoTime);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const scenes = [
    { id: 1, label: 'Overview' },
    { id: 2, label: '122 Points' },
    { id: 3, label: 'Road Test' },
    { id: 4, label: 'Reports' },
    { id: 5, label: '50 States' },
    { id: 6, label: '$225 Flat' },
    { id: 7, label: 'Book' },
  ];

  return (
    <div ref={containerRef} id="overview" className="relative h-[650vh] bg-black">
      
      {/* Sticky Fullscreen Cinematic Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between select-none">
        
        {/* Real Automotive Commercial Video Footage */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <video
            ref={videoRef}
            src="/videos/hero-drive.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-90' : 'opacity-30'
            }`}
          />

          {/* Clean Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-black/40 to-[#07080A]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-transparent to-black/75" />
        </div>

        {/* HUD Top Bar */}
        <div className="relative z-20 pt-20 sm:pt-24 px-4 sm:px-8 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#00E575]/30 text-[#00E575] font-semibold text-[11px] sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-[#00E575] animate-ping" />
              FIELD AUDIT IN PROGRESS
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[#9EA3B0] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 text-[11px]">
              <Radio className="w-3 h-3 text-[#00E575] animate-pulse" />
              TELEMETRY: 65 MPH ROAD TEST
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-[#00E575] transition-colors flex items-center gap-1.5 text-[11px]"
              title={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span className="hidden sm:inline">{isPlaying ? 'LIVE FOOTAGE' : 'PAUSED'}</span>
            </button>
            <span className="text-[11px] text-[#A1A7B5] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5">
              SCENE 0{currentScene} / 07
            </span>
          </div>
        </div>

        {/* Center: Storytelling Scenes Progression */}
        <div className="relative z-20 px-4 sm:px-8 max-w-4xl mx-auto w-full flex-1 flex items-center justify-center py-6 text-center">
          
          {/* SCENE 1: Introduction */}
          {currentScene === 1 && (
            <div className="space-y-4 sm:space-y-5 max-w-2xl animate-in fade-in zoom-in-95 duration-400">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181B23]/90 backdrop-blur-md border border-[#00E575]/30 text-[#00E575] text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E575]" />
                PPI Auto • Nationwide Pre-Purchase Inspections
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white tracking-tight leading-[1.08] drop-shadow-2xl">
                Know What It Needs <br />
                <span className="text-[#00E575]">Before You Pay.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#D0D4DF] max-w-lg mx-auto leading-relaxed drop-shadow">
                Professional pre-purchase vehicle inspections. Confidence before every purchase, wherever the car sits.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#00E575] hover:bg-[#00C853] text-black font-bold text-sm uppercase tracking-wide rounded-xl shadow-xl shadow-[#00E575]/25 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Book Your Inspection</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto px-6 py-3.5 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-wide rounded-xl border border-white/15 transition-all flex items-center justify-center"
                >
                  How It Works
                </a>
              </div>
            </div>
          )}

          {/* SCENE 2: 122-Point Inspection */}
          {currentScene === 2 && (
            <div className="space-y-4 max-w-2xl animate-in fade-in zoom-in-95 duration-400">
              <span className="px-3 py-1 rounded-full bg-[#00E575]/15 border border-[#00E575] text-[#00E575] text-xs font-medium inline-block">
                Scene 02 • Comprehensive Scan
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                122-Point Independent Audit
              </h2>

              <p className="text-sm sm:text-base text-[#D0D4DF] max-w-lg mx-auto">
                Nothing escapes our certified inspectors. Mechanical powertrain, electronic modules, body frame alignment, and safety systems.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg mx-auto pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <span className="text-[#00E575] font-bold block">ENGINE</span>
                  <span className="text-[11px] text-[#A6A29C]">Leaks & Noise</span>
                </div>
                <div className="p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <span className="text-[#00E575] font-bold block">OBD-II SCAN</span>
                  <span className="text-[11px] text-[#A6A29C]">Pending Codes</span>
                </div>
                <div className="p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <span className="text-[#00E575] font-bold block">PAINT GAUGE</span>
                  <span className="text-[11px] text-[#A6A29C]">Hidden Bondo</span>
                </div>
                <div className="p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <span className="text-[#00E575] font-bold block">ROAD TEST</span>
                  <span className="text-[11px] text-[#A6A29C]">Shift Dynamics</span>
                </div>
              </div>
            </div>
          )}

          {/* SCENE 3: Powertrain & Dynamics */}
          {currentScene === 3 && (
            <div className="space-y-4 max-w-2xl animate-in fade-in zoom-in-95 duration-400">
              <span className="px-3 py-1 rounded-full bg-[#00E575]/15 border border-[#00E575] text-[#00E575] text-xs font-medium inline-block">
                Scene 03 • Road Dynamics
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                15-Minute Dynamic Road Test
              </h2>

              <p className="text-sm sm:text-base text-[#D0D4DF] max-w-lg mx-auto">
                Real test drive under street and highway conditions. Checking acceleration, brake pulsation, tracking, and gearbox kickdown.
              </p>

              <div className="p-4 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 max-w-md mx-auto text-left text-xs font-mono space-y-2">
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#8E8A83]">Transmission Shift Quality:</span>
                  <span className="text-[#00E575] font-bold">SMOOTH 1-2-3-4</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#8E8A83]">Emergency ABS Deceleration:</span>
                  <span className="text-[#00E575] font-bold">TRUE TRACKING</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E8A83]">Steering Wheel Alignment:</span>
                  <span className="text-[#00E575] font-bold">ZERO DRIFT</span>
                </div>
              </div>
            </div>
          )}

          {/* SCENE 4: Reports & Photos */}
          {currentScene === 4 && (
            <div className="space-y-4 max-w-2xl animate-in fade-in zoom-in-95 duration-400">
              <span className="px-3 py-1 rounded-full bg-[#00E575]/15 border border-[#00E575] text-[#00E575] text-xs font-medium inline-block">
                Scene 04 • Evidence & Photos
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                Same-Day Written Report & 60+ Photos
              </h2>

              <p className="text-sm sm:text-base text-[#D0D4DF] max-w-lg mx-auto">
                Receive an itemized digital report with date-stamped high-res photos, diagnostic trouble codes, and mechanic negotiation advice.
              </p>

              <button
                onClick={onOpenReport}
                className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-wide rounded-xl shadow-xl hover:bg-[#00E575] transition-colors"
              >
                Preview Sample 122-Pt Report
              </button>
            </div>
          )}

          {/* SCENE 5: Nationwide 50 States */}
          {currentScene === 5 && (
            <div className="space-y-4 max-w-2xl animate-in fade-in zoom-in-95 duration-400">
              <span className="px-3 py-1 rounded-full bg-[#00E575]/15 border border-[#00E575] text-[#00E575] text-xs font-medium inline-block">
                Scene 05 • Nationwide Dispatch
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                Mobile Across All 50 US States
              </h2>

              <p className="text-sm sm:text-base text-[#D0D4DF] max-w-lg mx-auto">
                Buying a pickup from Texas or an SUV from California? We send certified technicians directly to dealer lots, auctions, and driveways.
              </p>

              <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#00E575]">
                <MapPin className="w-4 h-4" />
                <span>Zero Travel Surprises • Fast Local Dispatch</span>
              </div>
            </div>
          )}

          {/* SCENE 6: $225 Flat Pricing */}
          {currentScene === 6 && (
            <div className="space-y-4 max-w-2xl animate-in fade-in zoom-in-95 duration-400">
              <span className="px-3 py-1 rounded-full bg-[#00E575]/15 border border-[#00E575] text-[#00E575] text-xs font-medium inline-block">
                Scene 06 • Transparent Value
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                $225 Flat Rate Most Vehicles
              </h2>

              <p className="text-sm sm:text-base text-[#D0D4DF] max-w-lg mx-auto">
                Dealership inspections cost $350-$500+ and require towing. PPI Auto comes to the vehicle for one clear flat price.
              </p>

              <div className="inline-flex items-baseline gap-2 p-3 bg-black/80 rounded-2xl border border-[#00E575]/40">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#00E575]">$225</span>
                <span className="text-xs font-medium text-[#A1A7B5] uppercase">Flat Fee • All 122 Points Included</span>
              </div>
            </div>
          )}

          {/* SCENE 7: Final Booking Call */}
          {currentScene === 7 && (
            <div className="space-y-4 sm:space-y-5 max-w-2xl animate-in fade-in zoom-in-95 duration-400">
              <span className="px-3 py-1 rounded-full bg-[#00E575] text-black text-xs font-bold uppercase tracking-wide inline-block">
                Scene 07 • Take Action
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight leading-tight">
                Inspect Before You Invest.
              </h2>

              <p className="text-sm sm:text-base text-[#D0D4DF] max-w-lg mx-auto">
                Protect your investment. Book your inspection online in 2 minutes or speak directly with dispatch.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#00E575] hover:bg-[#00C853] text-black font-bold text-sm uppercase tracking-wide rounded-xl shadow-2xl shadow-[#00E575]/35 transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Your Inspection ($225 Flat)</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 bg-black/70 hover:bg-black/90 text-white font-medium text-xs rounded-xl border border-white/20 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00E575]" />
                  <span>Call: {BUSINESS_INFO.formattedPhone}</span>
                </a>
              </div>
            </div>
          )}

        </div>

        {/* HUD Bottom Bar: Story Timeline */}
        <div className="relative z-20 pb-5 px-4 sm:px-8 max-w-7xl mx-auto w-full">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-[#00E575] to-[#00C853] transition-all duration-100 ease-out"
              style={{ width: `${Math.max(scrollProgress * 100, 3)}%` }}
            />
          </div>

          <div className="flex items-center justify-between gap-1 text-[11px] font-mono">
            {scenes.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  if (!containerRef.current) return;
                  const targetScroll = ((s.id - 1) / (scenes.length - 1)) * (containerRef.current.offsetHeight - window.innerHeight);
                  window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                }}
                className={`flex items-center gap-1 transition-colors ${
                  currentScene === s.id
                    ? 'text-[#00E575] font-bold'
                    : currentScene > s.id
                    ? 'text-white'
                    : 'text-[#5A6072]'
                }`}
              >
                <span className="hidden md:inline">0{s.id}</span>
                <span className="truncate">{s.label}</span>
              </button>
            ))}
          </div>

          {currentScene === 1 && (
            <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] font-medium text-[#8D93A5] animate-bounce">
              <ChevronDown className="w-3.5 h-3.5 text-[#00E575]" />
              <span>Scroll down to explore</span>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
