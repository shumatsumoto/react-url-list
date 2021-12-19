import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function NativeSelectDemo() {
  return (
    <Box sx={{ maxWidth: 200, mt: 5, mb: 5 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={"develop"}
          inputProps={{
            name: "environment",
            id: "uncontrolled-native",
          }}
        >
          <option value={"develop"}>d環境</option>
          <option value={"test"}>t環境</option>
          <option value={"production"}>本番環境</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
