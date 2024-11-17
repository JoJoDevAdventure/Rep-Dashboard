const Actions = ({ onEndCall, onSave }) => {
    return (
      <div className="flex justify-between mt-4">
        <button
          onClick={onEndCall}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          End Call
        </button>
        <button
          onClick={onSave}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          Save Info
        </button>
      </div>
    );
  };
  
  export default Actions;