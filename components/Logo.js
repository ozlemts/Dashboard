import Image from 'next/image'

export function Logo(props) {
  return (
    <Image src="/logo.svg" width={props.width} height={props.height} alt="Taka Insight"/>
  );
}

export default Logo;