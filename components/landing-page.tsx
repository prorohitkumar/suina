"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Twitter, MessageCircle, Rocket, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const coinData = [
  { name: 'SUINA', value: 100, color: '#FF6B6B' },
  { name: 'SUI', value: 80, color: '#4ECDC4' },
  { name: 'SOLANA', value: 60, color: '#45B7D1' },
  { name: 'ETH', value: 40, color: '#5D5D5D' },
  { name: 'BTC', value: 20, color: '#F7B731' },
]

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
}

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } }
}

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
  },
}

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Navbar */}
      <motion.nav 
        className="flex items-center justify-between px-6 py-4 bg-opacity-50 bg-black"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex items-center">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suina-16cVoMTwfaUSlMMX1GsYrlcu5ngJOG.jpg" 
            alt="SUINA Logo" 
            width={50} 
            height={50} 
            className="mr-2 rounded-full"
          />
          <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">SUINA</span>
        </div>
        <div className="flex items-center space-x-4">
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={pulseAnimation}
          >
            <Button variant="outline" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none px-6 py-3 text-lg">
              <Rocket className="mr-2 h-5 w-5" />
              <span className="relative">
                <span className="absolute -inset-0.5 blur bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></span>
                <span className="relative">Launching Soon</span>
              </span>
            </Button>
          </motion.div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Follow us on Twitter</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Join our Telegram</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Check our GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <div>
            {/* Mobile "Launching Soon" button */}
            <motion.div
              className="md:hidden mb-8" // Show on mobile, hide on medium screens and up
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={pulseAnimation}
            >
              <Button variant="outline" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none px-6 py-3 text-lg">
                <Rocket className="mr-2 h-5 w-5" />
                <span className="relative">
                  <span className="absolute -inset-0.5 blur bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></span>
                  <span className="relative">Launching Soon</span>
                </span>
              </Button>
            </motion.div>
            <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Welcome to SUINA
            </h1>
            <p className="text-2xl mb-8 text-gray-300">
              The next big thing in the crypto world. Join us on this exciting journey to the moon! 🚀🐷
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transform transition hover:scale-105">
              Join the SUINA Revolution
            </Button>
          </div>
          <motion.div 
            className="relative"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/oiggy-FeJpWMiM9s7c9tv3xHIXo1KZHqVWW4.jpg" 
              alt="SUINA Mascot" 
              width={400} 
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Coin Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Card className="mt-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">SUINA vs Other Coins</CardTitle>
              <CardDescription className="text-xl text-gray-300">Watch SUINA skyrocket past the competition!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={coinData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
                    <XAxis dataKey="name" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <RechartsTooltip
                      contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#ffffff', borderRadius: '8px', padding: '10px' }}
                      cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="value">
                      {coinData.map((entry, index) => (
                        <motion.rect 
                          key={`cell-${index}`} 
                          fill={entry.name === 'SUINA' ? 'red' : `url(#colorGradient${index})`}
                          initial={{ height: 0, y: 400 }}
                          animate={{ height: entry.value * 3, y: 400 - entry.value * 3 }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        />
                      ))}
                    </Bar>
                    {coinData.map((entry, index) => (
                      <defs key={`gradient-${index}`}>
                        <linearGradient id={`colorGradient${index}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={entry.color} stopOpacity={0.8}/>
                          <stop offset="95%" stopColor={entry.color} stopOpacity={0.3}/>
                        </linearGradient>
                      </defs>
                    ))}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Why SUINA is Better */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={fadeIn} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2 text-green-400">🚀</span>
              Faster Transactions
            </h3>
            <p>SUINA processes transactions at lightning speed, leaving other coins in the dust.</p>
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/go1-hHr0DdV4XlUgSV3ecG7RNa7zWhC6Nh.jpg" alt="Fast Transactions" width={200} height={200} className="mt-4 mx-auto rounded-lg" />
          </motion.div>
          <motion.div variants={fadeIn} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2 text-yellow-400">💰</span>
              Lower Fees
            </h3>
            <p>Say goodbye to hefty transaction fees. SUINA keeps more money in your pocket.</p>
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og3-NtuihKE4fnPnBta6tjCYnYR6uG0aXv.jpg" alt="Lower Fees" width={200} height={200} className="mt-4 mx-auto rounded-lg" />
          </motion.div>
          <motion.div variants={fadeIn} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2 text-blue-400">👥</span>
              Community Driven
            </h3>
            <p>Join the SUINA family and be part of a revolution in crypto.</p>
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og2-iWO1vdLO1W68LgUErYLjEFjSnDxgLz.jpg" alt="Community" width={200} height={200} className="mt-4 mx-auto rounded-lg" />
          </motion.div>
        </motion.div>

        {/* SUINA to the Moon */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">SUINA to the Moon! 🚀🌕</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-[400px]">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moon-4TuI60JAv57TXlbyE5h4R2RYL2iX1s.jpg" 
                  alt="SUINA to the Moon" 
                  layout="fill" 
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-opacity-50 bg-black py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 SUINA. All rights reserved. To the moon! 🚀🐷</p>
        </div>
      </footer>
    </div>
  )
}