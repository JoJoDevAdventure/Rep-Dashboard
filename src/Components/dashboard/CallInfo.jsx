const CallInfo = ({
  phone = "702-55-1212",
  location = "Las Vegas, Nevada",
  timestamp = "00:49",
}) => {
  return (
    <div className="p-4 border rounded-lg bg-white h-full">
      <p className="text-sm text-gray-500">Call info</p>
      <div className="flex flex-col justify-center text-center h-full">
        <h2 className="text-2xl text-black-100 font-bold">{phone}</h2>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-sm text-orange-500 font-semibold">{timestamp}</p>
      </div>
    </div>
  );
};

export default CallInfo;
