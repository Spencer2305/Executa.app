"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Bot, 
  Upload, 
  Zap, 
  Globe, 
  Shield, 
  BarChart3,
  Check,
  ArrowRight,
  MessageSquare,
  Brain,
  Rocket,
  Sparkles,
  Star,
  Heart,
  Users,
  Play,
  Plug,
  RefreshCw,
  Database,
  Cloud,
  MessageCircle,
  Settings
} from "lucide-react";

// Professional animation variants
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const staggerChild = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0
  }
};



export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    // Set initial window size
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', updateWindowSize);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section - Clean and Centered */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Clean background */}
        <div className="absolute inset-0">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          {/* Static purple circles with mouse-reactive movement */}
          {windowSize.width > 0 && (
            <>
              <motion.div
                className="absolute top-1/4 left-1/3 w-3 h-3 bg-purple-500/30 rounded-full blur-sm pointer-events-none"
                animate={{
                  x: (mousePosition.x - windowSize.width / 2) * 0.02,
                  y: (mousePosition.y - windowSize.height / 2) * 0.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              />
              <motion.div
                className="absolute top-3/4 right-1/4 w-2 h-2 bg-brand-600/40 rounded-full blur-sm pointer-events-none"
                animate={{
                  x: (mousePosition.x - windowSize.width / 2) * -0.015,
                  y: (mousePosition.y - windowSize.height / 2) * 0.015,
                }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 25,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-600/50 rounded-full pointer-events-none"
                animate={{
                  x: (mousePosition.x - windowSize.width / 2) * 0.01,
                  y: (mousePosition.y - windowSize.height / 2) * -0.01,
                }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 30,
                }}
              />
              <motion.div
                className="absolute top-1/6 right-1/3 w-2.5 h-2.5 bg-purple-400/25 rounded-full blur-sm pointer-events-none"
                animate={{
                  x: (mousePosition.x - windowSize.width / 2) * -0.025,
                  y: (mousePosition.y - windowSize.height / 2) * -0.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 20,
                }}
              />
            </>
          )}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Centered Content */}
            <motion.div className="space-y-8" variants={staggerChild}>
              <motion.div 
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium shadow-lg font-heebo"
                variants={staggerChild}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse shadow-lg shadow-green-400/50"></div>
                  <Bot className="mr-2 h-4 w-4 text-slate-700" />
                  Next-Generation AI Platform
                </div>
              </motion.div>
            
              {/* Professional headline */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-kanit font-bold tracking-tight leading-tight uppercase"
                variants={staggerChild}
              >
                <span className="block text-slate-900 mb-2">
                  Deploy Powerful
                </span>
                <span className="block bg-gradient-to-r from-purple-600 via-brand-600 to-purple-800 bg-clip-text text-transparent">
                  AI Assistants
                </span>
                <span className="block text-slate-700 text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-2">
                  in Minutes, Not Months
                </span>
              </motion.h1>
              
              {/* Professional description */}
              <motion.p 
                className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-heebo"
                variants={staggerChild}
              >
                Create intelligent AI solutions that transform your business. From customer support chatbots to knowledge assistants and onboarding guides - deploy any AI assistant that learns from your data.
              </motion.p>
          
              {/* Professional CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                variants={staggerChild}
              >
                <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 font-heebo">
                  <Link href="/waitlist">
                    <Rocket className="mr-2 h-5 w-5" />
                    Join Waitlist
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-brand-300 text-brand-700 hover:bg-brand-50 hover:text-brand-700 px-8 py-4 text-lg font-semibold font-heebo">
                  <Link href="#demo">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </Button>
              </motion.div>
          
              {/* Professional trust indicators */}
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-slate-500"
                variants={staggerChild}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>99.9% Uptime</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <motion.section 
        id="features" 
        className="py-16 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        variants={staggerContainer}
      >
        {/* Professional background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-200/15 to-brand-200/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-brand-200/10 to-purple-200/15 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-20"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-kanit font-bold tracking-tight mb-6 uppercase"
              style={{ color: "#6400fe" }}
            >
              How It Works
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
            >
              From upload to deployment in three simple steps. Build powerful AI assistants in minutes, not months.
            </motion.p>
          </motion.div>
          
          {/* Vertical Timeline */}
          <motion.div 
            className="max-w-4xl mx-auto relative"
            variants={staggerContainer}
          >
            {/* Central timeline line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600 rounded-full"
              style={{ height: "calc(100% - 80px)", top: "40px" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Timeline Steps */}
            {[
              {
                step: "01",
                icon: Upload,
                title: "Upload Your Knowledge",
                description: "Simply drag and drop your documents, PDFs, FAQs, or paste your content. Our AI instantly learns from your materials and transforms them into an intelligent knowledge base.",
                features: ["Multiple file formats", "Bulk upload support", "Auto-processing", "Instant training"],
                color: "from-blue-500 to-blue-600",
                delay: 0.2
              },
              {
                step: "02", 
                icon: Plug,
                title: "Connect Your Tools",
                description: "Seamlessly integrate with your existing workflow. Connect Gmail, HubSpot, Monday.com, Shopify, and 50+ other platforms to supercharge your AI assistant.",
                features: ["Gmail integration", "CRM connections", "E-commerce platforms", "Project management tools"],
                color: "from-green-500 to-green-600",
                delay: 0.4
              },
              {
                step: "03",
                icon: Globe,
                title: "Deploy Anywhere",
                description: "Launch your AI assistant in seconds with a simple embed code or iframe. Add it to your website, customer portal, or any platform where your users need instant support.",
                features: ["One-click embed", "Custom branding", "Mobile responsive", "Instant activation"],
                color: "from-purple-500 to-purple-600",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerChild}
                className="relative flex items-center mb-16 last:mb-0"
              >
                {/* Step indicator */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: item.delay, duration: 0.6, type: "spring", stiffness: 200 }}
                >
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl border-4 border-white`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Step number */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: item.delay + 0.3, type: "spring" }}
                  >
                    <span className="text-xs font-bold text-gray-700">{item.step}</span>
                  </motion.div>
                </motion.div>

                {/* Content card - alternating sides */}
                <motion.div
                  className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -50 : 50,
                    y: 30
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    y: 0
                  }}
                  transition={{ delay: item.delay + 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      <motion.h3 
                        className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Feature bullets */}
                      <div className="grid grid-cols-2 gap-2">
                        {item.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-500"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: item.delay + 0.4 + (featureIndex * 0.1) }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mr-2 flex-shrink-0`} />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Connecting line animation */}
                <motion.div
                  className={`absolute top-10 ${index % 2 === 0 ? 'left-1/2 ml-10' : 'right-1/2 mr-10'} w-8 h-0.5 bg-gradient-to-r ${item.color} opacity-60`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: item.delay + 0.5, duration: 0.4 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action at the bottom */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 mb-6">Ready to build your AI assistant?</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              <Link href="/waitlist">
                <Rocket className="mr-2 h-5 w-5" />
                Start Building Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>



      {/* Integrations Section */}
      <motion.section 
        className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-kanit font-bold tracking-tight text-slate-900 mb-4 sm:mb-6 uppercase"
            >
              Seamless 
              <motion.span 
                className="block bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent"
              >
                Integrations
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto px-4"
            >
              Connect with your favorite tools and platforms. Our AI assistant integrates seamlessly 
              with your existing workflow to maximize productivity.
            </motion.p>
          </motion.div>

          {/* Integration Hub Graphic */}
          <motion.div 
            className="relative max-w-7xl mx-auto my-16 sm:my-20 md:my-24 lg:my-32 px-4"
            variants={fadeInUp}
          >
            <div className="relative w-full h-28 sm:h-32 md:h-36 lg:h-40">
              {/* Horizontal Connection Line */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-5xl h-1 bg-gradient-to-r from-blue-500 via-brand-500 to-purple-500 rounded-full opacity-30"></div>
              </div>

              {/* Integration Service Nodes Container */}
              <div className="flex items-center justify-center h-full">
                <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 w-full max-w-6xl">
                  {/* Left Side Icons */}
                  {[
                    { name: 'Analytics', icon: BarChart3, color: 'from-blue-500 to-blue-600', delay: 0.3 },
                    { name: 'CRM', icon: Users, color: 'from-orange-500 to-red-500', delay: 0.4 },
                    { name: 'Database', icon: Database, color: 'from-emerald-500 to-green-600', delay: 0.5 }
                  ].map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.name}
                        className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${service.color} rounded-full shadow-xl flex items-center justify-center border-2 border-white/20 backdrop-blur-sm z-20 group flex-shrink-0`}
                        initial={{ scale: 0, opacity: 0, x: -50 }}
                        whileInView={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{ delay: service.delay, type: "spring", stiffness: 200, damping: 15 }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white drop-shadow-lg" />
                        
                        {/* Enhanced Tooltip */}
                        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-30 border border-white/10">
                          {service.name}
                          {/* Tooltip arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900/95"></div>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Central Hub */}
                  <motion.div
                    className="relative z-30 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 bg-gradient-to-br from-brand-500 via-brand-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl flex-shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                  >
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-22 xl:h-22 bg-white rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11 text-brand-600" />
                    </div>
                  </motion.div>

                  {/* Right Side Icons */}
                  {[
                    { name: 'Storage', icon: Cloud, color: 'from-cyan-500 to-blue-500', delay: 0.6 },
                    { name: 'Communication', icon: MessageCircle, color: 'from-purple-500 to-pink-500', delay: 0.7 },
                    { name: 'Automation', icon: Settings, color: 'from-gray-600 to-gray-700', delay: 0.8 }
                  ].map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.name}
                        className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${service.color} rounded-full shadow-xl flex items-center justify-center border-2 border-white/20 backdrop-blur-sm z-20 group flex-shrink-0`}
                        initial={{ scale: 0, opacity: 0, x: 50 }}
                        whileInView={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{ delay: service.delay, type: "spring", stiffness: 200, damping: 15 }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <IconComponent className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white drop-shadow-lg" />
                        
                        {/* Enhanced Tooltip */}
                        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-30 border border-white/10">
                          {service.name}
                          {/* Tooltip arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900/95"></div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Integration Features */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4"
            variants={staggerContainer}
          >
            {[
              {
                icon: Plug,
                title: "One-Click Setup",
                description: "Connect your tools in seconds with our pre-built integrations"
              },
              {
                icon: RefreshCw,
                title: "Real-Time Sync",
                description: "Data flows seamlessly between platforms in real-time"
              },
              {
                icon: Shield,
                title: "Secure Connections",
                description: "Enterprise-grade security for all your integrations"
              }
            ].map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerChild}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 p-3 sm:p-4 group-hover:shadow-xl group-hover:shadow-brand-500/25 transition-all duration-300 shadow-lg">
                      <FeatureIcon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

       {/* Professional Stats Section */}
      <motion.section 
         className="py-16 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
         viewport={{ once: true }}
        variants={staggerContainer}
      >
         <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100"></div>
         
         <div className="container mx-auto px-4 relative z-10">
          <motion.div 
             className="mx-auto max-w-4xl text-center mb-20"
            variants={fadeInUp}
          >
             <h2 className="text-3xl sm:text-4xl md:text-6xl font-kanit font-bold tracking-tight text-slate-900 mb-6 uppercase">
               Trusted by Industry Leaders
               <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent block">
                 Worldwide
               </span>
            </h2>
             <p className="text-xl text-slate-600 leading-relaxed">
               Real performance metrics from companies transforming their customer experience
            </p>
          </motion.div>
          
          <motion.div 
             className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
            variants={staggerContainer}
          >
            {[
              {
                 value: "10M+",
                 label: "Messages Processed",
                 description: "Intelligent conversations handled",
                 icon: MessageSquare,
                 gradient: "from-brand-500 to-brand-600",
                 delay: 0
               },
               {
                 value: "98.7%",
                 label: "Accuracy Rate",
                 description: "Precise answers delivered",
                icon: Brain,
                 gradient: "from-brand-500 to-brand-600",
                 delay: 0.2
              },
              {
                 value: "2.3s",
                 label: "Avg Response Time",
                 description: "Lightning-fast interactions",
                icon: Zap,
                 gradient: "from-brand-500 to-brand-600",
                 delay: 0.4
              },
              {
                 value: "5,000+",
                 label: "Active Companies",
                 description: "Trusted worldwide",
                icon: Globe,
                 gradient: "from-brand-500 to-brand-600",
                 delay: 0.6
               }
             ].map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerChild}
                   className="group h-full"
                >
                   <motion.div className="h-full">
                     <Card className="relative border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-500 rounded-2xl overflow-hidden group-hover:shadow-xl group-hover:shadow-brand-500/10 h-full">
                       <CardContent className="p-6 text-center relative z-10 flex flex-col justify-center h-full min-h-[280px]">
                         <motion.div 
                           className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} p-4 mb-6 mx-auto shadow-lg`}
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.3 }}
                         >
                           <StatIcon className="h-8 w-8 text-white" />
                         </motion.div>
                         
                        <motion.div 
                           className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           transition={{ delay: stat.delay, type: "spring" }}
                         >
                           {stat.value}
                        </motion.div>
                         
                         <h4 className="text-xl font-semibold text-slate-900 mb-2">{stat.label}</h4>
                         <p className="text-slate-600 text-sm">{stat.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

       {/* Professional Demo Section */}
       <motion.section 
         id="demo"
         className="py-32 bg-white relative overflow-hidden"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-100px" }}
         variants={staggerContainer}
       >
         <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50"></div>
         
         <div className="container mx-auto px-4 relative z-10">
           <motion.div 
             className="mx-auto max-w-4xl text-center mb-20"
             variants={fadeInUp}
           >
             <motion.h2 
               className="text-4xl md:text-6xl font-kanit font-bold tracking-tight mb-6 uppercase"
               style={{
                 background: "linear-gradient(135deg, #1e40af 0%, #6400fe 100%)",
                 WebkitBackgroundClip: "text",
                 WebkitTextFillColor: "transparent",
                 backgroundClip: "text",
               }}
             >
               Try It Yourself
             </motion.h2>
             <p className="text-xl text-slate-600 leading-relaxed">
               Experience our platform in real-time. Ask our AI assistant anything about Executa!
             </p>
           </motion.div>
           
           <motion.div 
             className="max-w-4xl mx-auto"
             variants={staggerChild}
           >
             <motion.div
               className="relative rounded-2xl shadow-xl border border-slate-200 overflow-hidden bg-white"
               whileHover={{ scale: 1.01 }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
             >
               {/* Header */}
               <div className="relative flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
                 <div className="flex items-center space-x-3">
                   <motion.div 
                     className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl flex items-center justify-center shadow-lg"
                     animate={{ rotate: [0, 5, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     <Bot className="w-5 h-5 text-white" />
                   </motion.div>
                   <div>
                     <div className="font-semibold text-slate-900">Executa AI Assistant</div>
                     <div className="text-xs text-green-600 flex items-center">
                       <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                       Online & Ready
                     </div>
                   </div>
                 </div>
                 <motion.div 
                   className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full"
                   animate={{ opacity: [0.7, 1, 0.7] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 >
                   Live Demo
                 </motion.div>
               </div>
               
               {/* Interactive Chat */}
               <div className="p-8 space-y-6 h-96 overflow-y-auto relative">
                 <motion.div 
                   className="flex items-start space-x-3"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 }}
                 >
                   <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <Users className="w-4 h-4 text-gray-600" />
                   </div>
                   <div className="flex-1 bg-gray-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                     <p className="text-sm text-gray-700">What makes Executa different from other AI chatbot platforms?</p>
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   className="flex items-start space-x-3 justify-end"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 1 }}
                 >
                   <div className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl rounded-tr-sm p-4 max-w-md">
                     <p className="text-sm">Great question! Executa stands out in several key ways:</p>
                     <ul className="text-sm mt-2 space-y-1">
                       <li>• 60-second deployment vs hours/days with competitors</li>
                       <li>• Context-aware conversations, not just Q&A</li>
                       <li>• Enterprise security with startup simplicity</li>
                       <li>• Advanced analytics to improve your content</li>
                     </ul>
                   </div>
                   <motion.div 
                     className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0"
                     animate={{ rotate: [0, 360] }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                   >
                     <Bot className="w-4 h-4 text-white" />
                   </motion.div>
                 </motion.div>
                 
                 <motion.div 
                   className="flex items-start space-x-3"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 1.5 }}
                 >
                   <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                     <Users className="w-4 h-4 text-gray-600" />
                   </div>
                   <div className="flex-1 bg-gray-50 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                     <p className="text-sm text-gray-700">How accurate are the responses?</p>
                   </div>
                 </motion.div>
                 
                 <motion.div 
                   className="flex items-start space-x-3 justify-end"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 2 }}
                 >
                   <div className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl rounded-tr-sm p-4 max-w-md">
                     <p className="text-sm">We maintain a 98.7% accuracy rate! Our AI is powered by GPT-4 and fine-tuned specifically for your content. Plus, you can train it further with feedback to make it even more accurate for your specific use case. 🎯</p>
                   </div>
                   <motion.div 
                     className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0"
                     animate={{ rotate: [0, 360] }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                   >
                     <Bot className="w-4 h-4 text-white" />
                   </motion.div>
                 </motion.div>
                 
                 {/* Try it prompt */}
                 <motion.div 
                   className="text-center py-4"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 2.5 }}
                 >
                   <motion.div
                     className="inline-flex items-center text-sm text-gray-500 bg-blue-50 px-4 py-2 rounded-full border border-blue-200"
                     animate={{ scale: [1, 1.05, 1] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                     Try asking: "How much does it cost?" or "Can I integrate with my existing tools?"
                   </motion.div>
                 </motion.div>
               </div>
               
               {/* Input area */}
               <div className="p-6 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
                 <motion.div 
                   className="flex items-center space-x-3"
                   whileHover={{ scale: 1.01 }}
                 >
                   <input 
                     type="text" 
                     placeholder="Ask me anything about Executa..."
                     className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                   />
                   <motion.button 
                     className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-200"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     <ArrowRight className="w-4 h-4" />
                   </motion.button>
                 </motion.div>
                 <p className="text-xs text-gray-500 mt-2 text-center">
                   This is a live demo connected to our actual AI assistant!
                 </p>
               </div>
             </motion.div>
           </motion.div>
         </div>
       </motion.section>

       {/* Professional Pricing Section */}
      <motion.section 
        id="pricing"
        className="py-32 bg-slate-50 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mx-auto max-w-3xl text-center mb-20"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-kanit font-bold tracking-tight mb-6 uppercase"
              style={{
                background: "linear-gradient(135deg, #4f46e5 0%, #6400fe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Choose Your Plan
            </motion.h2>
            <p className="text-xl text-slate-600">
              Flexible pricing options designed to scale with your business needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto pt-24"
            variants={staggerContainer}
          >
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Perfect for individuals and small teams getting started",
                features: [
                  "1 AI assistant",
                  "100 conversations/month",
                  "5MB knowledge storage",
                  "Email support",
                  "Basic analytics"
                ],
                cta: "Join Waitlist",
                href: "/waitlist",
                gradient: "from-brand-500 to-brand-600"
              },
              {
                name: "Professional",
                price: "$29",
                description: "For growing businesses ready to scale their operations",
                features: [
                  "5 AI assistants",
                  "2,000 conversations/month",
                  "1GB knowledge storage",
                  "Priority support",
                  "Advanced analytics",
                  "Custom branding",
                  "API access"
                ],
                cta: "Join Waitlist",
                href: "/waitlist",
                popular: true,
                gradient: "from-brand-500 to-brand-600"
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations with advanced requirements",
                features: [
                  "Unlimited assistants",
                  "Unlimited conversations",
                  "Unlimited storage",
                  "24/7 dedicated support",
                  "SSO & SAML",
                  "On-premise deployment",
                  "Custom integrations",
                  "SLA guarantee"
                ],
                cta: "Contact Sales",
                href: "/contact",
                gradient: "from-brand-500 to-brand-600"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={staggerChild}
                className="group"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -4
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Card 
                    className={`relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-full overflow-visible bg-white border border-slate-200 ${plan.popular ? 'ring-2 ring-brand-500/50 scale-105' : ''}`}
                  >
                    <CardHeader className="text-center pb-8 relative z-10">
                      {plan.popular && (
                        <motion.div 
                          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 -mt-8"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 15 }}
                        >
                          <div className={`bg-gradient-to-r ${plan.gradient} text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg border-2 border-white whitespace-nowrap`}>
                            Most Popular
                          </div>
                        </motion.div>
                      )}
                      <CardTitle className="text-2xl mb-4 text-slate-900">{plan.name}</CardTitle>
                      <motion.div 
                        className="mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                          {plan.price}
                        </span>
                        {plan.price !== "Free" && plan.price !== "Custom" && (
                          <span className="text-slate-500">/month</span>
                        )}
                      </motion.div>
                      <CardDescription className="text-base text-slate-600">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * featureIndex }}
                          >
                            <Check className="h-5 w-5 text-brand-600 mr-3 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button asChild className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white hover:text-white border-0 rounded-xl py-6 text-lg font-semibold`}>
                          <Link href={plan.href}>
                            <motion.div
                              className="flex items-center justify-center"
                            >
                              {plan.cta}
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </motion.div>
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Professional CTA Section */}
      <motion.section 
         className="py-24 bg-slate-50 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
         variants={staggerContainer}
       >
         <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100"></div>
         
         <div className="container mx-auto px-4 relative z-10">
           <motion.div 
             className="mx-auto max-w-5xl text-center space-y-12"
        variants={fadeInUp}
      >
             <div className="space-y-6">
              <motion.h2 
                 className="text-4xl md:text-6xl lg:text-7xl font-kanit font-bold tracking-tight text-slate-900 leading-tight uppercase"
               >
                 Ready to Build 
                 <motion.span 
                   className="block bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent"
                 >
                   your AI solution?
                 </motion.span>
              </motion.h2>
               
              <motion.p 
                 className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
               >
                 Join thousands of companies who've already transformed their customer experience. 
                 Your AI assistant is just 60 seconds away.
              </motion.p>
            </div>
            
            <motion.div 
               className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={staggerChild}
            >
              <motion.div
                 className="relative group"
                 whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               >
                 <Button asChild size="lg" className="relative bg-brand-600 hover:bg-brand-700 text-white px-10 py-8 text-xl font-bold rounded-xl shadow-xl">
                  <Link href="/waitlist">
                     <motion.div
                       className="flex items-center"
                     >
                       <Rocket className="mr-3 h-6 w-6" />
                       Join Waitlist
                     </motion.div>
                  </Link>
                </Button>
              </motion.div>
               
              <motion.div
                 whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               >
                 <Button asChild variant="outline" size="lg" className="border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-10 py-8 text-xl font-bold rounded-xl bg-white">
                   <Link href="#demo">
                     <Play className="mr-3 h-6 w-6" />
                     Try Live Demo
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
             
             <motion.div 
               className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
               variants={staggerContainer}
             >
               {[
                 {
                   icon: Zap,
                   title: "60 Second Setup",
                   description: "Fastest deployment in the industry",
                   color: "from-brand-500 to-brand-600"
                 },
                 {
                   icon: Shield,
                   title: "Enterprise Security",
                   description: "SOC 2 compliant & encrypted",
                   color: "from-brand-500 to-brand-600"
                 },
                 {
                   icon: Heart,
                   title: "24/7 Support",
                   description: "We're here when you need us",
                   color: "from-brand-500 to-brand-600"
                 }
               ].map((feature, index) => (
                 <motion.div
                   key={index}
                   variants={staggerChild}
                   className="text-center group"
                 >
                   <motion.div
                     whileHover={{ scale: 1.05 }}
                     transition={{ type: "spring", stiffness: 400 }}
                   >
                     <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${feature.color} p-4 group-hover:shadow-xl group-hover:shadow-brand-500/25 transition-all duration-300 shadow-lg`}>
                       <feature.icon className="w-8 h-8 text-white" />
          </div>
                   </motion.div>
                   <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                   <p className="text-slate-600 text-sm">{feature.description}</p>
                 </motion.div>
               ))}
             </motion.div>
           </motion.div>
        </div>
      </motion.section>

      {/* Add CSS for additional animations */}
      <style jsx global>{`
        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .hover-lift {
          transition: transform 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
                 .animate-shimmer {
           animation: shimmer 2s infinite;
         }
       `}</style>
    </main>
  );
}
