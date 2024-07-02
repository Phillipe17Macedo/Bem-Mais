import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "./styles";

export default function DropDownExame() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Exame 1", value: "exame1" },
    { label: "Exame 2", value: "exame2" },
    { label: "Exame 3", value: "exame3" },
    { label: "Exame 4", value: "exame4" },
    { label: "Exame 5", value: "exame5" },
    { label: "Exame 6", value: "exame6" },
  ]);

  return (
    <>
      <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Selecione um Exame"
          style={styles.dropdown}
          placeholderStyle={styles.textoDropdown}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          listItemLabelStyle={styles.itensLista}
          selectedItemLabelStyle={styles.itemSelecionado}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
    </>
  );
}
