"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { switchToTheme } from "@/constants";
import { setLocalVal } from "@/utils";
import { Switch } from "antd";
import { imageOptimizer } from "next/dist/server/image-optimizer";

function ThemeSwtich() {
  const { theme, setTheme } = useTheme();
  const [swtichStyle, setSwtichStyle] = useState<boolean>(theme === "light");
  const [mounted, setMounted] = useState(false);

  const changeThemefunc = (val: boolean) => {
    setTheme(switchToTheme[`${swtichStyle}`]);
    console.log("themeVal", switchToTheme[`${swtichStyle}`]);

    setSwtichStyle(val);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      size="default"
      defaultChecked
      checkedChildren="🌜"
      unCheckedChildren="🌞"
      checked={swtichStyle}
      onChange={changeThemefunc}
    />
  );
}

export default ThemeSwtich;
