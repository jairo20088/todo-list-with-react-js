import React from "react";
import Search from "../component/searcBar";
import Button from "../component/button";
import Item from "../component/item";

const addItem = () => {
  return (
    <div>
      <Search />
      <Button label="Add" />
      <Item />
    </div>
  );
};
export default addItem;
