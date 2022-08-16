import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// Data
import ProductData from "../data/products.json";

// Types
import { CategoryData, ItemData } from "../types/interdental";

import Product from "./products/Product";
import Wireframe from "./canves/Wireframe";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

/* --------------------------------------------------------------- */

const RecoTool = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [visibleTxt, setVisibleTxt] = React.useState(false);
  const [visibleBtn, setVisibleBtn] = React.useState(false);

  const [list, setList] = useState<CategoryData[]>([]);
  useEffect(() => {
    setList(ProductData.map((item: any) => item));
  }, []);

  const eventCheckboxHandler = async (catId: number, actionId: string) => {
    if (catId === 1) {
      if (actionId === "1") {
        setVisibleBtn(true);
        console.log("CAT 1 - CHECKBOX 1");
      } else if (actionId === "2") {
        console.log("CAT 1 - CHECKBOX 2");
      } else if (actionId === "3") {
        console.log("CAT 1 - CHECKBOX 4");
      } else if (actionId === "4") {
        console.log("CAT 1 - CHECKBOX 5");
      }
    } else if (catId === 3) {
      if (actionId === "1") {
        console.log("CAT 2 - CHECKBOX 1");
      } else if (actionId === "2") {
        console.log("CAT 2 - CHECKBOX 2");
      } else if (actionId === "3") {
        console.log("CAT 2 - CHECKBOX 3");
      }
    }
  };

  const onEmit = (key: number, data: ItemData) => {
    console.log("Event Emitted To Parent =>", key, data);
    eventCheckboxHandler(key, data.id!);
  };

  const onCollapse = (key: number, isOpen: boolean) => {
    console.log("IsOpen => ", key, isOpen);
    setList([
      ...list.map((item) => {
        if (item.id === key) {
          item.isOpen = !isOpen;
        } else {
          item.isOpen = false;
        }
        return item;
      })
    ]);

    setVisibleTxt(!isOpen);
    setVisibleBtn(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <>
            <div className="product-scroll">
              <div className="content">
                {list.map((item) => (
                  <Product
                    key={item.id}
                    title={item.title!}
                    is_open={item.isOpen!}
                    cat_img={item.catImg}
                    dataSource={item.data!}
                    onEmit={(data) => onEmit(item.id!, data)}
                    onCollapse={(b) => onCollapse(item.id!, b)}
                  />
                ))}
              </div>
            </div>
          </>
        </Grid>
        {/* --------------------------------------------------------------- */}
        <Grid item xs={12} md={8}>
          <Wireframe visible_txt={visibleTxt} visible_btn={visibleBtn} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecoTool;
