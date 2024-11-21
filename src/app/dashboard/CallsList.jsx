const CallsList = ({ calls, onCall, OnView, isDarkMode }) => {
  // Define dynamic classes for dark/light mode
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700"; // Adjust text color
  const bgColor = isDarkMode ? "bg-s1" : "bg-white"; // Adjust background color
  const headerTextColor = isDarkMode ? "text-gray-400" : "text-gray-500"; // Adjust header text color
  const borderColor = isDarkMode ? "border-p1/30" : "border-p1/10"; // Adjust border color

  return (
    <div
      className={`w-full p-6 h-[75vh] overflow-y-auto border-2 ${borderColor} rounded-lg ${bgColor}`}
    >
      {/* Table Header */}
      <div
        className={`grid grid-cols-12 text-sm font-bold ${headerTextColor} border-b pb-2 ${borderColor}`}
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
            className={`grid grid-cols-12 text-sm ${textColor} border-b-2 py-4 items-center last:border-none ${borderColor}`}
          >
            {/* Address with Image */}
            <div className="col-span-4 flex gap-4">
              <img
                src={call.image} // Property image
                alt={`${call.propertyInfo.address}`} // Alt text for accessibility
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <div className="font-bold">{call.propertyInfo.address}</div>
                <div className={headerTextColor}>
                  {`${call.propertyInfo.city}, ${call.propertyInfo.state}, ${call.propertyInfo.zip}`}
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="col-span-2">
              <div>{`${call.clientInfo.firstName} ${call.clientInfo.lastName}`}</div>
              <div className={headerTextColor}>{call.clientInfo.email}</div>
            </div>

            {/* Beds */}
            <div>{call.propertyInfo.rooms || "-"}</div>

            {/* Baths */}
            <div>{call.propertyInfo.bathrooms || "-"}</div>

            {/* SQFT */}
            <div>{call.propertyInfo.surface || "-"}</div>

            {/* Actions */}
            <div className="col-span-3 flex justify-center gap-4">
              {/* View Listing Button */}
              <button
                className="bg-p2 text-white px-4 py-1 rounded"
                onClick={() => OnView(call)} // Trigger the OnView callback
              >
                View Listing
              </button>
              {/* Call Button */}
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