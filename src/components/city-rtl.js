import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../css/city-rtl.css";
export default function BasicSelect() {
  const [city, setCity] = React.useState(20);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">المدينة</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Age"
          onChange={handleChange}
        >
          <h3 className="text-end p-2">العاصمة</h3>

          <MenuItem className="d-block text-end p-3 city" value={20}>
            عبدالله السالم
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={30}>
            العديلية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={40}>
            بنيد الفار
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={50}>
            الدعية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={60}>
            الدسمة
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={70}>
            دسمان
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={80}>
            الدوحة
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={90}>
            الفيحاء
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={100}>
            غرناطة
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={101}>
            كيفان
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={101}>
            الخالدية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={102}>
            مدينة الكويت
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={103}>
            المنصورية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={105}>
            المرقاب
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={106}>
            معسكرات المباركية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={107}>
            النزهة
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={108}>
            القادسية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={109}>
            القبلة
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={110}>
            قرطبة
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={111}>
            الروضه
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={112}>
            الصالحية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={113}>
            الشامية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={114}>
            شرق
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={116}>
            الصليبخات
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={117}>
            السرة
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={118}>
            اليرموك
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={119}>
            المنطقة الحرة
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={120}>
            الشيوخ الإدارية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={121}>
            الشيوخ الصناعية
          </MenuItem>
          <MenuItem className="d-block text-end p-3 city" value={122}>
            الشويخ السكينة
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
