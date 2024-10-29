import Image from 'next/image';

export default function Product({ imageurl, name, price, edit, onDelete }) {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(name); // Pass the product name or ID to identify the product to delete
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <Image
        src={imageurl ?? "/shirt.jpg"}
        alt={name ?? "Shirt"}
        width={300}
        height={160}
        className="object-cover"
      />
      <h2 className="mt-2 font-bold">{name ?? 'Name'}</h2>
      <p>{price ?? 'Price'}</p>
      <button className="bg-blue-500 text-white px-2 py-1 mt-2">
        {edit ?? 'Edit'}
      </button>
      <button 
        className="bg-red-500 text-white px-2 py-1 mt-2 ml-5" 
        onClick={handleDelete} // Attach the delete handler to the button
      >
        Delete
      </button>
    </div>
  );
}
