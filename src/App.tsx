import { ChakraProvider, Box } from "@chakra-ui/react";
import { useState } from "react";

import HookForm from "./components/HookForm";
import theme from "./theme";
import RenderFormData from "./components/RenderFormData";

import type { FormValues } from "./types";

function App() {
  const [formData, setFormData] = useState<FormValues | null>(null);

  const handleFormData = (data: FormValues | null) => {
    setFormData(data);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p={4} maxW="960px" mx="auto">
        <Box textStyle="h1" m={4} textAlign="center">
          User Details
        </Box>
        <Box textStyle="h2" bg="#F0EEEE" p={6}>
          <HookForm handleFormData={handleFormData} />
        </Box>
        {formData && (
          <Box textStyle="h2" bg="#F0EEEE" p={6} marginTop={5}>
            <RenderFormData formData={formData} />
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
