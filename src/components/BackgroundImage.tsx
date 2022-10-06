import Image from "next/image";
import background from "../../public/background_1.jpg";

export default function BackgroundImage() {
  return (
    <div className="fixed h-screen w-screen overflow-hidden  -z-10">
      <Image layout="fill" objectFit="cover" src={background} quality={100} />
    </div>
  );
}
