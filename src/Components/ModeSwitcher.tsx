import { useColorMode, Switch } from "@chakra-ui/react";

function ModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Switch onChange={toggleColorMode}>
        {colorMode === "light" ? "Light" : "Dark"}
      </Switch>
    </>
  );
}

export default ModeSwitcher;
