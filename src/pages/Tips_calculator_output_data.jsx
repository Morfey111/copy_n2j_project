// import React from 'react'
import { ButtonCalc } from './syles/Calc-button-styled';

function Tips_calculator_output_data() {
  return (
    <div className="bg-darkGreen p-10 rounded-2xl">
      <div className="mb-7 md:mb-10">
        <div className="flex flex-column justify-between mt-5">
          <p className="text-white text-bold">Tip Amount</p>
          <p className="text-greenBtn text-3xl text-bold ">$4.27</p>
        </div>
        <p className="bg-darkGreen text-outputText text-sm text-bold -mt-3">
          / person
        </p>
      </div>
      <div className="mb-10">
        <div className="flex flex-column justify-between">
          <p className="text-white text-bold 	">Total</p>
          <p className="text-greenBtn text-3xl text-bold">$32.79</p>
        </div>
        <p className="bg-darkGreen text-outputText text-sm text-bold -mt-3">
          / person
        </p>
      </div>
      <ButtonCalc className="text-darkGreen bg-greenBtn w-full text-bold md:mb-4 md:mt-32">
        RESET
      </ButtonCalc>
    </div>
  );
}

export default Tips_calculator_output_data;
