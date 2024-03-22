import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";
import { en, de } from "../reducers/languageSlice";

export const SwitchLang = () => {
  const locale = useSelector((state: any) => state.language.value);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (nextChecked: any) => {
    setChecked(nextChecked);
    checked ? dispatch(en()) : dispatch(de());
  };

  return (
    <>{"Change Language "}
      <Switch
        onChange={handleChange}
        checked={checked}
        className="react-switch"
      />
    </>
  );
};
