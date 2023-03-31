import { Button, useColorMode, Switch } from "@chakra-ui/react";

function ModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Switch onChange={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Switch>
    </>
  );
}

export default ModeSwitcher;
