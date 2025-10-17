import Image from 'next/image';
import Link from 'next/link';


interface LogoProps {
  textColor?: string; 
}

export default function Logo({ textColor = 'text-koda-blue-deep' }: LogoProps) {
  
  const LOGO_WIDTH = 800; 
  const LOGO_HEIGHT = 250;

  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo-koda.png" 

        alt="Logo de KODA"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="h-10 w-auto" 

        priority 
      />
    </Link>
  );
}