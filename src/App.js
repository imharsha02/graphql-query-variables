// // import React, { useEffect, useState } from "react";
// // import { useKey } from "./components/useKey.js";
// // const query = `
// // query Continents {
// //   continents {
// //     name
// //     countries {
// //       name
// //       code
// //     }
// //   }
// // }
// // `;

// // const queryOneContinent = `
// // query FetchOneContinent($code: String!) {
// //   continents(code:$code) {
// //     code
// //     name
// //     countries {
// //       name
// //       code
// //     }
// //   }
// // }
// // `;

// // const App = () => {
// //   const [continentInput, setContinentInput] = useState("");
// //   const [continentData, setContinentData] = useState([]);

// //   // FUNCTION THAT FETCHES DATA
// //   const fetchData = async (query, variables) => {
// //     const response = await fetch("https://countries.trevorblades.com/", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({ query, variables: variables }),
// //     });
// //     const data = await response.json();
// //     return data;
// //   };

// //   const getSingleContinent = async () => {
// //     if (continentInput !== "") {
// //       const data = await fetchData({
// //         queryOneContinent,
// //         variables: $code,
// //       });
// //       setContinentData(data);
// //     }
// //   };

// //   useKey("Enter", getSingleContinent);
// //   useEffect(() => {
// //     //FUNCTION THAT GETS THE COUNTRIES BY CALLING THE FETCHDATA FUNCTION
// //     const getCountries = async () => {
// //       try {
// //         const data = await fetchData(query);
// //         setContinentData(data.data.continents);
// //       } catch (error) {
// //         console.error("Error fetching countries:", error);
// //       }
// //     };

// //     getCountries(); // EXECUTE GETCOUNTRIES FUNCTION ON MOUNT ONCE.
// //   }, []);

// //   return (
// //     <div className="max-w-6xl mx-auto">
// //       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-8">
// //         Continents and Countries: A GraphQL Showcase
// //       </h1>
// //       <div className="overflow-x-auto space-y-2">
// //         <input
// //           value={continentInput}
// //           onChange={(e) => {
// //             setContinentInput(e.target.value);
// //           }}
// //           type="text"
// //           className="rounded-md p-1 border"
// //           placeholder="Search for continent"
// //         />
// //         <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
// //           <thead className="bg-gray-200">
// //             <tr>
// //               <th className="py-2 px-4 text-left text-gray-700 font-medium">
// //                 Continent
// //               </th>
// //               <th className="py-2 px-4 text-left text-gray-700 font-medium">
// //                 Country
// //               </th>
// //               <th className="py-2 px-4 text-left text-gray-700 font-medium">
// //                 Code
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {continentData
// //               .flatMap((continent) =>
// //                 continent.countries.map((country) => ({
// //                   continentName: continent.name,
// //                   countryName: country.name,
// //                   countryCode: country.code,
// //                 }))
// //               )
// //               .slice(0, 10) // Limit to the first 10 items
// //               .map((item, index) => (
// //                 <tr key={index} className="border-t border-gray-200">
// //                   <td className="py-2 px-4">{item.continentName}</td>
// //                   <td className="py-2 px-4">{item.countryName}</td>
// //                   <td className="py-2 px-4">{item.countryCode}</td>
// //                 </tr>
// //               ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useEffect, useState } from "react";
// import { useKey } from "./components/useKey.js";

// const query = ` 
// query Continents {
//   continents {
//     name
//     code
//     countries {
//       name
//       code
//     }
//   }
// }
// `;

// const queryOneContinent = `
// query GetContinent($code:ID!) {
//   continent(code:$code){
//     name
//     countries{
//       name
//       code
//     }
//   }
// }
// `;

// const App = () => {
//   const [continentInput, setContinentInput] = useState("");
//   const [continentData, setContinentData] = useState([]);

//   // FUNCTION THAT FETCHES DATA
//   const fetchData = async (query, variables = {}) => {
//     const response = await fetch("https://countries.trevorblades.com/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ query, variables }),
//     });
//     const data = await response.json();
//     return data;
//   };
  
//   const getSingleContinent = async () => {
//     if (continentInput !== "") {
//       const variables = { code: continentInput.toUpperCase() }; // convert input to uppercase
//       const data = await fetchData(queryOneContinent, variables);
//       setContinentData([data.data.continent]); // ensure it's in an array
//     }
//   };

//   useKey("Enter", getSingleContinent);

//   useEffect(() => {
//     // FUNCTION THAT GETS THE COUNTRIES BY CALLING THE FETCHDATA FUNCTION
//     const getCountries = async () => {
//       try {
//         const data = await fetchData(query);
//         setContinentData(data.data.continents);
//       } catch (error) {
//         console.error("Error fetching countries:", error);
//       }
//     };

//     getCountries(); // EXECUTE GETCOUNTRIES FUNCTION ON MOUNT ONCE.
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto">
//       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-8">
//         Continents and Countries: A GraphQL Showcase
//       </h1>
//       <div className="overflow-x-auto space-y-2">
//         <input
//           value={continentInput}
//           onChange={(e) => {
//             setContinentInput(e.target.value);
//           }}
//           type="text"
//           className="rounded-md p-1 border w-96"
//           placeholder="Search for continent by code (e.g., AF, AS)"
//         />
//         <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="py-2 px-4 text-left text-gray-700 font-medium">
//                 Continent
//               </th>
//               <th className="py-2 px-4 text-left text-gray-700 font-medium">
//                 Country
//               </th>
//               <th className="py-2 px-4 text-left text-gray-700 font-medium">
//                 Code
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {continentData
//               .flatMap((continent) =>
//                 continent.countries.map((country) => ({
//                   continentName: continent.name,
//                   continentCode: continent.code,
//                   countryName: country.name,
//                   countryCode: country.code,
//                 }))
//               )
//               .map((item, index) => (
//                 <tr key={index} className="border-t border-gray-200">
//                   <td className="py-2 px-4">
//                     {item.continentName}
//                     {continentInput === "" && ` (${item.continentCode})`}
//                   </td>
//                   <td className="py-2 px-4">{item.countryName}</td>
//                   <td className="py-2 px-4">{item.countryCode}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default App;



import React, { useEffect, useState, useRef } from "react";
import { useKey } from "./components/useKey.js";

const query = ` 
query Continents {
  continents {
    name
    code
    countries {
      name
      code
    }
  }
}
`;

const queryOneContinent = `
query GetContinent($code:ID!) {
  continent(code:$code){
    name
    countries{
      name
      code
    }
  }
}
`;

const App = () => {
  const [continentInput, setContinentInput] = useState("");
  const [continentData, setContinentData] = useState([]);
  const inputRef = useRef(null); // Create a reference for the input field

  // FUNCTION THAT FETCHES DATA
  const fetchData = async (query, variables = {}) => {
    const response = await fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    const data = await response.json();
    return data;
  };
  
  const getSingleContinent = async () => {
    if (continentInput !== "") {
      const variables = { code: continentInput.toUpperCase() };
      const data = await fetchData(queryOneContinent, variables);
      setContinentData([data.data.continent]);
    }
  };

  useKey("Enter", getSingleContinent);

  useEffect(() => {
    // Set focus on the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // FUNCTION THAT GETS THE COUNTRIES BY CALLING THE FETCHDATA FUNCTION
    const getCountries = async () => {
      try {
        const data = await fetchData(query);
        setContinentData(data.data.continents);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    getCountries(); // EXECUTE GETCOUNTRIES FUNCTION ON MOUNT ONCE.
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-8">
        Continents and Countries: A GraphQL Showcase
      </h1>
      <div className="overflow-x-auto space-y-2">
        <input
          ref={inputRef} // Attach the inputRef to the input field
          value={continentInput}
          onChange={(e) => {
            setContinentInput(e.target.value);
          }}
          type="text"
          className="rounded-md p-1 border w-96"
          placeholder="Search for continent by code (e.g., AF, AS)"
        />
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-gray-700 font-medium">
                Continent
              </th>
              <th className="py-2 px-4 text-left text-gray-700 font-medium">
                Country
              </th>
              <th className="py-2 px-4 text-left text-gray-700 font-medium">
                Code
              </th>
            </tr>
          </thead>
          <tbody>
            {continentData
              .flatMap((continent) =>
                continent.countries.map((country) => ({
                  continentName: continent.name,
                  continentCode: continent.code,
                  countryName: country.name,
                  countryCode: country.code,
                }))
              )
              .map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-2 px-4">
                    {item.continentName}
                    {continentInput === "" && ` (${item.continentCode})`}
                  </td>
                  <td className="py-2 px-4">{item.countryName}</td>
                  <td className="py-2 px-4">{item.countryCode}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
