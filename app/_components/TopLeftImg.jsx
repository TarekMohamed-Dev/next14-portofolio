import Image from "next/image";

const TopLeftImg = () => {
    return (
      <div className='hidden dark:block absolute left-0 top-0 mix-blend-color-dodge  w-[200px] xl:w-[400px] opacity-50 z-30'>
      <Image src='/top-left-img.png' width={400} height={400} alt='' priority  />
    </div>
    )
  };
  
  export default TopLeftImg;
  