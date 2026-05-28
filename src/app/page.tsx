"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Flame, Heart, Users, Calendar, Clock, Smile, CheckCircle2, 
  ArrowRight, Star, Award, Apple, Video, ShieldCheck, ChevronDown, 
  ChevronUp, Sparkles, MessageCircle, RefreshCw, Compass, Check, BookOpen, UserCheck, Play
} from "lucide-react";

export default function Home() {
  // --- States for Interactions ---
  const [activeTimingTab, setActiveTimingTab] = useState<"morning" | "evening">("morning");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 12 });
  const [membersCount, setMembersCount] = useState(4850);
  const [kgsCount, setKgsCount] = useState(9720);
  const [transCount, setTransCount] = useState(960);
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [activeDayRoutine, setActiveDayRoutine] = useState(0);

  // Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 2, minutes: 59, seconds: 59 }; // Reset to keep demo active
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Counters Effect
  useEffect(() => {
    const membersTimer = setInterval(() => {
      setMembersCount(prev => (prev < 5000 ? prev + 1 : 5000));
    }, 50);
    const kgsTimer = setInterval(() => {
      setKgsCount(prev => (prev < 10000 ? prev + 3 : 10000));
    }, 20);
    const transTimer = setInterval(() => {
      setTransCount(prev => (prev < 1000 ? prev + 1 : 1000));
    }, 80);

    return () => {
      clearInterval(membersTimer);
      clearInterval(kgsTimer);
      clearInterval(transTimer);
    };
  }, []);

  // FAQ Accordion Toggle
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Can beginners join?",
      a: "Yes, absolutely! 100% of our programs are beginner-friendly. Our certified trainers show low-impact and easy variations for all exercises during the live Zoom sessions, ensuring you progress at your own comfortable pace."
    },
    {
      q: "Is it suitable for PCOS / Thyroid?",
      a: "Yes! In fact, more than 40% of our members join to manage PCOS, Thyroid, and other medical or hormonal conditions. Our live workouts are designed to be hormone-safe, and our female dietician provides customized meals specifically curated to support thyroid function and manage PCOS symptoms naturally."
    },
    {
      q: "What if I miss sessions?",
      a: "We understand that real life happens! 💖 That's why we provide full recorded access to all missed sessions. Furthermore, we provide unique 'Missed Day Extensions' so your package period gets extended for periods, travel, or functions."
    },
    {
      q: "Will recordings be available?",
      a: "Yes, standard high-quality workout recordings are uploaded daily. If you can't attend live at your regular time slot, you can easily catch up by watching the recording at your own convenience."
    },
    {
      q: "Do I need equipment?",
      a: "No equipment needed! All our workouts are fully home-friendly, bodyweight-based sessions. Just a simple yoga mat, a water bottle, and your energy are enough to start your beautiful transformation!"
    },
    {
      q: "Can moms join?",
      a: "Absolutely! We have dedicated Post-Pregnancy Fitness routines and friendly batch timings that fit moms perfectly. You can join at any time that suits your kid's schedule, and even switch slots day-to-day."
    },
    {
      q: "Are timings flexible?",
      a: "Extremely flexible! We offer 11 different batches throughout the day (5 in the morning, 6 in the evening). You can choose any slot, on any day, and you can even attend twice a day (both morning and evening) if you want an extra energy boost!"
    },
    {
      q: "How do extensions work?",
      a: "Just drop a quick message on our support WhatsApp when you are traveling, unwell, or during your periods, and we will pause your subscription and extend it by up to 30 days depending on your selected plan."
    },
    {
      q: "Are classes live or recorded?",
      a: "They are 100% Live, interactive Zoom sessions! This is not a recorded course where you watch alone. The trainer will look at your posture, correct your form, motivate you by name, and other female members will push you to do your best!"
    }
  ];

  const transformations = [
    {
      name: "Pooja Sharma",
      age: 29,
      lost: "12 Kgs",
      duration: "3 Months",
      medical: "PCOS Recovery",
      quote: "OFFFIT changed my life! I was struggling with PCOS weight for years. The supportive live batches and the female dietician support kept me motivated every single day.",
      image: "/before_after_transformation.png"
    },
    {
      name: "Neha Patel",
      age: 34,
      lost: "8 Kgs",
      duration: "5 Weeks",
      medical: "Post Pregnancy",
      quote: "As a new mom, finding time was impossible. The flexible live batches allowed me to attend at 9 AM or 7 PM. I lost 8 Kgs of post-delivery fat without any crash diets!",
      image: "/before_after_transformation.png"
    },
    {
      name: "Anjali Rao",
      age: 41,
      lost: "15 Kgs",
      duration: "4 Months",
      medical: "Thyroid Management",
      quote: "I had low stamina and severe thyroid-related fatigue. The friendly female trainers guided my posture online and customized my Indian meals perfectly.",
      image: "/before_after_transformation.png"
    }
  ];

  const dayRoutine = [
    {
      time: "07:00 AM",
      title: "🌅 Morning Motivation & Daily Goal Setup",
      desc: "Wake up to positive, energizing reminders in our exclusive WhatsApp group. Set your goal for the day with positive mindset prompts."
    },
    {
      time: "08:00 AM",
      title: "💃 Live Workout Session (Zoom)",
      desc: "Join your supportive female batch! Zumba, HIIT, or Strength training with live posture corrections and dynamic music beats."
    },
    {
      time: "10:30 AM",
      title: "🍏 Daily Diet check-in & Personal Chat",
      desc: "Upload photos of your breakfast/lunch directly to your certified female dietician. Get real-time constructive adjustments for healthy Indian meals."
    },
    {
      time: "03:00 PM",
      title: "📈 Mid-Day Progress Tracking & Hydration Reminders",
      desc: "Track water intake, chat with supportive buddies in your batch, and celebrate minor wins together."
    },
    {
      time: "06:00 PM",
      title: "💬 Community Motivation & Query Solver",
      desc: "Interact in our safe, positive space. Share transformation recipes, post workouts, and support other women on their fitness journey."
    },
    {
      time: "08:00 PM",
      title: "🌙 Evening Live Sessions & Wind-Down",
      desc: "Missed the morning batch? Join our high-energy evening batch! Relax with cool-down stretching and beautiful yoga sessions before sleep."
    }
  ];

  const timingSlots = {
    morning: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM"],
    evening: ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"]
  };

  const pricingPlans = [
    {
      duration: "1 Month",
      originalPrice: "₹1,999",
      price: "999",
      extra: null,
      popular: false,
      savings: "50% OFF"
    },
    {
      duration: "5 Weeks",
      originalPrice: "₹2,499",
      price: "1,199",
      extra: "5 Days Extra Paused Extensions",
      popular: false,
      savings: "52% OFF"
    },
    {
      duration: "2 Months",
      originalPrice: "₹3,999",
      price: "1,599",
      extra: "10 Days Extra Paused Extensions",
      popular: true,
      savings: "60% OFF"
    },
    {
      duration: "3 Months",
      originalPrice: "₹5,499",
      price: "2,199",
      extra: "20 Days Extra Paused Extensions",
      popular: false,
      savings: "60% OFF"
    },
    {
      duration: "4 Months",
      originalPrice: "₹7,999",
      price: "2,999",
      extra: "30 Days Extra Paused Extensions",
      popular: false,
      savings: "62% OFF"
    }
  ];

  const workoutActivities = [
    { title: "Dance Fitness Sessions", badge: "High Energy" },
    { title: "HIIT Fat Burn Workouts", badge: "Core Power" },
    { title: "Aerobics", badge: "Cardio Fun" },
    { title: "Stretching & Mobility", badge: "Recovery" },
    { title: "Core & Belly Fat Workouts", badge: "Targeted" },
    { title: "Fun Challenge Sessions", badge: "Community" },
    { title: "Full Body Fat Burn", badge: "Stamina" },
    { title: "Flexibility & Posture", badge: "Alignment" },
    { title: "Low Impact Beginner Workouts", badge: "Safe & Slow" },
    { title: "Mood Boosting Dance", badge: "Stress Relief" }
  ];

  const differences = [
    { feature: "Women-Only Community", offfit: true, localGym: false },
    { feature: "100% Live Interactive Zoom Classes", offfit: true, localGym: false },
    { feature: "Live Form Correction & Name Callouts", offfit: true, localGym: false },
    { feature: "Affordable Premium Plans (from ₹999)", offfit: true, localGym: false },
    { feature: "Home Comfort - Save 2 Hours Commute", offfit: true, localGym: false },
    { feature: "Highly Flexible Timings (11 Slots/Day)", offfit: true, localGym: false },
    { feature: "Personalized Diet & 24/7 Support", offfit: true, localGym: false },
    { feature: "Workout Recording Access If Missed", offfit: true, localGym: false },
    { feature: "Missed Day Pauses (Periods & Travel)", offfit: true, localGym: false }
  ];

  const trustBadges = [
    { title: "Women Only Community", desc: "100% safe & private zoom rooms" },
    { title: "Safe & Comfortable Environment", desc: "No judgment, workout from home" },
    { title: "Certified Female Trainers", desc: "Empathetic, expert coaches" },
    { title: "Highly Flexible Timings", desc: "Change slots dynamically anytime" },
    { title: "100% Live Interactive Sessions", desc: "No boring recorded videos" },
    { title: "Personalized Support", desc: "Assigned personal dietician" },
    { title: "Beginner Friendly Workouts", desc: "Adapted easily for all ages" }
  ];

  return (
    <div className="min-h-screen bg-[#03000a] text-slate-100 font-sans selection:bg-[#ff3388] selection:text-white">
      
      {/* --- TOP HEADER / MARQUEE ANNOUNCEMENT --- */}
      <div className="bg-gradient-to-r from-[#ff3388] via-[#8b5cf6] to-[#ff3388] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 glow-pink">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-black/30 animate-pulse text-[10px]">NEW</span>
        <span>🎉 BATCH STARTING MONDAY! Lose 4-5 Kgs or Get 50% Money Back! 💯</span>
        <span className="hidden md:inline">| Grab your slot before price rises |</span>
        <div className="hidden lg:flex items-center gap-1 font-mono bg-black/40 px-2 py-0.5 rounded ml-2">
          <span>{timeLeft.hours.toString().padStart(2, "0")}h</span>:
          <span>{timeLeft.minutes.toString().padStart(2, "0")}m</span>:
          <span>{timeLeft.seconds.toString().padStart(2, "0")}s</span>
        </div>
      </div>

      {/* --- PREMIUM NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 backdrop-filter backdrop-blur-xl bg-opacity-70 bg-[#03000a] border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-pink-purple flex items-center justify-center shadow-lg shadow-pink-500/20">
            <span className="font-extrabold text-xl tracking-tighter text-white">OF</span>
          </div>
          <div>
            <span className="text-2xl font-black tracking-widest text-white">OFF<span className="text-[#ff3388]">FIT</span></span>
            <span className="block text-[8px] tracking-widest uppercase text-[#8b5cf6] font-bold">Women Online Fitness</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-[#ff3388] transition-colors">Why Community?</a>
          <a href="#program" className="hover:text-[#ff3388] transition-colors">Program Structure</a>
          <a href="#timings" className="hover:text-[#ff3388] transition-colors">Timings</a>
          <a href="#diet" className="hover:text-[#ff3388] transition-colors">Personal Diet</a>
          <a href="#pricing" className="hover:text-[#ff3388] transition-colors">Pricing</a>
          <a href="#personal-training" className="text-[#8b5cf6] hover:text-[#ff3388] flex items-center gap-1 font-semibold transition-colors">
            👑 Premium 1-on-1
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="#pricing" 
            className="hidden sm:inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full border border-[#ff3388]/30 hover:border-[#ff3388] transition-all bg-black/45 text-white hover:shadow-[0_0_15px_rgba(255,51,136,0.3)]"
          >
            Start Free Trial
          </a>
          <a 
            href="https://wa.me/919999999999?text=Hi%20OFFFIT!%20I%20want%20to%20join%20the%2030-day%20Weight%20Loss%20Challenge." 
            className="flex items-center justify-center bg-gradient-pink-purple px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white shadow-lg hover:shadow-[0_0_25px_rgba(255,51,136,0.5)] transition-all hover:scale-105"
          >
            Join Challenge Now <ArrowRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#ff3388]/10 blur-[100px] pointer-events-none -z-10 animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/10 blur-[120px] pointer-events-none -z-10 animate-float-delayed" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 text-[#ff3388] text-xs font-bold tracking-wider uppercase animate-bounce">
              <Sparkles className="w-4 h-4 text-[#ff3388]" /> 
              <span>100% Female Zoom Classes</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-gradient">
                🌟 JOIN OUR 30-DAY <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-pink-purple">WEIGHT LOSS</span> CHALLENGE! 🌟
              </h1>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#f472b6] tracking-tight">
                🎯 Lose 4-5 Kgs or Get <span className="underline decoration-[#ff3388] decoration-4">50% Money Back!</span> 💯
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join India's most energetic, loving, and supportive women-only online fitness group! Work out live on Zoom with expert guidance, tailored nutrition, and high-energy music. 
              <span className="block mt-2 text-[#a78bfa] italic">“Become the best version of yourself 💖”</span>
            </p>

            {/* LIVE ZOOM HIGHLIGHT */}
            <div className="p-5 rounded-2xl glass-card border-[#ff3388]/20 bg-gradient-to-r from-pink-950/20 to-purple-950/20 text-left space-y-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <Video className="w-5 h-5 text-[#ff3388]" />
                <span>📹 100% LIVE Zoom Interactive Sessions:</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-200">
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#ff3388]/20 transition-all cursor-pointer">Zumba 💃</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#8b5cf6]/20 transition-all cursor-pointer">HIIT 🔥</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-pink-500/20 transition-all cursor-pointer">Yoga 🧘</span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 transition-all cursor-pointer">Aerobics ⚡</span>
              </div>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-left text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388] shrink-0" /> Personalized Diet Plan</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388] shrink-0" /> 24/7 Dietician Support</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388] shrink-0" /> Women-Only Community</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388] shrink-0" /> Beginner Friendly</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388] shrink-0" /> Flexible Timings</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388] shrink-0" /> Real Certified Trainers</div>
            </div>

            {/* Urgency text & CTAs */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#pricing" 
                  className="px-8 py-4 rounded-full bg-gradient-pink-purple text-base font-bold text-white text-center hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,51,136,0.4)] flex items-center justify-center gap-2 hover:shadow-[0_0_35px_rgba(255,51,136,0.6)]"
                >
                  Join Challenge Now <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#program" 
                  className="px-8 py-4 rounded-full bg-slate-900 border border-white/10 hover:bg-slate-800 text-base font-bold text-white text-center hover:border-pink-500/50 transition-all flex items-center justify-center gap-2"
                >
                  Start Your Transformation <Heart className="w-5 h-5 text-[#ff3388] fill-[#ff3388]" />
                </a>
              </div>
              <p className="text-[#f472b6] text-xs sm:text-sm font-extrabold flex items-center justify-center lg:justify-start gap-1">
                <span className="inline-block animate-ping w-2.5 h-2.5 rounded-full bg-red-500 mr-1.5" />
                🚨 Limited Spots – Book Now! 💪 Take the first step toward a fitter, happier YOU!
              </p>
            </div>

          </div>

          {/* Hero Right Visual */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] p-3.5 bg-gradient-to-b from-[#ff3388] to-[#8b5cf6] shadow-[0_0_50px_rgba(255,51,136,0.3)] animate-float overflow-hidden">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-950">
                <Image 
                  src="/live_zoom_workout.png" 
                  alt="Live Women Zoom Fitness Class" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-all duration-700 opacity-90"
                  priority
                />
                
                {/* Visual Badges */}
                <div className="absolute top-4 left-4 bg-red-600/90 text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase flex items-center gap-1.5 border border-red-500 animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  <span>● LIVE ZOOM BATCH</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">Active Participants</span>
                    <span className="text-xs font-black text-[#ff3388] flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> 24 Online
                    </span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-pink-purple h-full w-[92%]" />
                  </div>
                  <p className="text-[10px] text-slate-400 italic">“Pooja is killing it! Perfect squat form! 👏” - Coach Priya</p>
                </div>
              </div>
            </div>

            {/* Float badges */}
            <div className="absolute -top-4 -right-2 bg-gradient-pink-purple p-3.5 rounded-2xl shadow-xl border border-white/20 text-center animate-bounce">
              <span className="block text-2xl font-black">4.9⭐</span>
              <span className="text-[9px] uppercase font-extrabold tracking-widest text-slate-100">CLIENT RATING</span>
            </div>

            <div className="absolute bottom-10 -left-6 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-pink-500/30 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#ff3388]/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#ff3388] fill-[#ff3388]" />
              </div>
              <div>
                <span className="block text-xs font-black text-slate-200">100% SAFE</span>
                <span className="text-[9px] text-slate-400">Females Only Space</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- RESULTS COUNTER SECTION --- */}
      <section className="bg-slate-950/70 border-y border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="block text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-pink-purple">
              {membersCount.toLocaleString()}+
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">Happy Female Members 👭</span>
          </div>
          <div className="space-y-1">
            <span className="block text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-pink-purple">
              {kgsCount.toLocaleString()}+
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">Total Kilograms Lost 🏃‍♀️</span>
          </div>
          <div className="space-y-1">
            <span className="block text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-pink-purple">
              {transCount}+
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">Life Transformations 🌟</span>
          </div>
          <div className="space-y-1">
            <span className="block text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-pink-purple">
              4.9/5 ⭐
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">Average Review Rating ❤️</span>
          </div>
        </div>
      </section>

      {/* --- WOMEN COMMUNITY & GROUP BATCHES SECTION --- */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Left */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl p-2 bg-gradient-to-r from-pink-500 to-purple-500 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                <Image 
                  src="/live_zoom_workout.png" 
                  alt="Women Supportive Community Batches" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold text-[#ff3388] uppercase tracking-wider block">SUPPORTIVE FITNESS FAMILY</span>
                  <p className="text-sm font-semibold text-white">"Workout together, stay motivated together 💖"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3388]/10 text-[#ff3388] text-xs font-bold tracking-wider uppercase">
              <Users className="w-3.5 h-3.5" /> <span>Batch Accountability</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              A Warm, Supportive, <span className="text-transparent bg-clip-text bg-gradient-pink-purple">Females-Only</span> Fitness Family 👭
            </h2>
            
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Say goodbye to awkward looks at crowded local gyms. At OFFFIT, you work out from the comfort of your home inside a cozy, highly encouraging community batch containing around <strong className="text-white bg-[#ff3388]/20 px-2 py-0.5 rounded">15 to 25 female members</strong>. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl border-white/5 space-y-2">
                <h3 className="font-bold text-[#ff3388] flex items-center gap-2">
                  <Smile className="w-5 h-5" /> Friendly, Empathetic Trainers
                </h3>
                <p className="text-xs text-slate-300">Coaches who understand female physiology, medical histories, and busy day structures.</p>
              </div>

              <div className="glass-card p-4 rounded-xl border-white/5 space-y-2">
                <h3 className="font-bold text-[#8b5cf6] flex items-center gap-2">
                  <Flame className="w-5 h-5" /> Fun Energetic Live Beats
                </h3>
                <p className="text-xs text-slate-300">High-tempo beats and workout games to keep everyone highly energetic and smiling.</p>
              </div>

              <div className="glass-card p-4 rounded-xl border-white/5 space-y-2">
                <h3 className="font-bold text-pink-400 flex items-center gap-2">
                  <Heart className="w-5 h-5" /> Supportive Chat Groups
                </h3>
                <p className="text-xs text-slate-300">Connect with batchmates, share diet recipes, coordinate timings, and support each other.</p>
              </div>

              <div className="glass-card p-4 rounded-xl border-white/5 space-y-2">
                <h3 className="font-bold text-purple-400 flex items-center gap-2">
                  <Video className="w-5 h-5" /> Real-time Interactive Guidance
                </h3>
                <p className="text-xs text-slate-300">The trainer calls you by name to correct your posture, keeping you safe and highly accountable.</p>
              </div>
            </div>

            <div className="bg-[#ff3388]/5 p-4 rounded-xl border-l-4 border-[#ff3388]">
              <p className="text-sm font-semibold text-slate-200 italic">
                “Not just workouts — it’s a supportive fitness family that keeps you consistent even on lazy days! 💖”
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- FITNESS GOALS SECTION --- */}
      <section className="py-20 px-6 md:px-12 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">CHOOSE YOUR TARGET GOAL</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Personalized Workouts Tailored For <span className="text-transparent bg-clip-text bg-gradient-pink-purple">Your Body Goals</span> 🎯
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Our program adapts to your specific physical condition, metabolism, and lifestyle goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Goal 1 */}
            <div className="glass-card p-6 rounded-3xl flex flex-col justify-between space-y-4 hover:border-pink-500/30">
              <div className="space-y-3">
                <div className="text-3xl">🤰🏼🦵</div>
                <h3 className="font-bold text-lg text-white">Belly/Thigh Fat Slimming</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Targeted fat-burning HIIT and core strengthening to burn stubborn fat and tone muscles naturally.</p>
              </div>
              <span className="text-[10px] font-bold text-[#ff3388] uppercase tracking-wider">Tone & Sculpt →</span>
            </div>

            {/* Goal 2 */}
            <div className="glass-card p-6 rounded-3xl flex flex-col justify-between space-y-4 hover:border-purple-500/30">
              <div className="space-y-3">
                <div className="text-3xl">🏃🏼‍♀️</div>
                <h3 className="font-bold text-lg text-white">Weight Loss (Medical Cond.)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Safe weight loss protocols tailored specifically for women managing joint pain, diabetes, or hypertension.</p>
              </div>
              <span className="text-[10px] font-bold text-[#8b5cf6] uppercase tracking-wider">Safe protocol →</span>
            </div>

            {/* Goal 3 */}
            <div className="glass-card p-6 rounded-3xl flex flex-col justify-between space-y-4 hover:border-pink-500/30">
              <div className="space-y-3">
                <div className="text-3xl">🤱</div>
                <h3 className="font-bold text-lg text-white">Post Pregnancy Fitness</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Gentle core recovery, pelvic floor strengthening, and gradual fat loss designed for busy new mothers.</p>
              </div>
              <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider">Mom friendly →</span>
            </div>

            {/* Goal 4 */}
            <div className="glass-card p-6 rounded-3xl flex flex-col justify-between space-y-4 hover:border-purple-500/30">
              <div className="space-y-3">
                <div className="text-3xl">🧘‍♀️</div>
                <h3 className="font-bold text-lg text-white">Flexibility & Well Being</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Dynamic yoga, posture improvement, deep muscle flexibility, and mental stress relief to feel light and energised.</p>
              </div>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Stretch & Flow →</span>
            </div>

            {/* Goal 5 */}
            <div className="glass-card p-6 rounded-3xl flex flex-col justify-between space-y-4 hover:border-pink-500/30">
              <div className="space-y-3">
                <div className="text-3xl">🌸</div>
                <h3 className="font-bold text-lg text-white">PCOS & Thyroid Support</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Hormone-safe slow-strength routines coupled with specific dietary guidance to regulate active cycles naturally.</p>
              </div>
              <span className="text-[10px] font-bold text-pink-300 uppercase tracking-wider">Hormonal Balance →</span>
            </div>

          </div>

          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
            <p className="text-xs sm:text-sm font-semibold text-[#f472b6]">
              “No crash diets. No unhealthy shortcuts. Just sustainable healthy transformation 💖”
            </p>
          </div>

        </div>
      </section>

      {/* --- COMPLETE LIVE PROGRAM STRUCTURE SECTION --- */}
      <section id="program" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#8b5cf6] uppercase block">BALANCED WEEKLY PROTOCOL</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ✅ 7 Days Complete Live Fitness Program
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              A scientifically balanced weekly schedule combining cardiovascular endurance, muscular strength, and muscle flexibility.
            </p>
          </div>

          {/* Weekly Main Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-[#ff3388]/30">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff3388]/5 rounded-bl-full group-hover:bg-[#ff3388]/10 transition-colors" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#ff3388]/10 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-[#ff3388]" />
                </div>
                <h3 className="text-xl font-bold text-white">💃 CARDIO (Zumba)</h3>
                <span className="inline-block text-xs font-bold bg-[#ff3388]/20 text-[#ff3388] px-3 py-1 rounded-full">3 Days A Week</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-energy dance cardiovascular workouts designed to burn up to 500+ calories per session while boosting serotonin and dopamine levels. Fun, upbeat, and exciting!
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-[#8b5cf6]/30">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#8b5cf6]/5 rounded-bl-full group-hover:bg-[#8b5cf6]/10 transition-colors" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8b5cf6]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#8b5cf6]" />
                </div>
                <h3 className="text-xl font-bold text-white">💪 Strength Training</h3>
                <span className="inline-block text-xs font-bold bg-[#8b5cf6]/20 text-[#8b5cf6] px-3 py-1 rounded-full">2 Days A Week</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Focuses on full-body toning, active muscle strengthening, and metabolic rate boosting using targeted bodyweight movements. Ideal for home-workouts.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-[#ff3388]/30">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-bl-full group-hover:bg-pink-500/10 transition-colors" />
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">🧘‍♀️ Yoga & Stretch</h3>
                <span className="inline-block text-xs font-bold bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full">2 Days A Week</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Deep myofascial stretching, spine alignment, core stability, posture improvement, and peaceful breathing techniques to relieve stress.
                </p>
              </div>
            </div>

          </div>

          {/* Activities Grid */}
          <div className="space-y-6 bg-slate-950/30 p-8 rounded-[2rem] border border-white/5">
            <h3 className="text-lg font-bold text-center text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ff3388]" /> What Makes Our Workouts Fun & Non-Boring
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {workoutActivities.map((act, index) => (
                <div key={index} className="bg-slate-900/60 p-4 rounded-2xl border border-white/5 space-y-2 hover:border-[#ff3388]/20 transition-all text-center">
                  <span className="block text-xs font-extrabold text-slate-200">{act.title}</span>
                  <span className="inline-block text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#ff3388]/10 text-[#ff3388]">{act.badge}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold text-slate-300 pt-4 border-t border-white/5 text-center">
              <div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ff3388]" /> 100% Live Interactive</div>
              <div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ff3388]" /> Fat Loss + Strength + Flexibility</div>
              <div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ff3388]" /> Beginner & Intermediate Friendly</div>
              <div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ff3388]" /> Home Friendly - No Equipment</div>
            </div>

            <p className="text-center text-xs sm:text-sm font-semibold text-[#f472b6] italic mt-2">
              “Fitness should feel exciting — not stressful 💖”
            </p>
          </div>

        </div>
      </section>

      {/* --- A DAY INSIDE OFFFIT SECTION --- */}
      <section className="py-20 px-6 md:px-12 bg-slate-950/50">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">PREVIEW YOUR ROUTINE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              📅 A Day Inside OFFFIT Community
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              How our complete accountability and support system is integrated into your regular daily routine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Steps Navigation */}
            <div className="lg:col-span-5 space-y-3">
              {dayRoutine.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDayRoutine(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    activeDayRoutine === idx 
                      ? "bg-gradient-to-r from-[#ff3388]/10 to-[#8b5cf6]/10 border-[#ff3388]/30 shadow-lg" 
                      : "bg-black/30 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs ${
                      activeDayRoutine === idx ? "bg-gradient-pink-purple text-white" : "bg-white/5 text-slate-400"
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">{step.time}</span>
                      <span className={`text-sm font-bold block ${activeDayRoutine === idx ? "text-white" : "text-slate-300"}`}>
                        {step.title.split(" ")[1]} {step.title.split(" ").slice(2).join(" ")}
                      </span>
                    </div>
                  </div>
                  <ChevronRightIcon className={`w-4 h-4 text-slate-400 ${activeDayRoutine === idx ? "text-[#ff3388]" : ""}`} />
                </button>
              ))}
            </div>

            {/* Step Detail Card */}
            <div className="lg:col-span-7">
              <div className="glass-card-premium p-8 rounded-[2.5rem] min-h-[300px] flex flex-col justify-between space-y-6 relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-pink-purple opacity-5 blur-3xl rounded-full" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff3388]">{dayRoutine[activeDayRoutine].time} Daily Flow</span>
                    <span className="text-xs font-bold text-purple-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> High Engagement
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white">{dayRoutine[activeDayRoutine].title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{dayRoutine[activeDayRoutine].desc}</p>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-slate-400 bg-white/5 px-4 py-3 rounded-xl">
                  <span>✨ Supported by Certified Coaches</span>
                  <span className="text-[#f472b6]">“You never feel alone in your journey 💖”</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- PERSONALIZED DIET & SUPPORT SECTION --- */}
      <section id="diet" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Diet Content Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase">
              <Apple className="w-3.5 h-3.5" /> <span>NUTRITION SYSTEM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Personalized Indian Diet Plans <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#8b5cf6]">With 24/7 Support</span> 🍏
            </h2>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Get customized, guilt-free meal guidance curated by our certified female dieticians. Enjoy yummy, everyday home-cooked Indian meals without any hunger or starvation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-sm font-bold text-white">No starvation</span>
                  <span className="block text-xs text-slate-400">Eat happy, healthy portioned meals.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-sm font-bold text-white">No crash diets</span>
                  <span className="block text-xs text-slate-400">Sustainable lifestyle improvements.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-sm font-bold text-white">Easy-to-follow plans</span>
                  <span className="block text-xs text-slate-400">Standard Indian kitchen ingredients.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-sm font-bold text-white">24/7 Dietician Support</span>
                  <span className="block text-xs text-slate-400">WhatsApp meal photos verification daily.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <span className="font-bold text-xs uppercase text-emerald-400 tracking-wider block mb-1">Dietician's Commitment</span>
              <p className="text-xs text-slate-300 italic">
                “We customize meals around your kitchen, family, and medical preferences. Happy meals build happy transformations! 🥗”
              </p>
            </div>
          </div>

          {/* Diet Visual Right */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] p-3.5 bg-gradient-to-tr from-emerald-500 to-purple-500 shadow-2xl overflow-hidden animate-float-delayed">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-950">
                <Image 
                  src="/personalized_diet.png" 
                  alt="Personalized Healthy Indian Food Diet" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="opacity-90"
                />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/85 backdrop-blur border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400">Certified Female Dietician</span>
                    <span className="text-sm font-extrabold text-white">Dt. Shruti Verma, RD</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">24/7 Active</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FLEXIBLE LIVE TIMINGS SECTION --- */}
      <section id="timings" className="py-20 px-6 md:px-12 bg-slate-950/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">CHOOSE YOUR PERFECT TIME</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              ⏰ Highly Flexible Live Batches Timings
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Perfect for students, working women, homemakers, moms, and busy schedules. Adjust slot daily based on your day.
            </p>
          </div>

          {/* Interactive Switcher */}
          <div className="flex justify-center">
            <div className="p-1 rounded-full bg-slate-900 border border-white/10 flex gap-2">
              <button
                onClick={() => setActiveTimingTab("morning")}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTimingTab === "morning" ? "bg-gradient-pink-purple text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                🌅 Morning Batches
              </button>
              <button
                onClick={() => setActiveTimingTab("evening")}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTimingTab === "evening" ? "bg-gradient-pink-purple text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                🌙 Evening Batches
              </button>
            </div>
          </div>

          {/* Timing Slots */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto justify-center">
            {timingSlots[activeTimingTab].map((slot, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-2xl border-white/5 flex flex-col items-center justify-center space-y-3 hover:border-pink-500/40 text-center animate-fade-in"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-pink-purple/10 flex items-center justify-center text-[#ff3388]">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xl font-black text-white">{slot}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Live interactive</span>
              </div>
            ))}
          </div>

          {/* Highlight Options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center pt-6">
            
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="block text-lg">✨</span>
              <h3 className="font-bold text-white text-sm">Choose Any Slot — Any Day</h3>
              <p className="text-xs text-slate-400">Flexibly attend at 7 AM on Monday, and 6 PM on Tuesday depending on your work!</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="block text-lg">✨</span>
              <h3 className="font-bold text-white text-sm">Unlimited Access Available</h3>
              <p className="text-xs text-slate-400">Attend any batch with no restriction, giving you 100% control.</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="block text-lg">✨</span>
              <h3 className="font-bold text-white text-sm">Join Twice A Day</h3>
              <p className="text-xs text-slate-400">Attend yoga in the morning and a high-tempo Zumba dance session in the evening!</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="block text-lg">✨</span>
              <h3 className="font-bold text-white text-sm">Attend Both Sessions</h3>
              <p className="text-xs text-slate-400">No extra charges! Both morning and evening access included in premium packages.</p>
            </div>

          </div>

        </div>
      </section>

      {/* --- MISSED DAYS & RECORDINGS SECTION --- */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="glass-card-premium p-8 sm:p-12 rounded-[2.5rem] border-[#ff3388]/30 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          
          <div className="space-y-4 md:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3388]/10 text-[#ff3388] text-xs font-bold tracking-wider uppercase">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" /> <span>NO SESSION LOSS POLICY</span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Missed a day? We got you fully covered! 💖
            </h2>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              We understand that real life happens—periods, travel, family functions, or office meetings can break your routine. At OFFFIT, we protect your consistency and your money.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-200">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388]" /> Missed Day Extensions Included</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388]" /> Periods Days Covered</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388]" /> Session Extensions Available</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#ff3388]" /> Workout Recordings Available</div>
            </div>

            <p className="text-[#f472b6] text-xs italic font-bold">
              “We understand real life happens 💖 Pauses available in 1-click!”
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <div className="w-36 h-36 rounded-full bg-gradient-pink-purple/10 border border-[#ff3388]/20 flex flex-col items-center justify-center text-center p-4">
              <span className="text-3xl mb-1">📆</span>
              <span className="text-xs font-black text-white">EASY PAUSE</span>
              <span className="text-[9px] text-slate-400">Pause Up to 30 Days</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- DAILY SUPPORT & ACCOUNTABILITY SECTION --- */}
      <section className="py-20 px-6 md:px-12 bg-slate-950/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">KEEPING YOU ON TRACK</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              📲 Daily Support & Complete Accountability
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Our unique double-layered support ensures you stay highly consistent without ever feeling lost or unmotivated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1 */}
            <div className="glass-card p-6 rounded-3xl space-y-3">
              <span className="text-2xl">🔔</span>
              <h3 className="font-extrabold text-white">Daily Reminders</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Friendly automated reminder alerts on WhatsApp before your scheduled live batch starts.</p>
            </div>

            {/* Box 2 */}
            <div className="glass-card p-6 rounded-3xl space-y-3">
              <span className="text-2xl">⚡</span>
              <h3 className="font-extrabold text-white">Live Form Correction</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Certified trainers view your video feed and guide your physical posture live to prevent injury.</p>
            </div>

            {/* Box 3 */}
            <div className="glass-card p-6 rounded-3xl space-y-3">
              <span className="text-2xl">💬</span>
              <h3 className="font-extrabold text-white">WhatsApp Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Assigned batch chatroom to ask diet or workout questions directly to female certified experts.</p>
            </div>

            {/* Box 4 */}
            <div className="glass-card p-6 rounded-3xl space-y-3">
              <span className="text-2xl">📈</span>
              <h3 className="font-extrabold text-white">Progress Tracking</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Weekly weight assessments and body measurement trackers supervised by your coach.</p>
            </div>

          </div>

          <div className="text-center space-y-2">
            <p className="text-[#f472b6] text-sm font-semibold italic">
              “Consistency &gt; Perfection ✨ Every small progress counts toward a major transformation!”
            </p>
          </div>

        </div>
      </section>

      {/* --- COMMUNITY ENERGY SECTION --- */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="glass-card p-8 sm:p-12 rounded-[2.5rem] border-white/5 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-bl-full pointer-events-none" />
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">Sisterhood in Fitness</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">🎉 High-Energy Community Motivation</h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              We celebrate each member's milestones, birthdays, and weight loss transformations together in our friendly group calls and chatrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-3xl">🏆</span>
              <h3 className="font-bold text-white text-sm">Monthly Challenges</h3>
              <p className="text-xs text-slate-400">Exciting, friendly group challenges with fun goodies for consistency.</p>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-3xl">🌟</span>
              <h3 className="font-bold text-white text-sm">Celebrate Wins</h3>
              <p className="text-xs text-slate-400">Share your 1Kg or 10Kgs lost milestones and get huge cheers from other women!</p>
            </div>
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5 space-y-2">
              <span className="text-3xl">💖</span>
              <h3 className="font-bold text-white text-sm">Encouraging Vibes</h3>
              <p className="text-xs text-slate-400">A completely positive space free from judgment or unhealthy competitive pressure.</p>
            </div>
          </div>

          <p className="text-center text-sm font-semibold text-[#f472b6] italic">
            “Strong women support strong women 💖”
          </p>

        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-[#ff3388]/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

        <div className="space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">SUPER AFFORDABLE BATCHES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              💸 Flexible Pricing Designed For Every Female
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Unlock unlimited live Zoom classes, customized diet plans, dietician tracking, and support. Cancel or Pause anytime.
            </p>
          </div>

          {/* Pricing Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx}
                className={`p-6 rounded-3xl flex flex-col justify-between space-y-6 relative overflow-hidden transition-all duration-300 ${
                  plan.popular 
                    ? "glass-card-premium border-[#ff3388] glow-pink scale-105" 
                    : "glass-card hover:border-[#ff3388]/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-3 right-3 bg-gradient-pink-purple text-white text-[8px] font-black tracking-widest px-2.5 py-1 rounded-full uppercase">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">{plan.duration} Batch Access</span>
                    <h3 className="text-2xl font-black text-white">{plan.duration}</h3>
                    {plan.extra && (
                      <span className="inline-block text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded mt-1">
                        🎁 {plan.extra}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 pb-4 border-b border-white/5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-white">{plan.originalPrice.split("₹")[0]}₹{plan.price}</span>
                      <span className="text-xs text-slate-400 line-through">{plan.originalPrice}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold block">{plan.savings} Discount Applied</span>
                  </div>

                  <ul className="space-y-2 text-xs font-medium text-slate-300">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Live Zoom Classes</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Women-Only Batches</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Personalized Diet Support</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Flexible Timings Access</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Workout Recordings</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Missed Day Pause Paused</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> WhatsApp Accountability</li>
                  </ul>
                </div>

                <a 
                  href={`https://wa.me/919999999999?text=Hi%20OFFFIT!%20I%20want%20to%20join%20the%20${plan.duration}%20plan%20for%20Rs%20${plan.price}.`}
                  className={`w-full py-3 rounded-full text-xs font-extrabold uppercase tracking-widest text-center transition-all ${
                    plan.popular 
                      ? "bg-gradient-pink-purple text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,51,136,0.4)]" 
                      : "bg-white/5 border border-white/10 hover:bg-[#ff3388]/10 text-white"
                  }`}
                >
                  Get Started Now
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- QUEEN / PERSONAL TRAINER SECTION --- */}
      <section id="personal-training" className="py-24 px-6 bg-slate-950/60 border-t border-white/5 relative">
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-[#8b5cf6]/5 rounded-full blur-[90px] -z-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto glass-card-premium p-8 sm:p-12 rounded-[3.5rem] border-[#8b5cf6]/30 space-y-10 relative overflow-hidden">
          
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-pink-purple opacity-10 blur-2xl rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 text-[#c084fc] text-xs font-black tracking-widest uppercase">
                👑 LUXURY ONE-ON-ONE TRAINING
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Dedicated Personal Trainer <br />
                <span className="text-transparent bg-clip-text bg-gradient-pink-purple">For VIP Fast-Track Results</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Want 100% focused attention? Secure your luxury, completely custom 1-on-1 private Zoom coaching slot. Perfect for fast-track weight loss, medical rehabilitation, and ultimate posture alignment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-200">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8b5cf6]" /> Dedicated Personal Trainer</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8b5cf6]" /> One-on-One Live Zoom Sessions</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8b5cf6]" /> Custom Tailored Workouts</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8b5cf6]" /> Daily Progress Monitoring</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8b5cf6]" /> Priority WhatsApp Support</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#8b5cf6]" /> Customized Nutrition Diet</div>
              </div>

              <p className="text-[#a78bfa] text-xs italic font-bold">
                “Your own trainer. Your own transformation journey 💖”
              </p>
            </div>

            {/* Right pricing callout */}
            <div className="lg:col-span-5 bg-black/60 p-8 rounded-3xl border border-[#8b5cf6]/20 text-center space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#a78bfa] block">EXCLUSIVE SLOT PRICE</span>
                <span className="block text-4xl sm:text-5xl font-black text-white">₹8,000<span className="text-lg font-bold text-slate-400">/month</span></span>
                <span className="text-[10px] text-emerald-400 font-bold block">Only 3 Slots Available This Week</span>
              </div>

              <a 
                href="https://wa.me/919999999999?text=Hi%20OFFFIT!%20I%20am%20interested%20in%20securing%20a%20Premium%201-on-1%20Personal%20Trainer%20slot." 
                className="block w-full py-4 rounded-full bg-gradient-pink-purple font-black text-xs uppercase tracking-widest text-white shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all hover:scale-105"
              >
                Apply For Slot Now
              </a>

              <span className="text-[10px] text-slate-400 block">100% money back guarantee if not fully satisfied within 7 days.</span>
            </div>

          </div>

        </div>
      </section>

      {/* --- TRANSFORMATION SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">INSPIRING REAL SUCCESS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            🔥 Proof In Actions: Real Client Success Stories
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Real women, real medical conditions, real sustainable weight loss achievements. No gimmicky crash diets.
          </p>
        </div>

        {/* Dynamic Transformation Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/30 p-8 sm:p-12 rounded-[3rem] border border-white/5">
          
          {/* Story Content Left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#ff3388]">
              <Flame className="w-4 h-4" /> <span>STORY {activeTransformation + 1} OF {transformations.length}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black text-white">{transformations[activeTransformation].name}</h3>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-300">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Age: {transformations[activeTransformation].age} Yrs</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400">Lost: {transformations[activeTransformation].lost}</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400">Duration: {transformations[activeTransformation].duration}</span>
                <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-400">{transformations[activeTransformation].medical}</span>
              </div>
            </div>

            <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-semibold italic border-l-4 border-[#ff3388] pl-4">
              "{transformations[activeTransformation].quote}"
            </blockquote>

            <p className="text-slate-400 text-xs">
              *Transformation results vary depending on consistency, sleep patterns, and medical parameters.
            </p>

            {/* Slider Switch Dots */}
            <div className="flex gap-2">
              {transformations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTransformation(idx)}
                  className={`w-10 h-2.5 rounded-full transition-all ${
                    activeTransformation === idx ? "bg-gradient-pink-purple" : "bg-white/10 hover:bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Before/After Comparison Right */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] p-2 bg-gradient-to-tr from-[#ff3388] to-[#8b5cf6] shadow-2xl overflow-hidden animate-float">
              <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-900">
                <Image 
                  src={transformations[activeTransformation].image} 
                  alt="Women Weight Loss Before After Transformation" 
                  fill
                  style={{ objectFit: "cover" }}
                  className="opacity-95"
                />
                
                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest text-slate-300">
                  BEFORE (LOW ENERGY)
                </div>
                <div className="absolute bottom-4 right-4 bg-gradient-pink-purple px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest text-white shadow-lg">
                  AFTER (-{transformations[activeTransformation].lost} LOST)
                </div>
              </div>
            </div>
          </div>

        </div>

        <p className="text-center text-sm font-semibold text-[#f472b6] italic">
          “Strong women build strong confidence 💖”
        </p>

      </section>

      {/* --- VIDEO TESTIMONIAL SECTION --- */}
      <section className="py-20 px-6 md:px-12 bg-slate-950/40 border-y border-white/5 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">WATCH THEM LIVE IN ACTION</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              🎥 Video Testimony Bundle & Live Sneak Peek
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              See how high-energy our Zumba dance workouts are and listen to real feedback from active batch members.
            </p>
          </div>

          {/* Styled Video Preview Card */}
          <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-[2.5rem] p-2 bg-gradient-to-r from-[#ff3388] via-[#8b5cf6] to-[#ff3388] shadow-2xl overflow-hidden group">
            <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-slate-900 flex flex-col justify-center items-center">
              <Image 
                src="/live_zoom_workout.png" 
                alt="Video Testimonials Preview" 
                fill
                style={{ objectFit: "cover" }}
                className="opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

              <div className="relative z-10 space-y-6 text-center px-6">
                <a 
                  href="https://youtu.be/G_r6NLSRXTk?si=E4JF0_ZV7geCNAgM" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-full bg-gradient-pink-purple flex items-center justify-center text-white mx-auto shadow-2xl scale-95 group-hover:scale-105 transition-all group-hover:shadow-[0_0_30px_rgba(255,51,136,0.6)] cursor-pointer"
                >
                  <Play className="w-8 h-8 fill-white ml-1.5" />
                </a>

                <div className="space-y-2">
                  <span className="inline-block text-[10px] font-black tracking-widest uppercase text-[#ff3388] bg-[#ff3388]/10 px-3 py-1 rounded">
                    💪 TESTIMONIALS BUNDLE VIDEO
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Watch What Happens Inside a Real Class</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">Click to open our client review compilation and dance workout routines on YouTube.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block font-sans">REVIEWS FROM ACTIVE BATCHES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ⭐ Hundreds of Glowing Reviews from Real Women
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
              “I was hesitant to join online workouts because I am an extreme beginner. But the trainers are incredibly friendly! They called my name to guide my posture during my live push-ups. I lost 6 Kgs in just a month! 💖”
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-gradient-pink-purple flex items-center justify-center font-bold text-xs">RK</div>
              <div>
                <span className="block text-xs font-black text-white">Ritu Kapoor</span>
                <span className="text-[10px] text-slate-400">Homemaker, Delhi</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
              “The 'Missed Day extensions' saved my membership! I had to travel for a cousin's wedding, and OFFFIT easily paused my plan for 10 days. The community is so supportive and positive. Strong women support strong women! ✨”
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-gradient-pink-purple flex items-center justify-center font-bold text-xs">SM</div>
              <div>
                <span className="block text-xs font-black text-white">Simran Mehta</span>
                <span className="text-[10px] text-slate-400">Software Engineer, Bangalore</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <p className="text-slate-300 text-xs sm:text-sm italic leading-relaxed">
              “Diagnosed with thyroid issues, losing weight was impossible. Dt. Shruti created a lovely, easy Indian meal plan that fit my kitchen perfectly. I lost 11 Kgs without any starvation. Forever grateful!”
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-gradient-pink-purple flex items-center justify-center font-bold text-xs">PA</div>
              <div>
                <span className="block text-xs font-black text-white">Priyanka Adiga</span>
                <span className="text-[10px] text-slate-400">Teacher, Mumbai</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* --- TRAINERS SECTION --- */}
      <section className="py-20 px-6 md:px-12 bg-slate-950/30">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">MEET YOUR COACHES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              👩 Professional & Empathetic Female Trainers
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Our certified female coaches focus on safe, non-boring workouts adapted perfectly to female physiology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            
            {/* Trainer 1 */}
            <div className="glass-card p-6 rounded-3xl text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-pink-purple mx-auto flex items-center justify-center text-4xl shadow-xl shadow-[#ff3388]/20">
                👩‍🏫
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-white">Coach Priya Sen</h3>
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#ff3388]/10 text-[#ff3388]">Zumba & Aerobics Head</span>
                <p className="text-xs text-slate-400 pt-2 leading-relaxed">Certified Zumba instructor with 6+ years experience leading virtual dance fitness groups.</p>
              </div>
              <div className="flex justify-center gap-1.5 text-xs text-slate-300 font-bold">
                <span>⭐ 4.9 Rating</span>
              </div>
            </div>

            {/* Trainer 2 */}
            <div className="glass-card p-6 rounded-3xl text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-pink-purple mx-auto flex items-center justify-center text-4xl shadow-xl shadow-[#8b5cf6]/20">
                🧘‍♀️
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-white">Coach Ananya Dixit</h3>
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#8b5cf6]/10 text-[#8b5cf6]">Yoga & Flexibility Head</span>
                <p className="text-xs text-slate-400 pt-2 leading-relaxed">1000+ Hrs certified yoga therapist helping women regain dynamic muscle flexibility.</p>
              </div>
              <div className="flex justify-center gap-1.5 text-xs text-slate-300 font-bold">
                <span>⭐ 5.0 Rating</span>
              </div>
            </div>

            {/* Trainer 3 */}
            <div className="glass-card p-6 rounded-3xl text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-pink-purple mx-auto flex items-center justify-center text-4xl shadow-xl shadow-pink-500/20">
                🏋️‍♀️
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-white">Coach Riddhi Shah</h3>
                <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-pink-500/10 text-pink-400">Strength & Core Specialist</span>
                <p className="text-xs text-slate-400 pt-2 leading-relaxed">Certified personal trainer specialized in hormone-safe functional resistance protocols.</p>
              </div>
              <div className="flex justify-center gap-1.5 text-xs text-slate-300 font-bold">
                <span>⭐ 4.9 Rating</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- WHAT MAKES OFFFIT DIFFERENT SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">TRUST COMPARISON CHECKLIST</span>
          <h2 className="text-3xl font-extrabold tracking-tight">
            🌟 What Makes OFFFIT Completely Different
          </h2>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            See how our tailored online structure compares against conventional recorded apps or local gyms.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-3xl overflow-hidden border-white/5">
          <div className="grid grid-cols-12 gap-2 bg-slate-900/60 p-4 border-b border-white/5 font-bold text-xs uppercase tracking-wider text-slate-300 text-center">
            <div className="col-span-6 text-left">Key Pillars</div>
            <div className="col-span-3 text-[#ff3388]">OFFFIT Advantage</div>
            <div className="col-span-3 text-slate-400">Regular Online Apps</div>
          </div>

          <div className="divide-y divide-white/5">
            {differences.map((diff, index) => (
              <div key={index} className="grid grid-cols-12 gap-2 p-4 text-xs font-medium items-center text-center">
                <div className="col-span-6 text-left font-bold text-white text-sm">{diff.feature}</div>
                <div className="col-span-3 text-emerald-400 font-bold text-center flex justify-center items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="col-span-3 text-red-500 font-bold text-center flex justify-center items-center">
                  <XCircleIcon className="w-5 h-5 text-red-500/50" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm font-semibold text-[#f472b6] italic">
          “Fitness that fits your active lifestyle perfectly 💖”
        </p>

      </section>

      {/* --- TRUST BADGES SECTION --- */}
      <section className="bg-slate-950/70 border-y border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 max-w-xs bg-white/5 p-4 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-[#ff3388]/10 flex items-center justify-center text-[#ff3388] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-black text-white">{badge.title}</span>
                <span className="text-[10px] text-slate-400">{badge.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">SIMPLE 5-STEP PROTOCOL</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            📖 How It Works: Your Simple Roadmap
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Get started today in less than 5 minutes with our streamlined onboarding system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          
          {/* Step 1 */}
          <div className="glass-card p-6 rounded-3xl space-y-4 relative overflow-hidden group hover:border-[#ff3388]/30">
            <span className="absolute top-3 right-3 text-3xl font-black text-[#ff3388]/10 group-hover:text-[#ff3388]/20 transition-colors">01</span>
            <div className="w-10 h-10 rounded-xl bg-[#ff3388]/10 flex items-center justify-center text-[#ff3388]">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-white text-base">1. Join Your Batch</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Secure your slot in one of our 11 flexible morning or evening live Zoom batches.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-6 rounded-3xl space-y-4 relative overflow-hidden group hover:border-purple-500/30">
            <span className="absolute top-3 right-3 text-3xl font-black text-purple-500/10 group-hover:text-purple-500/20 transition-colors">02</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-[#8b5cf6]">
              <Apple className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-white text-base">2. Get Diet Plan</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Connect 1-on-1 with Dt. Shruti to receive your customized daily Indian meal plan.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-6 rounded-3xl space-y-4 relative overflow-hidden group hover:border-[#ff3388]/30">
            <span className="absolute top-3 right-3 text-3xl font-black text-[#ff3388]/10 group-hover:text-[#ff3388]/20 transition-colors">03</span>
            <div className="w-10 h-10 rounded-xl bg-[#ff3388]/10 flex items-center justify-center text-pink-400">
              <Video className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-white text-base">3. Attend Live</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Attend live Zoom workouts with fun music, active coaching, and form correction.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-card p-6 rounded-3xl space-y-4 relative overflow-hidden group hover:border-purple-500/30">
            <span className="absolute top-3 right-3 text-3xl font-black text-purple-500/10 group-hover:text-purple-500/20 transition-colors">04</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Flame className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-white text-base">4. Track Progress</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Upload meal photos, log weight, and get expert adjustments weekly.</p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="glass-card p-6 rounded-3xl space-y-4 relative overflow-hidden group hover:border-[#ff3388]/30">
            <span className="absolute top-3 right-3 text-3xl font-black text-[#ff3388]/10 group-hover:text-[#ff3388]/20 transition-colors">05</span>
            <div className="w-10 h-10 rounded-xl bg-[#ff3388]/10 flex items-center justify-center text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="font-bold text-white text-base">5. Transform</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Lose weight, regain stamina, manage PCOS, and feel highly energized!</p>
            </div>
          </div>

        </div>

      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-6 md:px-12 bg-slate-950/40 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#ff3388] uppercase block">GOT SYSTEM QUESTIONS?</span>
            <h2 className="text-3xl font-extrabold tracking-tight">
              ❓ Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Everything you need to know about our batch structures, extensions, diets, and refund policies.
            </p>
          </div>

          {/* Accordion FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl overflow-hidden border-white/5 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 font-bold text-white flex justify-between items-center hover:bg-white/5 transition-colors gap-4"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#ff3388] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 bg-black/25">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-28 px-6 md:px-12 relative overflow-hidden text-center bg-slate-950">
        
        {/* Glow Spheres */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ff3388]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3388]/20 border border-[#ff3388]/30 text-[#f472b6] text-xs font-black tracking-widest uppercase">
            ⚡ START TODAY — NO GIMMICKS
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            “Your transformation journey <br className="hidden sm:inline" />
            starts <span className="text-transparent bg-clip-text bg-gradient-pink-purple">right here, today</span> 💖”
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Stop waiting for the perfect day or the perfect hour. Secure your flexible live batch slot, get Dt. Shruti's custom diet setup, and work out with our amazing sisterhood!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pricing" 
              className="px-10 py-5 rounded-full bg-gradient-pink-purple text-base font-black text-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,51,136,0.5)] hover:shadow-[0_0_50px_rgba(255,51,136,0.7)]"
            >
              Join 30-Day Challenge Now
            </a>
            <a 
              href="https://wa.me/919999999999?text=Hi%20OFFFIT!%20I%2527m%20ready%20to%20start%20my%20weight%20loss%20journey%20today." 
              className="px-10 py-5 rounded-full bg-slate-900 border border-white/10 hover:bg-slate-800 text-base font-black text-white hover:border-pink-500/50 transition-all flex items-center justify-center gap-2"
            >
              Start Today <Sparkles className="w-5 h-5 text-[#ff3388]" />
            </a>
          </div>

          <p className="text-[#f472b6] text-xs sm:text-sm font-extrabold">
            “Stop waiting for the perfect time — start now ✨”
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 border-t border-white/5 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12">
          
          {/* Col 1 Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-pink-purple flex items-center justify-center shadow-lg">
                <span className="font-extrabold text-lg text-white">OF</span>
              </div>
              <span className="text-xl font-black text-white">OFF<span className="text-[#ff3388]">FIT</span></span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              India's leading women-only online live fitness batch family. Regain strength, lose fat, and boost your energy through supportive online Zoom classes.
            </p>
            <span className="block text-xs font-black text-slate-300">
              🌐 Website: <a href="https://zyrax.in" target="_blank" rel="noopener noreferrer" className="text-[#ff3388] hover:underline">zyrax.in</a>
            </span>
          </div>

          {/* Col 2 Quick Links */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest text-slate-300">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-[#ff3388] transition-colors">Supportive Batches</a></li>
              <li><a href="#program" className="hover:text-[#ff3388] transition-colors">Program Details</a></li>
              <li><a href="#timings" className="hover:text-[#ff3388] transition-colors">Live Slots</a></li>
              <li><a href="#pricing" className="hover:text-[#ff3388] transition-colors">Premium Pricing</a></li>
            </ul>
          </div>

          {/* Col 3 Timings */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest text-slate-300">Active Batches</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>🌅 Morning: 6 AM | 7 AM | 8 AM | 9 AM | 10 AM</li>
              <li>🌙 Evening: 5 PM | 6 PM | 7 PM | 8 PM | 9 PM | 10 PM</li>
              <li className="text-[#ff3388] font-bold">✨ Choose any slot dynamically</li>
            </ul>
          </div>

          {/* Col 4 Contact */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-widest text-slate-300">Connect</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>📧 Support: help@offfit.in</li>
              <li>📞 Call/WhatsApp: +91 99999 99999</li>
              <li>🏢 Studio: Cyber City, Gurugram, India</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <span>© 2026 OFFFIT Online. All Rights Reserved. Crafted with love for Indian Women.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Cancellation & Pauses</a>
          </div>
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP CHAT BUTTON --- */}
      <a 
        href="https://wa.me/919999999999?text=Hi%20OFFFIT!%20I%20want%20to%20know%20more%20about%20the%20live%20Zumba%20and%20Weight%20Loss%20Challenge." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] hover:scale-110 transition-all group flex items-center gap-2 duration-300"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 font-extrabold text-xs tracking-wider uppercase whitespace-nowrap">
          Chat With Us
        </span>
      </a>

    </div>
  );
}

// --- Dynamic Helper Icons ---
function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function XCircleIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
