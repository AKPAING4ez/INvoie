import {
  Addnew,
  createFormHandler,
  manageInventoryBtnHandler,
  rowGroupHandler,
} from "./handlers.js";
import {
  createForm,
  inventorySheetCloseBtn,
  manageInventoryBtn,
  rowGroup,
} from "./selectors.js";

const listener = () => {
  createForm.addEventListener("submit", createFormHandler);
  rowGroup.addEventListener("click", rowGroupHandler);
  manageInventoryBtn.addEventListener("click", manageInventoryBtnHandler);
  inventorySheetCloseBtn.addEventListener("click", manageInventoryBtnHandler);
  btn.addEventListener("click",Addnew);
};

export default listener;
