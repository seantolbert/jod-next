import Image from "next/image";

function Logo(props: any) {
  const { renderDefault } = props;

  return (
    <div className="flex items-center">
      <Image
      className="w-auto h-auto"
        height={30}
        width={30}
        src="https://i.imgur.com/yU4OwzD.png"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}
export default Logo;
