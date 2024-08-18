import React from 'react';

const Frontcards = () => {
  return (
    <>
      <div className="p-8 mt-20 items-center">
        <h2 className="text-5xl  text-center mb-12">Features</h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center items-center shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Easy Prompt Input</h3>
                <p style={{ color: '#9395a1' }}>
                  Quickly generate flashcards from simple text prompts. Streamline your study process with ease.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center items-center shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Smart Flashcards</h3>
                <p style={{ color: '#9395a1' }}>
                  Sync your flashcards and study progress across devices, allowing you to study anytime, anywhere.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center items-center shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Flashcards Generated in Minutes</h3>
                <p style={{ color: '#9395a1' }}>
                  Customize and create flashcards in minutes. Focus on learning with minimal effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontcards;
