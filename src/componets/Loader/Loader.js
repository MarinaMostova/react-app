import { Oval } from "react-loader-spinner";
import { Container } from "./Loader.styled";

export const Loader = () => {
  return (
    <Container>
      <Oval
        height={180}
        width={180}
        color="#475513"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#475513"
        strokeWidth={6}
        strokeWidthSecondary={3}
      />
    </Container>
  );
};
