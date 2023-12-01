import React from "react";
import Product_card_Ready from "./Product_card_Ready";
const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
const Hugin_Integration = () => {
  return (
    <>
    <div className="hugin_integration">
      <div className="import_strip ">
        <div>
          <h2 className="title_tag">Employee List</h2>
        </div>
        <div className="d-flex">
          <button className="product_add add_opt_btn add_cat_opt">
            Device Setting
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.5C9.22562 1.53347 6.57431 2.65047 4.61239 4.61239C2.65047 6.57431 1.53347 9.22562 1.5 12C1.53347 14.7744 2.65047 17.4257 4.61239 19.3876C6.57431 21.3495 9.22562 22.4665 12 22.5C14.7744 22.4665 17.4257 21.3495 19.3876 19.3876C21.3495 17.4257 22.4665 14.7744 22.5 12C22.4665 9.22562 21.3495 6.57431 19.3876 4.61239C17.4257 2.65047 14.7744 1.53347 12 1.5ZM18 12.75H12.75V18H11.25V12.75H6V11.25H11.25V6H12.75V11.25H18V12.75Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="department_code">
      <h4>Department Code:</h4>
      <select name="Categories" id="" className="category">
                <option value="Categories">01</option>
                <option value="English">02</option>
                <option value="English">03</option>
                <option value="English">04</option>
                <option value="English">05</option>
                <option value="English">06</option>
               </select>

      <div className='searchbar  hugin_integration_search'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <path d="M17.4375 15.75H16.5488L16.2338 15.4463C17.3744 14.1233 18.0012 12.4343 18 10.6875C18 9.24123 17.5711 7.82743 16.7676 6.6249C15.9641 5.42236 14.8221 4.4851 13.4859 3.93163C12.1497 3.37817 10.6794 3.23336 9.2609 3.51551C7.84242 3.79767 6.53946 4.49411 5.51678 5.51678C4.49411 6.53946 3.79767 7.84242 3.51551 9.2609C3.23336 10.6794 3.37817 12.1497 3.93163 13.4859C4.4851 14.8221 5.42236 15.9641 6.6249 16.7676C7.82743 17.5711 9.24123 18 10.6875 18C12.4988 18 14.1638 17.3363 15.4463 16.2338L15.75 16.5488V17.4375L21.375 23.0513L23.0513 21.375L17.4375 15.75ZM10.6875 15.75C7.88625 15.75 5.625 13.4888 5.625 10.6875C5.625 7.88625 7.88625 5.625 10.6875 5.625C13.4888 5.625 15.75 7.88625 15.75 10.6875C15.75 13.4888 13.4888 15.75 10.6875 15.75Z" fill="#1E1E1E" fill-opacity="0.55" />
              </svg></span>
              <input type="text" name="" id="" placeholder='Search' />
            </div>
<button className="device_btn">Save Integration</button>
    </div>


    

    </div>
    <div>
      <Product_card_Ready />
    </div>
    </>
  );
};

export default Hugin_Integration;
