import Image from 'next/image';
import HeroCarousel from '../../../components/HeroCarousel/HeroCarousel';
import { myLoader } from '../../../config/image-loader';
const SectionHero = () => {


    return (
        <section className="h-[80vh] relative flex items-center justify-center text-center">
            <Image sizes="50vw" alt="Homepage Banner" priority={true} layout="fill" objectFit="cover" src={"/banner01.jpg"} />
            <HeroCarousel />
        </section>
    )
}

export default SectionHero
