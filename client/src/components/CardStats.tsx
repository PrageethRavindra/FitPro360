interface CardStatsProps {
    label: string;
    value: string;
  }
  
  const CardStats: React.FC<CardStatsProps> = ({ label, value }) => {
    return (
      <div
        className="flex flex-col items-center justify-center p-4 w-48 bg-gray-800 rounded-lg shadow-md hover:shadow-xl"
      >
        <h3 className="text-3xl font-bold">{value}</h3>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    );
  };
  
  export default CardStats;
  