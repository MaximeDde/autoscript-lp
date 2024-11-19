"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, UserPlus, Mic, FileCheck, SwatchBook, FileLock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function LandingPage() {
  const [typingFinished, setTypingFinished] = useState(false)

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-20 flex items-center">
        {/* Logo */}
        <div className="w-[200px] h-[50px] relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RjKUbKdRyBKoujj7p4j2S9oW7G23JT.png"
            alt="AutoScript Logo"
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
          />
        </div>
        {/* Navigation */}
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#integration" className="text-sm font-medium hover:underline underline-offset-4">
            Intégrer notre solution
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden">
          {/* Background Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#149ea4] to-[#1ac7ce] animate-gradient-x"
            style={{
              backgroundSize: "200% 200%",
            }}
          />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white m-0">
                <span className="inline-block animate-typing-line1">
                  Nous résolvons les problèmes
                </span>
                <br />
                <span className="inline-block animate-typing-line2">
                  des entreprises françaises
                </span>
                <br />
                <span className="inline-block animate-typing-line3">
                  avec des systèmes d'IA
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-100 md:text-xl m-0">
                Simple d'utilisation. Facilite votre travail au quotidien. Personnalisé à votre entreprise.
              </p>
              <div className="space-x-4">
                <Button
                  variant="secondary"
                  size="lg"
                  as="a"
                  href="https://calendly.com/contact-autoscript/decouverte-d-autoscript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#149ea4] hover:bg-gray-100 transition-colors duration-300"
                >
                  Demander une démo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0}
              >
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  style={{ color: '#149ea4' }}
                >
                  Débloquons-leur du temps
                </h2>
                <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl">
                  Des processus chronophages
                </p>
                <p className="font-bold text-gray-900 md:text-xl lg:text-base xl:text-xl">
                  Consommatrices de temps et d'énergie.
                </p>
                <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl">
                  Alors que nous devrions nous concentrer sur le plus important : le soin du patient.
                </p>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={1}
              >
                <Image
                  src="./ai-system.png"
                  alt="Système d'IAs échangeant les unes avec les autres"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
              style={{ color: '#149ea4' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              Gagnez du temps en automatisant la création de vos comptes-rendus
            </motion.h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {/* Feature Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={1}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <Clock className="w-12 h-12" style={{ color: '#149ea4' }} />
                    <CardTitle className="text-[#149ea4] text-xl">4 fois moins de temps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Votre compte-rendu est automatiquement généré une fois l'enregistrement terminé. Vous n'avez plus qu'à le valider !</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={2}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <SwatchBook className="w-12 h-12" style={{ color: '#149ea4' }} />
                    <CardTitle className="text-[#149ea4] text-xl">Facile à intégrer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Nous créons votre espace.</p>
                    <p>Nous le configurons.</p>
                    <p>Vous n'avez plus qu'à l'utiliser.</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={3}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <FileLock className="w-12 h-12" style={{ color: '#149ea4' }} />
                    <CardTitle className="text-[#149ea4] text-xl">Sécurité des données</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Vos données sont hébergés dans des environnements certifiés SecNumCloud.</p>
                    <p>Elles ne sont accessibles qu'à votre équipe.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <motion.div className="space-x-4 text-center mt-12">
              <Button
                variant="secondary"
                size="lg"
                as="a"
                href="https://calendly.com/contact-autoscript/decouverte-d-autoscript"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#149ea4] text-white hover:bg-[#1ac7ce] transition-colors duration-300"
              >
                Demander une démo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Integration Section */}
        <section id="integration" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
              style={{ color: '#149ea4' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              Comment intégrer notre solution ?
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <motion.div
                  className="flex items-center space-x-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={1}
                >
                  <div className="flex-shrink-0">
                    <UserPlus className="w-10 h-10 text-[#149ea4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Créez votre compte sur AutoScript</h3>
                    <p className="text-gray-600">Commencez votre parcours avec AutoScript en quelques clics.</p>
                  </div>
                </motion.div>
                <div className="w-px h-12 bg-gray-300 mx-auto"></div>
                <motion.div
                  className="flex items-center space-x-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={2}
                >
                  <div className="flex-shrink-0">
                    <Mic className="w-10 h-10 text-[#149ea4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Enregistrez votre compte-rendu, ou votre consultation</h3>
                    <p className="text-gray-600">
                      Utilisez notre outil d'enregistrement intégré pour capturer vos observations.
                    </p>
                  </div>
                </motion.div>
                <div className="w-px h-12 bg-gray-300 mx-auto"></div>
                <motion.div
                  className="flex items-center space-x-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={3}
                >
                  <div className="flex-shrink-0">
                    <FileCheck className="w-10 h-10 text-[#149ea4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Recevez votre compte-rendu en quelques minutes, prêt à être envoyé !
                    </h3>
                    <p className="text-gray-600">
                      Notre IA traite rapidement vos enregistrements pour produire des comptes-rendus précis.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.p
              className="text-center mt-12 text-lg text-xl font-semibold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={4}
            >
              Intégrer notre solution est simple, rapide, et vous fait économiser du temps dès la première utilisation.
            </motion.p>
          </div>
          <div className="space-x-4 text-center mt-12">
          <Button
            variant="secondary"
            size="lg"
            as="a"
            href="https://calendly.com/contact-autoscript/decouverte-d-autoscript"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#149ea4] text-white hover:bg-[#1ac7ce] transition-colors duration-300"
          >
            Demander une démo
          </Button>

            </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32"
          style={{ backgroundColor: '#149ea4' }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-white"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={0}
                >
                  Prêt à révolutionner vos comptes-rendus médicaux ?
                </motion.h2>
                <motion.p
                  className="mx-auto max-w-[600px] text-zinc-200 md:text-xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={1}
                >
                  Contactez-nous dès aujourd'hui pour une démonstration personnalisée d'AutoScript.
                </motion.p>
              </div>
              <motion.div
                className="w-full max-w-sm space-y-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={2}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  as="a"
                  href="https://calendly.com/contact-autoscript/decouverte-d-autoscript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#149ea4] hover:bg-gray-100 transition-colors duration-300"
                >
                  Demander une démo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 AutoScript. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/mentions-legales" className="text-xs hover:underline underline-offset-4">
            Mentions légales
          </Link>
          <Link href="/politique-de-confidentialite" className="text-xs hover:underline underline-offset-4">
            Politique de confidentialité
          </Link>
        </nav>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          0%,
          100% {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }

        /* Line 1 Typing Animation */
        .animate-typing-line1 {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid white;
          width: 0;
          animation:
            typing 2s steps(40, end) forwards,
            blink-caret 0.75s step-end forwards;
          animation-fill-mode: forwards;
          animation-delay: 0s, 0s;
          animation-iteration-count: 1, 3;
        }

        /* Line 2 Typing Animation */
        .animate-typing-line2 {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid white;
          width: 0;
          animation:
            typing 2s steps(40, end) forwards,
            blink-caret 0.75s step-end forwards;
          animation-fill-mode: forwards;
          animation-delay: 0.2s, 0.2s;
          animation-iteration-count: 1, 3;
        }

        /* Line 3 Typing Animation */
        .animate-typing-line3 {
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid white;
          width: 0;
          animation:
            typing 2s steps(40, end) forwards,
            blink-caret 0.75s step-end forwards;
          animation-fill-mode: forwards;
          animation-delay: 0.4s, 0.4s;
          animation-iteration-count: 1, 3;
        }

        /* Background Gradient Animation */
        .animate-gradient-x {
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        @keyframes sprinkle {
          0%,
          100% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) scale(1);
            opacity: 1;
          }
        }
        .animate-sprinkle {
          animation: sprinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}