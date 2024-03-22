import { useSelector } from "react-redux";

export const Panel = () => {
  const locale = useSelector((state: any) => state.language.value);
  return <>Locale from reducer {locale}</>;
};
