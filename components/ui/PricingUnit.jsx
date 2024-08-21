import { Divider, Text, useMantineTheme } from "@mantine/core";
import { useTheme } from "next-themes";

export const PricingUnit = ({ name }) => {
  const { theme } = useTheme();
  return (
    <>
      <Divider
        sx={{
          width: "100%",
          borderColor: theme === 'dark' ? "white" : "dimgray",
          opacity: 0.7,
        }}
      />
      <Text fz={"sm"} fw={400} className="font-lexendDeca">
        ✦ {name}
      </Text>
    </>
  );
};

export const PricingUnitPro = ({ name }) => {
  const theme = useMantineTheme();
  return (
    <>
      <Divider
        sx={{
          width: "100%",
          borderColor: theme.colorScheme === "dark" && "white",
          opacity: theme.colorScheme === "dark" && 0.6,
        }}
      />
      <Text fz={"sm"} fw={400} className="font-lexendDeca">
        ✦ {name}
      </Text>
    </>
  );
};