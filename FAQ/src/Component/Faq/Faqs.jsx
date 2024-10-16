import React, { useState } from "react";
import { question } from "../../FAQ/question";

export const Faqs = () => {
  let [currentId, setCurrentId] = useState(question[0].id);
  let items = question.map((itemsData, index) => {
    let itemsdetail = {
      itemsData,
      currentId,
      setCurrentId,
    };
    return <FaqItems itemsdetail={itemsdetail} key={index} />;
  });

  return (
    <div>
      <h1>Frequently Asked Question</h1>
      <div className="faqouter">{items}</div>
    </div>
  );
};
//directly data can't be sent here
function FaqItems({ itemsdetail }) {
  // let {itemsData,currentId,setCurrentId}=itemsData;
  return (
    <div className="faqItems">
      <h2 onClick={() => itemsdetail.setCurrentId(itemsdetail.itemsData.id)}>
        {itemsdetail.itemsData.quesiton}{" "}
      </h2>
      <p
        className={
          itemsdetail.currentId === itemsdetail.itemsData.id ? "activeans" : ""
        }
      >
        {itemsdetail.itemsData.answer}{" "}
      </p>
    </div>
  );
}
