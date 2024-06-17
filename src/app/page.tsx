import Image from "next/image";
import { Button, End, Header, Nav, Start } from "@/components/ui/header";
import { navData } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Header>
        <Start className="text-xl">
          <Image src={"/okb-okb-logo.png"} alt="logo" width={30} height={30} />
        </Start>
        <Nav data={navData} />
        <End>
          <Button type="transparent" to={"/auth"}>
            Sign In
          </Button>
          <Button to={"/auth"}>Sign Up</Button>
        </End>
      </Header>
    </>
  );
}
