import { theme } from "@/styles/theme";
import Text from "@/components/commonComponents/Text";

const Advertise = () => {
  return (
    <section>
      <div
        style={{
          backgroundColor: `${theme.colors.grey1}`,
          width: "100%",
          height: "10rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      ></div>
      <Text font={"body2"} color={theme.colors.grey2}>
        문의사항은 recipable@gmail.com으로 연락주세요.
      </Text>
    </section>
  );
};

export default Advertise;
