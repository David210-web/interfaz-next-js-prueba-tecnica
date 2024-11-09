import Image, { StaticImageData } from "next/image";
import React from "react";

// Definir las props del componente Header
interface HeaderProps {
  Imagen: string | StaticImageData; // Puede ser una URL o una imagen estática
}

const Header: React.FC<HeaderProps> = React.memo(function Header({ Imagen }) {
  return (
    <div className="bg-slate-50 d-block">
      <Image src={Imagen} alt="Boxful Logo" width={130} height={40} className="mb-8" />
    </div>
  );
});

export default Header;
