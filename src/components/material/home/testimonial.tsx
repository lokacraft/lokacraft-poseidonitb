import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image1 from "../../../../public/img/home/c2testimonial1.png"

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "POSEIDON ITB adalah program pengabdian masyarakat tahunan yang melibatkan mahasiswa Oseanografi ITB dalam mendukung pembangunan berkelanjutan kawasan pesisir Indonesia.",
      name: "Nafiis Akram",
      designation: "Head of Head at POSEIDON",
      src: Image1
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Nafiis Akram 2",
      designation: "Product Manager at POSEIDON",
      src: Image1
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Nafiis Akram 3",
      designation: "Product Manager at POSEIDON",
      src: Image1
    },
  ];
  return (
      <div id="testimonial" className="mt-20 w-[90%] mx-auto flex flex-col gap-y-6 lg:gap-y-8 items-center z-10">
        <h1 className="text-3xl z-20 font-semibold leading-[50px]">
          <span className="italic font-semibold">
            Apa Kata Mereka
          </span> 
        </h1>
            <AnimatedTestimonials testimonials={testimonials} />;
      </div>
  ); 
}
