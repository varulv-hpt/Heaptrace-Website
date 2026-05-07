import Image from "next/image";

type CollaboratorLogoProps = {
  src: string;
  name: string;
  width?: number;
  height?: number;
};

export default function CollaboratorLogo({
  src,
  name,
  width = 130,
  height = 40,
}: CollaboratorLogoProps) {
  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={width}
      height={height}
      className="collaborators-logo"
    />
  );
}
