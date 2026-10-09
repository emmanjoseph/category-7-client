import React from 'react'
import {DottedGlowBackground} from "@/components/ui/dotted-glow-background";
import {IconArrowRight} from "@tabler/icons-react";

const ContactCta = () => {
    return (
        <div className={'border-y border-dotted'} id={'contact'}>
            <div className="relative mx-auto flex w-full container px-4 items-center justify-center py-28">
                <DottedGlowBackground
                    className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
                    opacity={1}
                    gap={10}
                    radius={1.6}
                    colorLightVar="--color-neutral-500"
                    glowColorLightVar="--color-neutral-600"
                    colorDarkVar="--color-neutral-500"
                    glowColorDarkVar="--color-sky-800"
                    backgroundOpacity={0}
                    speedMin={0.3}
                    speedMax={1.6}
                    speedScale={1}
                />

                <div className="relative z-10 flex w-full flex-col space-y-6 px-4 py-16 text-center">
                    <div className={'space-y-7 flex flex-col items-start justify-center'}>
                        <h2 className="text-center text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl md:text-left dark:text-neutral-400">
                            Ready to collaborate <br /> and take your project to the{" "}
                            <span className="font-bold dark:text-white">Next level</span>?
                        </h2>
                        <p className="mt-4 max-w-lg text-center text-base text-neutral-600 md:text-left dark:text-neutral-300">
                            Whether you have an existing project that needs enhancement or a new idea you&apos;d like to bring to life, I&apos;m here to help. Let&apos;s work together to build something exceptional.
                        </p>

                        <button className="w-full h-14 md:w-fit rounded-none bg-neutral-900 text-white hover:bg-neutral-800 px-5 cursor-pointer flex items-center justify-center">
                            <span>Let's Get In Touch</span>
                            <IconArrowRight className={'ml-2'}/>
                        </button>

                    </div>



                </div>
            </div>
        </div>
    )
}
export default ContactCta
