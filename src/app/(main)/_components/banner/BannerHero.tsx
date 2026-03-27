"use client"
import { motion, Variants } from "motion/react"
import Title from '../titles/Title'
import { ButtonPrimary } from "../buttons/ButtonPrimary"

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
        <section className="h-130 w-full bg-linear-to-br from-blue-500 to-blue-950 text-white">
            <div className="container__primary h-full flex flex-col items-start justify-center">
                <div className="lg:w-[50%] w-[70%] h-full flex flex-col items-start justify-center">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.1}
                    >
                        <Title name="Welcome to Celeste Energy" />
                    </motion.div>

                    <motion.p
                        className="text-2xl font-light mb-4"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.25}
                    >
                        We are dedicated to harnessing the power of the sun to provide sustainable
                        energy solutions.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0.4}
                    >
                        <ButtonPrimary
                            title="View More"
                            css="text-lg py-3.5 px-9 text-white"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}