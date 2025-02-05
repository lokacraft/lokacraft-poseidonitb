"use client"
import { Variants, motion } from 'framer-motion';
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
// import Fade from 'embla-carousel-fade'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type SlideType = {
      image: any
      title: string
      content: string
    }
type PropType = {
  slides: SlideType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

const bounceIntro: Variants = {
            offscreen: {
              y: -40,
              opacity: 0
            },
            onscreen: {
              y: 0,
              opacity: 1,
              // rotate: -10,
              transition: {
                type: "spring",
                bounce: 0.8,
                duration: 1.5
              }
            }
  };

  return (
    <section className="embla relative w-[90vw] rounded-lg h-screen lg:h-[80vh]">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container w-full">
        {slides.map((slide, index) => (
            <div className="embla__slide rounded-xl border border-gray-500 ml-4 h-[500px] md:h-[480px]" key={index}>
              <div className="embla__slide__content flex flex-col gap-y-4 items-start">
                  <div className="w-full lg:h-[180px] h-[220px]">
                        <Image src={slide.image} alt="profil" width={1000} height={1000} quality={100} className='rounded-xl object-cover w-full h-full' />
                  </div>
                  <div
                  className="w-full lg:flex-1 lg:px-4 flex flex-col gap-y-2 lg:gap-y-3 h-[400px] p-2">
                        <span className='hidden lg:inline-flex w-full truncate text-gray-700 text-[22px] font-semibold'>{slide.title}</span>
                        <p className='text-foreign font-medium h-[240px] overflow-hidden text-ellipsis'>{slide.content}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute left-4 bottom-4">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
