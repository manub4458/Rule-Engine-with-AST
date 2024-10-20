import React, { useState } from 'react';
import { createRule } from '../utils/api';
import styles from './index.module.css'
const CreateRule = () => {
  const [ruleString, setRuleString] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleCreateRule = async (e) => {
    e.preventDefault();
    try {
      const result = await createRule(ruleString);
      console.log(result);
      setResponse(result);
      setError(null);
    } catch (error) {
      setError('Error creating rule');
      setResponse(null);
    }
  };

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] min-h-screen'>
      <div className="flex flex-col space-y-6 w-[30vw] bg-[#FDF6E3] rounded-lg shadow-md p-6">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Create Rule</h2>

      <form onSubmit={handleCreateRule} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-semibold text-gray-700">Rule String</label>
          <textarea
            className="p-4 border border-gray-300 rounded-md h-40 resize-none focus:ring-2 focus:ring-green-500"
            value={ruleString}
            onChange={(e) => setRuleString(e.target.value)}
            placeholder="Enter rule string"
          />
        </div>

        <button
          type="submit"
          className="bg-[#FF6B6B] text-white p-4 rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform transform hover:scale-105"
        >
          Create Rule
        </button>
      </form>

      {response && (
        <div className='bg-green-100 text-green-800 p-4 rounded-md font-semibold border border-green-200 mt-4'>
       
          {response.ruleString ? (
            <div>Rule created successfully</div>
          ) : (
            <div>Rule not created</div>
          )}
        </div>
      )}

      {error && (
        <div className="text-red-500 mt-4 text-center text-lg">
          Error: {error}
        </div>
      )}
    </div>
    </div>
  );
};

export default CreateRule;