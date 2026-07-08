import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const imgs = [
        '/img/dev_2.jpg',
        '/img/dev_3.jpg',
        '/img/dev.png',
    ]

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return(
        <div className="relative w-full h-full">
            <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {imgs.map((src, index) => (
                        <div className="relative flex-[0_0_100%] min-w-0 h-full" key={index}>
                            <Image 
                                src={src} 
                                alt={`Developer ${index + 1}`} 
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10">
                <button
                    onClick={scrollPrev}
                    className="
                        flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        rounded-2xl
                        border
                        border-paleta-rugani-border-default
                        bg-paleta-rugani-bg-elevated/70
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-paleta-rugani-brand-default/40
                        hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                        hover:-translate-y-1
                    "
                >
                    <svg className="w-4 h-4 text-paleta-rugani-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                    onClick={scrollNext}
                    className="
                        flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        rounded-2xl
                        border
                        border-paleta-rugani-border-default
                        bg-paleta-rugani-bg-elevated/70
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-paleta-rugani-brand-default/40
                        hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                        hover:-translate-y-1
                    "
                >
                    <svg className="w-4 h-4 text-paleta-rugani-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </div>
    )
}