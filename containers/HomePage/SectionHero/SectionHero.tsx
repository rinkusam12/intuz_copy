import Image from 'next/image';
import HeroCarousel from '../../../components/HeroCarousel/HeroCarousel';
import { myLoader } from '../../../config/image-loader';
const SectionHero = () => {


    return (
        <section className="h-[80vh] relative flex items-center justify-center text-center">
            <Image sizes="35vw" alt="Homepage Banner" layout="fill" priority={true} objectFit="cover" loader={myLoader} src={"/banner01.jpg"} />
            <HeroCarousel />
        </section>
    )
}

export default SectionHero
