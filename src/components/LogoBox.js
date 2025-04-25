export default function LogoBox({ w }) {
    return (
      <div className="flex flex-col items-center rounded-2xl shadow hover:shadow-lg bg-white p-4">
        <img src={w.image || '/placeholder.svg'} className="h-10 mb-2" alt={w.name}/>
        <span className="text-xs font-medium text-gray-800">{w.name}</span>
      </div>
    );
  }
  