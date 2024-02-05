import React from 'react'
import { useState } from 'react';

function Calendar() {
    const [selectedDateFrom, setSelectedDateFrom] = useState('');
    const [selectedDateTo, setSelectedDateTo] = useState('');

    const [options, setOptions] = useState(["ALL","Kerala","Gujarat"]);
    const [selectedOption, setSelectedOption] = useState('');

    const downloadImage = () => {
        // URL of the image you want to download
        const imageUrl = 'https://images.pexels.com/photos/8442033/pexels-photo-8442033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; // Replace this with your image URL
    
        // Fetch the image data
        fetch(imageUrl)
          .then(response => response.blob())
          .then(blob => {
            // Create an anchor element and set its attributes
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'image.jpg'; // Set the desired file name
            
            // Append the anchor element to the body and trigger the download
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a); // Clean up
          })
          .catch(error => console.error('Error downloading image:', error));
      };

  return (
    <div className='w-full h-[85vh] bg-cover bg-[url("https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]'>
        <div className='w-full   px-3   bg-[url("https://images.pexels.com/photos/9485592/pexels-photo-9485592.jpeg?auto=compress&cs=tinysrgb&w=600")]
         lg:flex flex-wrap justify-center py-5 bg-gray-300'>
            <div className='my-[0.5rem]  mx-1 px-3 py-3 rounded-lg bg-gray-200  lg:my-[5rem] hover:bg-gray-400' >
                <label htmlFor="date">Date Filter From:
                </label>
                <input className='mx-1  outline-none rounded-lg'
                        type="date" 
                        id="date" 
                        value={selectedDateFrom} 
                        onChange={(e) => setSelectedDateFrom(e.target.value)}
                />
            </div>
            <div className='my-[0.5rem] mx-1 px-3 py-3 rounded-lg bg-gray-200 lg:my-[5rem]  hover:bg-gray-400' >
                <label htmlFor="date">Date Filter To:
                </label>
                <input className='mx-1 outline-none rounded-lg '
                        type="date" 
                        id="date" 
                        value={selectedDateTo} 
                        onChange={(e) => setSelectedDateTo(e.target.value)}
                />
            </div>
            <div className='my-[0.5rem] mx-1  px-3 py-3 rounded-lg bg-gray-200 lg:my-[5rem] hover:bg-gray-400'>DAILY</div>
            <div className='my-[0.5rem] mx-1 px-3 py-3 rounded-lg bg-gray-200 lg:my-[5rem] hover:bg-gray-400'>Monthly</div>
            <div className='my-[0.5rem] mx-1 px-3 py-3 rounded-lg bg-gray-200 lg:my-[5rem] hover:bg-gray-400'>Calendar Year</div>
            <div className='my-[0.5rem] mx-1 px-3 py-3 rounded-lg bg-gray-200 lg:my-[5rem] hover:bg-gray-400'>Financial Year</div>



        </div>
        <div className='flex  justify-center my-2  lg:my-12'>
            <div className='px-3 py-2 text-white '>Number of Students: <span>1208272</span></div>
            <div className='px-3 py-2 bg-gray-300 rounded-lg hover:bg-gray-400'>
                <label htmlFor="selectOption">State</label>
                <select  className="outline-none" id="selectOption" value={selectedOption} 
                                          onChange={(e) => setSelectedOption(e.target.value)}
                >
                    {
                        options.map(option => (
                                <option className="outline-none mx-2" key={option} value={option}>{option}</option>
                            ))
                    }
                </select>
            </div>
            <div className='px-3 py-2 mx-1 bg-gray-300 rounded-lg hover:bg-gray-400'>
                <label htmlFor="selectOption">Verticals</label>
                <select  className="outline-none" id="selectOption" value={selectedOption} 
                                          onChange={(e) => setSelectedOption(e.target.value)}
                >
                    {
                        options.map(option => (
                                <option className="outline-none mx-2" key={option} value={option}>{option}</option>
                            ))
                    }
                </select>
            </div>
            <div className='px-3 py-2 mx-1 bg-gray-300 rounded-lg hover:bg-gray-400'>
                <label htmlFor="selectOption">Facility Type</label>
                <select  className="outline-none" id="selectOption" value={selectedOption} 
                                          onChange={(e) => setSelectedOption(e.target.value)}
                >
                    {
                        options.map(option => (
                                <option className="outline-none mx-2" key={option} value={option}>{option}</option>
                            ))
                    }
                </select>
            </div>
            <div className='px-3 py-2 mx-1 bg-gray-300 rounded-lg hover:bg-gray-400'>
                <label htmlFor="selectOption">Facility All</label>
                <select  className="outline-none" id="selectOption" value={selectedOption} 
                                          onChange={(e) => setSelectedOption(e.target.value)}
                >
                    {
                        options.map(option => (
                                <option className="outline-none mx-2" key={option} value={option}>{option}</option>
                            ))
                    }
                </select>

             
            </div>
               {/* <div className='text-center my-14 '> */}
               <button className=' py-3 px-3 bg-green-400 rounded-lg' onClick={downloadImage}>Download Report</button>
            {/* </div> */}
          </div>
         
    </div>

  )
}

export default Calendar