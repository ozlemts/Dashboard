import Image from 'next/image'

export function Logo(props) {
  return (
    <Image src="/coffee-logo.png" width={props.width} height={props.height}/>
  );
}

export default Logo;