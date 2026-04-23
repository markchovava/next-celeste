"use client"
import { motion, Variants } from "motion/react"
import Title from '../titles/Title'
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import Link from "next/link"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            delay,
        },
    }),
}

export default function BannerHero() {
    return ( 
        <section 
            className="h-130 relative w-full overflow-hidden text-white flex items-center"
            style={{
                // Standard background setup
                backgroundImage: 'url("/assets/img/banner/01_bg.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                // This is the magic: PC gets fixed, iOS gets scroll (handled by the browser)
                backgroundAttachment: 'scroll' 
            }}
        >
            {/* CSS FIX: We use a simple global style tag to target ONLY non-touch 
                or standard devices for the parallax effect. 
            */}
            <style jsx>{`
                section {
                    background-attachment: scroll;
                }
                @media (min-width: 1024px) {
                    section {
                        background-attachment: fixed;
                    }
                }
            `}</style>

            {/* OVERLAY GRADIENTS - Simplified stacking */}
            <div className="absolute inset-0 z-0 bg-linear-to-tr from-gray-950 to-90% to-transparent opacity-90" />
            {/* <div className="absolute inset-0 z-0 bg-linear-to-br from-blue-600/30 to-blue-950/70" /> */}

            <div className="container__primary relative z-10 w-full px-6">
                <div className="lg:w-[50%] w-full flex flex-col items-start">
                    
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        className="text-shadow-lg"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.1}>
                        <Title name="Welcome to Celeste Energy" />
                    </motion.div>

                    <motion.p
                        className="text-xl md:text-2xl font-light mb-8 max-w-2xl"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.25}>
                        We are dedicated to harnessing the power of the sun to provide sustainable
                        energy solutions.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.4}>
                        <Link href='/about'>
                            <ButtonPrimary
                                title="View More"
                                css="text-lg py-3.5 px-9 text-white"
                            />
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}