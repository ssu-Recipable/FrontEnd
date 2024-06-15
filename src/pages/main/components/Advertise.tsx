import { theme } from "@/styles/theme";
import Text from "@/components/commonComponents/Text";
import Banner from "@/assets/images/banner.png"

const Advertise = () => {
  return (
    <section style={{ marginTop: "1rem", marginBottom: "13rem" }}>
      <img
        src={Banner}
        style={{
          backgroundColor: `${theme.colors.grey1}`,
          width: "100%",
          height: "8rem",
          marginTop: "0.5rem",
          marginBottom: "1rem",
          objectFit: "cover",
        }}
      />
      <Text font={"body2"} color={theme.colors.grey2}>
        문의사항은 recipable@gmail.com으로 연락주세요.
      </Text>
    </section>
  );
};

export default Advertise;
