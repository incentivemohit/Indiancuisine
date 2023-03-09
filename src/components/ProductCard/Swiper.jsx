import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ProductContext } from "../../Context";
import ProductCard from "./ProductCard";

export default function ScrollableTabsButtonForce() {
  const { Curries } = React.useContext(ProductContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {Curries.map((data) => (
            <Tab
              label={
                <ProductCard
                  id={data.id}
                  photo={data.image}
                  title={data.title}
                  price={data.price}
                />
              }
            ></Tab>
          ))}
        </Tabs>
      </Box>
    </>
  );
}
