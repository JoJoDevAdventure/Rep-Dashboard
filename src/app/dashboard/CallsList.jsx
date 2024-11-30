const CallsList = ({ calls, onCall, OnView, isDarkMode }) => {
  // Define dynamic classes for dark/light mode
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700"; // Adjust text color
  const bgColor = isDarkMode ? "bg-s1" : "bg-white"; // Adjust background color
  const headerTextColor = isDarkMode ? "text-gray-400" : "text-gray-500"; // Adjust header text color
  const borderColor = isDarkMode ? "border-p1/30" : "border-p1/10"; // Adjust border color

  return (
    <div
      className={`w-full md:p-0 md:h-[75vh] md:overflow-y-auto md:over md:border-2 ${borderColor} rounded-lg ${bgColor}`}
    >
      {/* Table Header */}
      <div
        className={`hidden md:grid grid-cols-12 text-sm font-bold ${headerTextColor} border-b pb-2 ${borderColor} p-6`}
      >
        <div className="col-span-4">ADDRESS</div>
        <div className="col-span-2">CLIENT</div>
        <div>BEDS</div>
        <div>BATHS</div>
        <div>SQFT</div>
        <div className="col-span-3 text-center">ACTIONS</div>
      </div>

      {/* Table Body */}
      <div>
        {calls.map((call, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-12 gap-4 text-sm ${textColor} border-b-2 py-4 items-center last:border-none ${borderColor} cursor-pointer md:hover:bg-p1/10 md:px-6 `}
            onClick={() => onCall(call)}
          >
            {/* Address with Image */}
            <div className="md:col-span-4 flex gap-4">
              <img
                src={call.image} // Property image
                alt={`${call.propertyInfo.address}`} // Alt text for accessibility
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <div className="font-bold">{call.propertyInfo.address}</div>
                <div className={`${headerTextColor}`}>
                  {`${call.propertyInfo.city}, ${call.propertyInfo.state}, ${call.propertyInfo.zip}`}
                </div>
                <div className="block md:hidden"> {call.clientInfo.email} </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="hidden md:block md:col-span-2">
              <div>{`${call.clientInfo.firstName} ${call.clientInfo.lastName}`}</div>
              <div className={headerTextColor}>{call.clientInfo.email}</div>
            </div>

            {/* Beds */}
            <div className="hidden md:block">
              {call.propertyInfo.rooms || "-"}
            </div>

            {/* Baths */}
            <div className="hidden md:block">
              {call.propertyInfo.bathrooms || "-"}
            </div>

            {/* SQFT */}
            <div className="hidden md:block">
              {call.propertyInfo.surface || "-"}
            </div>

            {/* Actions */}
            <div className="md:col-span-3 justify-center gap-4 hidden md:flex">
              <button
                className="bg-p2 text-white px-4 py-1 rounded"
                onClick={() => OnView(call)} // Trigger the OnView callback
              >
                View
              </button>
              <button
                className={`p-2 rounded ${isDarkMode ? "bg-s3" : "bg-s3"}`}
                onClick={() => onCall(call)} // Trigger the onCall callback
              >
                <span role="img" aria-label="Call">
                  📞
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallsList;
